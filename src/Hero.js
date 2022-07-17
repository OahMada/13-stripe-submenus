import React from "react";
import phoneImg from "./images/phone.svg";
import { useGlobalContext } from "./context";

const Hero = () => {
	var { closeSubmenu } = useGlobalContext();
	return (
		<section className="hero" onMouseOver={closeSubmenu}>
			<div className="hero-center">
				<article className="hero-info">
					<h1>Hello</h1>
					<p>hello there what's for dinner</p>
				</article>
				<article className="hero-images">
					<img src={phoneImg} alt="phone" className="phone-img" />
				</article>
			</div>
		</section>
	);
};

export default Hero;
