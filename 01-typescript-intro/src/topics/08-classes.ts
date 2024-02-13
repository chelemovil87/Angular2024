export class Person {
    public name: string;
    private address: string;

    constructor() {
        this.name = 'Jose';
        this.address = 'Cordoba';
    }

}

const iroman = new Person();

console.log('iroman', iroman);
