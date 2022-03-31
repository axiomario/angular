import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    templateUrl: 'webapp.component.html'
})

export class WebAppComponent implements OnInit {
    public name: string = "";
    public amount: string = "";
    public list: Item[] = [];

    constructor(
        private _router: Router,
        private _httpClient: HttpClient
    ) {
        this._httpClient.get('http://localhost:3000/payment/list').subscribe(data => {
            this.list = (data as []).map((item: any) => new Item(
                item['id'], item['name'], item['amount']
            ));
        });
    }

    ngOnInit() { }

    public closeSession() {
        this._router.navigate(['./login']);
    }

    public add() {
        this._httpClient.post('http://localhost:3000/payment/add', {
            name: this.name,
            amount: this.amount
        }).subscribe((item: any) => {
            this.list.push(new Item(item['id'], item['name'], item['amount']));
            this.name = '';
            this.amount = '';
        });
    }

    public delete(item: Item) {
        this._httpClient.delete('http://localhost:3000/payment/' + item.id).subscribe(() => {
            let index: number = this.list.indexOf(item);
    
            this.list.splice(index, 1);
        });
    }
}

export class Item {
    constructor(
        public id: number,
        public name: string,
        public amount: number
    ) { }
}