import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
    templateUrl: 'login.component.html'
})

export class LoginComponent implements OnInit {
    public username: string = '';
    public password: string = '';
    public showError: boolean = false;

    constructor(
        private _router: Router,
        private _httpClient: HttpClient
    ) { }

    ngOnInit() { }

    public login() {
        this._httpClient.post('http://localhost:3000/users/login', {
            username: this.username,
            password: this.password
        }).subscribe({
            next: data => {
                console.log(data);
                this._router.navigate(['./webapp']);
            },
            error: error => {
                console.log(error);
                this.showError = true;
            }
        });
    }
}