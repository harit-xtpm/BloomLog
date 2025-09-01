import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-nav-button',
  imports: [CommonModule],
  templateUrl: './nav-button.component.html',
  styleUrls: ['./nav-button.component.scss']
})
export class NavButtonComponent {

  @Input() text: string = '';
  @Input() active: boolean = false;

  @Output() onClickEvent = new EventEmitter<Event>();

  onClick(event: Event) {
    event.preventDefault();
    this.onClickEvent.emit(event);
  }
}
