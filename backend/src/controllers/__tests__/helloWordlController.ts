import { Request, Response } from "express";
import { getHello } from "../helloWorldController";

describe("helloWorldController", () => {
	it("getHello() should return hello world", () => {
		const req = {} as Request;
		const res = {
			send: jest.fn().mockReturnThis(),
		} as unknown as Response;

		getHello(req, res);

		expect(res.send).toHaveBeenCalledWith("Hello World");
	});
});
