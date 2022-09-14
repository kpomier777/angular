import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Route, Router} from "@angular/router";

@Component({
  selector: 'app-view1',
  templateUrl: './view1.component.html',
  styleUrls: ['./view1.component.scss']
})
export class View1Component implements OnInit {

  constructor(
              private activedRouter : ActivatedRoute) { }

  ngOnInit(): void {

    //Escuchar cambios cuando hacemos click en un boton
    this.activedRouter.params.subscribe( params => {
      console.log('params : ',params)
    })

    //No es Dinamico
    console.log('Snapshot : ',this.activedRouter.snapshot.params)

  }

}
