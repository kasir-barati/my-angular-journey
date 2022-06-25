# How to use reactive forms in Angular

1. Add `ReactiveFormsModule` in `AppModule`'s `imports` list.
2. Define a **public** property - `addMediaForm: FormGroup;` - in the component's class of the `FormGroup` type
   - It should be public, otherwise the template cannot touch it
3. Initialize it in `ngOnInit`
   - `ngOnInit(): void { this.addMediaForm = new FormGroup({/* ... */}); }`
   - We could put this initialization in the `constructor` but our means here help us to leverage Angular lifecycle in unit-test step
   - This is another exception, While we used to follow venerable initializations in `constructor` most of the times but here we have done it in this way to gain something valuable
4. Use `FormControl` to define new form's field:
   - `medium: new FormControl('Movies')`
     - Here we can pass default values
5. Use `[formGroup]` directive to associate created property - `addMediaForm` - to the template form
   - `[formGroup]="addMediaForm"`
6. Connect each form's element to a form group field via `formControlName` directive
7. Lastly change the forms behavior on submit via introducing your own method to angular: `(ngSubmit)="onSubmitAddMedia(addMediaForm.value)"`

## [Strongly typed reactive forms](https://angular.io/guide/typed-forms)

- [Reference is this LinkedIn article](https://www.linkedin.com/pulse/3-steps-make-your-reactive-form-typesafe-angular-aart-den-braber/).
- [It's issue in GitHub](https://github.com/angular/angular/issues/13721)
- Please do not put an `I` in front of your interfaces. Based on what I've learned through a tutorial about clean code.
  - Bad & Ugly: `IMedia`
  - Good & Pretty: `Media`
- Steps:
  1.  Define `Media` interface.
      - I have my own - It is not totally mine - conventions here:
      - Create a `media.model.ts` file in the related module
      - I did in the `src/app/media` directory
  2.  Declare a custom `interface` which:
      - Will be passed as a type to `FormGroup`
      - I have my own way here, I am honest this is totally personal preference.
      - Create a `add-media-form-group.model.ts` in the related module
      - In this example it is `AddMediaFormGroup`
  3.  Now your `Media` interface and `AddMediaFormGroup` should be compatible. In my case I forced to add `| null` everywhere that my form has already said this is nullable. TBH This was my fault, I confess it. My `Media` interface should imitate this rules. BTW I mean this is not a negative point.
