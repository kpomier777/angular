import { Component, OnInit } from '@angular/core'
import { CarService } from '../services/car.service'
import { AuthService } from '../services/auth.service'
import { Store } from '@ngrx/store'
import { closeSidePanel, openSidePanel } from '../../redux/home.actions'

@Component({
    selector: 'app-auth',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
    openPanel: boolean = false

    showFiller = false

    allData: any = []

    allTournaments: any = []
    constructor(private carService: CarService, private authService: AuthService, private store: Store) {}

    ngOnInit() {
        this.carService.getAllCars().subscribe((res) => {
            this.allTournaments = res

            Object.entries(this.allTournaments)
                .filter((c: any) => c[1])
                //@ts-ignore
                .forEach((c) => this.allData.push({ id: c[0], ...c[1] }))
        })

        this.store
            .select((s: any) => s.home)
            .subscribe((s) => {
                console.log('STORE: ', s)
                this.openPanel = s.sidePanel
                console.log('TOURNAMENTS: ', s, this.openPanel)
            })
    }

    /**
     * Logout to go to Log in view
     * @public
     */
    public onLogout(): void {
        this.authService.logout()
    }

    onOpenSidePanel() {
        this.store.dispatch(openSidePanel())
    }

    onCloseSidePanel() {
        this.store.dispatch(closeSidePanel())
    }
}
