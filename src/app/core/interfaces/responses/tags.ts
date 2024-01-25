import { ResponseBase } from "./common";

export interface DataListTags {
  id: number,
  name: string
}

export interface ListTagsResponse extends ResponseBase {
  data: DataListTags[]
}
