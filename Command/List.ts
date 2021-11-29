import { Document } from "../Document"
import { Filter } from "../Filter"

export interface List<T extends Document> {
	command: "list"
	request: Filter<T>
}

export namespace List {
		export function is(value: any | List<any>): value is List<any> {
			return typeof value == "object" && value.command == "list"
		}
}
