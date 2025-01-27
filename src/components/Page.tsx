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

import { useNavigate } from "react-router-dom";

export function Header() {
	const navigate = useNavigate();
	return (
		<div className="flex p-7 pr-9">
			<h1
				className="cursor-pointer text-4xl font-medium hover:underline"
				onClick={() => navigate("/")}
			>
				MathsGym
			</h1>
		</div>
	);
}

export function Footer() {
	function Link({ name, url }: { name: string; url: string }) {
		return (
			<>
				<h3 className="font-normal">
					<a
						className="hover:underline"
						href={url}
					>
						{name}
					</a>
				</h3>
			</>
		);
	}
	return (
		<div className="bottom-0 bg-[#f9f9f9] dark:bg-[#1a1a1a]">
			<div className="p-12">
				<Link
					name="Source"
					url="https://github.com/droptablemustafa/mathsgym"
				/>
				<Link
					name="Discussions"
					url="https://github.com/droptablemustafa/mathsgym/discussions"
				/>
				<Link
					name="Wiki"
					url="https://github.com/droptablemustafa/mathsgym/wiki"
				/>
				<Link
					name="Issues"
					url="https://github.com/droptablemustafa/mathsgym/issues"
				/>
			</div>
			<div className="flex items-center justify-center pb-5">
				<h3>
					Copyright © 2025{" "}
					<a href="https://github.com/droptablemustafa">
						droptablemustafa
					</a>
				</h3>
			</div>
		</div>
	);
}
