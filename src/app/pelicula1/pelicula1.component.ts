import { Component, OnInit, HostBinding, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-pelicula1',
  templateUrl: './pelicula1.component.html',
  styleUrls: ['./pelicula1.component.css']
})
export class Pelicula1Component implements OnInit {

  constructor() { }


lugar:string="0";
  precio:string = "0";
  select:string[]=["CineColombia","CineMark","RoyalFilms"];

  ngOnInit() {
    for (let index = 0; index < this.select.length; index++) {
      this.lugar=this.select[index];
      if (this.lugar=="CineColombia") {
          this.precio="9000";
        console.log("Wwwwwwwwwwwwwww");
        
      }
      if (this.lugar=="CineMark") {
         this.precio="7000";
      } if (this.lugar=="RoyalFilms") {
         this.precio="6000";
      } 
      
    }
  }



  img1="/assets/img/joker1.jpg";
  img2="/assets/img/joker3.jpg";

 


  fijarPrecio(){

    

  }



}
