import { AppComponent } from './app.component'
import { AuthGuard } from './core/guards/auth.guard'
import { AuthInterceptor } from './core/interceptors/auth.interceptor'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { BrowserModule } from '@angular/platform-browser'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http'
import { LoginGuard } from './core/guards/login.guard'
import { NgModule } from '@angular/core'
import { reducers } from './redux'
import { RouterModule, Routes } from '@angular/router'
import { StoreDevtoolsModule } from '@ngrx/store-devtools'
import { StoreModule } from '@ngrx/store'

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'login',
    },
    {
        path: 'login',
        loadChildren: () => import('./pages/login/login.module').then((m) => m.LoginModule),
        canActivate: [LoginGuard],
    },
    {
        path: 'home',
        loadChildren: () => import('./pages/home/home.module').then((m) => m.HomeModule),
        // canActivate: [AuthGuard],
    },
    {
        path: 'register',
        loadChildren: () => import('./pages/register/register.module').then((m) => m.RegisterModule),
    },
]

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        ReactiveFormsModule,
        FormsModule,
        RouterModule.forRoot(routes),
        StoreModule.forRoot(reducers),
        StoreDevtoolsModule.instrument(),
    ],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: AuthInterceptor,
            multi: true,
        },
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}
