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
var ProductRowComponent = (function () {
    function ProductRowComponent() {
    }
    ProductRowComponent.prototype.ngOnChanges = function () {
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], ProductRowComponent.prototype, "product", void 0);
    ProductRowComponent = __decorate([
        core_1.Component({
            selector: 'product-row',
            template: "\n        <tr>\n            <td>\n                <span [style.color]=\"product?.stocked ? 'blue' : 'red'\">\n                    {{ product?.name }}\n                </span>\n            </td>\n            <td>\n                {{ product?.price }}\n            </td>\n        </tr>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], ProductRowComponent);
    return ProductRowComponent;
}());
exports.ProductRowComponent = ProductRowComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb2RlbGFiL3Byb2R1Y3Qtcm93LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQWlDLGVBQWUsQ0FBQyxDQUFBO0FBa0JqRDtJQUFBO0lBTUEsQ0FBQztJQUhHLHlDQUFXLEdBQVg7SUFFQSxDQUFDO0lBSkQ7UUFBQyxZQUFLLEVBQUU7O3dEQUFBO0lBaEJaO1FBQUMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxhQUFhO1lBQ3ZCLFFBQVEsRUFBRSxtU0FXVDtTQUNKLENBQUM7OzJCQUFBO0lBT0YsMEJBQUM7QUFBRCxDQU5BLEFBTUMsSUFBQTtBQU5ZLDJCQUFtQixzQkFNL0IsQ0FBQSIsImZpbGUiOiJhcHAvY29kZWxhYi9wcm9kdWN0LXJvdy5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQcm9kdWN0TW9kZWwgfSBmcm9tICcuL21vZGVsL3Byb2R1Y3QubW9kZWwnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3Byb2R1Y3Qtcm93JyxcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICA8dHI+XG4gICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgICAgPHNwYW4gW3N0eWxlLmNvbG9yXT1cInByb2R1Y3Q/LnN0b2NrZWQgPyAnYmx1ZScgOiAncmVkJ1wiPlxuICAgICAgICAgICAgICAgICAgICB7eyBwcm9kdWN0Py5uYW1lIH19XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgICB7eyBwcm9kdWN0Py5wcmljZSB9fVxuICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgPC90cj5cbiAgICBgXG59KVxuZXhwb3J0IGNsYXNzIFByb2R1Y3RSb3dDb21wb25lbnQge1xuICAgIEBJbnB1dCgpIHByb2R1Y3Q6IFByb2R1Y3RNb2RlbDtcblxuICAgIG5nT25DaGFuZ2VzKCkge1xuICAgICAgICBcbiAgICB9XG59Il19
