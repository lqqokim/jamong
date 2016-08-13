import { NgModule, ModuleWithProviders } from '@angular/core';
import { VDKModule } from '../../vdk/vdk.module';
import { CommonModule } from '../../common/common.module';

@NgModule({
  imports: [
    VDKModule,
    CommonModule
  ]
})
export class GalleryModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: GalleryModule,
      providers: []
    }
  }
}