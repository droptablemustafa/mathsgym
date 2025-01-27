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

export function Button({ name, func }: { name: string; func: any }) {
	return (
		<button
			className="focus:outline-webkit-focus-ring-color cursor-pointer rounded-[20px] border border-transparent bg-[#f9f9f9] p-[0.6em_1.2em] text-[1em] font-medium transition-[border-color] duration-250 hover:border-[#646cff] focus:outline dark:bg-[#1a1a1a]"
			onClick={func}
		>
			{name}
		</button>
	);
}

export function TextInput({
	placeholder,
	value,
	onChange,
}: {
	placeholder: string;
	value: string;
	onChange: any;
}) {
	return (
		<input
			type="text"
			className="focus:outline-webkit-focus-ring-color cursor-pointer rounded-[20px] border border-transparent bg-[#f9f9f9] p-[0.6em_1.2em] text-[1em] font-medium transition-[border-color] duration-250 hover:border-[#646cff] focus:outline dark:bg-[#1a1a1a]"
			placeholder={placeholder}
			value={value}
			onChange={(e) => onChange(e.target.value)}
		/>
	);
}

export function CheckboxInput({
	label,
	checked,
	onChange,
}: {
	label: string;
	checked: boolean;
	onChange: (checked: boolean) => void;
}) {
	return (
		<label className="flex cursor-pointer items-center space-x-2">
			<input
				type="checkbox"
				className="h-4 w-4 rounded border-gray-300 text-[#646cff] focus:ring-[#646cff] dark:bg-[#1a1a1a]"
				checked={checked}
				onChange={(e) => onChange(e.target.checked)}
			/>
			<h2 className="text-2xl">{label}</h2>
		</label>
	);
}

export function Search({
	placeholder,
	searchQuery,
	setSearchQuery,
}: {
	placeholder: string;
	searchQuery: string;
	setSearchQuery: any;
}) {
	return (
		<div className="flex h-full w-full max-w-full items-center justify-center overflow-hidden p-[2%]">
			<input
				type="text"
				className="focus:outline-webkit-focus-ring-color h-[25%] w-[100%] rounded-[20px] border border-transparent bg-[#f9f9f9] p-[0.6em_1.2em] text-[1em] font-medium transition-[border-color] duration-250 hover:border-[#646cff] focus:outline md:w-[50%] dark:bg-[#1a1a1a]"
				placeholder={placeholder}
				value={searchQuery}
				onChange={(e) => setSearchQuery(e.target.value)}
			/>
		</div>
	);
}
