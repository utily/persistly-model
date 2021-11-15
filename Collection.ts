import { Document } from "./Document"
import { Filter } from "./Filter"
import { Options } from "./Options"
import { Update } from "./Update"

export interface Collection<T extends Document> {
	get(filter: Filter<T>): Promise<T | undefined>
	list(filter?: Filter<T>): Promise<T[]>

	create(document: T): Promise<T>
	create(documents: T[]): Promise<T[]>
	create(documents: T | T[]): Promise<T | T[]>

	delete(document: Filter<T> & Document): Promise<T | undefined>
	delete(document: Filter<T>): Promise<T | number | undefined>
	delete(documents: (Filter<T> & Document)[]): Promise<T[]>
	delete(documents: Filter<T> | Filter<T>[]): Promise<T | number | undefined | T[]>

	update(document: Filter<T> & Update<T> & Options & Document): Promise<T | undefined>
	update(document: Filter<T> & Update<T> & Document): Promise<T | undefined>
	update(document: Filter<T> & Update<T>): Promise<T | number | undefined>
	update(documents: (Filter<T> & Update<T> & Options & Document)[]): Promise<T[]>
	update(
		documents: (Filter<T> & Update<T> & Options) | (Filter<T> & Update<T> & Options)[]
	): Promise<T | number | undefined | T[]>

	// getDistinct(field: string): Promise<any[]>
}
