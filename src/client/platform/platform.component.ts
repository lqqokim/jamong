import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'jm-app',
  template: `
        <router-outlet></router-outlet>
    `
})
export class PlatformComponent implements OnInit {
  constructor() { }

  ngOnInit() { 
  }
}