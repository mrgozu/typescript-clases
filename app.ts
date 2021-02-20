

// class Avenger {
//   public nombre:string;
//   protected equipo:string;
//   private nombreReal:string;

//   private puedePelear:boolean = false;
//   private peleasGanadas:number = 0;
  
//   constructor(nombre:string, equipo:string, nombreReal:string){
//     this.nombre = nombre;
//     this.equipo = equipo;
//     this.nombreReal = nombreReal;
//   }

// }
// let antman:Avenger = new Avenger('Antman','Capitan','scott');
// antman.nombre = 'nick fury';
// console.log(antman);
class Avenger {
  
  constructor (public nombre:string,private nombreReal:string){

  }
  protected getNombre():string{
    return this.nombre;
  }
}

class Xmen extends Avenger {
  
  constructor(nombre:string, nombreReal:string){
    super(nombre,nombreReal);
  }
  public getNombre ():string{
    return super.getNombre();
  }
}

let ciclope = new Xmen('ciclope','scott');
console.log(ciclope.getNombre());
