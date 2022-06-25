import {
  Directive,
  HostBinding,
  HostListener,
  Input,
} from '@angular/core';

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
  /**
   * I am not 100% sure but it seems for me that this properties value - truthy or falsy - specify
   * that either that value - e.x. is-favorite - should be added to the property - e.x. class - or not
   */
  @HostBinding('class.is-favorite')
  isFavorite: boolean = true;
  @HostBinding('class.is-favorite-hovering')
  isHovered: boolean = false;

  /**
   * IDK How is it really works but here is my guess: Since we use it in the html like this:
   * <tag-name [majFavorite]="true"></tag-name> it will creates a property name with the
   * majFavorite name. And here I said if that property's value changed re-execute this setter
   */
  @Input()
  set majFavorite(value: boolean | null) {
    this.isFavorite = value || false;
  }

  /**
   * Here we are listening to a specific event on the element which is using this custom directive
   * As you understand we should not use on prefix as it it is removed in Angular.
   *
   * I know we can achieve the same outcome with venerable the :hover CSS pseudo-class. This is just
   * for demonstration what kind of power we do have in a simple standard manner. It is like nuclear
   * weapon.
   */
  @HostListener('mouseenter')
  onMouseEnter() {
    this.isHovered = true;
  }
  @HostListener('mouseleave')
  onMouseLeave() {
    this.isHovered = false;
  }

  constructor() {}
}
