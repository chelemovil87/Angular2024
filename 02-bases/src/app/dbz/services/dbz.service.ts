import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid';
import { Character } from '../interfaces/character.interface';

@Injectable({
  providedIn: 'root'})
export class DbzService {

    constructor() { }public  characters: Character[] = [
      {
        id: uuid(),
        name: 'Krillin',
        power: 1000
      },
      {
        id: uuid(),
        name: 'Goku',
        power: 9500
      },
      {
        id: uuid(),
        name: 'Vegeta',
        power: 7500
      },
      {
        id: uuid(),
        name: 'Trunks',
        power: 6000
      },
      {
        id: uuid(),
        name: 'Piccolo',
        power: 5000
      },
      {
        id: uuid(),
        name: 'Gohan',
        power: 4000
      },
      {
        id: uuid(),
        name: 'Goten',
        power: 3000
      },
      {
        id: uuid(),
        name: 'Yamcha',
        power: 2000
      },
      {
        id: uuid(),
        name: 'Tenshinhan',
        power: 1000
      },
      {
        id: uuid(),
        name: 'Chaoz',
        power: 500
      }];

      addCharacter( character: Character ): void {

        const newCharacter: Character = {id: uuid(),...character}

        this.characters.push( newCharacter );
      }
      // onDeleteCharacter( index: number ): void {
      //   this.characters.splice(index, 1);
      // }
      deleteCharacterById( id: string ){
        this.characters = this.characters.filter( character => character.id !== id );
      }
}
