import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Work"
				body={
					<div className="works-body">
						<div className="work">
							<img src="" alt="" className="" />
							<div className="work-title">Tim Warren - Axio</div>
							<div className="work-subtitle">
								JavaScript Developer
							</div>
							<div className="work-duration">2023 - Present</div>
						</div>

						<div className="work">
							<img src="" alt="" className="" />
							<div className="work-title">
								Doza - Youth Centre
							</div>
							<div className="work-subtitle">
								Youth Centre Coordinator
							</div>
							<div className="work-duration">2012 - 2016</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
