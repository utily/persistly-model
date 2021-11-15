import { Collection } from "./Collection"
import { Document } from "./Document"

export interface Connection {
	get<T extends Document, Shard extends keyof T & string>(
		name: string,
		shard: Shard,
		idLength: 4 | 8 | 12 | 16
	): Promise<Collection<T> | undefined>
	close(): Promise<void>
}
