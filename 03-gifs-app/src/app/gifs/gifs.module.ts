import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomePagesComponent } from './pages/home-pages/home-page.component';
import { SearchBoxComponent } from './components/search-box/search-box-component';
import { CardListComponent } from './components/card-list/card-list.component';
import { CardComponent } from './components/card/card.component';



@NgModule({
  declarations: [
    HomePagesComponent,
    SearchBoxComponent,
    CardListComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    HomePagesComponent,
  ]
})
export class GifsModule { }
