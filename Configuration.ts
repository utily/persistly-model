export interface Configuration {
	collections: Record<
		string,
		{
			shard: string
			idLength?: 4 | 8 | 12 | 16
		}
	>
	cached: string[]
	cache: string
}
export namespace Configuration {
	export function is(value: any | Configuration): value is Configuration {
		return (
			typeof value == "object" &&
			value &&
			typeof value.collections == "object" &&
			value.collections &&
			Object.entries(value.collections).every(
				(entry: [string, any]) =>
					typeof entry[0] == "string" &&
					typeof entry[1] == "object" &&
					entry[1] &&
					typeof entry[1].shard == "string" &&
					(entry[1].idLength == undefined ||
						(typeof entry[1].idLength == "number" && [4, 8, 12, 16].includes(entry[1].idLength)))
			) &&
			typeof value.cache == "string" &&
			Array.isArray(value.cached) &&
			value.cached.every((cached: any) => typeof cached == "string")
		)
	}
}
