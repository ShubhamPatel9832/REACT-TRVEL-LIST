import ReactDom from "react-dom/client";

const rootEle = document.querySelector("#root");
const root = ReactDom.createRoot(rootEle);
import App from "./App";

root.render(<App></App>);
