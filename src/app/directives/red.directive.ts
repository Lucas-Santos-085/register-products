import { Directive, ElementRef } from "@angular/core";

@Directive({
  selector: "[appRed]",
})
export class RedDirective {
  constructor(private el: ElementRef) {
    el.nativeElement.styleUrls.color = "#e35e6b";
  }
}
