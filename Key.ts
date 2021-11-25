import * as isoly from "isoly"
import * as authly from "authly"

export interface Key {
	id: string
	created: isoly.DateTime
	expires: isoly.DateTime
	connection: string
	cache?: string
	collections: {
		name: string
		shard: string
		idLength: number
		cached?: boolean
	}[]
}
const dateTimeConverter = {
	forward: (value: isoly.DateTime): number =>
		isoly.DateTime.is(value) ? isoly.DateTime.parse(value).getTime() : value,
	backward: (value: number): isoly.DateTime =>
		typeof value == "number" ? isoly.DateTime.create(new Date(value)) : value,
}
const transformers = [
	new authly.Property.Renamer({
		collections: "col",
		connection: "con",
		cache: "cch",
		expires: "xpr",
		audience: "aud",
		issuer: "iss",
		created: "iat",
	}),
	new authly.Property.Converter({
		iat: dateTimeConverter,
		xpr: dateTimeConverter,
	}),
	authly.Property.Remover.create(["token"]),
]
export namespace Key {
	export type Verifier = authly.Verifier<Key>
	export namespace Verifier {
		export function create(publicKey: string | undefined): Verifier | undefined {
			return authly.Verifier.create<Key>(authly.Algorithm.RS256(publicKey))?.add(...transformers)
		}
	}
	export type Issuer = authly.Issuer<Key>
	export namespace Issuer {
		export function create(issuer: string, privateKey: string | undefined): Issuer | undefined {
			return authly.Issuer.create<Key>(issuer, authly.Algorithm.RS256(undefined, privateKey))?.add(...transformers)
		}
	}
}
