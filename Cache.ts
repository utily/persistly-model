import * as authly from "authly"

export interface Cache {
	id: authly.Identifier
	collection: string
	merchant: authly.Identifier
}
