import { Document } from "../Document"
import { Filter } from "../Filter"

export interface Get<T extends Document> {
	command: "get"
	name: string
	request: Filter<T>
	response?: T
}

export namespace Get {
	export function is<T extends Document>(
		value: any | Get<T extends Document ? T : never>
	): value is Get<T extends Document ? T : never> {
		return typeof value == "object" && value.command == "get" && typeof value.name == "string" && value.request
	}
}
