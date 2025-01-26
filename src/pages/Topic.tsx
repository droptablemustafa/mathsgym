// 	MathsGym - Train and Learn Mathematics
//	Copyright (C) 2025 droptablemustafa
//
//	This program is free software: you can redistribute it and/or modify
//	it under the terms of the GNU Affero General Public License as published
//	by the Free Software Foundation, either version 3 of the License, or
//	(at your option) any later version.
//
//	This program is distributed in the hope that it will be useful,
//	but WITHOUT ANY WARRANTY; without even the implied warranty of
//	MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
//	GNU Affero General Public License for more details.
//
//	You should have received a copy of the GNU Affero General Public License
//	along with this program.  If not, see <https://www.gnu.org/licenses/>.

import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { BlockMath } from "react-katex";
import "katex/dist/katex.min.css";
import { Footer, Header } from "../components/Page";
import { Button } from "../components/Input";

export default function Topic() {
	const { id } = useParams();
	const [topic, setTopic] = useState<{
		id: string;
		name: string;
		description: string;
		tags: string[];
		aliases?: string[];
		display: string;
	} | null>(null);
	const [currentPage, setCurrentPage] = useState("topic");

	useEffect(() => {
		import(`../data/topics.json`).then((topicData) => {
			const allTopics = topicData.default.flatMap(
				(category) => category.topics,
			);
			const foundTopic = allTopics.find((t) => t.id === id);
			setTopic(foundTopic || null);
		});
	}, [id]);

	useEffect(() => {
		if (!topic) {
			const timer = setTimeout(() => {
				window.location.replace("/404");
			}, 100);
			return () => clearTimeout(timer);
		}
	}, [topic]);

	function Training() {
		const generateQuestion = () => {
			if (id === "addition") {
				const a = Math.floor(Math.random() * 100);
				const b = Math.floor(Math.random() * 100);
				return {
					question: `${a} + ${b}`,
					answer: (a + b).toString(),
				};
			} else if (id === "subtraction") {
				const a = Math.floor(Math.random() * 100);
				const b = Math.floor(Math.random() * 100);
				return {
					question: `${a} - ${b}`,
					answer: (a - b).toString(),
				};
			} else if (id === "multiplication") {
				const a = Math.floor(Math.random() * 100);
				const b = Math.floor(Math.random() * 100);
				return {
					question: `${a} \\times ${b}`,
					answer: (a * b).toString(),
				};
			} else if (id === "division") {
				const a = Math.floor(Math.random() * 100);
				const b = Math.floor(Math.random() * 100);
				return {
					question: `${a} \\div ${b}`,
					answer: (a / b).toString(),
				};
			} else {
				return {
					question: "",
					answer: "",
				};
			}
		};
		const [{ question, answer }, setQuestionData] =
			useState(generateQuestion);
		const [userInput, setUserInput] = useState("");
		const [error, setError] = useState<Error | null>(null);
		const [, setStatus] = useState("typing");
		const [shake, setShake] = useState(false);

		async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
			e.preventDefault();

			if (!userInput.trim()) {
				setError(new Error("Answer cannot be blank."));
				return;
			}

			setStatus("submitting");
			setError(null);
			try {
				await submitForm(userInput, answer);
				setStatus("success");
				setUserInput("");
				setQuestionData(generateQuestion());
				setStatus("typing");
			} catch (err) {
				setStatus("typing");
				setError(err as Error);

				setShake(true);
				setTimeout(() => setShake(false), 300);
			}
		}

		return (
			<>
				<div className="m-4 w-12">
					<div
						className="flex cursor-pointer items-center justify-center rounded-[20px] border border-transparent bg-[#f9f9f9] p-[0.6em] text-[1em] font-medium transition-[border-color] duration-250 hover:border-[#646cff] dark:bg-[#1a1a1a]"
						onClick={() => setCurrentPage("topic")}
					>
						<span className="material-symbols-rounded">close</span>
					</div>
				</div>
				<main className="items-center justify-center p-[2em]">
					<div className={`${shake ? "shake" : ""}`}>
						<div className="text-4xl">
							<BlockMath math={question} />
						</div>
					</div>
					<div className="">
						<center>
							<form onSubmit={handleSubmit}>
								<input
									id="answerBox"
									type="text"
									className="focus:outline-webkit-focus-ring-color h-[25%] w-[100%] rounded-[20px] border border-transparent bg-[#f9f9f9] p-[0.6em_1.2em] text-[1em] font-medium transition-[border-color] duration-250 hover:border-[#646cff] focus:outline md:w-[50%] dark:bg-[#1a1a1a]"
									value={userInput}
									onChange={(e) =>
										setUserInput(e.target.value)
									}
								/>

								<input
									type="submit"
									hidden
								/>
							</form>
							{error && (
								<>
									<br />
									<p style={{ color: "red" }}>
										{error.message}
									</p>
								</>
							)}
						</center>
					</div>
				</main>
			</>
		);
	}

	return (
		<>
			{currentPage === "training" ? (
				<Training />
			) : (
				<>
					<Header />
					<main className="p-5">
						{topic ? (
							<>
								<h1 className="text-3xl font-bold">
									{topic.name}
								</h1>
								<p className="mt-4 text-lg">
									{topic.description}
								</p>
								<Button
									name="Train"
									func={() => setCurrentPage("training")}
								/>
							</>
						) : (
							<p>Loading...</p>
						)}
					</main>
					<Footer />
				</>
			)}
		</>
	);
}

function submitForm(userInput: string, correctAnswer: string) {
	return new Promise<void>((resolve, reject) => {
		if (userInput.trim() === correctAnswer) {
			resolve();
		} else {
			reject(new Error("Good guess but a wrong answer. Try again!"));
		}
	});
}
