import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from '../component/app.module';
const platform = platformBrowserDynamic();
platform.bootstrapModule(AppModule);
