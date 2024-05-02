import React from "react";
import Project from "./project";
import INFO from "../../data/user";
import "./styles/allProjects.css";

const AllProjects = () => {
	return (
		<div className="all-projects-container">
			{INFO.projects.map((project, index) => (
				<div className="all-projects-project" key={index}>
					<Project
						logo={project.logo}
						title={project.title}
						description={parseDescription(project.description)}
						linkText={project.linkText}
						link={project.link}
					/>
				</div>
			))}
		</div>
	);
};

// Function to parse description and make "Tech Stack" bold and black
const parseDescription = (description) => {
	const boldTechStack = (
		<span style={{ fontWeight: "bold", color: "black", display: "block" }}>
			Tech Stack:
		</span>
	);
	return (
		<p style={{ fontFamily: "Arial", fontSize: "16px", lineHeight: "1.5" }}>
			{description
				.split("Tech Stack")
				.map((text, index) =>
					index ? [<br />, boldTechStack, text] : text
				)}
		</p>
	);
};

export default AllProjects;
