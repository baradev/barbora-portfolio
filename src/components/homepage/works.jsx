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
							<div className="work-title">Volition</div>
							<div className="work-subtitle">
								Full Stack Developer
							</div>
							<div className="work-duration">2024 - present</div>
						</div>
						<div className="work">
							<img src="" alt="" className="" />
							<div className="work-title">
								AWS Tools And Programming
							</div>
							<div className="work-subtitle">
								Meetup Organizer
							</div>
							<div className="work-duration">2024 - present</div>
						</div>
						<div className="work">
							<img src="" alt="" className="" />
							<div className="work-title">Dev Academy</div>
							<div className="work-subtitle">
								Human Skills Teacher and Facilitator
							</div>
							<div className="work-duration">2024</div>
						</div>

						<div className="work">
							<img src="" alt="" className="" />
							<div className="work-title">Tim Warren - Axio</div>
							<div className="work-subtitle">
								JavaScript Developer
							</div>
							<div className="work-duration">2023 - 2024</div>
						</div>

						<div className="work">
							<img src="" alt="" className="" />
							<div className="work-title">
								Doza - Youth Centre
							</div>
							<div className="work-subtitle">
								Youth Centre Coordinator and Teacher
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
