"use strict";
// class Avenger {
//   public nombre:string;
//   protected equipo:string;
//   private nombreReal:string;
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var Avenger = /** @class */ (function () {
    function Avenger(nombre, nombreReal) {
        this.nombre = nombre;
        this.nombreReal = nombreReal;
    }
    Avenger.prototype.getNombre = function () {
        return this.nombre;
    };
    return Avenger;
}());
var Xmen = /** @class */ (function (_super) {
    __extends(Xmen, _super);
    function Xmen(nombre, nombreReal) {
        return _super.call(this, nombre, nombreReal) || this;
    }
    Xmen.prototype.getNombre = function () {
        return _super.prototype.getNombre.call(this);
    };
    return Xmen;
}(Avenger));
var ciclope = new Xmen('ciclope', 'scott');
console.log(ciclope.getNombre());
