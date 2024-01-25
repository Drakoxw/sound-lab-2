import { ResponseBase } from './common';

export interface FileAssets {
  url: string,
  path: string,
  name: string,
  file: string,
  extension: string,
  weight: string,
  date: string,
  isImage: true,
  width: number,
  height: number,
  mimeType: string,
}

export interface FileAssetsData {
  file: string,
  dataFiles: FileAssets[]
}

export interface NewImageResponse extends ResponseBase {
  data: {
    path: string
  }
}

export interface AssetsImageListResponse extends ResponseBase {
  data: FileAssetsData[]
}

