import React from "react";

function article_1() {
	return {
		date: "20 April 2024",
		title: "Meal Planning App - Dev Academy Final Project",
		description: "Will my App make people's live easier?",
		keywords: [],
		style: `
				.article-content {
					display: flex;
					flex-direction: column;
					align-items: center;
				}

				.randImage {
					align-self: center;
					outline: 2px solid red;
				}
				`,
		body: (
			<React.Fragment>
				<div className="article-content">
					<div className="paragraph">
						{" "}
						<article>
							<section>
								<p>
									To get a taste of a real delivery project,
									we were split into teams of four. Our task
									was to make a project using the skills we
									gained over the past 4 months. My team
									decided to build a project that addresses a
									real issue we all face on a regular basis -
									meal planning.
								</p>
								<h3>Meal Easy</h3>
								<p>
									We designed MealEasy to help busy parents
									with planning weekly dinners. Since our
									project is here to save time, we wanted it
									to be super simple to use. There are
									essentially only two steps to it:
								</p>
								<ol>
									<li>Select your dietary requirements.</li>
									<li>
										Get recipe recommendations for the week
										ahead.
									</li>
								</ol>
								<p>
									As our stretch goal, we set out to have a
									shopping list for all recipes in the current
									week.
								</p>

								<div style={{ textAlign: "center" }}>
									<img
										src="/appFrontPage.png"
										alt="Landing Page"
										style={{
											width: "800px",
											height: "auto",
										}}
									/>
								</div>

								<h3>Our Journey</h3>
								<p>
									After having our goal, we set out to plan. I
									quickly learned the major challenges aren't
									going to be technical, meal planning itself
									meant different things to each of us. Before
									building anything, we created a solid plan
									and made sure we're all on the same page.
									Using agile and regular check ups, we also
									made sure no one is going down a rabbit hole
									and everyone remains focused on our Minimum
									Viable Product (MVP). During this project I
									got to wear multiple hats. At one point I
									was a project manager, making sure the tasks
									are being reviewed and completed on time.
									Another time I was a UX designer, making
									wireframes, creating customer scenarios and
									defining our style guide. All these
									different experiences helped me understand
									what it REALLY takes to make good software
									(it's not just about good code).
								</p>

								<h3>Under the hood</h3>
								<p>
									MealEasy is a web application written in
									ReactJS and TypeScript. Our backend API is
									powered by Express.js and we store all our
									data in a SQLite database. For user
									management and authentication we're using
									Auth0. The UI components come from Tailwind
									CSS and DaisyUI. All recipes come from a
									third-party API (Edamam.com).
								</p>
								<div style={{ textAlign: "center" }}>
									<img
										src="/diagram.png"
										alt="Landing Page"
										style={{
											width: "800px",
											height: "auto",
										}}
									/>
								</div>

								<h3>Challenges</h3>
								<p>
									Even with all our preparations, we faced
									some challenges. A major obstacle was when
									one team member had to leave, which left us
									short-handed. Another challenge was our data
									structure. How do we go from a recipe in
									Edamam.com all the way to displaying it in
									our list of recipes in the UI? Despite these
									challenges, we adapted swiftly and ensured
									our project continued without interruption.
									We also managed to deliver ALL of our
									stretch goals!
								</p>

								<h3>Whats's next?</h3>
								<p>
									We're working on adding more features, such
									as adding custom new recipes, managing
									budgets, and calorie tracking.
								</p>

								<h3>Conclusion</h3>
								<p>
									This project, and the last 4 months in
									DevAcademy provided me with great learnings
									I wasn't able to get elsewhere. I met some
									great people, students and teachers both. I
									learned what it means to work as a team,
									supporting each other and leveraging each
									others' strengths. And most importantly, I
									now understand that challenges aren't
									usually about the technical stuff. It's more
									about how people interact and work together.
								</p>
								<div
									style={{
										textAlign: "center",
										marginTop: "40px",
									}}
								>
									<h3>
										<a
											style={{ color: "green" }}
											href="https://meal-easy.pushed.nz/"
										>
											Visit MealEasy
										</a>
									</h3>
								</div>
							</section>
						</article>
					</div>
				</div>
			</React.Fragment>
		),
	};
}

function article_2() {
	return {
		date: "8 January 2023",
		title: "Emotional Intelligence",
		description: "What it is and why it is important?",
		keywords: [],
		style: `
				.article-content {
					display: flex;
					flex-direction: column;
					align-items: center;
				}

				.randImage {
					align-self: center;
					outline: 2px solid red;
				}
				`,
		body: (
			<React.Fragment>
				<div className="article-content">
					<div className="paragraph">
						{" "}
						<article>
							<section>
								<p>
									Emotional Intelligence (EQ) means being good
									at understanding and managing emotions, both
									your own and others'. It involves skills
									like empathy, self-awareness, and handling
									social situations well.
								</p>
								<p>
									Unlike Intelligence Quotient (IQ), which
									measures logical and problem-solving
									abilities, EQ is more about how you handle
									emotions and social situations.
								</p>
								<p>
									EQ is important because it helps in building
									good relationships, being a better leader,
									adapting to changes, dealing with stress,
									resolving conflicts, and making wise
									decisions. It's like having a set of skills
									that make you more effective in dealing with
									people and situations in your life.
								</p>
							</section>
						</article>
					</div>
				</div>
			</React.Fragment>
		),
	};
}

function article_3() {
	return {
		date: "30 January 2024",
		title: "Neuroplasticity and Growth Mindset",
		description:
			"My research on Neuroplasticity and Growth Mindset. Includes tips on podcast and interesting articles.",
		style: ``,
		keywords: [],
		body: (
			<React.Fragment>
				<p>
					Neuroplasticity is the ability of the brain to reorganize
					itself by forming new neural connections throughout life.
					The benefits of neuroplasticity for individuals are recovery
					from brain injuries, adaptation to change, learning and
					memory enhancement, ...
				</p>
				<p>
					<span>Explore more: </span>
					<a href="https://www.youtube.com/watch?v=LG53Vxum0as">
						Podcast covering neuroplasticity
					</a>
				</p>
				<h3>Growth Mindset</h3>
				<p>
					A growth mindset is the belief that abilities and
					intelligence can be developed through dedication, effort,
					and learning. This contrasts with a fixed mindset, which
					sees abilities as inherent and unchangeable.
				</p>
				<p>
					<span>Notes on My Experience with a Growth Mindset: </span>
					<br />
					During this exploration, I was surprised to learn about the
					growth mindset. I always knew it existed, but never had the
					chance to explore it. After reading and discovering more
					information, I'm excited and motivated. Sometimes, it's
					tough for me to believe that I can improve in different
					areas. I have certain ideas about what I can or can't do.
					For instance, when I was a child, people always said my
					sister was good at math, and I was seen as someone who was
					not a hard worker and math brain. That's why I never thought
					about a career in technology. Despite my interest in
					computers and problem-solving, I leaned more towards
					human-centred career paths, thinking I wouldn't be good at
					something logical. But now, I want to change these thoughts.
					I want to shift from thinking I can't improve to believing I
					can learn and grow in certain areas.
					<br />
					I've also come across valuable resources discussing how to
					foster a growth mindset in children. want to use these ideas
					while raising my children to help them succeed in life.
				</p>
				<p>
					<span>Explore more: </span>
				</p>
				<ul>
					<li>
						<a href="https://biglifejournal.com/blogs/blog/teach-kids-growth-mindset-neuroplasticity-activities">
							How to foster a Growth Mindset in children
						</a>
					</li>
					<li>
						<a href="https://www.forbes.com/sites/womensmedia/2023/10/16/the-growth-mindset-advantage-6-essential-skills-for-success/?sh=5aa2d1976188">
							The Growth Mindset Advantage: 6 Essential Skills For
							Success
						</a>
					</li>
				</ul>
			</React.Fragment>
		),
	};
}

const myArticles = [article_1, article_2, article_3];

export default myArticles;
