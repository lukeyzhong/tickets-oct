import { Directive, ElementRef, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appColordir]'
})
export class ColordirDirective {
  @Input() colorpass='';
  @Input() defaultColor='';


  @HostListener('mouseenter')
  onMouseEnter(): void {
    this.highlight(this.colorpass || this.defaultColor || 'red' );
  }

  @HostListener('mouseleave')
  onMouseLeave(): void {
    this.highlight('');
  }

  @HostBinding('disabled') disable: boolean = true;

  constructor(private ele: ElementRef) { }


  highlight(color: string) {
    this.ele.nativeElement.style.backgroundColor = color;
  }

}
