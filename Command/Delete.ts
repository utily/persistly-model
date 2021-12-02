import { Document } from "../Document"
import { Filter } from "../Filter"

export interface Delete<T extends Document> {
	command: "delete"
	name: string
	request: Filter<T>
	response?: T | T[]
}
export namespace Delete {
	export function is(value: any | Delete<any>): value is Delete<any> {
		return typeof value == "object" && value.command == "delete" && typeof value.name == "string" && value.request
	}
}
