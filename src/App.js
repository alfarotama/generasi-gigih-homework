import "./App.css";
import Homepage from "./pages/Homepage";
import CreatePlaylist from "./pages/CreatePlaylist";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

function App() {
	const { isAuthenticated } = useSelector((state) => state.auth);
	return (
		<div className="App">
			<BrowserRouter>
				<Navbar />
				<main>
					<Sidebar />
					<Switch>
						<Route path="/create-playlist">
							{isAuthenticated ? <CreatePlaylist /> : <Redirect to="/" />}
						</Route>
						<Route path="/">
							<Homepage />
						</Route>
					</Switch>
				</main>
			</BrowserRouter>
		</div>
	);
}

export default App;
