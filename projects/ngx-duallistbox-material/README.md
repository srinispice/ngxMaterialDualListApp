# ngx-duallistbox-material

Simple dual list box component to use with your Angular 15 app, along with Angular Material.

## [Demo](https://srinivasanofficial.github.io/NgxDuallistboxMaterial/)

## Dependencies

You will need:

- Angular 15 (Works with older version as well)
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
<ngx-duallistbox-material
  [dualListData]="inputData"
  (dualListEmitSelData)="getSelVal($event)"
></ngx-duallistbox-material>
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

## Input Attributes - dualListData - Json

- **label** - String that must be shown to the user in the list
- **value** - Can be anything which will be emitted when user selects the list data
- **selected** - If the value is true, then the respective data will be shown in the right side and flase will be shown in the left side. By default the vlaue is false

## Output Emit Funcntion - dualListEmitSelData - function

- Emits the json which are selected true from the input Json.

## Author

- [@SrinivasanOfficial](https://github.com/orgs/SrinivasanOfficial)

## Contributing

I am very appreciate for your ideas, proposals and found bugs which you can leave in github issues. Thanks in advance!

## License

MIT © [Blandi Alcani](mailto:blandius@gmail.com)
