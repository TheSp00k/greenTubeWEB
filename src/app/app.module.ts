import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule}    from '@angular/forms';
import {HttpModule, Http} from '@angular/http';
import {TranslateModule, TranslateLoader, TranslateStaticLoader, TranslateService} from 'ng2-translate';
import {LocalizeRouterModule, StaticParserLoader, LocalizeParser} from 'localize-router';
import {Routes, RouterModule} from '@angular/router';

import {fakeBackendProvider} from './_helpers/index';
import {MockBackend, MockConnection} from '@angular/http/testing';
import {BaseRequestOptions} from '@angular/http';

import {AppComponent}  from './app.component';
import {routing}        from './app.routing';

import {AlertComponent} from './_directives/index';
import {AuthGuard} from './_guards/index';
import {AlertService, AuthenticationService, UserService} from './_services/index';
import {HomeComponent} from './home/index';
import {LoginComponent} from './login/index';
import {RegisterComponent} from './register/index';


export function createTranslateLoader(http:Http) {
    return new TranslateStaticLoader(http, '/assets/locales', '.json');
}

export function localizeLoaderFactory(translate:TranslateService, http:Http) {
    return new StaticParserLoader(translate, http);
}

const appRoutes: Routes = [
    // { path: '', component: LoginComponent, pathMatch: 'full' }
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'register', redirectTo: 'register', pathMatch: 'full' }
];

// const appRoutes:Routes = [
//     {path: '', component: HomeComponent, canActivate: [AuthGuard]},
//     {path: 'login', component: LoginComponent},
//     {path: 'register', component: RegisterComponent},
//
//     // otherwise redirect to home
//     {path: '**', redirectTo: ''}
// ];


@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        // TranslateModule.forRoot(),
        // LocalizeRouterModule.forRoot(appRoutes),
        // RouterModule.forRoot(appRoutes),

        TranslateModule.forRoot({
            provide: TranslateLoader,
            useFactory: (createTranslateLoader),
            deps: [Http]
        }),
        RouterModule.forRoot(appRoutes),
        LocalizeRouterModule.forRoot(appRoutes, {
            provide: LocalizeParser,
            useFactory: localizeLoaderFactory,
            deps: [TranslateService, Http]
        }),
        // TranslateModule.forRoot({
        //     provide: TranslateLoader,
        //     useFactory: (createTranslateLoader),
        //     deps: [Http]
        // }),
        // RouterModule.forRoot(appRoutes),
        // LocalizeRouterModule.forRoot(appRoutes),
        // LoginModule
        // LoginModule,
        // routing
    ],
    declarations: [
        AppComponent,
        AlertComponent,
        HomeComponent,
        LoginComponent,
        RegisterComponent
    ],
    providers: [
        AuthGuard,
        AlertService,
        AuthenticationService,
        UserService,

        fakeBackendProvider,
        MockBackend,
        BaseRequestOptions
    ],
    exports: [RouterModule],
    bootstrap: [AppComponent]
})

export class AppModule {
}