import { Component } from '@angular/core';

@Component({
  selector: 'app-user-name',
  templateUrl: './user-name.component.html',
  styleUrl: './user-name.component.css'
})
export class UserNameComponent {
  userName = '';

  onResetUserName() {
    console.log(this.userName);
    this.userName = '';
  }
}
