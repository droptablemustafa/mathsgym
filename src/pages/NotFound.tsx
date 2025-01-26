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

import { Footer, Header } from "../components/Page";

export default function NotFound() {
	return (
		<>
			<Header />
			<main className="flex h-screen items-center justify-center">
				<h1 className="text-4xl font-bold">404 Not Found</h1>
			</main>
			<Footer />
		</>
	);
}
