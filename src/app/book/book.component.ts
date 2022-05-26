import { Component, Input, OnInit,EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  @Input()
  public bookinfo:any;

  @Output()
  public bookselection:EventEmitter<number>
      =new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  public GenerateNotification():void{
    this.bookselection.emit(this.bookinfo.bookid);
  }

}
