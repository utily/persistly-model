import * as persistly from "../index"

describe("Update", () => {
	it("test Clear", () => {
		const arrayAction = {
			$set: [
				null,
				undefined,
				"foo",
				123,
				{ test: null, foo: undefined, bar: "foo", example: ["bar", null, undefined] },
			],
		}
		expect(persistly.Update.Action.extract(arrayAction)).toEqual({
			$set: ["foo", 123, { bar: "foo", example: ["bar"] }],
		})
		const objectAction = {
			$set: { test: null, foo: undefined, bar: "foo", example: ["bar", null, undefined] },
		}
		expect(persistly.Update.Action.extract(objectAction)).toEqual({
			$set: { bar: "foo", example: ["bar"] },
		})
	})
})
