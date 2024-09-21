import { Spinner } from "../global";
import { SubmitHandler, useForm } from "react-hook-form";
import { useState } from "react";
import isURL from "validator/lib/isURL";

interface ShortenURLFormProps {
	mutate: ({ url }: { url: string }) => void;
	isPending: boolean;
}

export const ShortenURLForm = (props: ShortenURLFormProps) => {
	const { mutate, isPending } = props;

	const [url, setUrl] = useState<string | null>(null);

	const {
		register,
		handleSubmit,
		formState: { errors },
		clearErrors,
	} = useForm<{ url: string }>();

	const onSubmit: SubmitHandler<{ url: string }> = ({ url }) => mutate({ url });

	return (
		<form className="flex flex-col gap-5" onSubmit={handleSubmit(onSubmit)}>
			<div className="flex flex-col justify-center gap-2 lg:flex-row">
				<input
					className={`p-4 text-md text-gray-900 rounded-lg bg-gray-50 focus:outline-none ${
						errors.url?.message
							? "focus:border-red-500 focus:ring-2 focus:ring-red-500"
							: "focus:border-navy-500 focus:ring-1 focus:ring-navy-500"
					} lg:min-w-96`}
					placeholder="Enter the link to shorten"
					{...register("url", {
						required: "URL is required",
						validate: value => isURL(value) || "Invalid URL",
					})}
					onChange={e => {
						setUrl(e.target.value);
						clearErrors("url");
					}}
				/>

				<button
					className="flex items-center justify-center gap-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-4 py-2 disabled:opacity-50 disabled:hover:bg-blue-700"
					disabled={!url || !!errors.url || isPending}
					type="submit"
				>
					{isPending && <Spinner />}
					Shorten
				</button>
			</div>

			{errors.url && <span className="text-white-500 self-center animate-fade">{errors.url.message}</span>}
		</form>
	);
};
