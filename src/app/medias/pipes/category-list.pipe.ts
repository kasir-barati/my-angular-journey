import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'categoryList',
  // This is just for sake of myself to aid my memory. It is like a mnemonic
  pure: true,
})
export class CategoryListPipe implements PipeTransform {
  // TODO: Get rid of unknown/any
  transform(medias: any[], ...args: unknown[]): unknown {
    const categories: string[] = [];

    for (const media of medias) {
      if (!categories.includes(media.category)) {
        categories.push(media.category);
      }
    }

    return categories.join(', ');
  }
}
