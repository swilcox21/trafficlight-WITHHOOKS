import React, { useState } from "react";
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
//create your first component
export function Home() {
	const [color, setColor] = useState("");
	return (
		<div className="text-center mt-5">
			<ul className="trafficLight">
				<li
					onClick={() => setColor("red")}
					className={color === "red" ? "selected" : ""}
				/>
				<li
					onClick={() => setColor("yellow")}
					className={color === "yellow" ? "selected2" : ""}
				/>
				<li
					onClick={() => setColor("green")}
					className={color === "green" ? "selected3" : ""}
				/>
			</ul>
		</div>
	);
}
