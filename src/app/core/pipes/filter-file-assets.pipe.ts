import { Pipe, PipeTransform } from '@angular/core';
import { FileAssets, FileAssetsData } from '@interfaces/index';
import { logDev } from '@utils/console';

@Pipe({
  name: 'filterFileAssets'
})
export class FilterFileAssetsPipe implements PipeTransform {

  transform(data: FileAssetsData[], filter: string): FileAssets[] {
    logDev('filter', filter)
    if (filter) {
      const filt = data.filter(el => el.file.toLowerCase().includes(filter.toLowerCase()));
      return filt.map(el => el.dataFiles).flat();
    }
    return [];
  }

}
