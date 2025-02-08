import type { Response } from "express";

export function getHello(res: Response): void {
	res.send("Hello World");
}
