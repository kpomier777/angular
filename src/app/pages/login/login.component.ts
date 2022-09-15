import { AuthService } from '../services/auth.service'
import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { Router } from '@angular/router'

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
    login: any = FormGroup

    constructor(private authService: AuthService, private router: Router, private fbLogin: FormBuilder) {}
    ngOnInit(): void {
        this.login = this.fbLogin.group({
            email: ['', [Validators.required, Validators.email]],
            pwd: ['', Validators.required],
        })
    }

    onLogin(data: any) {
        console.log(data)
        this.authService
            .login({
                email: data.email,
                password: data.pwd,
                returnSecureToken: true,
            })
            .subscribe((res) => {
                console.log('RESPONSE: ', res)
                this.router.navigate(['home'])
            })
    }

    onCreate() {
        this.authService
            .createUser({
                email: 'test2@test.com',
                password: '123456',
                returnSecureToken: true,
            })
            .subscribe((res) => {
                console.log('CREATE USER: ', res)
            })
    }

    toRegisterView() {
        this.router.navigate(['register'])
    }
}
