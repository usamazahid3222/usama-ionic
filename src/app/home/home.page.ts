import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

user = {
  name: 'Usama Zahid',
  Reg: '3222-fbas-bsse-f16c',
  city: 'Jhelum',
  interests: ['Developing ios app', 'Driving', 'Gaming' ]
};

  constructor() {}

}
