<p align="center">
   <img width="800" src="https://raw.githubusercontent.com/tayeb-ali/io-stepper/master/screenshot.png">
</p>

# ionic-stepper

Steppers components for Ionic 5^.

## Getting Started
 - is just re-build ionic Stepper , upgrade all pk , re-code from Angulare2 to 10.
 - Help me to upgrade it :) .
### Prerequisites

- `ionic-angular: ^5.x`

### Installing
```sh
npm i io-stepper --save 
```

### Usage

import in `your-root.module.ts`

```ts
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

...

import { IonicStepperModule } from 'ionic-stepper';

@NgModule({
  ...
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    IonicStepperModule,
    IonicModule.forRoot(MyApp)
  ],
  ...
})
export class AppModule {}
```

`your-component.ts`

```ts
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  template: `
   <ion-stepper #stepper (selectIndexChange)="selectChange($event)">
      <ion-step label="Step1"
                description="Step1 description">
        <h2>Step1 Content</h2>
        <p>Step1 Content</p>
        <button ion-button small ionicStepperNext>Next</button>
      </ion-step>
      <ion-step label="Step2 - Step2 - Step2"
                description="Step1 description">
        <h2>Step2 Content</h2>
        <p>Step2 Content</p>
        <button ion-button color="light" small ionicStepperPrevious>Previous</button>
      </ion-step>
    </ion-stepper>
  `
})
export class HomePage {

  constructor(public navCtrl: NavController) { }

  selectChange(e) {
    console.log(e);
  }
}

```

## API

### `ion-stepper`

#### property

| Name                | Type                       | Default      | Description        |
|---------------------|----------------------------|--------------|--------------------|
| [mode]              | `'horizontal', 'vertical'` | `'vertical'` | orientation        |
| (selectIndexChange) | `EventEmitter<number>`     |              | index change event |

#### method

| Name                            | Description       |
|---------------------------------|-------------------|
| nextStep(): void                | next step         |
| previousStep(): void            | previous step     |
| setStep(index: number): boolean | set step by index |


### `ion-step`

#### property

| Name          | Type          | Default    | Description                                                                               |
|---------------|---------------|------------|-------------------------------------------------------------------------------------------|
| [label]       | `string`      |            | step label                                                                                |
| [description] | `string`      |            | step description (only vertical mode is visible)                                          |
| [icon]        | `icon`        | `'number'` | step icon, default display the index ([icons](https://ionicframework.com/docs/ionicons/)) |
| [status]      | `'error', ''` | `''`       | step status                                                                               |
| [errorIcon]   | `string`      | `'close'`  | error status icon                                                                         |

### `[ionicStepperNext]`

moves to the next step in the stepper

`<button ion-button ionicStepperNext>Next</button>`

### `[ionicStepperPrevious]`

moves to the previous step in the stepper

`<button ion-button ionicStepperPrevious>Previous</button>`

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details

# ms:
- يلااااااا!