import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  public books=[
    {bookid:1,bookname:"Pro Angular",publisher:"Apress",author:"James",price:900.00},
    {bookid:2,bookname:"Azure Administrator",publisher:"Wrox",author:"Scott",price:1900.00},
    {bookid:3,bookname:"Mastering AWS",publisher:"Apress",author:"Malcolm",price:2900.00}
  ]
  constructor() { }

  ngOnInit(): void {
  }

  public id :number =-1;

  public GetBookInfo(id:any):void
  {
    console.log("Selected Book id is :"+id);
    this.id=id
  }

}
