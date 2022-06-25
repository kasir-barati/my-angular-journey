# How to create a template-driven Angular form

1. `ng generate component add-media`
2. Create a `<form #addMediaForm="ngForm" (ngSubmit)="onSubmitMedia()"></form>` element
   - Create the `onSubmitMedia`. Recall my naming convention.
   - The `ngSubmit` interfere with default form behavior and instead it will execute specified function.
   - Since we are building inside the template we have to pass the forms value to the component's class via template reference variable.
     - Angular will export a [form group](https://angular.io/api/forms/FormGroup) variable for us
       - In short form group is the underlying model Angular uses for the forms.
3. Add `ngModel` directive
   - It is designed to work with the `name` attribute. So it means that the form control key would be calculated to the `name`'s attribute value.
   - In our add-media form we will have `name`, `medium`, `category` fields
