import { FunctionComponent } from "react";

type ButtonProps = {
	onClick: () => void;
	label: string;
};

export const Button: FunctionComponent<ButtonProps> = ({ onClick, label }) => {
	return <button onClick={onClick}>{label}</button>;
};
