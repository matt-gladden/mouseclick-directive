import { Directive, Output, EventEmitter, HostListener } from '@angular/core';

@Directive({ selector: '[appMouseClick]' })
export class MouseClickDirective  {
  @Output() mouseclick = new EventEmitter();

  constructor() {}

  @HostListener('mouseup', ['$event'])
  mouseclickEvent($event: MouseEvent): void {
    switch ($event.button) {
      // LMB (Left)
      case 0:
        this.mouseclick.emit($event);
        break;
      // MMB (Middle)
      case 1:
        this.mouseclick.emit($event);
        break;
      default:
        break;

    }
  }
}
