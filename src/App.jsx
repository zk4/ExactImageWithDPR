import { useEffect, useState, useMemo } from "react";
import "./App.css";
import useDpr from "./useDPR";
import useWindowSize from "./useWindowSize";
import ExactImage from './ExactImage'

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
      <ExactImage size={ {width:"200px"} } />
		</div>
	);
}

export default App;
