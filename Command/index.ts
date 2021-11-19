import { Document } from "../Document"
import { Update } from "../Update"
import { Create } from "./Create"
import { Delete } from "./Delete"
import { Get } from "./Get"
import { List } from "./List"

export type Command<T extends Document> = Update<T> | Create<T> | Delete<T> | Get<T> | List<T>
