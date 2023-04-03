import { useEffect, useState, useMemo } from "react";
import "./App.css";
import useDpr from "./useDPR";
import useWindowSize from "./useWindowSize";
import ExactImage from './ExactImage'

function App() {

	return (
		<div className="App">
	      <ExactImage width={200} src={(imageWidth,dpr)=>{		return "https://dummyimage.com/" +  imageWidth * dpr 	  }} />
		  <ExactImage width={400} src={(imageWidth,dpr)=>{		return "https://picsum.photos/id/237/" +  imageWidth * dpr 	  }} />

		</div>
	);
}

export default App;
