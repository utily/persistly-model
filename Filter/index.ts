import { Condition as FilterCondition } from "./Condition"

export type Filter<T> = {
	[P in keyof T]?: FilterCondition<T[P]> | Filter<DeepPartial<T[P]>> | any
}
export namespace Filter {
	export type Condition<T> = FilterCondition<T>
	export namespace Condition {
		export const extract = FilterCondition.extract
	}
}
type DeepPartial<T> = {
	[P in keyof T]?: DeepPartial<T[P] | FilterCondition<T[P]>>
}
