import { Document } from "../Document"
import { Filter } from "../Filter"
import { Options } from "../Options"
import { Update as UpdateQuery } from "../Update"

export interface Update<T extends Document> {
	command: "update"
	name: string
	request: (Filter<T> & UpdateQuery<T> & Options) | (Filter<T> & UpdateQuery<T> & Options)[]
	response?: number | T | (number | T)[]
}

export namespace Update {
	export function is<T extends Document>(
		value: any | Update<T extends Document ? T : never>
	): value is Update<T extends Document ? T : never> {
		return typeof value == "object" && value.command == "update" && typeof value.name == "string" && value.request
	}
}
