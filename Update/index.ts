import { Action as UpdateAction } from "./Action"

export type Update<T> = {
	[P in keyof T]?: UpdateAction<T[P]> | Update<T[P]> | any
}

export namespace Update {
	export function extract<T>(update: Update<T>): Update<T> {
		const result: Update<T> = {}
		for (const field in update)
			if (Object.prototype.hasOwnProperty.call(update, field)) {
				const value = UpdateAction.extract(update[field])
				if (value != undefined && value != null)
					result[field] = value
			}
		return result
	}
	export type Action<T> = UpdateAction<T>
	export namespace Action {
		export const is = UpdateAction.is
		export const extract = UpdateAction.extract
		export type Operator = UpdateAction.Operator
		export namespace Operator {
			export const is = UpdateAction.Operator.is
		}
	}
}
