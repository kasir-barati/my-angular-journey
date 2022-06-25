# Why Angular?

- A standard framework to build dynamic site:
  - Interactivity
  - Data modification
  - Modification
- It is specialized in data binding
- Leverage the client side by using RxJS natively
- Typescript gave it type - Although it is not strongly typed but eventually it is much much better that React/Vue where we have to configure it ourselves
- Component architecture
  - Web component:
    - It is custom tags: `<my-custom-tag></my-custom-tag>`
  - Modularity
  - Reusability
  - IMO each component is a module in fact
- [DI](#di)
  - [Service](#service)
- Angular leverages decorators to configure our Angular app. IMO this is really smooth.
- [Angular CLI](./ng-cli.md).

# What I use in Angular:

- HTML
- Bootstrap over Tailwind. [Read more and understand why in here](https://dev.to/wasabigeek/which-css-framework-bootstrap-or-tailwind-2k0g)
- Typescript not JavaScript inside a `.ts` file extension
- Angular Material UI
- <small>Add your dashboard here, Possible choice: [Prime](https://www.primefaces.org/primeng/)</small>

# Angular nuts and bolts in a blink of an eye

- [Template Syntax](#angular-template-syntax)
- [Routing](#routing)
- Http
  - `HttpClientModule`
  - RxJS based
  - built-in
- [Services](#service)
- [Forms](#angular-forms)

# Components

- Load components process:
  - Starts from the app
  - Then goes down to the hell till last component
  - Then comes back
- Kinda tree's root. From the main root start's and then goes to branches
- Actually a [directive](#directives) with a template
- **They cannot be self closing**. It is a rigid law. You should do `<app-name></app-name>`
- `@Component` decorator annotate a class as a component
  - Its arguments:
    - `selector`: string
      - used string to locate a custom HTML tag and put this component's content inside it.
      - Usually named `app-*`
      - According to the w3c specs that custom DOM elements should contains at least one dash
      - This argument is required
    - `template`: string
      - Inline template
      - IDK when or why we need HTML inside the component directly. Anyway, Required if `templateUrl` is not provided
    - `templateUrl`: string
      - The relative path to a html - template - file. Is required if `template` is not provided
      - Relative path handled by Angular CLI
      - External template

# Directives

- Provides functionality
- Modify DOM
  - Behavior
  - View/appearance
- `@Decorator`
- Types:
  - [Components](#components):
    - `<app-header></app-header>`
  - Structural Directives
    - Responsible for HTML layout
    - Manipulate DOM based on some conditions
    - `[ngIf]`, `[NgFor]`, `[NgSwitch]`
    - They accept micro syntax statement. In other word Angular id picky about it and we have to do it in one way. It is especially true about `*ngFor`
    - The coolest thing is that Angular watches data and if it changes it will rerun the structural directives. In other word if the property's value changes it will rerun the `*ngFor` for example.
  - Attribute directives
    - `[NgClass]`
    - Change the behavior/appearance of a DOM element that they attached to.
    - We can have our own custom attribute directive
      - A class annotated with `@Decorator`
      - You can read more about why do we need those `[]` in [this Stackoverflow Q&A](https://stackoverflow.com/questions/43633452)
      - Generating a new directive will auto import it in the `app.module.ts`
      - It is wise to use a domain name as prefix for our directives to keep them unique.
      - To generate it via CLI I use `ng generate directive media/directive/favorite --prefix maj`
        - Use `--prefix` flag to prefix the generated attribute with a prefix. Is is rewarded to prefix our custom attribute directives with a specific prefix.
          - Here I used my repository's acronym `maj` which stands for `my angular journey`
          - We can see the same pattern in the Angular directives too - `ngFor`, etc.
          - When we do not specify `--selector` Angular will takes the file name and prepend it with the passed value to this flag and use it for selector.
          - This command will also surround our directives name with a `[]`.
        - use `--selector` to specify the selector explicitly.
          - :exclamation:We cannot use `--selector` and `--prefix` in unison. Because `--selector` has the upper hand and would be applied on top of `--prefix`
          - e.x. `ng generate directive media/directive/favorite --selector majBeloved`
            - This may deceive you that it will not surround your directive with `[]`. But do not. It will surround it anyway.
            - But here we can select a different name rather than the file name
  - [Pipes](#pipes)
    - `{{ name | uppercase }}`

# Pipes

- Template expression operators
- Change data before displaying it
  - A statement followed by pipe operator. At last we have a transformed value which will be showed to the user
- Reusable
- Do not modify data
- AFAIK It is exactly like Linux terminal pipes
- We can also pass parameter/s to a pipe:
  - `{{ media.watchedOn | date: 'shortDate', '+0900' }}`
- Built-in pipes:
  - [date](https://angular.io/api/common/DatePipe)
- Custom pipe:
  - It is fairly trivial
  - Create `ng generate pipe /medias/pipes/category-list`
    - The file name will be specified as the pipe name
    - Angular CLI import the newly generated pipe in `app.module.ts`
  - A class annotated with `@Pipe` decorator.
  - We do have 2 sort of pipeline,
    - Stateless:
      - It is a pure function without any side effect. It only takes a value and returns another thing.
      - We mark them with passing `pure: true` as a option in `@Pipe` decorator.
      - by default pipelines are stateless
    - Stateful:
      - IDK but my gut tells me we should avoid this kind of works as much as we can. Based on my experience it really makes debugging hard sometimes.

# [Angular Template Syntax](https://angular.io/guide/template-syntax)

- Easily bind data to views
- Easily work with data in the views
- :warning:I am not sure:warning: You cannot do:
  - `new`
  - `++` or `--`
  - `+=` or `-=`
  - bitwise operators: `|` or `&`
- Types:
  - :warning:IDK is this one correct or not:warning: Angular's elements:
    - `<ng-template></ng-template>`
  - :warning:[Directives](#directives):warning:
  - [Template variables](https://angular.io/guide/template-reference-variables):
    - Use data from one part of a template in another part of the template.
      ```html
      <input type="text" #name />
      <button type="button" (click)="onClick(name.value)">
        click me
      </button>
      ```
    - Can refer to:
      - A DOM element within that template
      - A directive or component
      - **:warning:TBH IDK Anything about this one:warning:** A web component
      - **:warning:TBH IDK Anything about this one:warning:** A directive or component
  - [Template statements](https://angular.io/guide/template-statements):
    - Use a language that **looks like JavaScript**
    - You can do in it:
      - Basic assignment
      - Chaining expressions with `;`
    - You cannot do:
      - [pipe operator](#pipes)
    - Statement best practices:
      - Conciseness: Method call or basic property assignments. Keep template statements minimal.
      - Work within the context: Template statements cannot refer to anything in the global namespace such as `window` or `document`. #NSFW Not in the view, For sure you have them in the component's class.
    - Methods or properties that you can use in your HTML to respond to user events
    - Bindings
      - Property binding:
        - Bind data to view
        - Sending data to a component
          1. Define a property in component class
          2. Annotate added property with `@Input` decorator.
             - Basically it adds some metadata to the property to tell Angular that whoever who instantiate this component **can** pass a value to the annotated property.
        - Use `[]` for property binding
        - HTML elements have backing DOM properties that track state on those elements
        - `[domProperty]="componentProperty"` Wire to those defined properties inside class
      - Event binding:
        - Wire up event handlers from your components class to view
        - Expose event/data from a component:
          1. Define a property in component class
          2. Annotate it with `@Output` decorator
             - Bas
        - Use template statements with elements, components, or directives in response to events.
        - Use `()` for event binding
        - `(eventName)=statement`
      - Two way binding:
        - `[(ngModel)]`
        - Activated in `FormsModule`
  - [Template expression](https://angular.io/guide/interpolation)
    - Called Interpolation
    - A way to show data in views
    - Uses the double curly braces `{{` and `}}` as delimiters.
    - String interpolation: `<h3>Current customer: {{ currentCustomer }}</h3>`

# DI

- Dependency Injection
  - IoC - Inversion of Control
  - Instead of module goes out and get an instance from them, we provide them what they need.
- `constructor(className: ClassName) {}` and Angular DI create an instance for you.

# Service

- Contains business logic
- No business logic in component
  - Separate view from business logics
- A simple class annotated with `@Injectable` decorator
- To inject service in another class you need to add it in `providers` list.
  - but Angular CLI - `ng generate service service-name` - does something a little more general, It will add that class inside the globally available services. In this way we do not need to list them in `providers`

# Data persistence

- Saving data for only when user is using my application
  - Store it in memory
  - Create a class/Object, store data inside it, do DI or just import it. This is what we do in most cases.
  - Showing a list of orders, or list of products
- Saving data for a longer time
  - Things like refresh token.
  - Create a class and implement local storage inside it

# Routing

- Do not refresh the whole page
- Just change the components
- You can in Angular know about what where user and send him back and forth between routes
- `RouterModule`
  - Routing configuration:
    - `Routes`
    - `Route`
  - [Routing events](https://angular.io/api/router/Event)
  - `routerLink` directive that do routing
  - `<router-outlet></router-outlet>` directive that specifies where the component should be shown after route changed.

# Angular Modules

- Organized app by packeting related features/functionalities in a module
- `NgModule` annotate a class which is destinated to be module
  - Its arguments:
    - `imports`: Bring in other modules inside this module because this module needs something inside the other module.
    - `decorations`: Make other pipes/components/directives available inside the module which does not come with a module. For example usually our Angular app components, shared pipes/directives.
    - `bootstrap`: This conf is usually useful for `AppModule` which specify the root component which contains other components.

# Angular Forms

- Collect data
  - Mainly by `<form></form>` element
- Custom validators
- Built-in data validators
  - Async and sync validators
  - Track changes and revalidate forms data
- Showing errors to the user
- We can use both of the following approaches in unison.
- Two way to create forms:
  - **Template-driven**:
    - Template is the major part engaged in form logic.
    - Add `FormsModule` in `AppModule`'s `imports` list.
    - In this case we do not need to tell Angular where are our forms:
      - It detects forms by means of `ngForm` directive - `#addMediaForm="ngForm"`.
      - It detects forms' fields through `ngModel` directive
  - **Model-driven**:
    - Reactive approach
    - Majority of form logic is crafted in component's class.
    - [My task tracker Angular app also contains good information](https://github.com/kasir-barati/task-tracker-traversy-media/blob/dev/src/app/add-task/README.md).
    - The negative focal point in this approach is that our form is loosely typed. To reach a better standard living alongside of our code we can [make it strongly types](https://www.linkedin.com/pulse/3-steps-make-your-reactive-form-typesafe-angular-aart-den-braber/)
    - Add `ReactiveFormsModule` in `AppModule`'s `imports` list.
    - :warning:**Please read src/app/add-media-reactive-form/README.md for sure. It contains form validation details.**:warning:
    - For error messages you have to check how I used it in [this repo](https://github.com/kasir-barati/task-tracker-traversy-media/tree/dev/src/app/shared/validation-errors).
      - In short I defined a shared component which takes validation errors as input and shows it.
      - As you may realize we have too uch power in custom validators.
- You can see a clear difference between template-driven and model-driven in [this PR](https://github.com/kasir-barati/task-tracker-traversy-media/pull/4/files) very clear and I tried to state it vividly and readily.
  - Here is some advantages you gain by using model-drive approach:
    - More flexibility in form validation
      - Rules
      - Error messages
    - Subscribing to the form changes
    - An sensible choice for those who loves to do unit test
- You can see a good implementation on how to work with `HttpClient` in Angular in [this PR](https://github.com/kasir-barati/my-tour-of-heroes-angular/pull/6/files). Please read the whole codebase, that's how you get a more natural feeling about RxJS.
