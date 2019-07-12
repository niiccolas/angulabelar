import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.sass']
})
export class TestComponent implements OnInit {

  currentTab: string;
  comments = null;

  constructor() {
    this.currentTab = '1';
   }

  ngOnInit() {
    this.comments = ['Super', 'Bonjour', 'LOL'];
  }

  setTab(tab: string, $event = null): void {
    this.currentTab = tab;
  }
}
