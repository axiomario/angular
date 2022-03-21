import { Component, OnInit } from '@angular/core';
import { Bill } from './bill';

@Component({
    selector: 'list',
    templateUrl: 'list.component.html'
})

export class ListComponent implements OnInit {
    public list: Bill[] = [
        new Bill(1, 'Sueldo', 10000),
        new Bill(0, 'Comida', 150),
        new Bill(0, 'Internet', 500),
        new Bill(0, 'Cine', 200),
        new Bill(1, 'Prestamo', 1000),
        new Bill(0, 'Renta', 2000)
    ];
    public showNew: boolean = false;
    public itemToEdit: Bill | undefined = undefined;

    constructor() { }

    ngOnInit() { }

    public getTotal(): number {
        let total: number = 0;

        this.list.forEach(item => {
            total += (
                item.amount * (item.type == 0 ? -1 : 1)
            );
        });

        return total;
    }

    public addItem(item: Bill) {
        this.list.push(item);
        this.showNew = false;
    }

    public cancel() {
        this.showNew = false;
        this.itemToEdit = undefined;
    }

    public deleteItem(item: Bill) {
        let index: number = this.list.indexOf(item);

        this.list.splice(index, 1);
    }

    public requestEditItem(item: Bill) {
        this.itemToEdit = item;
        this.showNew = true;
    }

    public editItem(item: Bill) {
        if (this.itemToEdit) {
            this.itemToEdit.name = item.name;
            this.itemToEdit.type = item.type;
            this.itemToEdit.amount = item.amount;
            this.itemToEdit = undefined;
            this.showNew = false;
        }
    }
}