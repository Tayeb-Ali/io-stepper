import { NgModule } from '@angular/core';
import { IonicStepperComponent } from './ionic-stepper';
import { IonicStepComponent } from './ionic-step';
import { IonicStepHeaderComponent } from './ionic-step-header';
import { IonicStepperNext, IonicStepperPrevious } from './ionic-stepper-button';
import { IonicModule } from '@ionic/angular';

const COMPONENTS = [
  IonicStepperComponent,
  IonicStepComponent,
  IonicStepHeaderComponent,
  IonicStepperNext,
  IonicStepperPrevious
];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [IonicModule],
  exports: [...COMPONENTS]
})
export class IonicStepperModule {
}
export default IonicStepperModule;
