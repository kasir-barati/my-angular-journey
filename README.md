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
- DI
  - Service
    - Separate view from business logics

# What I use in Angular:

- HTML
- Bootstrap over Tailwind. [Read more and understand why in here](https://dev.to/wasabigeek/which-css-framework-bootstrap-or-tailwind-2k0g)
- Typescript not JavaScript inside a `.ts` file extension
- Angular Material UI
- <small>Add your dashboard here, Possible choice: [Prime](https://www.primefaces.org/primeng/)</small>

# Angular nuts and bolts in a blink of an eye

- [Template Syntax](https://angular.io/guide/template-syntax):
  - Angular's elements:
    - `<ng-template></ng-template>`
  - [Directives](#directives)
  - [Bindings](#data-binding):
- Routing
  - `RouterModule`
  - `Routes`
  - `Route`
- Http
  - `HttpClientModule`
  - RxJS based
  - built-in
- Services:
  - Business logic place

# Components

- Load components process:
  - Starts from the app
  - Then goes down to the hell till last component
  - Then comes back
- Kinda tree's root. From the main root start's and then goes to branches
- Actually a [directive](#directives) with a template

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

# Data binding

- Easily bind data to views
- Easily work with data in the views
- Types:
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
      - `new`
      - `++` or `--`
      - `+=` or `-=`
      - bitwise operators: `|` or `&`
      - [pipe operator](#pipes)
    - Statement best practices:
      - Conciseness: Method call or basic property assignments. Keep template statements minimal.
      - Work within the context: Template statements cannot refer to anything in the global namespace such as `window` or `document`. #NSFW Not in the view, For sure you have them in the component's class.
    - Methods or properties that you can use in your HTML to respond to user events
    - Property binding:
      - `[dataName]`
    - Event binding:
      - Use template statements with elements, components, or directives in response to events.
      - `(eventName)=statement`
  - Two way binding:
    - `[(ngModel)]`
    - Activated in `FormsModule`
  - [Template expression](https://angular.io/guide/interpolation) or Interpolation:
    - Uses the double curly braces `{{` and `}}` as delimiters.
    - String interpolation: `<h3>Current customer: {{ currentCustomer }}</h3>`
