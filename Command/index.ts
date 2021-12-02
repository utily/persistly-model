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
	export function is<T>(
		value: any | Command<T extends Document ? T : never>
	): value is Command<T extends Document ? T : never> {
		return (
			UpdateCommand.is<T extends Document ? T : never>(value) ||
			CreateCommand.is<T extends Document ? T : never>(value) ||
			DeleteCommand.is<T extends Document ? T : never>(value) ||
			GetCommand.is<T extends Document ? T : never>(value) ||
			ListCommand.is<T extends Document ? T : never>(value)
		)
	}
	export type Update<T> = UpdateCommand<T extends Document ? T : never>
	export namespace Update {
		export const is = UpdateCommand.is
	}
	export type Create<T> = CreateCommand<T extends Document ? T : never>
	export namespace Create {
		export const is = CreateCommand.is
	}
	export type Delete<T> = DeleteCommand<T extends Document ? T : never>
	export namespace Delete {
		export const is = DeleteCommand.is
	}
	export type Get<T> = GetCommand<T extends Document ? T : never>
	export namespace Get {
		export const is = GetCommand.is
	}
	export type List<T> = ListCommand<T extends Document ? T : never>
	export namespace List {
		export const is = ListCommand.is
	}
}
