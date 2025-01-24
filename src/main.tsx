import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { SpeedInsights } from "@vercel/speed-insights/react"
import "./index.css";
import Home from "./Home.tsx";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<SpeedInsights/>
		<Router>
			<Routes>
				<Route
					path="/"
					element={<Home />}
				/>
			</Routes>
		</Router>
	</StrictMode>,
);
