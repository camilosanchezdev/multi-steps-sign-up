import { AppProvider } from "./providers/app";
import { AppRoutes } from "./routes";
import "@fortawesome/fontawesome-free/css/all.css";

function App() {
  return (
    <AppProvider>
      <AppRoutes />
    </AppProvider>
  );
}

export default App;
