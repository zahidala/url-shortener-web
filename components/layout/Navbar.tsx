"use client";

import { useState } from "react";

export const Navbar = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	return (
		<nav className="bg-gray-900 border-gray-700">
			<div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
				<a className="flex items-center space-x-3 rtl:space-x-reverse" href="/">
					<span className="self-center text-2xl font-semibold whitespace-nowrap text-white">URL Shortener</span>
				</a>

				<button
					aria-controls="navbar-default"
					aria-expanded={isMenuOpen}
					className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-400 rounded-lg md:hidden hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-600"
					data-collapse-toggle="navbar-default"
					type="button"
					onClick={toggleMenu}
				>
					<span className="sr-only">Open main menu</span>

					<svg
						aria-hidden="true"
						className="w-5 h-5"
						fill="none"
						viewBox="0 0 17 14"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M1 1h15M1 7h15M1 13h15"
							stroke="currentColor"
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
						/>
					</svg>
				</button>

				<div className={`${isMenuOpen ? "block" : "hidden"} w-full md:block md:w-auto`} id="navbar-default">
					<ul className="font-medium flex flex-col gap-1 p-4 mt-4 border border-gray-700 rounded-lg bg-gray-800 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-gray-900">
						<li>
							<a
								aria-current="page"
								className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-500 md:p-0"
								href="#"
							>
								Home
							</a>
						</li>

						<li>
							<a
								className="block py-2 px-3 text-white rounded hover:bg-gray-700 md:hover:bg-transparent md:border-0 md:hover:text-blue-500 md:p-0"
								href="#"
							>
								About
							</a>
						</li>

						<li>
							<a
								className="block py-2 px-3 text-white rounded hover:bg-gray-700 md:hover:bg-transparent md:border-0 md:hover:text-blue-500 md:p-0"
								href="#"
							>
								Contact
							</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};
