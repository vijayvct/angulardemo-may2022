import { Directive,ViewContainerRef,TemplateRef, Input } from '@angular/core';

@Directive({
  selector: '[appRepeat]'
})
export class RepeatDirective {

  private repeatcount:number =0;

  constructor(private viewcontainer:ViewContainerRef,
              private templateref:TemplateRef<any>)
  {}

  @Input()
  public set appRepeat(value:number)
  {
    this.repeatcount=value;

    //remove the previous views
    this.viewcontainer.clear();

    //logic to clone the elements
    for(let i=0;i<this.repeatcount;i++)
    {
      this.viewcontainer.createEmbeddedView(this.templateref);
    }
  }

  public get appRepeat():number
  {
    return this.repeatcount;
  }
}
