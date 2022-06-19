import { BrowserRouter, Routes as RoutesRRD, Route } from "react-router-dom"

import Login from "pages/Login"
import Dashboard from "pages/Dashboard"
import Layout from "layout/default"

const Routes = () => {
	return(
		<BrowserRouter>
			<RoutesRRD>
				<Route path="/" element={<Login />}/>
        <Route element={<Layout />}>
				  <Route path="dashboard" element={<Dashboard />}/>
        </Route>
			</RoutesRRD>
		</BrowserRouter>
	)
}

export default Routes