import { BrowserRouter, Routes as RoutesRRD, Route } from "react-router-dom"

import Login from "pages/Login"
import Dashboard from "pages/Dashboard"

const Routes = () => {
	return(
		<BrowserRouter>
			<RoutesRRD>
				<Route path="/" element={<Login />}/>
				<Route path="dashboard" element={<Dashboard />}/>
			</RoutesRRD>
		</BrowserRouter>
	)
}

export default Routes