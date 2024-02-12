import React from "react";

function article_1() {
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

function article_2() {
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

const myArticles = [article_1, article_2];

export default myArticles;
