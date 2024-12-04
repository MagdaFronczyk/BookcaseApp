export type IWolneLekturyResponse = IWolneLekturyBook[];

export interface IWolneLekturyBook {
  kind: string;
  full_sort_key: string;
  title: string;
  url: string;
  cover_color: string;
  author: string;
  cover: string;
  epoch: string;
  href: string;
  has_audio: boolean;
  genre: string;
  simple_thumb: string;
  slug: string;
  cover_thumb: string;
  liked: any;
}
