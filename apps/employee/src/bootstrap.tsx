import { BrowserRouter } from "react-router-dom";
import App from "./App";

export default function Bootstrap() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}
