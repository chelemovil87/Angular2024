//* Los comentarios en la clase son para que se aprecie el standar en el constructor

export class Person {
    // public name: string;
    // private address: string;

    constructor(
        public firtname: string,
        public lastnme: string, 
        private address: string = 'No address'
        ) {}

    /*constructor() {
        this.name = 'Jose';
        this.address = 'Cordoba';
    }*/

}
//!En este comentario se puede ver que la clase Hero  hereda de la clase Person
/* export class Hero extends Person{

   constructor(
       public alterEgo: string,
       public age: number,
       public realName: string
   ) {
       super(realName, 'Cordoba');
     }
 }*/
export class Hero {

   // public person: Person;

    constructor(
        public alterEgo: string,
        public age: number,
        public realName: string,
        public person: Person,
    ) {}
}

const tony = new Person('Tony', 'Stark', 'Cordoba');
const iroman = new Hero('Hulk', 36 ,'Jose', tony);

console.log (iroman);
