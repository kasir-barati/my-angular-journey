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

## Strongly typed reactive forms

- [Reference is this LinkedIn article](https://www.linkedin.com/pulse/3-steps-make-your-reactive-form-typesafe-angular-aart-den-braber/).
- Please do not put an `I` in front of your interfaces. Based on what I've learned through a tutorial about clean code.
  - Bad & Ugly: `IMedia`
  - Good & Pretty: `Media`
- We have 3 way to do it:

1. Define an interface for media.
   - I have my own - It is not totally mine - conventions here:
     - Create a `model-name.model.ts` file in the related module
     - I did in the `src/app/media` directory
2. Declare a custom `interface` interface which inherits from `FormGroup`
   - To initialize the form. For the values
   - I have my own way here, I am honest this is totally personal preference.
     - Create a `add-media-form-group.model.ts` in the related module
