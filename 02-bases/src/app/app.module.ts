import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { CounterModule } from './counter/counter.module';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeroComponent } from './heroes/hero/hero.component';
import { ListComponent } from './heroes/list/list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    ListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CounterModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
