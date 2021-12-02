import * as model from "../index"

describe("Advanced types test", () => {
	it("Advanced typeguards test", () => {
		type DocumentLike = {
			id: string
			type: string
		}
		const update: any = {
			command: "update",
			name: "dbTable",
			request: {
				id: "1234",
				$upsert: false,
			},
		}
		const like = model.Command.Update.is<DocumentLike>(update) ? update : undefined
		expect(like).toBeTruthy()
	})
	it("Advanced typeguards not is test", () => {
		type DocumentUnlike = {
			type: string
		}
		const update: any = {
			command: "update",
			name: "dbTable",
			request: {
				id: "1234",
				$upsert: false,
			},
		}
		// const like = model.Command.Update.is<DocumentUnlike>(update) ? update : undefined
		// The line above correctly gives a compiler error as specified below:
		/*
			Type 'DocumentUnlike' does not satisfy the constraint 'Document'.
  		Property 'id' is missing in type 'DocumentUnlike' but required in type 'Document'.
		*/
		expect(update && (false as unknown as DocumentUnlike)).toBeFalsy()
	})
})
