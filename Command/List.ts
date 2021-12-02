import { Document } from "../Document"
import { Filter } from "../Filter"

export interface List<T extends Document> {
	command: "list"
	name: string
	request?: Filter<T>
	response?: T[]
}

export namespace List {
	export function is<T extends Document>(
		value: any | List<T extends Document ? T : never>
	): value is List<T extends Document ? T : never> {
		return typeof value == "object" && value.command == "list" && typeof value.name == "string"
	}
}
