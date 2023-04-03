import { useEffect, useState, useMemo } from "react";
import "./App.css";
import useDpr from "./useDPR";
import useWindowSize from "./useWindowSize";

function App() {
	const dpr = useDpr();
  const size = useWindowSize()
	const src = useMemo(() => {
		return "https://dummyimage.com/" + size.width * dpr;
	}, [dpr,size]);
	return (
		<div className="App">
			dpr is: {dpr}
      size is: {size.width}
			<img style={{width:"1200px"}} src={ src } />
			<img src={ src } />
		</div>
	);
}

export default App;
