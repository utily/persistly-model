import { Document } from "../Document"
import { Filter } from "../Filter"

export interface Delete<T extends Document> {
	command: "delete"
	name: string
	request: Filter<T>
	response?: T | T[]
}
export namespace Delete {
	export function is<T extends Document>(
		value: any | Delete<T extends Document ? T : never>
	): value is Delete<T extends Document ? T : never> {
		return typeof value == "object" && value.command == "delete" && typeof value.name == "string" && value.request
	}
}
