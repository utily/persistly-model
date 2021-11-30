import { Document } from "../Document"

export interface Create<T extends Document> {
	command: "create"
	request: T | T[]
	response?: T | T[]
}

export namespace Create {
	export function is(value: any | Create<any>): value is Create<any> {
		return typeof value == "object" && value.command == "create"
	}
}
