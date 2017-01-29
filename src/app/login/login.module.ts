import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {LoginComponent} from "./login.component";
import { TranslateModule } from 'ng2-translate';
import { LocalizeRouterModule } from 'localize-router';

let routes = [
    { path: 'login', component: LoginComponent }
];

@NgModule({
    imports: [
        TranslateModule,
        LocalizeRouterModule.forChild(routes),
        RouterModule.forChild(routes)
    ],
    declarations: [LoginComponent]
})
export class LoginModule { }