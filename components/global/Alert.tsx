import { useEffect, useState } from "react";

interface AlertProps {
	message: string;
	visible: boolean;
	duration?: number;
	icon?: React.ReactNode;
}

export const Alert = (props: AlertProps) => {
	const { message, visible, duration = 3000, icon } = props;

	const [show, setShow] = useState(visible);

	useEffect(() => {
		if (!visible) return;

		setShow(true);

		const timer = setTimeout(() => {
			setShow(false);
		}, duration);

		return () => clearTimeout(timer);
	}, [visible, duration]);

	return (
		<div
			className={`fixed top-4 left-1/2 transform -translate-x-1/2 transition-transform duration-200 ${
				show ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
			} bg-white text-gray-900 px-4 py-2 rounded shadow-lg flex items-center gap-2`}
			style={{ zIndex: 1000 }}
		>
			{icon} {message}
		</div>
	);
};
