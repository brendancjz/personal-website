import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent, ToggleButton } from './navigation/navigation.component';
import { FooterComponent } from './footer/footer.component';

//This is for css styling
import { FlexLayoutModule } from '@angular/flex-layout';



@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    ToggleButton,
    routingComponents,
    FooterComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule 
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
