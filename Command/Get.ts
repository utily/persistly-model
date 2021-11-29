import { Document } from "../Document"
import { Filter } from "../Filter"

 export interface Get<T extends Document> {
	command: "get"
	request: Filter<T>
	response?: T
}

export namespace Get {
	export function is(value: any | Get<any>): value is Get<any> {
			return typeof value == "object" && value.command == "get" 
		}
}
