import { Component } from '@angular/core';
import { Iperson, clgName } from './shared/models/persons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'AngularTable';

  persons : Array<Iperson> = [
    {
      fname : 'Akshay',
      lname : 'Ibitwar',
      email : 'ak@gmail.com',
      profile : 'Angular Developer'
    },

    {
      fname : 'Rajesh',
      lname : 'Sutare',
      email : 'rs@gmail.com',
      profile : 'Angular Developer' 
    },

    {
      fname : 'Gajkant',
      lname : 'Kamble',
      email : 'gk@gmail.com',
      profile : 'Angular Developer' 
    },

    {
      fname : 'Monika',
      lname : 'Pandhare',
      email : 'pm@gmail.com',
      profile : 'Angular Developer' 
    },

    
  ];
  
  clgName : Array<clgName> = [
    {
      Name : 'SGGS Institute',
      location : 'Nanded',
      Estabilish : 1995,
      Autonomus : 'yes',
      Contact : 465858,
    },

    {
      Name : 'MGM Collage of Engg.',
      location : 'Nanded',
      Estabilish : 1992,
      Autonomus : 'No',
      Contact : 456585
    },

    {
      Name : 'Gramin Collage of Engg.',
      location : 'Nanded',
      Estabilish : 1995,
      Autonomus : 'No',
      Contact : 456521
    },

    {
      Name : 'Matoshri Collage of Engg.',
      location : 'Nanded',
      Estabilish : 2010,
      Autonomus : 'No',
      Contact : 456123
    },

  ]
}
