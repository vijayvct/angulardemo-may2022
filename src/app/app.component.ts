import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Book Manager Angular Application';

  public repeatcount:number=0;

  public today :Date=new Date();

  public val:number=0;
}
