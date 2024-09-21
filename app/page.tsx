"use client";

export default function Home() {
	return (
		<div className="flex flex-col gap-8">
			<h1 className="text-3xl self-center">URL Shortener</h1>
			<div className="flex flex-col justify-center gap-2 lg:flex-row">
				<input
					className="p-4 text-md text-gray-900 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 lg:min-w-96"
					placeholder="Enter the link to shorten"
					type="url"
					required
				/>

				<button
					className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-4 py-2"
					type="submit"
				>
					Shorten
				</button>
			</div>
		</div>
	);
}
