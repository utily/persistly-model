import { Document } from "../Document"
import { Filter } from "../Filter"

export interface Delete<T extends Document> {
	command: "delete"
	request: Filter<T>
}
