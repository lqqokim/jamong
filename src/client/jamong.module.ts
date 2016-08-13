import { NgModule, enableProdMode } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';
import { RouterModule } from '@angular/router';

import { VDKModule } from './vdk/vdk.module';
import { CommonModule } from './common/common.module';
import { PlatformModule } from './platform/platform.module';
import { PlatformComponent } from './platform/platform.component';
import { PlatformRoutes } from './platform/routing/platform.routes';
import { AtlierModule } from './app/atlier/atlier.module';
import { GalleryModule } from './app/gallery/gallery.module';
import { LogisticsModule } from './app/logistics/logistics.module';

/**
 * import all rxjs libraries
 */
import 'rxjs/Rx';

if ('<%= ENV %>' === 'prod') { enableProdMode(); }

@NgModule({
  imports: [
      RouterModule.forRoot(PlatformRoutes),
      PlatformModule,
      PlatformModule.forRoot(),
      VDKModule.forRoot(),
      CommonModule.forRoot(),
      AtlierModule.forRoot(),
      GalleryModule.forRoot(),
      LogisticsModule.forRoot()
  ],
  declarations: [
    PlatformComponent
  ],
  providers: [
    {
      provide: APP_BASE_HREF,
      useValue: '<%= APP_BASE %>'
    }
  ],
  bootstrap: [PlatformComponent]
})
export class JamongModule {}