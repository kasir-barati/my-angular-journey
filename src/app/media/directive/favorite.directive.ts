import { Directive, HostBinding, Input } from '@angular/core';

/**
 * We use this square bracket in the string to say Angular to find a match in the element with
 * majFavorite attribute. You can learn more here: https://stackoverflow.com/a/44818282/8784518
 *
 * To bind a value to another element's property we can annotate a property with
 * @HostBinding() decorator. It will bind the passed value to that property. For
 * example in our case we are adding is-favorite class to the class property
 *
 * We passed the value to this directive through a statement using @Input() decorator as we have
 * done it in the components. But with one difference
 */
@Directive({
  selector: '[majFavorite]',
})
export class FavoriteDirective {
  @HostBinding('class.is-favorite')
  isFavorite: boolean = true;

  /**
   * IDK How is it really works but here is my guess: Since we use it in the html like this:
   * <tag-name [majFavorite]="true"></tag-name> it will creates a property name with the
   * majFavorite name. And here I said if that property's value changed re-execute this setter
   */
  @Input()
  set majFavorite(value: boolean) {
    this.isFavorite = value;
  }

  constructor() {}
}
