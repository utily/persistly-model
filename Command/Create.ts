import { Document } from "../Document"

export interface Create<T extends Document> {
	command: "create"
	name: string
	request: T | T[]
	response?: T | T[]
}

export namespace Create {
	export function is<T extends Document>(
		value: any | Create<T extends Document ? T : never>
	): value is Create<T extends Document ? T : never> {
		return typeof value == "object" && value.command == "create" && typeof value.name == "string" && value.request
	}
}
