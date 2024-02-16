import { Component,input } from '@angular/core';
import { Character } from '../interfaces/character.interface';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-pages.component.html',
})

export class MainPageComponent   {

  public  characters: Character[] = [
    {
      name: 'Krillin',
      power: 1000
    },
    {
      name: 'Goku',
      power: 9500
    },
    {
      name: 'Vegeta',
      power: 7500
    },
    {
      name: 'Trunks',
      power: 6000
    },
    {
      name: 'Piccolo',
      power: 5000
    },
    {
      name: 'Gohan',
      power: 4000
    },
    {
      name: 'Goten',
      power: 3000
    },
    {
      name: 'Yamcha',
      power: 2000
    },
    {
      name: 'Tenshinhan',
      power: 1000
    },
    {
      name: 'Chaoz',
      power: 500
    }
  ];

}
