import {Component} from '@angular/core';
import {Router} from "@angular/router";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    title = 'hola ';
    id: any = 'default';
    var1 : any = 0;
    var2 : any = 2;
    constructor(private router: Router) {


        //Renderiza la primera si no es null y viceversa

        console.log('nulish coalesing', this.var1??this.var2 )

        console.log(' OR operator ', this.var1||this.var2 )

        //Ternario
        console.log('Ternario ' , 1 === 1 ? 1 : null)



    }

    goView1() {
        this.router.navigate(['view1', this.id])
    }

    goView2() {
        this.router.navigate(['view2', this.id, 'listNames', this.id])

    }

    goView3() {
        this.router.navigate(['view3'], {queryParams: {name: 'maria', lastName: this.id}})
    }
}
