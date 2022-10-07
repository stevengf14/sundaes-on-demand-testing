import Container from "react-bootstrap/Container";
import OrderEntry from "./pages/entry/OrderEntry";
import OrderConfirmation from "./pages/confirmation/OrderConfirmation";
import OrderSummary from "./pages/summary/OrderSummary";
import { OrderDetailsProvider } from "./contexts/OrderDetails";
import { useState } from "react";

function App() {
  // orderPhase needs to be 'inProgress', 'review' or 'completed'
  const [orderPhase, setOrderPhase] = useState("inProgress");

  let Component = OrderEntry;
  switch (orderPhase) {
    case "inProgress":
      Component = OrderEntry;
      break;
    case "review":
      Component = OrderSummary;
      break;
    case "completed":
      Component = OrderConfirmation;
      break;
  }

  return (
    <Container>
      <OrderDetailsProvider>
        <Component>{<Component setOrderPhase={setOrderPhase} />}</Component>
      </OrderDetailsProvider>
    </Container>
  );
}

export default App;
