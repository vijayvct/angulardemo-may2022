import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive-demo2',
  templateUrl: './directive-demo2.component.html',
  styleUrls: ['./directive-demo2.component.css']
})
export class DirectiveDemo2Component implements OnInit {

  num: number = 0;

  //students = []

  students : any =[
    {id:1,name:"Malcolm",type:"fulltime"},
    {id:2,name:"Bill",type:"parttime"},
    {id:3,name:"James",type:"fulltime"},
    {id:4,name:"Julia",type:"parttime"}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
