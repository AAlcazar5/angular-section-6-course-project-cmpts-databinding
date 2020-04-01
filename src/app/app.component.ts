import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // create a feature which stores which feature should be displayed
  loadedFeature = 'recipes';
  // connects the child in the header.component.ts file
  onNavigate(feature: string){
    this.loadedFeature = feature;
  }
}
