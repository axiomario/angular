import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Bill } from '../list/bill';

@Component({
    selector: 'item',
    templateUrl: 'item.component.html'
})

export class ItemComponent implements OnInit {
    public name: string = "";
    public type: string = "";
    public amount: string = "";
    @Output() newItem: EventEmitter<Bill> = new EventEmitter;
    @Output() editItem: EventEmitter<Bill> = new EventEmitter;
    @Output() cancel: EventEmitter<null> = new EventEmitter;
    @Input() itemToEdit: Bill | undefined;

    constructor() { }

    ngOnInit() {
        if (this.itemToEdit) {
            this.name = this.itemToEdit.name;
            this.type = `${ this.itemToEdit.type }`;
            this.amount = `${ this.itemToEdit.amount }`;
        }
    }

    public handleOk() {
        if (this.itemToEdit) this.edit();
        else this.add();
    }

    public add() {
        this.newItem.emit(new Bill(
            Number(this.type),
            this.name,
            Number(this.amount)
        ));
    }

    public edit() {
        this.editItem.emit(new Bill(
            Number(this.type),
            this.name,
            Number(this.amount)
        ));
    }
}