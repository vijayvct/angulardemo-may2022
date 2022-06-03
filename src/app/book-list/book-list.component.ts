import { BookComponent } from './../book/book.component';
import { Component,ViewChildren,ViewChild, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  public books:any=[]

  constructor() { }

  ngOnInit(): void
  {
    this.LoadDataFromServer();
  }

  public RefreshData():void
  {
    this.LoadDataFromServer();
    this.books.push(
      {bookid:100,bookname:"Abc",publisher:"PQR",author:"XYZ",price:100}
    )
  }


  public LoadDataFromServer():void
  {
    //Simulation for loading data
    this.books=[
      {bookid:1,bookname:"Pro Angular",publisher:"Apress",author:"James",price:900.00},
      {bookid:2,bookname:"Azure Administrator",publisher:"Wrox",author:"Scott",price:1900.00},
      {bookid:3,bookname:"Mastering AWS",publisher:"Apress",author:"Malcolm",price:2900.00}
    ]
  }

  public TrackBook(index: number,book:any):number
  {
    return book.bookid;
  }

  //@ViewChild(BookComponent,{read:ElementRef})
  @ViewChildren(BookComponent,{read:ElementRef})
  private bookcomponent = ElementRef

  public ngAfterViewInit(){

    // if(this.bookcomponent.nativeElement == undefined)
    // {
    //   console.log("No nativeElement Present")
    // }
    // else
    // {
    //   console.log(this.bookcomponent.nativeElement);
    // }
  }

  public id :number =-1;

  public GetBookInfo(id:any):void
  {
    console.log("Selected Book id is :"+id);
    this.id=id
  }

}
