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
  - Attribute directives
    - `[NgClass]`
  - [Pipes](#pipes)
    - `{{ name | uppercase }}`

# Pipes

- Template expression operators
- Change data before displaying it
- Reusable
- Do not modify data

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
        - Use `[]` for property binding
        - HTML elements have backing DOM properties that track state on those elements
        - `[domProperty]="componentProperty"` Wire to those defined properties inside class
      - Event binding:
        - Wire up event handlers from your components class to view
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
