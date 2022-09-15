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

        this.router.navigate(['home'])
    }

    toRegisterView() {
        this.router.navigate(['register'])
    }
}
