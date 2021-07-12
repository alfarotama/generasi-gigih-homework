import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/home/index";
import Track from "./pages/home/track";

function App() {
	console.log(process.env.REACT_APP_SPOTIFY);

	return (
		<div className="App">
			<Home />
			<br />
			<Track />
		</div>
	);
}

export default App;
