import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent implements OnInit {

  heroes : string[] = ["El PATRON","JEFE DE JEFES","PUTARRACAN","MESSI"];
  heroeBorrado : string ="";

  constructor(){
    console.log("Constructor");
  }

  ngOnInit(): void {
    console.log("NgOnInit");
  }

  borrarHeroe(): void{

    this.heroeBorrado = this.heroes.pop() || '';
  }

  borrarHeroeporId(id : number): string[]{

    return this.heroes.splice(id,1);
  }

}
