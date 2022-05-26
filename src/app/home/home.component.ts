import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public name :string  = "Vijay";
  public empid :number = 2345;
  public imagepath:string ="assets/angularlogo.png";

  public GetDetails():string{
    return this.empid+" , "+this.name;
  }

  public ChangeName():void
  {
    this.name="Bill";
  }

  clickCount = 0;

  public clickMe():void{
    this.clickCount++
  }

  public Change(event:any):void{
    //console.log(event)
    if(event.target.id=="btn1")
    {
      console.log("Change Name Button is clicked.....");
    }

    if(event.target.id=="btn2")
    {
      console.log("Change Id Button is clicked......");
    }
  }

  public ProcessEmpInfo(city:any):void{
    console.log("City is "+city);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
