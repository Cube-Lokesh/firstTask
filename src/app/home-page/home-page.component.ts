import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  constructor(private r:Router){

  }
  
  navigate()
  {
    this.r.navigate(["./general-signin"])
  }
  navigateUp()
  {
    this.r.navigate(['./register'])
  }

  ngOnInit() {
  }

}
