import { Component } from '@angular/core';

@Component({
  selector: 'shared-loading-spinner',
  templateUrl: './loading-spinner.component.html',
  styles: [`
    .spinner-container {
      position:fixed;
      bottom: 15px;
      align-items: center;
      background-color: black;
      border-radius: 20px;
      color: white;
      display: flex;
      padding: 5px 10px;
      right: 15px;
      box-shadow: 0px 3px 5px rgba(0,0,0,0.2);
      span {
        margin-left: 5px;
      }
    }
  `]
})
export class LoadingSpinnerComponent {

}
