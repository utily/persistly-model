import * as isoly from "isoly"
import * as authly from "authly"
import { Configuration } from "./Configuration"

export interface Key {
	id: string
	created: isoly.DateTime
	expires: isoly.DateTime
	connection?: string
	configuration: Configuration
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
	export function is(value: any | Key): value is Key {
		return (
			typeof value == "object" &&
			value &&
			typeof value.id == "string" &&
			isoly.DateTime.is(value.created) &&
			isoly.DateTime.is(value.expires) &&
			(value.connection == undefined || typeof value.connection == "string") &&
			Configuration.is(value.configuration)
		)
	}
	export type Verifier = authly.Verifier<Key>
	export namespace Verifier {
		export function create(publicKey: string | undefined): Verifier | undefined {
			const verifier = authly.Verifier.create<Key>(authly.Algorithm.RS256(publicKey))
			return verifier ? verifier.add(...transformers) : undefined
		}
	}
	export type Issuer = authly.Issuer<Key>
	export namespace Issuer {
		export function create(issuer: string, privateKey: string | undefined): Issuer | undefined {
			const signer = authly.Issuer.create<Key>(issuer, authly.Algorithm.RS256(undefined, privateKey))
			return signer ? signer.add(...transformers) : undefined
		}
	}
}
