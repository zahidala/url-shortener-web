"use client";

import { Alert } from "@/components/global";
import { ShortenedURLCard } from "@/components/home/ShortenedURLCard";
import { ShortenURLForm } from "@/components/home";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { useShortenUrl } from "@/api/endpoints/shorten";

export default function Home() {
	const params = useSearchParams();

	const notFound = params.get("not-found");

	const [showAlert, setShowAlert] = useState(false);

	const { mutate, isPending, data, isSuccess, variables } = useShortenUrl();

	const originalUrl = variables?.url;

	const shortUrl = `${process.env.API_URL}/${data?.shortUrl}`;

	useEffect(() => {
		if (notFound) {
			setShowAlert(true);
		}
	}, [notFound]);

	return (
		<div className="flex flex-col gap-8">
			<h1 className="text-3xl self-center">URL Shortener</h1>

			<Alert
				icon={<i className="fas fa-exclamation-triangle text-yellow-500" />}
				message="URL not found!"
				visible={showAlert}
			/>

			<ShortenURLForm isPending={isPending} mutate={mutate} />

			<ShortenedURLCard isSuccess={isSuccess} originalUrl={originalUrl} shortUrl={shortUrl} />
		</div>
	);
}
