import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CustomPipePipe} from "../../pipes/custom-pipe.pipe";

@NgModule({
  declarations: [
    CustomPipePipe
  ],
  imports: [
    CommonModule
  ],
  exports:[
    CustomPipePipe
  ]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
    };
  }
}
