import { Directive, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appRepetir]'
})
export class RepetirDirective {

  constructor(private templeRef: TemplateRef<any>, private viewContainerRef: ViewContainerRef) 
  { 

    for (let index = 0; index < 5; index++) {
      this.viewContainerRef.createEmbeddedView(this.templeRef);
    }

  }
 
}
