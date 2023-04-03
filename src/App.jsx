import { useEffect, useState, useMemo } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import useDpr from "./useDPR";

function App() {
	const dpr = useDpr();
	const src = useMemo(() => {
		return "https://dummyimage.com/" + 480 * dpr;
	}, [dpr]);
	return (
		<div className="App">
			dpr is: {dpr}
			<img style={{width:"480px"}} src={ src } />
		</div>
	);
}

export default App;
