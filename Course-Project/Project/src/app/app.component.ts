import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  loadedFeature: string = 'recipe';

  onNavigate(onSelect: string) {
    this.loadedFeature = onSelect;
  }
}
