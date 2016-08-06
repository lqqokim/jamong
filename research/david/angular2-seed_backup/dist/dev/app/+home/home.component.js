"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var forms_1 = require('@angular/forms');
var index_1 = require('../shared/index');
var index_2 = require('../uiComponents/button/index');
var index_3 = require('../uiComponents/dropdown/index');
var HomeComponent = (function () {
    function HomeComponent(nameListService) {
        this.nameListService = nameListService;
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent.prototype.onButtonClick = function () {
        alert('test');
    };
    HomeComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'sd-home',
            templateUrl: 'home.component.html',
            styleUrls: ['home.component.css'],
            directives: [
                forms_1.REACTIVE_FORM_DIRECTIVES,
                index_2.uiButtonComponent,
                index_3.uiDropDownComponent
            ]
        }), 
        __metadata('design:paramtypes', [index_1.NameListService])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC8raG9tZS9ob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQWtDLGVBQWUsQ0FBQyxDQUFBO0FBQ2xELHNCQUF5QyxnQkFBZ0IsQ0FBQyxDQUFBO0FBRTFELHNCQUFnQyxpQkFBaUIsQ0FBQyxDQUFBO0FBRWxELHNCQUFrQyw4QkFBOEIsQ0FBQyxDQUFBO0FBQ2pFLHNCQUFvQyxnQ0FBZ0MsQ0FBQyxDQUFBO0FBZ0JyRTtJQU9FLHVCQUFtQixlQUFnQztRQUFoQyxvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7SUFFbkQsQ0FBQztJQUtELGdDQUFRLEdBQVI7SUFDQSxDQUFDO0lBRUQscUNBQWEsR0FBYjtRQUNFLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNoQixDQUFDO0lBOUJIO1FBQUMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsU0FBUztZQUNuQixXQUFXLEVBQUUscUJBQXFCO1lBQ2xDLFNBQVMsRUFBRSxDQUFDLG9CQUFvQixDQUFDO1lBQ2pDLFVBQVUsRUFBRTtnQkFDVixnQ0FBd0I7Z0JBQ3hCLHlCQUFpQjtnQkFDakIsMkJBQW1CO2FBQ3BCO1NBQ0YsQ0FBQzs7cUJBQUE7SUFzQkYsb0JBQUM7QUFBRCxDQXJCQSxBQXFCQyxJQUFBO0FBckJZLHFCQUFhLGdCQXFCekIsQ0FBQSIsImZpbGUiOiJhcHAvK2hvbWUvaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUkVBQ1RJVkVfRk9STV9ESVJFQ1RJVkVTIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5pbXBvcnQgeyBOYW1lTGlzdFNlcnZpY2UgfSBmcm9tICcuLi9zaGFyZWQvaW5kZXgnO1xuXG5pbXBvcnQgeyB1aUJ1dHRvbkNvbXBvbmVudCB9IGZyb20gJy4uL3VpQ29tcG9uZW50cy9idXR0b24vaW5kZXgnO1xuaW1wb3J0IHsgdWlEcm9wRG93bkNvbXBvbmVudCB9IGZyb20gJy4uL3VpQ29tcG9uZW50cy9kcm9wZG93bi9pbmRleCc7XG5cbi8qKlxuICogVGhpcyBjbGFzcyByZXByZXNlbnRzIHRoZSBsYXp5IGxvYWRlZCBIb21lQ29tcG9uZW50LlxuICovXG5AQ29tcG9uZW50KHtcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgc2VsZWN0b3I6ICdzZC1ob21lJyxcbiAgdGVtcGxhdGVVcmw6ICdob21lLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ2hvbWUuY29tcG9uZW50LmNzcyddLFxuICBkaXJlY3RpdmVzOiBbXG4gICAgUkVBQ1RJVkVfRk9STV9ESVJFQ1RJVkVTLFxuICAgIHVpQnV0dG9uQ29tcG9uZW50LFxuICAgIHVpRHJvcERvd25Db21wb25lbnRcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBIb21lQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgLyoqXG4gICAqIENyZWF0ZXMgYW4gaW5zdGFuY2Ugb2YgdGhlIEhvbWVDb21wb25lbnQgd2l0aCB0aGUgaW5qZWN0ZWRcbiAgICogTmFtZUxpc3RTZXJ2aWNlLlxuICAgKlxuICAgKiBAcGFyYW0ge05hbWVMaXN0U2VydmljZX0gbmFtZUxpc3RTZXJ2aWNlIC0gVGhlIGluamVjdGVkIE5hbWVMaXN0U2VydmljZS5cbiAgICovXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBuYW1lTGlzdFNlcnZpY2U6IE5hbWVMaXN0U2VydmljZSkge1xuXG4gIH1cblxuICAvKipcbiAgICogaW5pdFxuICAgKi9cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxuICBvbkJ1dHRvbkNsaWNrKCkge1xuICAgIGFsZXJ0KCd0ZXN0Jyk7XG4gIH1cblxufVxuIl19
