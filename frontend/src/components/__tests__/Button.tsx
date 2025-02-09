import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Button } from "../Button";

describe("Button component", () => {
	it("renders button with label", () => {
		const handleClick = jest.fn();
		const label = "foo";

		render(<Button onClick={handleClick} label={label} />);

		const button = screen.getByRole("button");
		const text = button.innerHTML;

		expect(text).toBe("foo");
	});

	it("call onClick when clicked", async () => {
		const handleClick = jest.fn();
		const label = "foo";

		render(<Button onClick={handleClick} label={label} />);
		const button = screen.getByRole("button");

		await userEvent.click(button);

		expect(handleClick).toHaveBeenCalledTimes(1);
	});
});
