import { NgModule } from '@angular/core';
import { AtlierModule } from '../app/atlier/atlier.module';
import { GalleryModule } from '../app/gallery/gallery.module';
import { LogisticsModule } from '../app/logistics/logistics.module';

@NgModule({
  exports: [
    AtlierModule,
    GalleryModule,
    LogisticsModule
  ]
})
export class AppModule {

}