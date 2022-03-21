export class Bill {
    constructor(
        public type: number, //0 gasto, 1 ingreso
        public name: string,
        public amount: number
    ) {}
}