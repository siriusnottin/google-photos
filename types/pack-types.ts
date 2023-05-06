// Pack types

export interface MediaItem {
  mediaId: string;
  filename: string;
  mediaType: string;
  mimeType: string;
  description: string;
  creationTime: string;
  width: number;
  height: number;
  image: string;
  url: string;
}

export interface Album {
  albumId: string;
  title: string;
  url: string;
  mediaItems: MediaItem[];
  coverPhoto: string;
  coverPhotoMediaItem: string | undefined;
}