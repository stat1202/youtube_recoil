import ReactDOM from "react-dom"
import {RecoilRoot} from "recoil"

import App from "./App"

import { BrowserRouter, HashRouter } from "react-router-dom"

ReactDOM.createRoot(document.getElementById("root")).render(<HashRouter><RecoilRoot><App/></RecoilRoot></HashRouter>)