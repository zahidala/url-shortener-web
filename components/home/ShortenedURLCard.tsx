import { Alert } from "@/components/global";
import { useState } from "react";

interface ShortenedURLCardProps {
	isSuccess: boolean;
	originalUrl?: string;
	shortUrl?: string;
}

export const ShortenedURLCard = (props: ShortenedURLCardProps) => {
	const { isSuccess, originalUrl, shortUrl } = props;

	const [showAlert, setShowAlert] = useState(false);

	return (
		<>
			<Alert
				icon={<i className="fa-solid fa-circle-check text-green-500" />}
				message="Copied to clipboard"
				visible={showAlert}
			/>

			{isSuccess && shortUrl && (
				<div className="flex justify-center">
					<div className="animate-fade p-6 border border-green-500 bg-gray-50 rounded-md shadow-md flex flex-col justify-center items-center lg:flex-row gap-10">
						<span className="text-gray-900">{originalUrl}</span>

						<div className="flex items-center gap-4">
							<a
								className="text-blue-700 font-bold hover:text-blue-500"
								href={shortUrl}
								rel="noreferrer"
								target="_blank"
							>
								{shortUrl}
							</a>
							<i
								className="fa-solid fa-copy text-xl text-gray-500 cursor-pointer hover:text-gray-700"
								onClick={() => {
									setShowAlert(false);
									navigator.clipboard.writeText(shortUrl);

									setTimeout(() => {
										setShowAlert(true);
									}, 100);
								}}
							/>
						</div>
					</div>
				</div>
			)}
		</>
	);
};
