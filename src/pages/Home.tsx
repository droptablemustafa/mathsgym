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

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Search } from "../components/Input";
import { Header, Footer } from "../components/Page";
import { BlockMath } from "react-katex";
import "katex/dist/katex.min.css";

function Topic({
	topic,
}: {
	topic: {
		id: string;
		name: string;
		description: string;
		tags: string[];
		aliases: string[];
		display: string;
	};
}) {
	const navigate = useNavigate();

	return (
		<div
			className="flex w-36 flex-shrink-0 cursor-pointer flex-col rounded-2xl border border-transparent bg-[#f9f9f9] p-4 transition-[border-color] duration-250 hover:border-[#646cff] dark:bg-[#1a1a1a]"
			onClick={() => navigate(`./topic/${topic.id}`)}
		>
			<div className="">
				<BlockMath math={topic.display} />
			</div>
			<h2>{topic.name}</h2>
		</div>
	);
}

export default function Home() {
	const [searchQuery, setSearchQuery] = useState("");
	const [categories, setCategories] = useState<
		{
			name: string;
			topics: {
				id: string;
				name: string;
				description: string;
				tags: string[];
				aliases: string[];
				display: string;
			}[];
		}[]
	>([]);

	useEffect(() => {
		import(`../data/topics.json`).then((topicData) => {
			const updatedCategories = topicData.default.map(
				(category: any) => ({
					...category,
					topics: category.topics.map((topic: any) => ({
						...topic,
						aliases: topic.aliases || [],
					})),
				}),
			);
			setCategories(updatedCategories);
		});
	}, []);

	const filteredCategories = categories
		.map((cat) => ({
			...cat,
			topics: cat.topics.filter(
				(topic) =>
					topic.name
						.toLowerCase()
						.includes(searchQuery.toLowerCase()) ||
					topic.aliases.some((alias) =>
						alias.toLowerCase().includes(searchQuery.toLowerCase()),
					) ||
					topic.tags.some((tag) =>
						tag.toLowerCase().includes(searchQuery.toLowerCase()),
					),
			),
		}))
		.filter((cat) => cat.topics.length > 0);

	return (
		<>
			<Header />
			<main>
				<Search
					placeholder="Search Topics..."
					searchQuery={searchQuery}
					setSearchQuery={setSearchQuery}
				/>

				{filteredCategories.length > 0 ? (
					filteredCategories.map((cat) => (
						<div
							key={cat.name}
							className="p-3 sm:p-5"
						>
							<h2 className="pb-4 text-2xl font-medium">
								{cat.name}
							</h2>
							<div className="flex flex-nowrap gap-4 overflow-x-scroll">
								{cat.topics.map((topic) => (
									<Topic
										key={topic.id}
										topic={topic}
									/>
								))}
							</div>
						</div>
					))
				) : (
					<div className="flex h-screen items-center justify-center">
						<p className="text-center text-gray-500">No Results</p>
					</div>
				)}
			</main>
			<Footer />
		</>
	);
}
