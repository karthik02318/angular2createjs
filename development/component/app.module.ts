import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { MyComponent }   from './mycomponent/my-component.component';
import { MyComponent2 }   from './mycomponent2/my-component2.component';
import { BetBarButton }   from './betbarbutton/betbar.button';
import { LabelComponent }   from './labelcomponent/label.component';
@NgModule({
    imports:      [ BrowserModule],
    declarations: [ AppComponent,MyComponent,MyComponent2,BetBarButton,LabelComponent ],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }
