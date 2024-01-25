import { ImageMimeType } from '../common';
type ActionImage = 'delete' | 'update';

export interface NewImageRequest {
  nameFile: string;
  mimeType: ImageMimeType;
  base64: string;
}

export interface AdminImageRequest {
  action: ActionImage;
  path: string;
  mimeType?: ImageMimeType;
  base64?: string;
}
