import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'header',
    templateUrl: 'header.component.html'
})

export class HeaderComponent implements OnInit {
    constructor(private _router: Router) { }

    ngOnInit() { }

    public closeSession() {
        this._router.navigate(['./login']);
    }
}