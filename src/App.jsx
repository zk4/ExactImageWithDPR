import "./App.css";
import useDpr from "./useDPR";
import ExactImage from './ExactImage'

function App() {

  const dpr = useDpr();
	return (
		<div className="App">
      DPR: {dpr} <br/>
	      <ExactImage width={200} src={(imageWidth,dpr)=>{		return "https://dummyimage.com/" +  imageWidth * dpr 	  }} />
    <div style={{width:'200px',height:'10px',background:'red'}}></div>
		  <ExactImage width={400} src={(imageWidth,dpr)=>{return "https://picsum.photos/id/237/" +  imageWidth * dpr 	  }} />

    <div style={{width:'400px',height:'10px',background:'green'}}></div>
		</div>
	);
}

export default App;
