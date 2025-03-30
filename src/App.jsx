import { ThemeProvider } from "styled-components";
import Paths from "./routes/paths";
import theme from "./theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Paths />
    </ThemeProvider>
  );
}

export default App;
