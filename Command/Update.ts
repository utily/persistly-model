import { Document } from "../Document"
import { Filter } from "../Filter"
import { Options } from "../Options"
import { Update as UpdateQuery } from "../Update"

export interface Update<T extends Document> {
	command: "update"
	request: (Filter<T> & UpdateQuery<T> & Options) | (Filter<T> & UpdateQuery<T> & Options)[]
	response?: number | T | (number | T)[]
}

export namespace Update {
		export function is(value: any | Update<any>): value is Update<any> {
			return typeof value == "object" && value.command == "update" && Array.isArray(value.request)
		}
}
