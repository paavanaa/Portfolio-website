"use client";
import { useState } from "react";
import Image from "next/image";

export default function Home() {
	const [menuOpen, setMenuOpen] = useState(false);
	const [messageInput, setMessageInput] = useState('');
  
	// Toggle the menu when called
	const toggleMobileMenu = () => {
	  setMenuOpen(prevState => !prevState);
	};
  return (
    <>
    <header>
		<a href="#" className="logo-holder">
			<div className="logo">P</div>
			<div className="logo-text">Portfolio Website</div>
		</a>
		<nav>
			<ul id="menu">
				<li>
					<a href="#">Home</a>
				</li>
				<li>
					<a href="#skills">Skills</a>
				</li>
				<li>
					<a href="#projects">Projects</a>
				</li>
				<li>
					<a href="mailto:hello@adriantwarog.com" class="button">Contact Me</a>
				</li>
			</ul>
			<a href="#" className="mobile-toggle" onClick={toggleMobileMenu}>
				<svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
					<path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="M5 7h14M5 12h14M5 17h10"/>
				</svg>
			</a>
		</nav>
	</header>
	<main>
		<section className="hero container">
			<div className="hero-blue">
				<div>
					<h1><small>Hi I'm</small>
						Paavanaa D L
					</h1>
					<p>
						I am a designer and developer based in India with a strong interest in machine learning, data analysis, and AI.
					</p>
					<div className="call-to-action">
						<a href="./Sample_Resume_Template.pdf" className="button black">
							View Resume
						</a>
						<a href="mailto:paavanaadl@gmail.com" className="button white">
							Contact Me
						</a>
					</div>
					<div className="social-links">
						<a href="https://github.com/paavanaa">
							<img src="./imgs/github.png" alt="GitHub" width="48" />
						</a>
						<a href="https://www.linkedin.com/in/paavanaa-dl-607061278/">
							<img src="./imgs/linkedin.png" alt="LinkedIn" width="48" />
						</a>
					</div>
				</div>
			</div>
			<div className="hero-yellow">
				<img src="./imgs/mypic.png" alt="paavanaa" width="100%" />
			</div>
		</section>
		<section className="logos container">
			<div className="marquee">
				<div className="track">
					<img src="./imgs/html.png" alt="HTML" width="128" />
					<img src="./imgs/css.png" alt="CSS" width="128" />
					<img src="./imgs/javascript.png" alt="JS" width="128" />
					<img src="./imgs/react.png" width="128" alt="React" />
					<img src="./imgs/nextjs.png" width="128" alt="Next JS" />
					<img src="./imgs/azure.png" width="128" alt="Azure" />
					<img src="./imgs/vscode.png" width="128" alt="VS Code" />
					<img src="./imgs/python.png" width="128" alt="Python" />
					<img src="./imgs/html.png" alt="HTML" width="128" />
					<img src="./imgs/css.png" alt="CSS" width="128" />
					<img src="./imgs/javascript.png" alt="JS" width="128" />
					<img src="./imgs/react.png" width="128" alt="React" />
					<img src="./imgs/nextjs.png" width="128" alt="Next JS" />
					<img src="./imgs/azure.png" width="128" alt="Azure" />
					<img src="./imgs/vscode.png" width="128" alt="VS Code" />
					<img src="./imgs/python.png" width="128" alt="Python" />
				</div>
			</div>
		</section>
		<section id="skills" className="skills container">
			<h2>
				<small>About Me</small>
				Skills
			</h2>
			<div className="holder-blue">
				<div className="left-column">
					<h3>Frontend</h3>
					<ul>
						<li>HTML</li>
						<li>CSS</li>
						<li>JavaScript</li>
						<li>React</li>
					</ul>
					<h3>Backend</h3>
					<ul>
						<li>Node.js</li>
						<li>Python</li>
						<li>Java</li>
						<li>PHP</li>
					</ul>
				</div>
				<div className="right-column">
					<h3>A bit about me</h3>
					<p>
						Hi, I am Paavanaa, a student with a keen interest in learning new technologies and solving problems.<p>I enjoy exploring front-end and back-end development, as well as designing intuitive user interfaces. My passion for data analysis drives me to work with data, uncovering insights that inform decision-making and improve user experiences.</p> 


					</p>
				</div>
			</div>
		</section>
		<section className="work-experience container">
			<h2>
				<small>Recent</small>
				Work Experience
			</h2>
			<div className="jobs">
				<article>
					<figure>
						<div>
							<img src="./imgs/workplace.png" alt="Workplace  - SOL Creator" width="100%" />
							<figcaption>
								Workplace - Snapchat Opinion Leader
							</figcaption>
						</div>
					</figure>
					<h3>Snapchat Opinion Leader</h3>
					<div>2023 - 2024</div>
					<p>Used Lens Studio to design and create custom lenses for the platform.</p>
				</article>
				
			</div>
		</section>
		<section id="projects" className="bento container">
			<h2>
				<small>Previous</small>
				Completed Projects
			</h2>
			<div className="bento-grid">
				
				<a href="https://github.com/paavanaa/404" className="bento-item">
					<img src="./imgs/payment.jpg " alt="BGCCI" width="100%" height="100%" />
				</a>
				<div className="bento-item description">
					<h3>Block chain enabled payment interface</h3>
					<p>This project involves a streamlined payment system for small businesses, integrating smart contract, modern UI and security protocols.</p>
				</div>
				
				
				<div className="bento-item description">
					<h3>Pill Pal</h3>
					<p>A comprehensive platform designed to help senior citizen manage health.</p>
				</div>
				<a href="https://github.com/paavanaa/404" className="bento-item">
					<img src="./imgs/pillpal.png" alt="pillpal" width="100%"  height="100%"/>
				</a>
				
				
				<a href="https://github.com/paavanaa/404" className="bento-item">
					<img src="./imgs/airline.jpg" alt="airline" width="100%"  height="100%" />
				</a>
				<div className="bento-item description">
					<h3>Airplane reservation</h3>
					<p>Facilitates reservation and cancellation of airplane tickets based on availability, using linked lists.</p>
				</div>
			</div>
		</section>
	</main></>
  );
}
