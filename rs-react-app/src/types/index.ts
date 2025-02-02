export interface Item {
  etag: string;
  id: ItemId;
  kind: string;
  snippet: ItemSnippet;
}

export interface ItemId {
  id: string;
  videoId: string;
}

export interface ItemSnippet {
  channelId?: string;
  channelTitle: string;
  description?: string;
  liveBroadcastContent?: string;
  publishTime?: string;
  publishedAt?: string;
  thumbnails?: Thumb;
  title: string
}
 
export interface Thumb {
  default: ThumbContent;
  medium: ThumbContent;
  high: ThumbContent;
}

export interface ThumbContent {
  height: number;
  url: string;
  width: number;
}