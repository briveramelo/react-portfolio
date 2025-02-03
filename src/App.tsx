import { HomePage } from "./pages/Home";
import { usePlausibleTracking } from "./utils/tracking/usePlausibleTracking.ts";

function App() {
  usePlausibleTracking();

  return <HomePage />;
}

export default App;
