import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';

import { CardComponent } from './components/card/card.component';
import { CardListComponent } from './components/card-list/card-list.component';
import { HomePagesComponent } from './pages/home-pages/home-page.component';
import { SearchBoxComponent } from './components/search-box/search-box-component';

@NgModule({
  declarations: [
    CardComponent,
    CardListComponent,
    HomePagesComponent,
    SearchBoxComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    HomePagesComponent,
  ]
})
export class GifsModule { }
