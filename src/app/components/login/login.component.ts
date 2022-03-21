import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    templateUrl: 'login.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class LoginComponent implements OnInit {
    public username: string = '';
    public password: string = '';
    public showError: boolean = false;

    constructor(private _router: Router) { }

    ngOnInit() { }

    public login() {
        if (this.username == "mario" && this.password == "123") {
            this._router.navigate(['./webapp']);
        } else this.showError = true;
    }
}