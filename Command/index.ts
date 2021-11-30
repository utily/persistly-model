import { Document } from "../Document"
import { Create as CreateCommand } from "./Create"
import { Delete as DeleteCommand } from "./Delete"
import { Get as GetCommand } from "./Get"
import { List as ListCommand } from "./List"
import { Update as UpdateCommand } from "./Update"

export type Command<T extends Document> =
	| UpdateCommand<T>
	| CreateCommand<T>
	| DeleteCommand<T>
	| GetCommand<T>
	| ListCommand<T>

export namespace Command {
	export function is(value: any | Command<any>): value is Command<any> {
		return (
			UpdateCommand.is(value) ||
			CreateCommand.is(value) ||
			DeleteCommand.is(value) ||
			GetCommand.is(value) ||
			ListCommand.is(value)
		)
	}
	export type Update = UpdateCommand<any>
	export type Create = CreateCommand<any>
	export type Delete = DeleteCommand<any>
	export type Get = GetCommand<any>
	export type List = ListCommand<any>
}
