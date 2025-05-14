import { ThemeProvider } from "./components/theme-provider";
import { BrowserRouter } from "react-router-dom";
import { RoutesConfig } from "./routes";

export default function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <BrowserRouter>
        <RoutesConfig />
      </BrowserRouter>
    </ThemeProvider>
  );
}
