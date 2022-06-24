import { Directive, HostBinding } from '@angular/core';

/**
 * We use this square bracket in the string to say Angular to find a match in the element with
 * majFavorite attribute. You can learn more here: https://stackoverflow.com/a/44818282/8784518
 *
 * To bind a value to another element's property we can annotate a property with
 * @HostBinding() decorator. It will bind the passed value to that property. For
 * example in our case we are adding is-favorite class to the class property
 */
@Directive({
  selector: '[majFavorite]',
})
export class FavoriteDirective {
  @HostBinding('class.is-favorite')
  isFavorite: boolean = true;

  constructor() {}
}
