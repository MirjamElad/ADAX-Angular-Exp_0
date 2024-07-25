import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { ResultPanel } from './components/ResultPanel';
import { FansGroup } from './components/FansGroup';
import 'zone.js';

@Component({
  selector: 'app-root',
  imports: [ResultPanel, FansGroup],
  standalone: true,
  template: `
    <result-panel></result-panel>
    <fans-group [name]="angularID"></fans-group>
    <fans-group [name]="vueID"></fans-group><br />
    <span class="p-8">Duplicated FANS area:</span>
    <div class="px-8">
      <label (click)="setDuplicateID('Red')" class="mr-4">
        <input type="radio" checked name="options" value="Red" />
        Red
      </label>
      <label  (click)="setDuplicateID('Blue')"> 
        <input type="radio" name="options" value="Blue" />
        Blue
      </label>
    </div>
    <ng-container ngIf="duplicateID">
      <fans-group [name]="duplicateID"></fans-group>
    </ng-container>
    <div class="flex justify-center">
</div>
  `,
})
export class App {
  vueID: string = 'Red';
  angularID: string = 'Blue';
  duplicateID: string = 'Red';
  setDuplicateID(id: string) {
    this.duplicateID = id;
  }
}

bootstrapApplication(App);
