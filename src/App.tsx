import { HomePage } from "./pages/Home";
import { usePlausibleTracking } from "./tracking/usePlausibleTracking";

function App() {
  usePlausibleTracking();

  return <HomePage />;
}

export default App;
