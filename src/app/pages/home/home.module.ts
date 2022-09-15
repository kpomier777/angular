import { NgModule } from '@angular/core'
import { Route, RouterModule } from '@angular/router'
import { HomeComponent } from './home.component'
import { MatSidenavModule } from '@angular/material/sidenav'
import { TournamentComponent } from './tournament/tournament.component'
import { NgForOf } from '@angular/common'

const routes: Route[] = [
    {
        path: '',
        component: HomeComponent,
    },
]

@NgModule({
    declarations: [HomeComponent, TournamentComponent],
    imports: [RouterModule.forChild(routes), MatSidenavModule, NgForOf],
})
export class HomeModule {}
