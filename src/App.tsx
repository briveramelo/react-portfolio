import { HomePage } from "./pages/Home";
import { useTracking } from "./components/tracking/plausibleAuto";

function App() {
  useTracking();

  return <HomePage />;
}

export default App;
