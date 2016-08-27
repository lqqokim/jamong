import { Injectable } from '@angular/core';

@Injectable()
export class FormsService {
  getComponents() {
    return [
      'dropdown',
      'accordion',
      'tooltip'
    ];
  }
}