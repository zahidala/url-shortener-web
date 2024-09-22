import { MutationOptions } from "@/api/types";
import { useAxios } from "@/api/hooks/useAxios";
import { useMutation } from "@tanstack/react-query";

interface Body {
	url: string;
}

interface Response {
	shortUrl: string;
}

export function useShortenUrl(options?: MutationOptions<Response, Body>) {
	const client = useAxios();
	const mutationKey = ["shorten", "shorten-url"];

	const mutationFn = async (body: Body) => {
		const { data: response } = await client.post("/shorten", body);
		return response?.data;
	};

	return useMutation({
		mutationFn,
		mutationKey,
		...options,
	});
}
