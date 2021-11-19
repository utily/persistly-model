import { Document } from "../Document"
import { Filter } from "../Filter"

export interface List<T extends Document> {
	command: "list"
	request: Filter<T>
}
