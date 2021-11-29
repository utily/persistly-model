import { Document } from "../Document"
import { Filter } from "../Filter"
import { Options } from "../Options"
import { Update as UpdateQuery } from "../Update"

export interface Update<T extends Document> {
	command: "update"
	request: (Filter<T> & UpdateQuery<T> & Options) | (Filter<T> & UpdateQuery<T> & Options)[]
	response?: {numner: number, data: T } | T
}
