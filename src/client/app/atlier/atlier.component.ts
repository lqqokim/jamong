import { Component, OnInit } from '@angular/core';
import { FormsService } from '../../vdk';

@Component({
  moduleId: module.id,
  selector: 'atlier',
  templateUrl: 'atlier.component.html',
  styles: [`
    .navbar {
      text-align : center;
    }
  `]
})
export class AtlierComponent implements OnInit {
  components: any;
  dropdown:any;

  constructor(private formsService: FormsService) { }

  ngOnInit() {
    this.components = this.formsService.getComponents();
    jui.ready([ "ui.dropdown" ], (dropdown: any) => {
    this.dropdown = dropdown("#componentList", {
        event: {
            change: (data: any) => {
            alert(data.value + ", " + data.text);
          }
        }
      });
    });
   }

   show(e: any) {
     this.dropdown.move(e.clientX,e.clientY)
     this.dropdown.show();
   }
}