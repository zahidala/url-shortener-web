"use client";

import { ShortenURLForm } from "@/components/home";
import { useShortenUrl } from "@/api/endpoints/shorten";

export default function Home() {
	const { mutate, isPending } = useShortenUrl();

	return (
		<div className="flex flex-col gap-8">
			<h1 className="text-3xl self-center">URL Shortener</h1>

			<ShortenURLForm isPending={isPending} mutate={mutate} />
		</div>
	);
}
