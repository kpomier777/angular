import { Component, OnInit } from '@angular/core'
import { AuthService } from '../services/auth.service'
import { Router } from '@angular/router'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
    register: any = FormGroup

    constructor(private authService: AuthService, private router: Router, private fbRegister: FormBuilder) {}

    ngOnInit(): void {
        this.register = this.fbRegister.group({
            emailRegister: ['', [Validators.required, Validators.email]],
            pwdRegister: ['', Validators.required],
        })
    }

    onCreate(data: any) {
        this.router.navigate(['home'])
    }
}
