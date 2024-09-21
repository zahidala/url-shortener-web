import { MutationOptions } from "@/api/types";
import { useAxios } from "@/api/hooks/useAxios";
import { useMutation } from "@tanstack/react-query";

interface ShortenUrlBody {
	url: string;
}

export function useShortenUrl(options?: MutationOptions<void, ShortenUrlBody>) {
	const client = useAxios();
	const mutationKey = ["shorten-url"];

	const mutationFn = async (body: ShortenUrlBody) => {
		const { data: response } = await client.post("/shorten", body);
		return response?.data;
	};

	return useMutation({
		mutationFn,
		mutationKey,
		...options,
	});
}
