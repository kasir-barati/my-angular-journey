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
- If you do not use a module and do not list it in the `imports` list your overall bundled app size would be smaller.

# What I use in Angular:

- HTML
- Bootstrap over Tailwind. [Read more and understand why in here](https://dev.to/wasabigeek/which-css-framework-bootstrap-or-tailwind-2k0g)
- Typescript not JavaScript inside a `.ts` file extension
- Angular Material UI
- <small>Add your dashboard here, Possible choice: [Prime](https://www.primefaces.org/primeng/)</small>

# Angular nuts and bolts in a blink of an eye

- [Template Syntax](#angular-template-syntax)
- [Routing](#routing)
- [Http Client Module](#http-client-module)
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
- `constructor(private className: ClassName) {}` and Angular DI create an instance for you.
- We can do inject in two way:
  - By leveraging Typescript type annotation which we call it constructor injection
    - This is possible in class types
    - e.x. `constructor(private mediaService: MediaService) {}`
  - By using `@Inject` decorator
    - Useful for value types
    - e.x. `constructor(@Inject('lookupListToken') public lookupList: LookupList) {}`
      - But here we have a bad ugly code. Yes I am talking about that `'lookupListToken'`. We can illuminate it via using `InjectionToken`
- Injectable classes can be accessible through DI from the component it is listed in a `providers` list.
  - If you register it in the bootstrap level - In which we/cli does for us by `providedIn: 'root'` - it can be injected in all components
  - If it is registered in a component it can be injected in that component and its children component.

# Service

- Contains business logic
- Why Services?
  - No business logic in component
    - Separate view from business logics
  - It is a good data access layer. Getting and setting data from your data store.
  - Easier unit-test due to simplicity to mock a service.
- A simple class annotated with `@Injectable` decorator
- To inject service in another class you need to add it in `providers` list.
  - but Angular CLI - `ng generate service service-name` - does something a little more general, It will add that class inside the globally available services. In this way we do not need to list them in `providers`
- Create a new service via CLI by this command: `ng generate service media/services/media`

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
- Angular needs to the `<base href="/" />` tag, because:
  - Angular router module uses browser history **push state** for navigation and url interaction
    - This allow us to have different routes without revising your backend endpoints
      [- GitHub repo[https://github.com/kasir-barati/task-tracker-traversy-media/blob/dev]
  - To support **push state** you need this html tag inside your `head` tag.
- `RouterModule`
  - Routing configuration:
    - `Routes`
    - `Route`
  - [Routing events](https://angular.io/api/router/Event)
  - `routerLink`
    - Directive that do its brokery job
    - We pass the url we wanna go to
    - We can do the routing in component too.
      - Inject `Router` service
      - e.x. to navigate user after creating a new media to its related pages we can do
        - `this.router.navigate(['/path', media.medium]);`
  - `<router-outlet></router-outlet>`
    - Structural directive
    - that specifies where the component should be shown after route changed.
- Learn more in [this repo](https://github.com/kasir-barati/my-tour-of-heroes-angular) or [this one]()
- As our app gets bigger it is really easy to get lost in routing and other stuff. So instead we can group related things in a module and now we can do their routing inside their own module. Exactly like what we have in NestJS.

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

# Http Client Module

- Add `HttpClientModule` in `AppModule`'s `imports` list
- RxJS based
- built-in tool to make http calls from client side
- `HttpClient` is a class who creates http request
  - A service - Use it with DI
  - We do not wanna to have http responses in the components, I mean it is the service layer duty to normalize data using RxJS operators.
- Create a mock backend:
  - Add `angular-in-memory`-web-api` package
    - `pnpm add -D angular-in-memory-web-api`
      - A tut on how to use [angular-in-memory-web-api](https://blog.logrocket.com/angular-in-memory-web-api-tutorial-mocking-crud-apis-in-angular/)
    - Then `ng generate service mock-server/in-memory-data`
    - Copy the content of `this file `src/app/mock-server/in-memory-data.service.ts`
  - Endpoint are `api/resource-name`
    - For example `api/medias`
- Use `environment.ts` for base url:
  - [Read more here](https://github.com/kasir-barati/task-tracker-traversy-media/blob/dev/src/environments/README.md).
- `HttpClient` service detects data types and set the `content-type` header automatically.
- It is almost all the time possible to face bug. So we take advantages RxJS operators.
  - `catchError`
    - TODO: Write more about it
    - An operator
    - It will catch errors that thrown by the observable.
    - We wanna manage errors in one function.
      - Please note that I also read The Pragmatic Programmer and knows that they believe with certitude in **Crash Early** and I too. But here we are talking about showing user friendly messages, not technical messages - Event due this should not be the case, AFAIK we in the backend should avoid to disclose any technical message. At last we have the right to show you 500 with Server Error message - that looks gibberish.
    - I am not 100% sure but I guess if we use promises inside the observables things goes to blow up.
      - I mean I think we should convert promises into observables to take advantages of this operator to handle errors
    - We also need to rearise error again. Because in the component we wanna define subscriber for the errors.
      - Here is where we wanna use `throwError` creation function
      - TODO: Write more about it

# Lazy loading

- We can load more module/component as user asks for more
- Faster load
- Leveraged by `import` function
