import { ThemeProvider } from "styled-components/native";


import Home from "./src/screens/Home";
import theme from "./src/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
        <Home />
    </ThemeProvider>
  )
}

export default App;