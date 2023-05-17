const MyDecorator = () => {
    return ( target: Function ) => {
        console.log(target);
    }
}

@MyDecorator()
export class Person {

    constructor(
        private readonly id: number,
        private name: string,
        private age: number
    ) {}

    presentation(): void {
        console.log(`Hello. I'm ${this.name}. Nice to meet.`);
    }

    shout(): void {
        console.log(this.name.toUpperCase() + '!!!');
    }

}