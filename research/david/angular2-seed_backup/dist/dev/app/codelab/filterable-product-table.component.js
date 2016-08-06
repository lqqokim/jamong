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
var code_1 = require('@angular/code');
var product_row_component_1 = require('./product-row.component');
var FilterableProductTableComponent = (function () {
    function FilterableProductTableComponent() {
        this.sample = {
            stocked: false,
            name: 'football',
            price: 5000
        };
    }
    FilterableProductTableComponent = __decorate([
        code_1.Component({
            selector: 'filterable-product-table',
            template: "\n        <product-row [product]=\"sample\"></product-row>\n    ",
            directives: [product_row_component_1.ProductRowComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], FilterableProductTableComponent);
    return FilterableProductTableComponent;
}());
exports.FilterableProductTableComponent = FilterableProductTableComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb2RlbGFiL2ZpbHRlcmFibGUtcHJvZHVjdC10YWJsZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUEwQixlQUFlLENBQUMsQ0FBQTtBQUMxQyxzQ0FBb0MseUJBQXlCLENBQUMsQ0FBQTtBQVU5RDtJQUdJO1FBQ0ksSUFBSSxDQUFDLE1BQU0sR0FBRztZQUNWLE9BQU8sRUFBRSxLQUFLO1lBQ2QsSUFBSSxFQUFFLFVBQVU7WUFDaEIsS0FBSyxFQUFFLElBQUk7U0FDZCxDQUFBO0lBQ0wsQ0FBQztJQWhCTDtRQUFDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsMEJBQTBCO1lBQ3BDLFFBQVEsRUFBRSxrRUFFVDtZQUNELFVBQVUsRUFBRSxDQUFFLDJDQUFtQixDQUFFO1NBQ3RDLENBQUM7O3VDQUFBO0lBV0Ysc0NBQUM7QUFBRCxDQVZBLEFBVUMsSUFBQTtBQVZZLHVDQUErQixrQ0FVM0MsQ0FBQSIsImZpbGUiOiJhcHAvY29kZWxhYi9maWx0ZXJhYmxlLXByb2R1Y3QtdGFibGUuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29kZSc7XG5pbXBvcnQgeyBQcm9kdWN0Um93Q29tcG9uZW50IH0gZnJvbSAnLi9wcm9kdWN0LXJvdy5jb21wb25lbnQnO1xuaW1wb3J0IHsgUHJvZHVjdE1vZGVsIH0gZnJvbSAnLi9tb2RlbC9wcm9kdWN0Lm1vZGVsJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdmaWx0ZXJhYmxlLXByb2R1Y3QtdGFibGUnLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgICAgIDxwcm9kdWN0LXJvdyBbcHJvZHVjdF09XCJzYW1wbGVcIj48L3Byb2R1Y3Qtcm93PlxuICAgIGAsXG4gICAgZGlyZWN0aXZlczogWyBQcm9kdWN0Um93Q29tcG9uZW50IF1cbn0pXG5leHBvcnQgY2xhc3MgRmlsdGVyYWJsZVByb2R1Y3RUYWJsZUNvbXBvbmVudCB7XG4gICAgc2FtcGxlOiBQcm9kdWN0TW9kZWw7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5zYW1wbGUgPSB7XG4gICAgICAgICAgICBzdG9ja2VkOiBmYWxzZSxcbiAgICAgICAgICAgIG5hbWU6ICdmb290YmFsbCcsXG4gICAgICAgICAgICBwcmljZTogNTAwMFxuICAgICAgICB9XG4gICAgfVxufSJdfQ==
