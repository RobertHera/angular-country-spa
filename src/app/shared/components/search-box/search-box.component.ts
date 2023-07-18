import { Component, ElementRef, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { Subject, Subscription, debounceTime } from 'rxjs';

//(keyup.enter)="emitValue()" 
@Component({
  selector: 'shared-search-box',
  template: `
    <input type="text" 
      class="form-control" 
      [placeholder]="placeholder" 
      [value]="initialValue" 
      (keyup)="onKeyPress(txtSearchInput.value)" 
      #txtSearchInput>
  `,
  styles: [
  ]
})
export class SearchBoxComponent implements OnInit, OnDestroy {
  private debouncer:Subject<string> = new Subject<string>
  private debouncerSubscription?: Subscription;
  
  @Input() public placeholder: string = 'Buscar';
  @Input() public initialValue: string = '';
  @Output() public onValue = new EventEmitter<string>()
  @Output() public onDebounce = new EventEmitter<string>()
  
  @ViewChild('txtSearchInput') public termInput!: ElementRef<HTMLInputElement>;
  
  ngOnInit(): void {
    this.debouncerSubscription = this.debouncer
    .pipe(debounceTime(1500))
    .subscribe(value=>{
      this.onDebounce.emit(value)
    })
  }
  ngOnDestroy(): void {
    this.debouncerSubscription?.unsubscribe();
  }

  emitValue():void {
    const newTerm = this.termInput.nativeElement.value;
    this.onValue.emit(newTerm);
  }

  onKeyPress(searchTerm: string) {
    this.debouncer.next(searchTerm);
  }
}
