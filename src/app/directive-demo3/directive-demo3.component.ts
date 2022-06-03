import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive-demo3',
  templateUrl: './directive-demo3.component.html',
  styleUrls: ['./directive-demo3.component.css']
})
export class DirectiveDemo3Component implements OnInit {

  public people:any[]=[
    {"name":"Malcolm D","country":"UK"},
    {"name":"Vijay V","country":"USA"},
    {"name":"James C","country":"UK"},
    {"name":"Bill G","country":"USA"},
    {"name":"Sundar P","country":"INDIA"}
  ]


  public getColor(country)
  {
    switch(country)
    {
      case "UK":
        console.log("UK")
        return "green";

      case "USA":
        return "blue";
      case "INDIA":
        return "red"
      default:
        return "yellow"
    }
  }
  constructor() { }

  ngOnInit(): void {
  }

}
