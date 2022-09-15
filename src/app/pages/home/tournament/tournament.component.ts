import { Component, OnInit, Input } from '@angular/core'

@Component({
    selector: 'app-tournament',
    templateUrl: './tournament.component.html',
    styleUrls: ['./tournament.component.scss'],
})
export class TournamentComponent implements OnInit {
    @Input() title!: string
    @Input() dateStart!: string
    @Input() dateEnd!: string

    constructor() {}

    ngOnInit(): void {}
}
