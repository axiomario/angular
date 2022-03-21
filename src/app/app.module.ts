import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { routes } from './app.routes';
import { LoginComponent } from './components/login/login.component';
import { HeaderComponent } from './components/webapp/header/header.component';
import { ItemComponent } from './components/webapp/item/item.component';
import { ListComponent } from './components/webapp/list/list.component';
import { WebAppComponent } from './components/webapp/webapp.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    WebAppComponent,
    HeaderComponent,
    ListComponent,
    ItemComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
