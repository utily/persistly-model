export interface Condition<T> {
	$eq?: T
	$gt?: T
	$gte?: T
	$in?: T[]
	$lt?: T
	$lte?: T
	$ne?: T
	$nin?: T[]
	$isset?: boolean
}

export namespace Condition {
	export function is(value: any | Condition<any>): value is Condition<any> {
		return (
			typeof value == "object" &&
			(value.$eq != undefined ||
				value.$gt != undefined ||
				value.$gte != undefined ||
				value.$in != undefined ||
				value.$lt != undefined ||
				value.$lte != undefined ||
				value.$ne != undefined ||
				value.$isset != undefined ||
				value.$nin != undefined)
		)
	}
	export function extract<T>(condition: Condition<T> | any): Condition<T> | undefined {
		const result: Condition<T> | undefined = is(condition) ? {} : undefined
		if (result) {
			if ("$eq" in condition)
				result.$eq = condition.$eq
			if ("$gt" in condition)
				result.$gt = condition.$gt
			if ("$gte" in condition)
				result.$gte = condition.$gte
			if ("$in" in condition)
				result.$in = condition.$in
			if ("$lt" in condition)
				result.$lt = condition.$lt
			if ("$lte" in condition)
				result.$lte = condition.$lte
			if ("$ne" in condition)
				result.$ne = condition.$ne
			if ("$nin" in condition)
				result.$nin = condition.$nin
			if ("$isset" in condition)
				result.$isset = condition.$isset
		}
		return result
	}
}
