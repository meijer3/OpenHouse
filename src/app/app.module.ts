import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ThreeJsComponent } from './three-js/three-js.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, ThreeJsComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
