import { Component, OnInit } from '@angular/core';
import { REACTIVE_FORM_DIRECTIVES } from '@angular/forms';

import { NameListService } from '../shared/index';

import { uiButtonComponent } from '../uiComponents/button/index';
import { uiDropDownComponent } from '../uiComponents/dropdown/index';

/**
 * This class represents the lazy loaded HomeComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css'],
  directives: [
    REACTIVE_FORM_DIRECTIVES,
    uiButtonComponent,
    uiDropDownComponent
  ]
})
export class HomeComponent implements OnInit {
  /**
   * Creates an instance of the HomeComponent with the injected
   * NameListService.
   *
   * @param {NameListService} nameListService - The injected NameListService.
   */
  constructor(public nameListService: NameListService) {

  }

  /**
   * init
   */
  ngOnInit() {
  }

  onButtonClick() {
    alert('test');
  }

}
