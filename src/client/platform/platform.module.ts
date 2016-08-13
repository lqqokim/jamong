import { NgModule, ModuleWithProviders } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { VDKModule } from '../vdk/vdk.module';
import { CommonModule } from '../common/common.module';
import { AppModule } from '../app/app.module';
import { PlatformComponent } from './platform.component';

@NgModule({
  imports: [
    VDKModule,
    CommonModule,
    AppModule
  ],
  declarations: [],
  exports: [
    BrowserModule,
    VDKModule,
    CommonModule,
    AppModule
  ]
})
export class PlatformModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: PlatformModule,
      providers: []
    };
  }
}