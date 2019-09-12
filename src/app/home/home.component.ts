import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title:string;
  image:string;
  name:string;
  names:string;
  display:boolean;
  isDisabled:boolean;
  todayDate = new Date();
  public students = ["karthik", "syeed", "vishwas", "raghav"];
  public car = ["AUDI"];
  constructor() { 
  
  }

  ngOnInit() {
    this.title = "Welcome to angular8 project";
    this.image = "../../assets/image/lam2.jpg";
    this.name = "SAAHO";
    this.isDisabled = false;
    this.names = "karthik";
    this.display = false;
  }

  toggleMe(){
    this.name ="BOCKBUSTER SAAHO";
    this.isDisabled = true;
    console.log(this.names);
  }
}
