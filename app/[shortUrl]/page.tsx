"use client";

import { redirect } from "next/navigation";

export default async function ShortUrl({ params: { shortUrl } }: { params: { shortUrl: string } }) {
	const urlCheck = await fetch(`${process.env.API_URL}/${shortUrl}`, {
		method: "GET",
	});

	if (!urlCheck.ok) {
		return redirect("/?not-found=true");
	}

	return redirect(`${process.env.API_URL}/${shortUrl}`);
}
