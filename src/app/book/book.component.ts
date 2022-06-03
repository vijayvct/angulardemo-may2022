import { Component, Input, OnInit,EventEmitter, Output, ElementRef, ViewChild } from '@angular/core';


@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  @Input()
  public bookinfo:any;

  @Input()
  public bookindex:number =-1;

  @Input()
  public even:boolean=false;

  @Input()
  public odd:boolean=false;

  @Output()
  public bookselection:EventEmitter<number>
      =new EventEmitter<number>();

  // @ViewChild('btnselect')
  // private button:ElementRef

  // public ngAfterViewInit(){
  //   console.log(this.button.nativeElement)
  //   this.button.nativeElement.focus()
  // }

  constructor() { }

  ngOnInit(): void {
  }

  public GenerateNotification():void{
    this.bookselection.emit(this.bookinfo.bookid);
  }

}
