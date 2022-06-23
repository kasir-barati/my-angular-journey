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
  - Directives:
    - Components:
      - `<app-header></app-header>`
    - Structural Directives
      - Responsible for HTML layout
      - Manipulate DOM based on some conditions
      - `[ngIf]`, `[NgFor]`, `[NgSwitch]`
    - Attribute directives
      - `[NgClass]`
    - Pipes or Template expression operators
      - `{{ name | uppercase }}`
  - Bindings:
    - Property binding:
      - `[dataName]`
    - Event binding:
      - `(eventName)`
    - Two way binding:
      - `[(ngModel)]`
      - Activated in `FormsModule`
  - Interpolation:
    - String interpolation: `<h3>Current customer: {{ currentCustomer }}</h3>`
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
