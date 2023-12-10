import { Container } from "./styles";
import WebView from "react-native-webview";


function Information() {


    return (
        <Container>
          <WebView
                        source={{ uri: "https://www.folhadelondrina.com.br/" }}
                        style={{ flex: 1 }}
                    />

        </Container>
    )
}

export default Information; 