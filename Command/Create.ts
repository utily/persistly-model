import { Document } from "../Document"

export interface Create<T extends Document> {
	command: "create"
	request: T | T[]
}
