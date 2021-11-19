import { Document } from "../Document"
import { Filter } from "../Filter"

export interface Get<T extends Document> {
	command: "get"
	request: Filter<T>
}
