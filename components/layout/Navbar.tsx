"use client";

export const Navbar = () => {
	return (
		<nav className="bg-gray-900 border-gray-700">
			<div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
				<a className="flex items-center space-x-3 rtl:space-x-reverse" href="/">
					<span className="self-center text-2xl font-semibold whitespace-nowrap text-white">URL Shortener</span>
				</a>
			</div>
		</nav>
	);
};
