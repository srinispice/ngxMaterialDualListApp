# ngx-duallistbox-material

Simple dual list box component to use with your Angular 15 app, along with Angular Material.

## [Demo]()

## Dependencies

You will need:

- Angular 15 (Works with oder version as well)
- Angular Material 15

## Installation

To install this library, run:

```bash
$ npm i ngx-duallistbox-material
```

and then from your Angular `AppModule`:

```typescript
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxDuallistboxMaterialModule } from 'ngx-duallistbox-material';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule

     // Add the module in the impots
    NgxDuallistboxMaterialModule

  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

```

Once the library is imported, you can use the components, directives and pipes in your Angular application:

```html
<ngx-material-duallistbox
  [items]="items"
  [descProperty]="'description'"
  [idProperty]="'id'"
>
</ngx-material-duallistbox>
```

and then from your Angular `AppComponent`

```typescript
import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title = "NgxDuallistboxMaterialLibApp";

  configData: any;

  inputData = [
    {
      label: "Carole Cline",
      selected: true,
      value: { company: "Zoxy", dob: "1994-05-07", roles: "admin" },
    },
    {
      label: "Manning Ferrell",
      selected: true,
      value: { company: "Kengen", dob: "1988-05-12", roles: "member" },
    },
    {
      label: "Carver Mcmillan",
      selected: false,
      value: { company: "Nutralab", dob: "1990-08-31", roles: "owner" },
    },
  ];

  getSelVal(data: any) {
    console.log("data", data);
  }
}
```
