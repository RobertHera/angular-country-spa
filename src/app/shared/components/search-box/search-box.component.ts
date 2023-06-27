import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'shared-search-box',
  template: `
    <input type="text" name="" id="" [placeholder]="placeholder" class="form-control" (keyup.enter)="emitValue()" #txtSearchInput>
  `,
  styles: [
  ]
})
export class SearchBoxComponent {
  @Input() public placeholder: string = 'Buscar';
  @Output() public onValue = new EventEmitter<string>()

  @ViewChild('txtSearchInput') public termInput!: ElementRef<HTMLInputElement>;

  emitValue():void {
    const newTerm = this.termInput.nativeElement.value;
    this.onValue.emit(newTerm);

  }
}
