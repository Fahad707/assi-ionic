import { Component } from '@angular/core';



@Component({

  selector: 'app-home',

  templateUrl: 'home.page.html',

  styleUrls: ['home.page.scss']

})

export class HomePage {

  


  user = {

    name: 'Fahd',

    city: 'Islamabad',

    interests:['Pets', 'Cricket','Book Reading']

  };



  constructor() {}

}