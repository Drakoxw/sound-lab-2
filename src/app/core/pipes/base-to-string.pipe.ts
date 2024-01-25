import { Pipe, PipeTransform } from '@angular/core';
import { Base64 } from '@interfaces/models';

@Pipe({
  name: 'baseToString'
})
export class BaseToStringPipe implements PipeTransform {

  transform(base: Base64): string {
    const { mimeType, base64 } = base;
    if (!mimeType || !base64) {
      return 'https://cifrado.com.co/sound-lab/assets/store/images/6TAjF4elly-imagen-default.png';
    }
    return `data:${mimeType};base64,${base64}`;
  }

}
