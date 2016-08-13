import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { JamongModule } from './jamong.module';
import { InjectorUtil } from './vdk';

// Compile and launch the module
platformBrowserDynamic()
  .bootstrapModule(JamongModule)
  .then((appRef) => {
    console.log('JamongModule Injector is', appRef.injector);
    InjectorUtil.getInstance().setInjector(appRef.injector);
  });
