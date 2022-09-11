import React from "react";
import ReactDOM from "react-dom";
import {DAppProvider} from "@usedapp/core";

import App from "./App";
import {DAPP_CONFIG} from "./config";

import "./index.css";

ReactDOM.render(
	<DAppProvider config={DAPP_CONFIG}>
		<App />
	</DAppProvider>,
	document.getElementById("root")
);