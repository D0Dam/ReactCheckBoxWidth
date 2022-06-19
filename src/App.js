import "./App.css";
import { useEffect, useRef, useState } from "react";

function App() {
	const [width, setWidth] = useState(0);
	const boxRef = useRef(null);
	const getWidth = () => {
		setWidth(boxRef.current.offsetWidth);
		console.log(`박스 사이즈 변경! 너비 : ${boxRef}`);
	};
	useEffect(() => {
		setWidth(boxRef.current.offsetWidth);
	}, []);
	return (
		<div className="App">
			<div className="box" ref={boxRef}>
				&lt;-- {width}px --&gt;
			</div>
			<button onClick={getWidth}>측정!</button>
		</div>
	);
}

export default App;
