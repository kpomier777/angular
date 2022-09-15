import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent {
  title = 'project';

  constructor() {
    // Operator Splice
    const A = ['a', 'b', 'c', 'd', 'e'];
    const auxSplice = A.splice(1, 1);
    console.log('auxSplice:', A, auxSplice);

    // Operador Reduce
    const auxReduce = [1, 2, 3, 4, 5].reduce(
      (prev, value, index) => prev + value,
      0
    );
    console.log('auxReduce: ', auxReduce);

    // JSON Operators
    const auxJSON = {
      id: 1,
      name: 'JUAN',
      lasName: 'GUTIERREZ',
    };

    // ENTRIES, KEY, VALUES

    const auxentries = Object.entries(auxJSON);
    console.log('auxentries:', auxentries);

    const auxKeys = Object.keys(auxJSON);
    console.log('auxKeys:', auxKeys);

    const auxValues = Object.values(auxJSON);
    console.log('auxValues:', auxValues);

    //CONST
    const a = 1;
    console.log('CONST:', a);

    // LET
    //for(let i = 1; i<= 5; i++){//console.log('INDEX:', i)}
    //for(let i = 1; i<= 5; i++){ // console.log('INDEX:', i}
    //for(let i = 1; i<= 5; i++){ //console.log('INDEX:', i)}

    //SPREAD OPERATOR
    const b = [1, 2, 3, 4, 5, 6];
    const c = [...b, 7, 8, 9, 10];
    console.log('SPREAD:', c);

    // REST OPERATOR
    this.getREST(1, 2, 'hola hahah xd');

    const person = {
      id: 1,
      name: 'Cristian',
      country: {
        idCountry: 1,
        cod: 'CBBA',
      },
    };

    // DESESTRUCTURACION
    //const C = person.country
    //const ID = person.id
    const { country, id } = person;
    console.log('country:', country, id);

    const data = {
      0: {
        id: 1,
        name: 'cristian',
        age: 24,
      },
      1: {
        id: 2,
        name: 'cristian 2',
        age: 10,
      },
    };

    //Convertir un array y obtener la suma de edades

    const resp = Object.values(data).reduce((prev, value) => {
      return prev + value.age;
    }, 0);

    console.log('resp', resp);

    //Convertir a un array filtrar las personas mayores a 10 , mostrar solo id

    const result = Object.values(data)
      .filter((obj) => 
        obj.age > 10
      )
      .map((p) => p.id);

    console.log('task 3 ', result);

    //

  }
  // REST OPERATOR
  getREST(...params: any[]) {
    console.log('REST:', params);
  }
}
