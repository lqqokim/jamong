import { NgModule, ModuleWithProviders } from '@angular/core';
import { VDKModule } from '../vdk/vdk.module';

@NgModule({
  imports: [
    VDKModule
  ],
  declarations: [

  ],
  exports: [

  ]
})
export class CommonModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CommonModule,
      providers: []
    }
  }
}