webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export routes */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var routes = [
    { path: '', redirectTo: 'main', pathMatch: 'prefix' }
];
var opt = {
    enableTracing: false
    // true if you want to print navigation routes
};
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["e" /* RouterModule */].forRoot(routes, opt)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["e" /* RouterModule */]],
        providers: []
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'o-app',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.config.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CONFIG; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_app_services_config__ = __webpack_require__("../../../../../src/app/shared/app.services.config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_app_menu_config__ = __webpack_require__("../../../../../src/app/shared/app.menu.config.ts");


var CONFIG = {
    // The base path of the URL used by app services.
    apiEndpoint: 'https://try.ontimize.com/QSAllComponents/rest',
    //  Application identifier. Is the unique package identifier of the app. It is used when storing or managing temporal data related with the app. By default is set as 'ontimize-web-uuid'.
    uuid: 'com.ontimize.web.ng2.playground',
    // Title of the app
    title: 'Playground',
    //  Language of the application.
    // locale: 'en',
    // The service type used (Ontimize REST standart, Ontimize REST JEE or custom implementation) in the whole application.
    // serviceType
    // Configuration parameters of application services.
    servicesConfiguration: __WEBPACK_IMPORTED_MODULE_0__shared_app_services_config__["a" /* SERVICE_CONFIG */],
    appMenuConfiguration: __WEBPACK_IMPORTED_MODULE_1__shared_app_menu_config__["a" /* MENU_CONFIG */],
    applicationLocales: ['es', 'en']
};
//# sourceMappingURL=app.config.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export customProviders */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ontimize_web_ngx__ = __webpack_require__("../../../../ontimize-web-ngx/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_config__ = __webpack_require__("../../../../../src/app/app.config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__main_main_module__ = __webpack_require__("../../../../../src/app/main/main.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






// Defining custom providers (if needed)...
var customProviders = [];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ontimize_web_ngx__["l" /* ONTIMIZE_MODULES */],
            __WEBPACK_IMPORTED_MODULE_5__main_main_module__["a" /* MainModule */],
            __WEBPACK_IMPORTED_MODULE_4__app_routing_module__["a" /* AppRoutingModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]
        ],
        bootstrap: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]
        ],
        providers: [
            { provide: __WEBPACK_IMPORTED_MODULE_1_ontimize_web_ngx__["a" /* APP_CONFIG */], useValue: __WEBPACK_IMPORTED_MODULE_2__app_config__["a" /* CONFIG */] }
        ].concat(__WEBPACK_IMPORTED_MODULE_1_ontimize_web_ngx__["m" /* ONTIMIZE_PROVIDERS */], customProviders),
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/main/buttons/buttons-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export routes */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ButtonsRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__buttons_component__ = __webpack_require__("../../../../../src/app/main/buttons/buttons.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__buttons_component__["a" /* ButtonsComponent */] }
];
var ButtonsRoutingModule = (function () {
    function ButtonsRoutingModule() {
    }
    return ButtonsRoutingModule;
}());
ButtonsRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["e" /* RouterModule */].forChild(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["e" /* RouterModule */]]
    })
], ButtonsRoutingModule);

//# sourceMappingURL=buttons-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/main/buttons/buttons.component.html":
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"column\" fxLayoutAlign=\"center top\" layout-margin>\n\n  <example-comp [comp-name]=\"getComponentId()\" [files]=\"getFiles()\" fxFill>\n\n    <div fxLayout=\"row\" layout-padding fxFill>\n      <o-button attr=\"flat\" type=\"FLAT\" label=\"FLAT\" layout-padding></o-button>\n      <o-button attr=\"raised\" type=\"RAISED\" label=\"RAISED\" layout-padding></o-button>\n      <o-button attr=\"floating\" type=\"FLOATING\" icon=\"add\" layout-padding></o-button>\n    </div>\n\n  </example-comp>\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/main/buttons/buttons.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main/buttons/buttons.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ButtonsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ontimize_web_ngx__ = __webpack_require__("../../../../ontimize-web-ngx/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_navigation_bar_service__ = __webpack_require__("../../../../../src/app/shared/navigation-bar.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



;
var HTML_DATA = "\n<o-button attr=\"flat\" type=\"FLAT\" label=\"FLAT\" layout-padding></o-button>\n\n<o-button attr=\"raised\" type=\"RAISED\" label=\"RAISED\" layout-padding></o-button>\n\n<o-button attr=\"floating\" type=\"FLOATING\" icon=\"add\" layout-padding></o-button>\n";
var TYPESCRIPT_DATA = "";
var ButtonsComponent = (function () {
    function ButtonsComponent(navigationService, translateService) {
        this.navigationService = navigationService;
        this.translateService = translateService;
    }
    ButtonsComponent.prototype.ngOnInit = function () {
        var title = this.translateService.get('BUTTONS');
        this.navigationService.setTitle(title);
    };
    ButtonsComponent.prototype.getComponentId = function () {
        return 'Buttons';
    };
    ButtonsComponent.prototype.getFiles = function () {
        return [
            {
                'type': 'html',
                'data': HTML_DATA
            },
            {
                'type': 'scss',
                'data': ''
            },
            {
                'type': 'typescript',
                'data': TYPESCRIPT_DATA
            }
        ];
    };
    return ButtonsComponent;
}());
ButtonsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-buttons',
        template: __webpack_require__("../../../../../src/app/main/buttons/buttons.component.html"),
        styles: [__webpack_require__("../../../../../src/app/main/buttons/buttons.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__shared_navigation_bar_service__["a" /* NavigationBarService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_navigation_bar_service__["a" /* NavigationBarService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ontimize_web_ngx__["s" /* OTranslateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ontimize_web_ngx__["s" /* OTranslateService */]) === "function" && _b || Object])
], ButtonsComponent);

var _a, _b;
//# sourceMappingURL=buttons.component.js.map

/***/ }),

/***/ "../../../../../src/app/main/buttons/buttons.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ButtonsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ontimize_web_ngx__ = __webpack_require__("../../../../ontimize-web-ngx/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__buttons_component__ = __webpack_require__("../../../../../src/app/main/buttons/buttons.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__buttons_routing_module__ = __webpack_require__("../../../../../src/app/main/buttons/buttons-routing.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var ButtonsModule = (function () {
    function ButtonsModule() {
    }
    return ButtonsModule;
}());
ButtonsModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_3__shared_shared_module__["a" /* SharedModule */],
            __WEBPACK_IMPORTED_MODULE_1_ontimize_web_ngx__["u" /* OntimizeWebModule */],
            __WEBPACK_IMPORTED_MODULE_4__buttons_routing_module__["a" /* ButtonsRoutingModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__buttons_component__["a" /* ButtonsComponent */]
        ]
    })
], ButtonsModule);

//# sourceMappingURL=buttons.module.js.map

/***/ }),

/***/ "../../../../../src/app/main/checkbox/checkbox-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export routes */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CheckboxRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__checkbox_component__ = __webpack_require__("../../../../../src/app/main/checkbox/checkbox.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__checkbox_component__["a" /* CheckboxComponent */] }
];
var CheckboxRoutingModule = (function () {
    function CheckboxRoutingModule() {
    }
    return CheckboxRoutingModule;
}());
CheckboxRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["e" /* RouterModule */].forChild(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["e" /* RouterModule */]]
    })
], CheckboxRoutingModule);

//# sourceMappingURL=checkbox-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/main/checkbox/checkbox.component.html":
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"column\" fxLayoutAlign=\"center top\" layout-margin>\n\n  <example-comp [comp-name]=\"getComponentId()\" [files]=\"getFiles()\" fxFill>\n    <o-form show-header=\"no\">\n      <div fxLayout=\"row\" layout-padding fxFill>\n        <o-checkbox attr=\"check\" label=\"O-checkbox (read-only)\" [data]=\"getCheckboxValue()\" layout-padding></o-checkbox>\n        <o-checkbox #checkbox attr=\"check1\" label=\"O-checkbox (edit mode)\" [data]=\"getCheckboxValue()\" layout-padding\n          tooltip=\"This is an awesome tooltip!!!!\"></o-checkbox>\n        <o-checkbox attr=\"check2\" label=\"O-checkbox disabled\" enabled=\"no\"  layout-padding></o-checkbox>\n      </div>\n    </o-form>\n  </example-comp>\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/main/checkbox/checkbox.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main/checkbox/checkbox.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CheckboxComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ontimize_web_ngx__ = __webpack_require__("../../../../ontimize-web-ngx/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_navigation_bar_service__ = __webpack_require__("../../../../../src/app/shared/navigation-bar.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



;
var HTML_DATA = "\n<o-checkbox attr=\"check\" label=\"O-checkbox (read-only)\"></o-checkbox>\n\n<o-checkbox #checkbox attr=\"check1\" label=\"O-checkbox (edit mode)\"></o-checkbox>\n\n<o-checkbox attr=\"check2\" label=\"O-checkbox disabled\" enabled=\"no\"></o-checkbox>\n";
var TYPESCRIPT_DATA = "\nimport { Component, ViewChild } from '@angular/core';\n\nimport { OCheckboxComponent } from 'ontimize-web-ngx';\n\n@Component({\n  selector: 'checkbox-home',\n  moduleId: module.id,\n  styleUrls: ['checkbox-home.component.scss'],\n  templateUrl: 'checkbox-home.component.html'\n})\nexport class CheckboxHomeComponent {\n\n  @ViewChild('checkbox') checkBox: OCheckboxComponent;\n\n  constructor() {\n  }\n\n  ngAfterViewInit() {\n    this.checkBox.isReadOnly = false;\n  }\n}";
var CheckboxComponent = (function () {
    function CheckboxComponent(navigationService, translateService) {
        this.navigationService = navigationService;
        this.translateService = translateService;
    }
    CheckboxComponent.prototype.ngOnInit = function () {
        var title = '';
        title += this.translateService.get('INPUTS');
        title = title + ' > ' + this.translateService.get('CHECKBOX');
        this.navigationService.setTitle(title);
    };
    CheckboxComponent.prototype.ngAfterViewInit = function () {
        this.checkBox.isReadOnly = false;
    };
    CheckboxComponent.prototype.getCheckboxValue = function () {
        return true;
    };
    CheckboxComponent.prototype.getComponentId = function () {
        return 'Checkbox';
    };
    CheckboxComponent.prototype.getFiles = function () {
        return [
            {
                'type': 'html',
                'data': HTML_DATA
            },
            {
                'type': 'scss',
                'data': ''
            },
            {
                'type': 'typescript',
                'data': TYPESCRIPT_DATA
            }
        ];
    };
    return CheckboxComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('checkbox'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ontimize_web_ngx__["d" /* OCheckboxComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ontimize_web_ngx__["d" /* OCheckboxComponent */]) === "function" && _a || Object)
], CheckboxComponent.prototype, "checkBox", void 0);
CheckboxComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-checkbox',
        template: __webpack_require__("../../../../../src/app/main/checkbox/checkbox.component.html"),
        styles: [__webpack_require__("../../../../../src/app/main/checkbox/checkbox.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__shared_navigation_bar_service__["a" /* NavigationBarService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_navigation_bar_service__["a" /* NavigationBarService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ontimize_web_ngx__["s" /* OTranslateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ontimize_web_ngx__["s" /* OTranslateService */]) === "function" && _c || Object])
], CheckboxComponent);

var _a, _b, _c;
//# sourceMappingURL=checkbox.component.js.map

/***/ }),

/***/ "../../../../../src/app/main/checkbox/checkbox.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CheckboxModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ontimize_web_ngx__ = __webpack_require__("../../../../ontimize-web-ngx/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__checkbox_component__ = __webpack_require__("../../../../../src/app/main/checkbox/checkbox.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__checkbox_routing_module__ = __webpack_require__("../../../../../src/app/main/checkbox/checkbox-routing.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var CheckboxModule = (function () {
    function CheckboxModule() {
    }
    return CheckboxModule;
}());
CheckboxModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_3__shared_shared_module__["a" /* SharedModule */],
            __WEBPACK_IMPORTED_MODULE_1_ontimize_web_ngx__["u" /* OntimizeWebModule */],
            __WEBPACK_IMPORTED_MODULE_4__checkbox_routing_module__["a" /* CheckboxRoutingModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__checkbox_component__["a" /* CheckboxComponent */]
        ]
    })
], CheckboxModule);

//# sourceMappingURL=checkbox.module.js.map

/***/ }),

/***/ "../../../../../src/app/main/combo/combo-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export routes */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComboRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__combo_component__ = __webpack_require__("../../../../../src/app/main/combo/combo.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__combo_component__["a" /* ComboComponent */] }
];
var ComboRoutingModule = (function () {
    function ComboRoutingModule() {
    }
    return ComboRoutingModule;
}());
ComboRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["e" /* RouterModule */].forChild(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["e" /* RouterModule */]]
    })
], ComboRoutingModule);

//# sourceMappingURL=combo-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/main/combo/combo.component.html":
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"column\" fxLayoutAlign=\"center top\" layout-margin>\n\n  <example-comp [comp-name]=\"getComponentId()\" [files]=\"getFiles()\" fxFill>\n    <o-form show-header=\"no\">\n\n      <div fxLayout=\"row\" layout-padding fxFill>\n        <o-combo attr=\"combo\" label=\"o-combo (read-only)\" layout-padding [static-data]=\"getComboData()\" [data]=\"getComboValue()\"\n          value-column=\"key\" columns=\"key;value\" visible-columns=\"value\" tooltip=\"This is an awesome tooltip!\" tooltip-position=\"below\"></o-combo>\n        <o-combo #combo attr=\"combo-editable\" label=\"o-combo\" layout-padding style=\"min-width:200px;\" [static-data]=\"getComboData()\" [data]=\"getComboValue()\"\n          value-column=\"key\" columns=\"key;value\" visible-columns=\"value\" required=\"yes\"></o-combo>\n        <o-combo attr=\"combo-disabled\" label=\"o-combo-disabled (read-only)\" enabled=\"no\" layout-padding [static-data]=\"getComboData()\"\n          [data]=\"getComboValue()\" value-column=\"key\" columns=\"key;value\" visible-columns=\"value\" ></o-combo>\n      </div>\n\n    </o-form>\n  </example-comp>\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/main/combo/combo.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main/combo/combo.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComboComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ontimize_web_ngx__ = __webpack_require__("../../../../ontimize-web-ngx/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_navigation_bar_service__ = __webpack_require__("../../../../../src/app/shared/navigation-bar.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



;
var HTML_DATA = "\n<o-combo attr=\"combo\" label=\"o-combo (read-only)\" layout-padding [static-data]=\"getComboData()\"\n  value-column=\"key\" columns=\"key;value\" visible-columns=\"value\" query-on-init=\"no\"\n  query-on-bind=\"no\">\n</o-combo>\n\n<o-combo #combo attr=\"combo-editable\" label=\"o-combo\" layout-padding style=\"min-width:200px;\"\n  [static-data]=\"getComboData()\" value-column=\"key\" columns=\"key;value\" visible-columns=\"value\"\n  query-on-init=\"no\" query-on-bind=\"no\">\n</o-combo>\n\n<o-combo attr=\"combo-disabled\" label=\"o-combo-disabled (read-only)\" enabled=\"no\"\n  layout-padding [static-data]=\"getComboData()\" value-column=\"key\" columns=\"key;value\"\n  visible-columns=\"value\" query-on-init=\"no\" query-on-bind=\"no\">\n</o-combo>\n";
var TYPESCRIPT_DATA = "\nimport { Component, ViewChild } from '@angular/core';\n\nimport { OComboComponent } from 'ontimize-web-ngx';\n\n@Component({\n  selector: 'combo-home',\n  moduleId: module.id,\n  styleUrls: ['combo-home.component.scss'],\n  templateUrl: 'combo-home.component.html'\n})\nexport class ComboHomeComponent {\n\n  @ViewChild('combo') combo: OComboComponent;\n  @ViewChild('combo1') combo1: OComboComponent;\n\n  constructor() {\n  }\n\n  ngAfterViewInit() {\n    if (this.combo) {\n      this.combo.isReadOnly = false;\n    }\n    if (this.combo1) {\n      this.combo1.isReadOnly = false;\n    }\n  }\n\n  getComboData() {\n    let array: Array<Object> = [];\n    array.push({\n      'key': 1,\n      'value': 'Spain'\n    });\n    array.push({\n      'key': 2,\n      'value': 'United States'\n    });\n    array.push({\n      'key': 3,\n      'value': 'United Kingdom'\n    });\n    array.push({\n      'key': 4,\n      'value': 'Germany'\n    });\n    return array;\n  }\n\n  getComboValue() {\n    return 1;\n  }\n}";
var ComboComponent = (function () {
    function ComboComponent(navigationService, translateService) {
        this.navigationService = navigationService;
        this.translateService = translateService;
    }
    ComboComponent.prototype.ngOnInit = function () {
        var title = '';
        title += this.translateService.get('INPUTS');
        title = title + ' > ' + this.translateService.get('COMBO');
        this.navigationService.setTitle(title);
    };
    ComboComponent.prototype.ngAfterViewInit = function () {
        if (this.combo) {
            this.combo.isReadOnly = false;
        }
    };
    ComboComponent.prototype.getComboData = function () {
        var array = [];
        array.push({
            'key': 1,
            'value': 'Spain'
        });
        array.push({
            'key': 2,
            'value': 'United States'
        });
        array.push({
            'key': 3,
            'value': 'United Kingdom'
        });
        array.push({
            'key': 4,
            'value': 'Germany'
        });
        return array;
    };
    ComboComponent.prototype.getComboValue = function () {
        return 1;
    };
    ComboComponent.prototype.getComponentId = function () {
        return 'Combos';
    };
    ComboComponent.prototype.getFiles = function () {
        return [
            {
                'type': 'html',
                'data': HTML_DATA
            },
            {
                'type': 'scss',
                'data': ''
            },
            {
                'type': 'typescript',
                'data': TYPESCRIPT_DATA
            }
        ];
    };
    return ComboComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('combo'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ontimize_web_ngx__["e" /* OComboComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ontimize_web_ngx__["e" /* OComboComponent */]) === "function" && _a || Object)
], ComboComponent.prototype, "combo", void 0);
ComboComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-combo',
        template: __webpack_require__("../../../../../src/app/main/combo/combo.component.html"),
        styles: [__webpack_require__("../../../../../src/app/main/combo/combo.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__shared_navigation_bar_service__["a" /* NavigationBarService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_navigation_bar_service__["a" /* NavigationBarService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ontimize_web_ngx__["s" /* OTranslateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ontimize_web_ngx__["s" /* OTranslateService */]) === "function" && _c || Object])
], ComboComponent);

var _a, _b, _c;
//# sourceMappingURL=combo.component.js.map

/***/ }),

/***/ "../../../../../src/app/main/combo/combo.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComboModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__combo_component__ = __webpack_require__("../../../../../src/app/main/combo/combo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ontimize_web_ngx__ = __webpack_require__("../../../../ontimize-web-ngx/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__combo_routing_module__ = __webpack_require__("../../../../../src/app/main/combo/combo-routing.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var ComboModule = (function () {
    function ComboModule() {
    }
    return ComboModule;
}());
ComboModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__shared_shared_module__["a" /* SharedModule */],
            __WEBPACK_IMPORTED_MODULE_3_ontimize_web_ngx__["u" /* OntimizeWebModule */],
            __WEBPACK_IMPORTED_MODULE_4__combo_routing_module__["a" /* ComboRoutingModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__combo_component__["a" /* ComboComponent */]
        ]
    })
], ComboModule);

//# sourceMappingURL=combo.module.js.map

/***/ }),

/***/ "../../../../../src/app/main/containers/containers-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export routes */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContainersRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__containers_component__ = __webpack_require__("../../../../../src/app/main/containers/containers.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__containers_component__["a" /* ContainersComponent */] }
];
var ContainersRoutingModule = (function () {
    function ContainersRoutingModule() {
    }
    return ContainersRoutingModule;
}());
ContainersRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["e" /* RouterModule */].forChild(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["e" /* RouterModule */]]
    })
], ContainersRoutingModule);

//# sourceMappingURL=containers-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/main/containers/containers.component.html":
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"column\" fxLayoutAlign=\"center top\" layout-margin>\n\n\n  <div layout-padding>\n    <h3>Overview</h3>\n    <p>\n      According to layout of the container (row or column) the children could be distributed using the <code>fxLayoutAlign</code>      directive.\n    </p>\n    <p>\n      The <code>fxLayoutAlign</code> directive takes two words. The first word says how the children will be aligned in the\n      layout's direction, and the second word says how the children will be aligned perpendicular to the layout's direction.</p>\n  </div>\n\n\n  <div fxLayout=\"row\" layout-padding fxLayoutAlign=\"start center\">\n    <span>Select container layout direction: </span>\n    <md-radio-group layout-padding (change)=\"onLayoutChange($event)\">\n      <md-radio-button value=\"column\"> {{ 'COLUMN' | oTranslate }}</md-radio-button>\n      <md-radio-button value=\"row\" checked=\"true\"> {{'ROW' | oTranslate }}</md-radio-button>\n    </md-radio-group>\n  </div>\n\n\n  <example-comp [comp-name]=\"getComponentId()\" [files]=\"getFiles()\" fxFill>\n\n    <div fxLayout=\"row\" fxLayoutAlign=\"space-around stretch\" fxFill>\n      <o-row *ngIf=\"layout === 'row'\" attr=\"row1\" [title-label]=\"title.value\" [layout-align]=\"getLayoutAlign()\" [elevation]=\"elevation.value\"\n        fxFlex=\"60\">\n        <div layout-padding style=\"background-color:#3498db;\"> One </div>\n        <div layout-padding style=\"background-color:#e74c3c;\"> Two </div>\n        <div layout-padding style=\"background-color:#f9c922;\"> Three </div>\n      </o-row>\n\n      <o-column *ngIf=\"layout === 'column'\" attr=\"col1\" [title-label]=\"title.value\" [layout-align]=\"getLayoutAlign()\" [elevation]=\"elevation.value\"\n        fxFlex=\"60\">\n        <div layout-padding style=\"background-color:#3498db;\"> One </div>\n        <div layout-padding style=\"background-color:#e74c3c;\"> Two </div>\n        <div layout-padding style=\"background-color:#f9c922;\"> Three </div>\n      </o-column>\n\n      <o-column attr=\"conf\" title-label=\"Configuration\" elevation=\"0\" fxFlex=\"35\" layout-padding>\n\n        <md-input-container fxFill>\n          <input mdInput #title placeholder=\"{{ 'TITLE' | oTranslate }}\" value=\"Title\">\n        </md-input-container>\n\n\n        <md-input-container fxFill>\n          <input mdInput #elevation placeholder=\"{{ 'ELEVATION' | oTranslate }}\" type=\"number\" value=\"1\" min=\"0\" max=\"12\">\n        </md-input-container>\n\n\n        <span class=\"alignment\" layout-padding>fxLayoutAlign: {{ getLayoutAlign() }}</span>\n\n        <div fxLayout=\"row\" fxLayoutAlign=\"space-around stretch\">\n          <div fxLayout=\"column\" layout-padding>\n            <span class=\"alignment-label\">Alignment in Layout Direction (horizontal)</span>\n            <md-radio-group class=\"radio-group-vertical\" #layHor (change)=\"onLayoutHorizontalChange($event)\">\n              <md-radio-button *ngFor=\"let d of dataHorizontal\" [value]=\"d.value\" [checked]=\"d.checked\">\n                {{d.label}}\n              </md-radio-button>\n            </md-radio-group>\n          </div>\n\n          <div fxLayout=\"column\" layout-padding>\n            <span class=\"alignment-label\">Alignment in Perpendicular Direction (vertical)</span>\n            <md-radio-group class=\"radio-group-vertical\" #layVer (change)=\"onLayoutVerticalChange($event)\">\n              <md-radio-button *ngFor=\"let d of dataVertical\" [value]=\"d.value\" [checked]=\"d.checked\">\n                {{d.label}}\n              </md-radio-button>\n            </md-radio-group>\n          </div>\n        </div>\n      </o-column>\n\n    </div>\n  </example-comp>\n\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/main/containers/containers.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".radio-group-vertical md-radio-button {\n  display: block; }\n\n.alignment-label {\n  font-size: 0.75em;\n  color: #aaa; }\n\n.alignment {\n  font-weight: bold;\n  font-size: 1.1em; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main/containers/containers.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContainersComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_navigation_bar_service__ = __webpack_require__("../../../../../src/app/shared/navigation-bar.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


;
var HTML_ROW_DATA = "\n<o-row attr=\"row1\" title-label=\"Row title\" layout-align=\"start stretch\"\n  elevation=\"2\">\n  <div layout-padding style=\"background-color:#3498db;\" > One </div>\n  <div layout-padding style=\"background-color:#e74c3c;\" > Two </div>\n  <div layout-padding style=\"background-color:#f9c922;\"> Three </div>\n</o-row>\n";
var HTML_COL_DATA = "\n<o-column attr=\"column1\" title-label=\"Column title\" layout-align=\"start stretch\"\n  elevation=\"2\">\n  <div layout-padding style=\"background-color:#3498db;\" > One </div>\n  <div layout-padding style=\"background-color:#e74c3c;\" > Two </div>\n  <div layout-padding style=\"background-color:#f9c922;\"> Three </div>\n</o-column>\n";
var TYPESCRIPT_DATA = "";
var ContainersComponent = (function () {
    function ContainersComponent(navigationService) {
        this.navigationService = navigationService;
        this.layout = 'row';
        this.layoutHorizontal = 'start';
        this.layoutVertical = 'stretch';
        this.dataHorizontal = [];
        this.dataVertical = [];
        this.files = [];
    }
    ContainersComponent.prototype.ngOnInit = function () {
        this.dataHorizontal = [
            { 'value': 'none', 'label': 'none', 'checked': false },
            { 'value': 'start', 'label': 'start (default)', 'checked': true },
            { 'value': 'center', 'label': 'center', 'checked': false },
            { 'value': 'end', 'label': 'end', 'checked': false },
            { 'value': 'space-around', 'label': 'space-around', 'checked': false },
            { 'value': 'space-between', 'label': 'space-between', 'checked': false }
        ];
        this.dataVertical = [
            { 'value': 'none', 'label': 'none', 'checked': false },
            { 'value': 'start', 'label': 'start', 'checked': false },
            { 'value': 'center', 'label': 'center', 'checked': false },
            { 'value': 'end', 'label': 'end', 'checked': false },
            { 'value': 'stretch', 'label': 'stretch (default)', 'checked': true }
        ];
        this.files = this.retrieveFiles();
        this.navigationService.setTitle('Layout > Child alignment');
    };
    ContainersComponent.prototype.getLayoutAlign = function () {
        return this.layoutHorizontal + ' ' + this.layoutVertical;
    };
    ContainersComponent.prototype.onLayoutChange = function (evt) {
        var self = this;
        window.setTimeout(function () {
            self.layout = evt.value;
            self.files = self.retrieveFiles();
        }, 0);
    };
    ContainersComponent.prototype.onLayoutHorizontalChange = function (evt, layHor) {
        var self = this;
        window.setTimeout(function () {
            self.layoutHorizontal = evt.value;
        }, 0);
    };
    ContainersComponent.prototype.onLayoutVerticalChange = function (evt, layHor) {
        var self = this;
        window.setTimeout(function () {
            self.layoutVertical = evt.value;
        }, 0);
    };
    ContainersComponent.prototype.getComponentId = function () {
        return this.layout === 'row' ? 'Rows' : 'Columns';
    };
    ContainersComponent.prototype.getFiles = function () {
        return this.files;
    };
    ContainersComponent.prototype.retrieveFiles = function () {
        var html = this.layout === 'row' ? HTML_ROW_DATA : HTML_COL_DATA;
        return [
            {
                'type': 'html',
                'data': html
            },
            {
                'type': 'scss',
                'data': ''
            },
            {
                'type': 'typescript',
                'data': TYPESCRIPT_DATA
            }
        ];
    };
    return ContainersComponent;
}());
ContainersComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-containers',
        template: __webpack_require__("../../../../../src/app/main/containers/containers.component.html"),
        styles: [__webpack_require__("../../../../../src/app/main/containers/containers.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_navigation_bar_service__["a" /* NavigationBarService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_navigation_bar_service__["a" /* NavigationBarService */]) === "function" && _a || Object])
], ContainersComponent);

var _a;
//# sourceMappingURL=containers.component.js.map

/***/ }),

/***/ "../../../../../src/app/main/containers/containers.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContainersModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ontimize_web_ngx__ = __webpack_require__("../../../../ontimize-web-ngx/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__containers_component__ = __webpack_require__("../../../../../src/app/main/containers/containers.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__containers_routing_module__ = __webpack_require__("../../../../../src/app/main/containers/containers-routing.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var ContainersModule = (function () {
    function ContainersModule() {
    }
    return ContainersModule;
}());
ContainersModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__["a" /* SharedModule */],
            __WEBPACK_IMPORTED_MODULE_1_ontimize_web_ngx__["u" /* OntimizeWebModule */],
            __WEBPACK_IMPORTED_MODULE_4__containers_routing_module__["a" /* ContainersRoutingModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__containers_component__["a" /* ContainersComponent */]
        ]
    })
], ContainersModule);

//# sourceMappingURL=containers.module.js.map

/***/ }),

/***/ "../../../../../src/app/main/dialogs/dialogs-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export routes */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DialogsRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dialogs_component__ = __webpack_require__("../../../../../src/app/main/dialogs/dialogs.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__dialogs_component__["a" /* DialogsComponent */] }
];
var DialogsRoutingModule = (function () {
    function DialogsRoutingModule() {
    }
    return DialogsRoutingModule;
}());
DialogsRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["e" /* RouterModule */].forChild(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["e" /* RouterModule */]]
    })
], DialogsRoutingModule);

//# sourceMappingURL=dialogs-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/main/dialogs/dialogs.component.html":
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"column\" fxLayoutAlign=\"center top\" layout-margin>\n\n  <example-comp [comp-name]=\"getComponentId()\" [files]=\"getFiles()\" fxFill>\n\n    <div fxLayout=\"row\" layout-padding fxFill>\n      <o-button attr=\"alert\" type=\"RAISED\" label=\"ALERT_DIALOG\" layout-padding (click)=\"showAlert($event)\" ></o-button>\n      <o-button attr=\"info\" type=\"RAISED\" label=\"INFO_DIALOG\" layout-padding (click)=\"showInfo($event)\" ></o-button>\n      <o-button attr=\"warn\" type=\"RAISED\" label=\"WARNING_DIALOG\" layout-padding (click)=\"showWarning($event)\" ></o-button>\n      <o-button attr=\"error\" type=\"RAISED\" label=\"ERROR_DIALOG\" layout-padding (click)=\"showError($event)\" ></o-button>\n      <o-button attr=\"confirm\" type=\"RAISED\" label=\"CONFIRM_DIALOG\" layout-padding (click)=\"showConfirm($event)\"></o-button>\n    </div>\n\n  </example-comp>\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/main/dialogs/dialogs.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main/dialogs/dialogs.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DialogsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ontimize_web_ngx__ = __webpack_require__("../../../../ontimize-web-ngx/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_navigation_bar_service__ = __webpack_require__("../../../../../src/app/shared/navigation-bar.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



;
var HTML_DATA = "\n<o-button attr=\"flat\" type=\"FLAT\" label=\"FLAT\" layout-padding></o-button>\n\n<o-button attr=\"raised\" type=\"RAISED\" label=\"RAISED\" layout-padding></o-button>\n\n<o-button attr=\"floating\" type=\"FLOATING\" icon=\"add\" layout-padding></o-button>\n";
var TYPESCRIPT_DATA = "";
var DialogsComponent = (function () {
    function DialogsComponent(navigationService, translateService, dialogService) {
        this.navigationService = navigationService;
        this.translateService = translateService;
        this.dialogService = dialogService;
    }
    DialogsComponent.prototype.ngOnInit = function () {
        var title = this.translateService.get('DIALOGS');
        this.navigationService.setTitle(title);
    };
    DialogsComponent.prototype.showAlert = function (evt) {
        if (this.dialogService) {
            this.dialogService.alert('Alert dialog title', 'This is an amazing "Alert" dialog');
        }
    };
    DialogsComponent.prototype.showInfo = function (evt) {
        if (this.dialogService) {
            var config = {
                icon: 'alarm',
                okButtonText: 'It rocks!'
            };
            this.dialogService.info('Info dialog title', 'This is an amazing "Information" dialog', config);
        }
    };
    DialogsComponent.prototype.showWarning = function (evt) {
        if (this.dialogService) {
            var config = {
                icon: 'alarm',
                okButtonText: 'It rocks!'
            };
            this.dialogService.warn('Warning dialog title', 'This is an amazing "Warning" dialog', config);
        }
    };
    DialogsComponent.prototype.showError = function (evt) {
        if (this.dialogService) {
            var config = {
                icon: 'alarm',
                okButtonText: 'It rocks!'
            };
            this.dialogService.error('Error dialog title', 'This is an amazing "Error" dialog', config);
        }
    };
    DialogsComponent.prototype.showConfirm = function (evt) {
        if (this.dialogService) {
            this.dialogService.confirm('Confirm dialog title', 'Do you really want to accept?');
        }
    };
    DialogsComponent.prototype.getComponentId = function () {
        return 'Dialogs';
    };
    DialogsComponent.prototype.getFiles = function () {
        return [
            {
                'type': 'html',
                'data': HTML_DATA
            },
            {
                'type': 'scss',
                'data': ''
            },
            {
                'type': 'typescript',
                'data': TYPESCRIPT_DATA
            }
        ];
    };
    return DialogsComponent;
}());
DialogsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-dialogs',
        template: __webpack_require__("../../../../../src/app/main/dialogs/dialogs.component.html"),
        styles: [__webpack_require__("../../../../../src/app/main/dialogs/dialogs.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__shared_navigation_bar_service__["a" /* NavigationBarService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_navigation_bar_service__["a" /* NavigationBarService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ontimize_web_ngx__["s" /* OTranslateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ontimize_web_ngx__["s" /* OTranslateService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ontimize_web_ngx__["b" /* DialogService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ontimize_web_ngx__["b" /* DialogService */]) === "function" && _c || Object])
], DialogsComponent);

var _a, _b, _c;
//# sourceMappingURL=dialogs.component.js.map

/***/ }),

/***/ "../../../../../src/app/main/dialogs/dialogs.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DialogsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ontimize_web_ngx__ = __webpack_require__("../../../../ontimize-web-ngx/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dialogs_component__ = __webpack_require__("../../../../../src/app/main/dialogs/dialogs.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__dialogs_routing_module__ = __webpack_require__("../../../../../src/app/main/dialogs/dialogs-routing.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var DialogsModule = (function () {
    function DialogsModule() {
    }
    return DialogsModule;
}());
DialogsModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__["a" /* SharedModule */],
            __WEBPACK_IMPORTED_MODULE_1_ontimize_web_ngx__["u" /* OntimizeWebModule */],
            __WEBPACK_IMPORTED_MODULE_4__dialogs_routing_module__["a" /* DialogsRoutingModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__dialogs_component__["a" /* DialogsComponent */]
        ]
    })
], DialogsModule);

//# sourceMappingURL=dialogs.module.js.map

/***/ }),

/***/ "../../../../../src/app/main/home/home-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_component__ = __webpack_require__("../../../../../src/app/main/home/home.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__home_component__["a" /* HomeComponent */]
    }
];
var HomeRoutingModule = (function () {
    function HomeRoutingModule() {
    }
    return HomeRoutingModule;
}());
HomeRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["e" /* RouterModule */].forChild(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["e" /* RouterModule */]]
    })
], HomeRoutingModule);

//# sourceMappingURL=home-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/main/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div layout-padding fxFlex=\"80\">\n    <div layout-padding>\n        <h2>What is Ontimize Web?</h2>\n        <p class=\"body-text\">\n            Ontimize Web is web application framework based on Angular 2 for building bussiness software. Ontimize Web makes use of Angular\n            framework and its UI Component framework (Angular Material) to provide a set of reusable, well-teste and accesible\n            components apart from a number of standard services and functionalities.\n        </p>\n    </div>\n\n    <div layout-padding>\n        <h2>Keep up to date</h2>\n        <p class=\"body-text\" style=\"margin-bottom:0px;\">\n            Please refer to our changelog for up-to-date listings of all improvements and breaking changes.\n        </p>\n        <div fxLayout=\"row\" fxLayoutAlign=\"center\">\n            <a class=\"vertical-padding-8 changelog\" href=\"https://github.com/OntimizeWeb/ontimize-web-ngx/blob/master/CHANGELOG.md\" target=\"_blank\">\n                <div layout-padding fxLayout=\"row\" fxLayoutAlign=\"center\">\n                    <md-icon class=\"md-48\">access_time</md-icon>\n                    <span>CHANGELOG</span>\n                </div>\n            </a>\n        </div>\n    </div>\n\n    <md-divider></md-divider>\n\n    <div layout-padding>\n        <h2>Related topics</h2>\n        <p class=\"body-text\">\n            Here are some interesting reading topics that can help you better understand how to develop with Ontimize Web.\n        </p>\n\n        <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\n            <h5>Angular 2 documentation</h5>\n            <a href=\"https://angular.io/docs/ts/latest/\" target=\"_blank\">\n                <md-icon>launch</md-icon>\n            </a>\n        </div>\n        <p class=\"body-text\">\n            Angular 2 is the new improved version of the ever popular JavaScript framework AngularJS. Angular 2 is a re-imagining of\n            Angular applying all lessons learned from v1.x and promotes a component based architecture while leveraging new\n            features of ES2015 (or TypeScript) like classes and modules.\n        </p>\n\n        <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\n            <h5>Google's Material Desing</h5>\n            <a href=\"http://www.google.com/design/spec/material-design/\" target=\"_blank\">\n                <md-icon>launch</md-icon>\n            </a>\n        </div>\n        <p class=\"body-text\">\n            Material Design is a specification for a unified system of visual, motion, and interaction design that adapts across different\n            devices and different screen sizes.\n        </p>\n\n        <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\n            <h5>TypeScript documentation</h5>\n            <a href=\"http://www.typescriptlang.org/docs/tutorial.html\" target=\"_blank\">\n                <md-icon>launch</md-icon>\n            </a>\n        </div>\n        <p class=\"body-text\">\n            TypeScript is a typed superset of JavaScript that compiles to plain JavaScript.\n        </p>\n\n    </div>\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/main/home/home.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "h5 {\n  margin: 0.1em; }\n\n.changelog {\n  text-decoration: none;\n  padding: 8px;\n  background-color: transparent; }\n  .changelog span {\n    line-height: 1.5em;\n    padding-left: 8px; }\n\n.changelog:hover {\n  background-color: rgba(0, 0, 0, 0.12);\n  border-radius: 4px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ontimize_web_ngx__ = __webpack_require__("../../../../ontimize-web-ngx/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_navigation_bar_service__ = __webpack_require__("../../../../../src/app/shared/navigation-bar.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomeComponent = (function () {
    function HomeComponent(navigationService, translateService) {
        this.navigationService = navigationService;
        this.translateService = translateService;
    }
    HomeComponent.prototype.ngOnInit = function () {
        var title = '';
        title = this.translateService.get('INTRODUCTION');
        this.navigationService.setTitle(title);
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'home',
        template: __webpack_require__("../../../../../src/app/main/home/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/main/home/home.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__shared_navigation_bar_service__["a" /* NavigationBarService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_navigation_bar_service__["a" /* NavigationBarService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ontimize_web_ngx__["s" /* OTranslateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ontimize_web_ngx__["s" /* OTranslateService */]) === "function" && _b || Object])
], HomeComponent);

var _a, _b;
//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/main/home/home.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ontimize_web_ngx__ = __webpack_require__("../../../../ontimize-web-ngx/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_component__ = __webpack_require__("../../../../../src/app/main/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_routing_module__ = __webpack_require__("../../../../../src/app/main/home/home-routing.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var HomeModule = (function () {
    function HomeModule() {
    }
    return HomeModule;
}());
HomeModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__["a" /* SharedModule */],
            __WEBPACK_IMPORTED_MODULE_1_ontimize_web_ngx__["u" /* OntimizeWebModule */],
            __WEBPACK_IMPORTED_MODULE_4__home_routing_module__["a" /* HomeRoutingModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__home_component__["a" /* HomeComponent */]
        ]
    })
], HomeModule);

//# sourceMappingURL=home.module.js.map

/***/ }),

/***/ "../../../../../src/app/main/inputs/inputs-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export routes */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InputsRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__inputs_component__ = __webpack_require__("../../../../../src/app/main/inputs/inputs.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__inputs_component__["a" /* InputsComponent */] }
];
var InputsRoutingModule = (function () {
    function InputsRoutingModule() {
    }
    return InputsRoutingModule;
}());
InputsRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["e" /* RouterModule */].forChild(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["e" /* RouterModule */]]
    })
], InputsRoutingModule);

//# sourceMappingURL=inputs-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/main/inputs/inputs-utils.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InputUtils; });
var InputUtils = (function () {
    function InputUtils() {
    }
    InputUtils.getComponentId = function (key) {
        var compId = '';
        switch (key) {
            case 'currency':
                compId = 'Currency Inputs';
                break;
            case 'date':
                compId = 'Date Inputs';
                break;
            case 'email':
                compId = 'Email Inputs';
                break;
            case 'integer':
                compId = 'Integer Inputs';
                break;
            case 'listpicker':
                compId = 'Listpicker Inputs';
                break;
            case 'nif':
                compId = 'NIF Inputs';
                break;
            case 'password':
                compId = 'Password Inputs';
                break;
            case 'percent':
                compId = 'Percent Inputs';
                break;
            case 'real':
                compId = 'Real Inputs';
                break;
            case 'text':
                compId = 'Text Inputs';
                break;
            case 'textarea':
                compId = 'Textarea Inputs';
                break;
            default:
                break;
        }
        return compId;
    };
    InputUtils.getFiles = function (key) {
        var tpl = '';
        switch (key) {
            case 'currency':
                tpl = CURRENCY_HTML_DATA;
                break;
            case 'date':
                tpl = DATE_HTML_DATA;
                break;
            case 'email':
                tpl = EMAIL_HTML_DATA;
                break;
            case 'integer':
                tpl = INTEGER_HTML_DATA;
                break;
            case 'listpicker':
                tpl = LISTPICKER_HTML_DATA;
                break;
            case 'nif':
                tpl = NIF_HTML_DATA;
                break;
            case 'password':
                tpl = PASSWORD_HTML_DATA;
                break;
            case 'percent':
                tpl = PERCENT_HTML_DATA;
                break;
            case 'real':
                tpl = REAL_HTML_DATA;
                break;
            case 'text':
                tpl = TEXT_HTML_DATA;
                break;
            case 'textarea':
                tpl = TEXTAREA_HTML_DATA;
                break;
            default:
                break;
        }
        return [
            {
                'type': 'html',
                'data': tpl
            },
            {
                'type': 'scss',
                'data': ''
            },
            {
                'type': 'typescript',
                'data': ''
            }
        ];
    };
    return InputUtils;
}());

var CURRENCY_HTML_DATA = "\n<o-currency-input attr=\"currency\" label=\"o-currency (read-only)\" layout-padding\n  [data]=\"getCurrencyValue()\" decimal-digits=\"2\"\n  min-decimal-digits=\"2\" max-decimal-digits=\"2\"></o-currency-input>\n\n<o-currency-input #currency attr=\"currency2\" label=\"o-currency (edit mode)\"  layout-padding\n  [data]=\"getCurrencyValue()\" decimal-digits=\"2\"\n  min-decimal-digits=\"2\" max-decimal-digits=\"2\"></o-currency-input>\n\n<o-currency-input attr=\"currency3\" label=\"o-currency disabled\" enabled=\"no\"  layout-padding\n  [data]=\"getCurrencyValue()\" decimal-digits=\"2\"\n  min-decimal-digits=\"2\" max-decimal-digits=\"2\"></o-currency-input>\n";
var EMAIL_HTML_DATA = "\n<o-email-input attr=\"email\" label=\"o-email (read-only)\" layout-padding\n  [data]=\"getEmailValue()\"></o-email-input>\n\n<o-email-input #email attr=\"email2\" label=\"o-email (edit mode)\"  layout-padding\n  [data]=\"getEmailValue()\"></o-email-input>\n\n<o-email-input attr=\"email3\" label=\"o-email disabled\" enabled=\"no\"  layout-padding\n  [data]=\"getEmailValue()\"></o-email-input>\n";
var INTEGER_HTML_DATA = "\n<o-integer-input attr=\"integer\" label=\"o-integer (read-only)\" layout-padding\n  [data]=\"getIntegerValue()\" min=\"0\" max=\"10\"></o-integer-input>\n\n<o-integer-input #integer attr=\"integer2\" label=\"o-integer (edit mode)\"  layout-padding\n  [data]=\"getIntegerValue()\" min=\"0\" max=\"10\"></o-integer-input>\n\n<o-integer-input attr=\"integer3\" label=\"o-integer disabled\" enabled=\"no\"  layout-padding\n  [data]=\"getIntegerValue()\" min=\"0\" max=\"10\"></o-integer-input>\n";
var LISTPICKER_HTML_DATA = "\n<o-list-picker attr=\"listpicker\" label=\"o-list-picker (read-only)\"\n  [static-data]=\"getListPickerData()\" [data]=\"getListPickerValue()\"\n  enabled=\"yes\" filter=\"yes\" value-column=\"CUSTOMERTYPEID\"  columns=\"CUSTOMERTYPEID;DESCRIPTION\"\n  visible-columns=\"DESCRIPTION\" layout-padding></o-list-picker>\n\n<o-list-picker #listpicker attr=\"listpicker2\" label=\"o-list-picker (read-only)\"\n  [static-data]=\"getListPickerData()\" [data]=\"getListPickerValue()\"\n  enabled=\"yes\" filter=\"yes\" value-column=\"CUSTOMERTYPEID\"  columns=\"CUSTOMERTYPEID;DESCRIPTION\"\n  visible-columns=\"DESCRIPTION\" layout-padding></o-list-picker>\n\n<o-list-picker attr=\"listpicker3\" label=\"o-list-picker (read-only)\"\n  [static-data]=\"getListPickerData()\" [data]=\"getListPickerValue()\"\n  enabled=\"no\" filter=\"yes\" value-column=\"CUSTOMERTYPEID\"  columns=\"CUSTOMERTYPEID;DESCRIPTION\"\n  visible-columns=\"DESCRIPTION\" layout-padding></o-list-picker>\n";
var NIF_HTML_DATA = "\n<o-nif-input attr=\"nif\" label=\"o-nif (read-only)\" layout-padding\n  [data]=\"getNIFValue()\"></o-nif-input>\n\n<o-nif-input #nif attr=\"nif2\" label=\"o-nif (edit mode)\"  layout-padding\n  [data]=\"getNIFValue()\"></o-nif-input>\n\n<o-nif-input attr=\"nif3\" label=\"o-nif disabled\" enabled=\"no\"  layout-padding\n  [data]=\"getNIFValue()\"></o-nif-input>\n";
var PASSWORD_HTML_DATA = "\n<o-password-input attr=\"password\" label=\"o-password (read-only)\" layout-padding\n  [data]=\"getPasswordValue()\"></o-password-input>\n\n<o-password-input #password attr=\"password2\" label=\"o-password (edit mode)\"  layout-padding\n  [data]=\"getPasswordValue()\"></o-password-input>\n\n<o-password-input attr=\"password3\" label=\"o-password disabled\" enabled=\"no\"  layout-padding\n  [data]=\"getPasswordValue()\"></o-password-input>\n";
var PERCENT_HTML_DATA = "\n<o-percent-input attr=\"percent\" label=\"o-percent (read-only)\" layout-padding\n  [data]=\"getPercentValue()\"></o-percent-input>\n\n<o-percent-input #percent attr=\"percent2\" label=\"o-percent (edit mode)\"  layout-padding\n  [data]=\"getPercentValue()\"></o-percent-input>\n\n<o-percent-input attr=\"percent3\" label=\"o-percent disabled\" enabled=\"no\"  layout-padding\n  [data]=\"getPercentValue()\"></o-percent-input>\n";
var REAL_HTML_DATA = "\n<o-real-input attr=\"real\" label=\"o-real (read-only)\" layout-padding\n  [data]=\"getRealValue()\" decimal-digits=\"3\" min-decimal-digits=\"2\" max-decimal-digits=\"4\"\n    min=\"30\" max=\"40.0\"></o-real-input>\n\n<o-real-input #real attr=\"real2\" label=\"o-real (edit mode)\"  layout-padding\n  [data]=\"getRealValue()\" decimal-digits=\"3\"  min-decimal-digits=\"2\" max-decimal-digits=\"4\"\n    min=\"30\" max=\"40.0\"></o-real-input>\n\n<o-real-input attr=\"real3\" label=\"o-real disabled\" enabled=\"no\"  layout-padding\n  [data]=\"getRealValue()\" decimal-digits=\"3\"  min-decimal-digits=\"2\" max-decimal-digits=\"4\"\n    min=\"30\" max=\"40.0\"></o-real-input>\n";
var TEXT_HTML_DATA = "\n<o-text-input attr=\"input\" label=\"o-input (read-only)\" layout-padding\n  [data]=\"getInputValue()\"></o-text-input>\n\n<o-text-input #input attr=\"input2\" label=\"o-input (edit mode)\"  layout-padding\n  [data]=\"getInputValue()\"></o-text-input>\n\n<o-text-input attr=\"input3\" label=\"o-input disabled\" enabled=\"no\"  layout-padding\n  [data]=\"getInputValue()\"></o-text-input>";
var DATE_HTML_DATA = "\n<o-date-input attr=\"date\" label=\"o-date (read-only)\" layout-padding\n  [data]=\"getDateValue()\"></o-date-input>\n\n<o-date-input #date attr=\"date2\" label=\"o-date (edit mode)\"  layout-padding\n  [data]=\"getDateValue()\"></o-date-input>\n\n<o-date-input attr=\"date3\" label=\"o-date disabled\" enabled=\"no\"  layout-padding\n  [data]=\"getDateValue()\"></o-date-input>";
var TEXTAREA_HTML_DATA = "\n<o-textarea-input attr=\"textarea\" label=\"o-textarea (read-only)\" layout-padding\n  [data]=\"getTextareaValue()\"></o-textarea-input>\n\n<o-textarea-input #textarea attr=\"textarea2\" label=\"o-textarea (edit mode)\"  layout-padding\n  [data]=\"getTextareaValue()\"></o-textarea-input>\n\n<o-textarea-input attr=\"textarea3\" label=\"o-textarea disabled\" enabled=\"no\"  layout-padding\n  [data]=\"getTextareaValue()\"></o-textarea-input>\n";
//# sourceMappingURL=inputs-utils.js.map

/***/ }),

/***/ "../../../../../src/app/main/inputs/inputs.component.html":
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"column\" fxLayoutAlign=\"center top\" layout-margin>\n\n  <example-comp [comp-name]=\"getComponentId('text')\" [files]=\"getFiles('text')\" fxFill>\n    <div fxFlex=\"grow\">\n      <o-form show-header=\"no\" fxFill>\n        <div fxLayout=\"column\" fxFill layout-padding>\n          <div fxLayout=\"row\" fxFill>\n            <o-text-input attr=\"input\" label=\"o-input (read-only)\" layout-padding [data]=\"getInputValue()\"></o-text-input>\n            <o-text-input #input attr=\"input2\" label=\"o-input (edit mode)\" layout-padding [data]=\"getInputValue()\" required=\"true\" tooltip=\"This is an awesome tooltip!!!!\"></o-text-input>\n            <o-text-input attr=\"input3\" label=\"o-input disabled\" enabled=\"no\" layout-padding [data]=\"getInputValue()\"></o-text-input>\n          </div>\n        </div>\n      </o-form>\n    </div>\n  </example-comp>\n\n  <example-comp [comp-name]=\"getComponentId('date')\" [files]=\"getFiles('date')\" fxFill>\n    <div fxFlex=\"grow\">\n      <o-form show-header=\"no\" fxFill>\n        <div fxLayout=\"column\" fxFill layout-padding>\n          <div fxLayout=\"row\" fxFill>\n            <o-date-input attr=\"date\" label=\"o-date (read-only)\" layout-padding [data]=\"getDateValue()\"></o-date-input>\n            <o-date-input #date attr=\"date2\" label=\"o-date (edit mode)\" layout-padding tooltip=\"This is an awesome tooltip!!!!\" [data]=\"getDateValue()\"\n              required=\"true\"></o-date-input>\n            <o-date-input attr=\"date3\" label=\"o-date disabled\" enabled=\"no\" layout-padding [data]=\"getDateValue()\"></o-date-input>\n          </div>\n        </div>\n      </o-form>\n    </div>\n  </example-comp>\n\n  <example-comp [comp-name]=\"getComponentId('listpicker')\" [files]=\"getFiles('listpicker')\" fxFill>\n    <div fxFlex=\"grow\">\n      <o-form show-header=\"no\" fxFill>\n        <div fxLayout=\"column\" fxFill layout-padding>\n          <div fxLayout=\"row\" fxFill>\n            <o-list-picker attr=\"listpicker\" label=\"o-list-picker (read-only)\" [static-data]=\"getListPickerData()\" [data]=\"getListPickerValue()\"\n              enabled=\"yes\" filter=\"yes\" value-column=\"CUSTOMERTYPEID\" columns=\"CUSTOMERTYPEID;DESCRIPTION\" visible-columns=\"DESCRIPTION\"\n              layout-padding></o-list-picker>\n            <o-list-picker #listpicker attr=\"listpicker2\" label=\"o-list-picker (read-only)\" [static-data]=\"getListPickerData()\" [data]=\"getListPickerValue()\"\n              enabled=\"yes\" filter=\"yes\" value-column=\"CUSTOMERTYPEID\" columns=\"CUSTOMERTYPEID;DESCRIPTION\" visible-columns=\"DESCRIPTION\"\n              layout-padding  required=\"true\"></o-list-picker>\n              <!-- tooltip=\"This is an awesome tooltip!!!!\" -->\n            <o-list-picker attr=\"listpicker3\" label=\"o-list-picker disabled\" [static-data]=\"getListPickerData()\" [data]=\"getListPickerValue()\"\n              enabled=\"no\" filter=\"yes\" value-column=\"CUSTOMERTYPEID\" columns=\"CUSTOMERTYPEID;DESCRIPTION\" visible-columns=\"DESCRIPTION\"\n              layout-padding></o-list-picker>\n          </div>\n        </div>\n      </o-form>\n    </div>\n  </example-comp>\n\n\n  <example-comp [comp-name]=\"getComponentId('integer')\" [files]=\"getFiles('integer')\" fxFill>\n    <div fxFlex=\"grow\">\n      <o-form show-header=\"no\" fxFill>\n        <div fxLayout=\"column\" fxFill layout-padding>\n          <div fxLayout=\"row\" fxFill>\n            <o-integer-input attr=\"integer\" label=\"o-integer (read-only)\" layout-padding [data]=\"getIntegerValue()\" min=\"0\" max=\"10\"></o-integer-input>\n            <o-integer-input #integer attr=\"integer2\" label=\"o-integer (edit mode)\" layout-padding tooltip=\"This is an awesome tooltip!!!!\"\n              [data]=\"getIntegerValue()\" min=\"0\" max=\"10\" required=\"true\"></o-integer-input>\n            <o-integer-input attr=\"integer3\" label=\"o-integer disabled\" enabled=\"no\" layout-padding [data]=\"getIntegerValue()\" min=\"0\"\n              max=\"10\"></o-integer-input>\n          </div>\n        </div>\n      </o-form>\n    </div>\n  </example-comp>\n\n  <example-comp [comp-name]=\"getComponentId('real')\" [files]=\"getFiles('real')\" fxFill>\n    <div fxFlex=\"grow\">\n      <o-form show-header=\"no\" fxFill>\n        <div fxLayout=\"column\" fxFill layout-padding>\n          <div fxLayout=\"row\" fxFill>\n            <o-real-input attr=\"real\" label=\"o-real (read-only)\" layout-padding [data]=\"getRealValue()\" decimal-digits=\"3\" min-decimal-digits=\"2\"\n              max-decimal-digits=\"4\" min=\"30\" max=\"40.0\"></o-real-input>\n            <o-real-input #real attr=\"real2\" label=\"o-real (edit mode)\" layout-padding tooltip=\"This is an awesome tooltip!!!!\" [data]=\"getRealValue()\"\n              decimal-digits=\"3\" min-decimal-digits=\"2\" max-decimal-digits=\"4\" min=\"30\" max=\"40.0\" required=\"true\"></o-real-input>\n            <o-real-input attr=\"real3\" label=\"o-real disabled\" enabled=\"no\" layout-padding [data]=\"getRealValue()\" decimal-digits=\"3\"\n              min-decimal-digits=\"2\" max-decimal-digits=\"4\" min=\"30\" max=\"40.0\"></o-real-input>\n          </div>\n        </div>\n      </o-form>\n    </div>\n  </example-comp>\n\n  <example-comp [comp-name]=\"getComponentId('percent')\" [files]=\"getFiles('percent')\" fxFill>\n    <div fxFlex=\"grow\">\n      <o-form show-header=\"no\" fxFill>\n        <div fxLayout=\"column\" fxFill layout-padding>\n          <div fxLayout=\"row\" fxFill>\n            <o-percent-input attr=\"percent\" label=\"o-percent (read-only)\" layout-padding [data]=\"getPercentValue()\"></o-percent-input>\n            <o-percent-input #percent attr=\"percent2\" label=\"o-percent (edit mode)\" layout-padding tooltip=\"This is an awesome tooltip!!!!\"\n              [data]=\"getPercentValue()\" required=\"true\"></o-percent-input>\n            <o-percent-input attr=\"percent3\" label=\"o-percent disabled\" enabled=\"no\" layout-padding [data]=\"getPercentValue()\"></o-percent-input>\n          </div>\n        </div>\n      </o-form>\n    </div>\n  </example-comp>\n\n  <example-comp [comp-name]=\"getComponentId('currency')\" [files]=\"getFiles('currency')\" fxFill>\n    <div fxFlex=\"grow\">\n      <o-form show-header=\"no\" fxFill>\n        <div fxLayout=\"column\" fxFill layout-padding>\n          <div fxLayout=\"row\" fxFill>\n            <o-currency-input attr=\"currency\" label=\"o-currency (read-only)\" layout-padding [data]=\"getCurrencyValue()\" decimal-digits=\"2\"\n              min-decimal-digits=\"2\" max-decimal-digits=\"2\"></o-currency-input>\n            <o-currency-input #currency attr=\"currency2\" label=\"o-currency (edit mode)\" layout-padding tooltip=\"This is an awesome tooltip!!!!\"\n              [data]=\"getCurrencyValue()\" decimal-digits=\"2\" min-decimal-digits=\"2\" max-decimal-digits=\"2\" required=\"true\"></o-currency-input>\n            <o-currency-input attr=\"currency3\" label=\"o-currency disabled\" enabled=\"no\" layout-padding [data]=\"getCurrencyValue()\" decimal-digits=\"2\"\n              min-decimal-digits=\"2\" max-decimal-digits=\"2\"></o-currency-input>\n          </div>\n        </div>\n      </o-form>\n    </div>\n  </example-comp>\n\n  <example-comp [comp-name]=\"getComponentId('nif')\" [files]=\"getFiles('nif')\" fxFill>\n    <div fxFlex=\"grow\">\n      <o-form show-header=\"no\" fxFill>\n        <div fxLayout=\"column\" fxFill layout-padding>\n          <div fxLayout=\"row\" fxFill>\n            <o-nif-input attr=\"nif\" label=\"o-nif (read-only)\" layout-padding [data]=\"getNIFValue()\"></o-nif-input>\n            <o-nif-input #nif attr=\"nif2\" label=\"o-nif (edit mode)\" layout-padding tooltip=\"This is an awesome tooltip!!!!\" [data]=\"getNIFValue()\"\n              required=\"true\"></o-nif-input>\n            <o-nif-input attr=\"nif3\" label=\"o-nif disabled\" enabled=\"no\" layout-padding [data]=\"getNIFValue()\"></o-nif-input>\n          </div>\n        </div>\n      </o-form>\n    </div>\n  </example-comp>\n\n  <example-comp [comp-name]=\"getComponentId('email')\" [files]=\"getFiles('email')\" fxFill>\n    <div fxFlex=\"grow\">\n      <o-form show-header=\"no\" fxFill>\n        <div fxLayout=\"column\" fxFill layout-padding>\n          <div fxLayout=\"row\" fxFill>\n            <o-email-input attr=\"email\" label=\"o-email (read-only)\" layout-padding [data]=\"getEmailValue()\"></o-email-input>\n            <o-email-input #email required=\"true\" attr=\"email2\" label=\"o-email (edit mode)\" layout-padding tooltip=\"This is an awesome tooltip!!!!\"\n              [data]=\"getEmailValue()\"></o-email-input>\n            <o-email-input attr=\"email3\" label=\"o-email disabled\" enabled=\"no\" layout-padding [data]=\"getEmailValue()\"></o-email-input>\n          </div>\n        </div>\n      </o-form>\n    </div>\n  </example-comp>\n\n  <example-comp [comp-name]=\"getComponentId('password')\" [files]=\"getFiles('password')\" fxFill>\n    <div fxFlex=\"grow\">\n      <o-form show-header=\"no\" fxFill>\n        <div fxLayout=\"column\" fxFill layout-padding>\n          <div fxLayout=\"row\" fxFill>\n            <o-password-input attr=\"password\" label=\"o-password (read-only)\" layout-padding [data]=\"getPasswordValue()\"></o-password-input>\n            <o-password-input #password attr=\"password2\" label=\"o-password (edit mode)\" layout-padding tooltip=\"This is an awesome tooltip!!!!\"\n              [data]=\"getPasswordValue()\" required=\"true\"></o-password-input>\n            <o-password-input attr=\"password3\" label=\"o-password disabled\" enabled=\"no\" layout-padding [data]=\"getPasswordValue()\"></o-password-input>\n          </div>\n        </div>\n      </o-form>\n    </div>\n  </example-comp>\n\n  <example-comp [comp-name]=\"getComponentId('textarea')\" [files]=\"getFiles('textarea')\" fxFill>\n    <div fxFlex=\"grow\">\n      <o-form show-header=\"no\" fxFill>\n        <div fxLayout=\"column\" fxFill layout-padding>\n          <div fxLayout=\"column\" layout-padding fxFill>\n            <o-textarea-input attr=\"textarea\" label=\"o-textarea (read-only)\" layout-padding [data]=\"getTextareaValue()\" rows=\"10\"></o-textarea-input>\n            <o-textarea-input #textarea attr=\"textarea2\" label=\"o-textarea (edit mode)\" layout-padding tooltip=\"This is an awesome tooltip!!!!\"\n              [data]=\"getTextareaValue()\" rows=\"10\"></o-textarea-input>\n            <o-textarea-input attr=\"textarea3\" label=\"o-textarea disabled\" enabled=\"no\" layout-padding [data]=\"getTextareaValue()\" rows=\"10\"></o-textarea-input>\n          </div>\n        </div>\n      </o-form>\n    </div>\n  </example-comp>\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/main/inputs/inputs.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main/inputs/inputs.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InputsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ontimize_web_ngx__ = __webpack_require__("../../../../ontimize-web-ngx/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_navigation_bar_service__ = __webpack_require__("../../../../../src/app/shared/navigation-bar.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__inputs_utils__ = __webpack_require__("../../../../../src/app/main/inputs/inputs-utils.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



;

var InputsComponent = (function () {
    function InputsComponent(navigationService, translateService) {
        this.navigationService = navigationService;
        this.translateService = translateService;
    }
    InputsComponent.prototype.ngOnInit = function () {
        var title = '';
        title += this.translateService.get('INPUTS');
        title = title + ' > ' + this.translateService.get('INPUTS');
        this.navigationService.setTitle(title);
        this.dateValue = new Date('October 13, 2016 11:13:00');
    };
    InputsComponent.prototype.ngAfterViewInit = function () {
        this.input.isReadOnly = false;
        this.integer.isReadOnly = false;
        this.real.isReadOnly = false;
        this.percent.isReadOnly = false;
        this.currency.isReadOnly = false;
        this.nif.isReadOnly = false;
        this.email.isReadOnly = false;
        this.password.isReadOnly = false;
        this.textarea.isReadOnly = false;
        this.date.isReadOnly = false;
        this.listpicker.isReadOnly = false;
    };
    InputsComponent.prototype.getInputValue = function () {
        return 'John Doe';
    };
    InputsComponent.prototype.getDateValue = function () {
        return this.dateValue;
    };
    InputsComponent.prototype.getIntegerValue = function () {
        return 1;
    };
    InputsComponent.prototype.getRealValue = function () {
        return 33.45;
    };
    InputsComponent.prototype.getPercentValue = function () {
        return 52.55;
    };
    InputsComponent.prototype.getCurrencyValue = function () {
        return 2574.99;
    };
    InputsComponent.prototype.getNIFValue = function () {
        return '00000000T';
    };
    InputsComponent.prototype.getEmailValue = function () {
        return 'john.doe@ontimize.com';
    };
    InputsComponent.prototype.getPasswordValue = function () {
        return 'password';
    };
    InputsComponent.prototype.getTextareaValue = function () {
        return "\n    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In tempor porta arcu,\n     ut ultricies magna sodales egestas. Mauris et tempus lacus. Nunc gravida sodales\n     ipsum, a convallis arcu placerat rhoncus. Suspendisse in sollicitudin leo. Nam\n     efficitur dolor vitae tortor commodo tincidunt. Suspendisse ornare scelerisque\n     lectus, nec interdum turpis mattis ut. Morbi congue, diam quis varius tincidunt,\n     ante quam vulputate arcu, sit amet faucibus tortor dui et erat. Cras eget erat\n     at erat ultrices varius. Phasellus interdum enim sagittis tortor consequat lobortis.\n     Fusce tortor risus, pharetra eget diam mollis, rutrum mollis sem. Nullam pellentesque\n     risus id suscipit malesuada. Etiam non sem cursus libero faucibus congue.\n     Sed arcu lorem, scelerisque sit amet porttitor sed, vehicula consectetur lacus.\n     Vestibulum suscipit ante quis condimentum laoreet. Ut quis volutpat neque.\n    ";
    };
    InputsComponent.prototype.getListPickerData = function () {
        var array = [];
        array.push({
            'CUSTOMERTYPEID': 1,
            'DESCRIPTION': 'VIP'
        });
        array.push({
            'CUSTOMERTYPEID': 2,
            'DESCRIPTION': 'Normal'
        });
        array.push({
            'CUSTOMERTYPEID': 3,
            'DESCRIPTION': 'Other'
        });
        return array;
    };
    InputsComponent.prototype.getListPickerValue = function () {
        return 2;
    };
    InputsComponent.prototype.getComponentId = function (key) {
        return __WEBPACK_IMPORTED_MODULE_3__inputs_utils__["a" /* InputUtils */].getComponentId(key);
    };
    InputsComponent.prototype.getFiles = function (key) {
        return __WEBPACK_IMPORTED_MODULE_3__inputs_utils__["a" /* InputUtils */].getFiles(key);
    };
    return InputsComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('input'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ontimize_web_ngx__["q" /* OTextInputComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ontimize_web_ngx__["q" /* OTextInputComponent */]) === "function" && _a || Object)
], InputsComponent.prototype, "input", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('date'),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ontimize_web_ngx__["g" /* ODateInputComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ontimize_web_ngx__["g" /* ODateInputComponent */]) === "function" && _b || Object)
], InputsComponent.prototype, "date", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('integer'),
    __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ontimize_web_ngx__["i" /* OIntegerInputComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ontimize_web_ngx__["i" /* OIntegerInputComponent */]) === "function" && _c || Object)
], InputsComponent.prototype, "integer", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('real'),
    __metadata("design:type", typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ontimize_web_ngx__["p" /* ORealInputComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ontimize_web_ngx__["p" /* ORealInputComponent */]) === "function" && _d || Object)
], InputsComponent.prototype, "real", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('percent'),
    __metadata("design:type", typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1_ontimize_web_ngx__["o" /* OPercentInputComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ontimize_web_ngx__["o" /* OPercentInputComponent */]) === "function" && _e || Object)
], InputsComponent.prototype, "percent", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('currency'),
    __metadata("design:type", typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1_ontimize_web_ngx__["f" /* OCurrencyInputComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ontimize_web_ngx__["f" /* OCurrencyInputComponent */]) === "function" && _f || Object)
], InputsComponent.prototype, "currency", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('nif'),
    __metadata("design:type", typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_1_ontimize_web_ngx__["k" /* ONIFInputComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ontimize_web_ngx__["k" /* ONIFInputComponent */]) === "function" && _g || Object)
], InputsComponent.prototype, "nif", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('email'),
    __metadata("design:type", typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_1_ontimize_web_ngx__["h" /* OEmailInputComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ontimize_web_ngx__["h" /* OEmailInputComponent */]) === "function" && _h || Object)
], InputsComponent.prototype, "email", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('password'),
    __metadata("design:type", typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_1_ontimize_web_ngx__["n" /* OPasswordInputComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ontimize_web_ngx__["n" /* OPasswordInputComponent */]) === "function" && _j || Object)
], InputsComponent.prototype, "password", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('textarea'),
    __metadata("design:type", typeof (_k = typeof __WEBPACK_IMPORTED_MODULE_1_ontimize_web_ngx__["r" /* OTextareaInputComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ontimize_web_ngx__["r" /* OTextareaInputComponent */]) === "function" && _k || Object)
], InputsComponent.prototype, "textarea", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('listpicker'),
    __metadata("design:type", typeof (_l = typeof __WEBPACK_IMPORTED_MODULE_1_ontimize_web_ngx__["j" /* OListPickerComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ontimize_web_ngx__["j" /* OListPickerComponent */]) === "function" && _l || Object)
], InputsComponent.prototype, "listpicker", void 0);
InputsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-inputs',
        template: __webpack_require__("../../../../../src/app/main/inputs/inputs.component.html"),
        styles: [__webpack_require__("../../../../../src/app/main/inputs/inputs.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_m = typeof __WEBPACK_IMPORTED_MODULE_2__shared_navigation_bar_service__["a" /* NavigationBarService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_navigation_bar_service__["a" /* NavigationBarService */]) === "function" && _m || Object, typeof (_o = typeof __WEBPACK_IMPORTED_MODULE_1_ontimize_web_ngx__["s" /* OTranslateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ontimize_web_ngx__["s" /* OTranslateService */]) === "function" && _o || Object])
], InputsComponent);

var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o;
//# sourceMappingURL=inputs.component.js.map

/***/ }),

/***/ "../../../../../src/app/main/inputs/inputs.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InputsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ontimize_web_ngx__ = __webpack_require__("../../../../ontimize-web-ngx/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__inputs_component__ = __webpack_require__("../../../../../src/app/main/inputs/inputs.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__inputs_routing_module__ = __webpack_require__("../../../../../src/app/main/inputs/inputs-routing.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var InputsModule = (function () {
    function InputsModule() {
    }
    return InputsModule;
}());
InputsModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__["a" /* SharedModule */],
            __WEBPACK_IMPORTED_MODULE_1_ontimize_web_ngx__["u" /* OntimizeWebModule */],
            __WEBPACK_IMPORTED_MODULE_4__inputs_routing_module__["a" /* InputsRoutingModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__inputs_component__["a" /* InputsComponent */]
        ]
    })
], InputsModule);

//# sourceMappingURL=inputs.module.js.map

/***/ }),

/***/ "../../../../../src/app/main/lists/lists-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export routes */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListsRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lists_component__ = __webpack_require__("../../../../../src/app/main/lists/lists.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__lists_component__["a" /* ListsComponent */] }
];
var ListsRoutingModule = (function () {
    function ListsRoutingModule() {
    }
    return ListsRoutingModule;
}());
ListsRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["e" /* RouterModule */].forChild(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["e" /* RouterModule */]]
    })
], ListsRoutingModule);

//# sourceMappingURL=lists-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/main/lists/lists-utils.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListsUtils; });
var ListsUtils = (function () {
    function ListsUtils() {
    }
    ListsUtils.getComponentId = function (key) {
        var compId = '';
        switch (key) {
            case 'o-list-item-text':
                compId = 'Customizable list (o-list-item-text)';
                break;
            case 'o-list-item-avatar':
                compId = 'Customizable list (o-list-item-avatar)';
                break;
            case 'o-list-item-card':
                compId = 'Customizable list (o-list-item-card)';
                break;
            case 'o-list-item-card-image':
                compId = 'Customizable list (o-list-item-card-image)';
                break;
            default:
                compId = '';
                break;
        }
        return compId;
    };
    ListsUtils.getHtml = function (key, list, itemData) {
        var tpl = '';
        switch (key) {
            case 'o-list-item-text':
                tpl = LIST1_HTML_DATA;
                break;
            case 'o-list-item-avatar':
                tpl = LIST2_HTML_DATA;
                break;
            case 'o-list-item-card':
                tpl = LIST3_HTML_DATA;
                break;
            case 'o-list-item-card-image':
                tpl = LIST4_HTML_DATA;
                break;
            default:
                tpl = 'no-data';
                break;
        }
        if (list) {
            tpl = tpl.replace('{title}', list.title || '')
                .replace('{quickFilter}', list.quickFilter)
                .replace('{refreshButton}', list.refreshButton)
                .replace('{insertButton}', list.insertButton)
                .replace('{selectable}', list.selectable)
                .replace('{dense}', list.dense || false)
                .replace('{detailButtonInRow}', list.detailButtonInRow)
                .replace('{detailButtonInRowIcon}', list.detailButtonInRowIcon || '')
                .replace('{editButtonInRow}', list.editButtonInRow)
                .replace('{editButtonInRowIcon}', list.editButtonInRowIcon || '')
                .replace('{rowHeight}', list.rowHeight || '');
        }
        if (itemData) {
            tpl = tpl.replace('{collapsible}', itemData.collapsible)
                .replace('{collapsed}', itemData.collapsed);
            if (itemData.hasOwnProperty('icon')) {
                tpl = tpl.replace('{icon}', itemData.icon)
                    .replace('{iconPosition}', itemData.iconPosition || '');
            }
            else {
                tpl = tpl.replace('icon="{icon}"', '')
                    .replace(' icon-position="{iconPosition}"', '');
            }
            if (itemData.action1 && itemData.action1.length) {
                tpl = tpl.replace('{action1}', itemData.action1);
            }
            else {
                tpl = tpl.replace('action-1-text="{action1}"', '');
            }
            if (itemData.action2 && itemData.action2.length) {
                tpl = tpl.replace('{action2}', itemData.action2);
            }
            else {
                tpl = tpl.replace('action-2-text="{action2}"', '');
            }
            if (!itemData.image) {
                tpl = tpl.replace('image="{{ row.image }}"', '');
            }
            if (!itemData.avatar) {
                tpl = tpl.replace('avatar="{{ row.thumbnailUrl }}"', '');
            }
        }
        return tpl;
    };
    ListsUtils.getFiles = function (key, list) {
        return [{
                'type': 'scss',
                'data': ''
            }, {
                'type': 'typescript',
                'data': this.getTypescript(key)
            }];
    };
    ListsUtils.getTypescript = function (key) {
        var typescriptCode = '';
        switch (key) {
            case 'o-list-item-avatar':
                typescriptCode += "\n          addToFavorites(itemData, item) {\n            if (item.icon === 'star') {\n              item.icon = 'star_border';\n            } else {\n              item.icon = 'star';\n            }\n          }\n        ";
                break;
            case 'o-list-item-text':
                typescriptCode += "\n\n          getUsers() {\n            return [\n              {\n                'id': 1,\n                'name': 'Leanne Graham',\n                'username': 'Bret',\n                'email': 'Sincere@april.biz',\n                'street': 'Kulas Light',\n                'phone': '1-770-736-8031 x56442',\n                'thumbnailUrl': 'http://placehold.it/150/30ac17',\n                'image': 'http://placehold.it/600/30ac17',\n                'body': `laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora\n                quo necessitatibus\ndolor\n                quam autem quasi\nreiciendis et nam sapiente accusantium`\n              },\n              {\n                'id': 2,\n                'name': 'Ervin Howell',\n                'username': 'Antonette',\n                'email': 'Shanna@melissa.tv',\n                'street': 'Victor Plains',\n                'phone': '010-692-6593 x09125',\n                'thumbnailUrl': 'http://placehold.it/150/dff9f6',\n                'image': 'http://placehold.it/600/dff9f6',\n                'body': `est natus enim nihil est dolore omnis voluptatem\n                numquam\net omnis occaecati quod ullam at\nvoluptatem error\n                expedita pariatur\nnihil sint nostrum voluptatem reiciendis et`\n              },\n              {\n                'id': 3,\n                'name': 'Clementine Bauch',\n                'username': 'Samantha',\n                'email': 'Nathan@yesenia.net',\n                'street': 'Douglas Extension',\n                'phone': '1-463-123-4447',\n                'thumbnailUrl': 'http://placehold.it/150/1941e9',\n                'image': 'http://placehold.it/600/1941e9',\n                'body': `quia molestiae reprehenderit quasi aspernatur\naut expedita\n                occaecati aliquam eveniet laudantium\nomnis quibusdam delectus saepe\n                quia accusamus maiores nam est\ncum et ducimus et vero voluptates\n                  excepturi deleniti ratione`\n              },\n              {\n                'id': 4,\n                'name': 'Patricia Lebsack',\n                'username': 'Karianne',\n                'email': 'Julianne.OConner@kory.org',\n                'street': 'Hoeger Mall',\n                'phone': '493-170-9623 x156',\n                'thumbnailUrl': 'http://placehold.it/150/39e985',\n                'image': 'http://placehold.it/600/39e985',\n                'body': `non et atque\noccaecati deserunt quas accusantium unde odit\n                nobis qui voluptatem\nquia voluptas consequuntur itaque dolor\net\n                qui rerum deleniti ut occaecati`\n              },\n              {\n                'id': 5,\n                'name': 'Chelsey Dietrich',\n                'username': 'Kamren',\n                'email': 'Lucio_Hettinger@annie.ca',\n                'street': 'Skiles Walks',\n                'phone': '(254)954-1289',\n                'thumbnailUrl': 'http://placehold.it/150/7735a',\n                'image': 'http://placehold.it/600/7735a',\n                'body': `harum non quasi et ratione\ntempore iure ex voluptates\n                in ratione\nharum architecto fugit inventore cupiditate\nvoluptates\n                magni quo et`\n              }\n            ];\n          }\n        ";
                break;
            case 'o-list-item-card':
                break;
            case 'o-list-item-card-image':
                break;
            default:
                break;
        }
        return typescriptCode;
    };
    ListsUtils.getUsers = function () {
        return FAKE_USERS_LIST;
    };
    return ListsUtils;
}());

var LIST1_HTML_DATA = "\n<o-list #list fxFill keys=\"id\" query-on-init=\"true\" pageable=\"no\"\n  columns=\"id;name;username;email;street;phone\" quick-filter-columns=\"name;username\"\n  [static-data]=\"getUsers()\" title=\"{title}\" quick-filter=\"{quickFilter}\"\n  refresh-button=\"{refreshButton}\" insert-button=\"{insertButton}\" selectable=\"{selectable}\"\n  dense=\"{dense}\" detail-button-in-row=\"{detailButtonInRow}\"\n  detail-button-in-row-icon=\"{detailButtonInRowIcon}\"\n  edit-button-in-row=\"{editButtonInRow}\" edit-button-in-row-icon=\"{editButtonInRowIcon}\">\n\n  <o-list-item *ngFor=\"let row of list.dataArray\">\n    <o-list-item-text #item title=\"{{row.username}}\"\n      secondary-text=\"{{ row.body }}\"> (icon-action)=\"addToFavorites(row, item)\"\n      icon=\"{icon}\" icon-position=\"{iconPosition}\">\n    </o-list-item-text>\n  </o-list-item>\n\n</o-list>\n";
var LIST2_HTML_DATA = "\n<o-list #list fxFill keys=\"id\" query-on-init=\"true\" pageable=\"no\"\n  columns=\"id;name;username;email;street;phone\" quick-filter-columns=\"name;username\"\n  [static-data]=\"getUsers()\" title=\"{title}\" quick-filter=\"{quickFilter}\"\n  refresh-button=\"{refreshButton}\" insert-button=\"{insertButton}\" selectable=\"{selectable}\"\n  dense=\"{dense}\" detail-button-in-row=\"{detailButtonInRow}\"\n  detail-button-in-row-icon=\"{detailButtonInRowIcon}\"\n  edit-button-in-row=\"{editButtonInRow}\" edit-button-in-row-icon=\"{editButtonInRowIcon}\">\n\n  <o-list-item *ngFor=\"let row of list.dataArray\">\n    <o-list-item-avatar #item avatar=\"{{ row.thumbnailUrl }}\"\n      title=\"{{row.name}}\" secondary-text=\"{{ row.body }}\"\n      (icon-action)=\"addToFavorites(row, item)\" icon=\"{icon}\">\n    </o-list-item-avatar>\n  </o-list-item>\n\n</o-list>\n";
var LIST3_HTML_DATA = "\n<o-list #list fxFill keys=\"id\" query-on-init=\"true\" pageable=\"no\"\n  columns=\"id;name;username;email;street;phone\" quick-filter-columns=\"name;username\"\n  [static-data]=\"getUsers()\" title=\"{title}\" quick-filter=\"{quickFilter}\"\n  refresh-button=\"{refreshButton}\" insert-button=\"{insertButton}\" selectable=\"no\"\n  dense=\"{dense}\" detail-button-in-row=\"{detailButtonInRow}\"\n  detail-button-in-row-icon=\"{detailButtonInRowIcon}\"\n  edit-button-in-row=\"{editButtonInRow}\" edit-button-in-row-icon=\"{editButtonInRowIcon}\"\n  row-height=\"{rowHeight}\">\n\n  <o-list-item *ngFor=\"let row of list.dataArray\">\n    <o-list-item-card #item\n      title=\"{{row.username}}\" subtitle=\"{{row.name}}\" image=\"{{ row.image }}\"\n      action-1-text=\"{action1}\" action-2-text=\"{action2}\"\n      (action-1)=\"onAction1()\" (action-2)=\"onAction2()\">\n    </o-list-item-card>\n  </o-list-item>\n\n<o-list>\n";
var LIST4_HTML_DATA = "\n<o-list #list fxFill keys=\"id\" query-on-init=\"true\" pageable=\"no\"\n  columns=\"id;name;username;email;street;phone\" quick-filter-columns=\"name;username\"\n  [static-data]=\"getUsers()\" title=\"{title}\" quick-filter=\"{quickFilter}\"\n  refresh-button=\"{refreshButton}\" insert-button=\"{insertButton}\" selectable=\"no\"\n  detail-button-in-row=\"no\" row-height=\"large\">\n\n  <o-list-item *ngFor=\"let row of list.dataArray\">\n    <o-list-item-card-image #item title=\"{{row.username}}\" subtitle=\"{{row.name}}\"\n      content=\"{{ row.body }}\" avatar=\"{{ row.thumbnailUrl }}\" image=\"{{ row.image }}\"\n      action-1-text=\"{action1}\" action-2-text=\"{action2}\"\n      (action-1)=\"onAction1()\" (action-2)=\"onAction2()\"\n      icon=\"{icon}\" (icon-action)=\"onIconAction()\"\n      collapsible=\"{collapsible}\" collapsed=\"{collapsed}\">\n    </o-list-item-card-image>\n  </o-list-item>\n\n<o-list>\n";
var FAKE_USERS_LIST = [
    {
        'id': 1,
        'name': 'Leanne Graham',
        'username': 'Bret',
        'email': 'Sincere@april.biz',
        'street': 'Kulas Light',
        'suite': 'Apt. 556',
        'city': 'Gwenborough',
        'zipcode': '92998-3874',
        'lat': '-37.3159',
        'lng': '81.1496',
        'phone': '1-770-736-8031 x56442',
        'website': 'hildegard.org',
        'companyname': 'Romaguera-Crona',
        'companycatchPhrase': 'Multi-layered client-server neural-net',
        'companybs': 'harness real-time e-markets',
        'thumbnailUrl': 'http://placehold.it/150/30ac17',
        'image': 'http://placehold.it/600/30ac17',
        'body': "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora\n    quo necessitatibus\ndolor\n    quam autem quasi\nreiciendis et nam sapiente accusantium"
    },
    {
        'id': 2,
        'name': 'Ervin Howell',
        'username': 'Antonette',
        'email': 'Shanna@melissa.tv',
        'street': 'Victor Plains',
        'suite': 'Suite 879',
        'city': 'Wisokyburgh',
        'zipcode': '90566-7771',
        'lat': '-43.9509',
        'lng': '-34.4618',
        'phone': '010-692-6593 x09125',
        'website': 'anastasia.net',
        'companyname': 'Deckow-Crist',
        'companycatchPhrase': 'Proactive didactic contingency',
        'companybs': 'synergize scalable supply-chains',
        'thumbnailUrl': 'http://placehold.it/150/dff9f6',
        'image': 'http://placehold.it/600/dff9f6',
        'body': "est natus enim nihil est dolore omnis voluptatem\n     numquam\net omnis occaecati quod ullam at\nvoluptatem error\n     expedita pariatur\nnihil sint nostrum voluptatem reiciendis et"
    },
    {
        'id': 3,
        'name': 'Clementine Bauch',
        'username': 'Samantha',
        'email': 'Nathan@yesenia.net',
        'street': 'Douglas Extension',
        'suite': 'Suite 847',
        'city': 'McKenziehaven',
        'zipcode': '59590-4157',
        'lat': '-68.6102',
        'lng': '-47.0653',
        'phone': '1-463-123-4447',
        'website': 'ramiro.info',
        'companyname': 'Romaguera-Jacobson',
        'companycatchPhrase': 'Face to face bifurcated interface',
        'companybs': 'e-enable strategic applications',
        'thumbnailUrl': 'http://placehold.it/150/1941e9',
        'image': 'http://placehold.it/600/1941e9',
        'body': "quia molestiae reprehenderit quasi aspernatur\naut expedita\n    occaecati aliquam eveniet laudantium\nomnis quibusdam delectus saepe\n     quia accusamus maiores nam est\ncum et ducimus et vero voluptates\n      excepturi deleniti ratione"
    },
    {
        'id': 4,
        'name': 'Patricia Lebsack',
        'username': 'Karianne',
        'email': 'Julianne.OConner@kory.org',
        'street': 'Hoeger Mall',
        'suite': 'Apt. 692',
        'city': 'South Elvis',
        'zipcode': '53919-4257',
        'lat': '29.4572',
        'lng': '-164.2990',
        'phone': '493-170-9623 x156',
        'website': 'kale.biz',
        'companyname': 'Robel-Corkery',
        'companycatchPhrase': 'Multi-tiered zero tolerance productivity',
        'companybs': 'transition cutting-edge web services',
        'thumbnailUrl': 'http://placehold.it/150/39e985',
        'image': 'http://placehold.it/600/39e985',
        'body': "non et atque\noccaecati deserunt quas accusantium unde odit\n    nobis qui voluptatem\nquia voluptas consequuntur itaque dolor\net\n    qui rerum deleniti ut occaecati"
    },
    {
        'id': 5,
        'name': 'Chelsey Dietrich',
        'username': 'Kamren',
        'email': 'Lucio_Hettinger@annie.ca',
        'street': 'Skiles Walks',
        'suite': 'Suite 351',
        'city': 'Roscoeview',
        'zipcode': '33263',
        'lat': '-31.8129',
        'lng': '62.5342',
        'phone': '(254)954-1289',
        'website': 'demarco.info',
        'companyname': 'Keebler LLC',
        'companycatchPhrase': 'User-centric fault-tolerant solution',
        'companybs': 'revolutionize end-to-end systems',
        'thumbnailUrl': 'http://placehold.it/150/7735a',
        'image': 'http://placehold.it/600/7735a',
        'body': "harum non quasi et ratione\ntempore iure ex voluptates\n    in ratione\nharum architecto fugit inventore cupiditate\nvoluptates\n    magni quo et"
    },
    {
        'id': 6,
        'name': 'Mrs. Dennis Schulist',
        'username': 'Leopoldo_Corkery',
        'email': 'Karley_Dach@jasper.info',
        'street': 'Norberto Crossing',
        'suite': 'Apt. 950',
        'city': 'South Christy',
        'zipcode': '23505-1337',
        'lat': '-71.4197',
        'lng': '71.7478',
        'phone': '1-477-935-8478 x6430',
        'website': 'ola.org',
        'companyname': 'Considine-Lockman',
        'companycatchPhrase': 'Synchronised bottom-line interface',
        'companybs': 'e-enable innovative applications',
        'thumbnailUrl': 'http://placehold.it/150/aef555',
        'image': 'http://placehold.it/600/aef555',
        'body': "laudantium enim quasi est quidem magnam voluptate\u00B4\n    ipsam eos\ntempora quo necessitatibus\ndolor quam autem\n    quasi\nreiciendis et nam sapiente accusantium"
    },
    {
        'id': 7,
        'name': 'Kurtis Weissnat',
        'username': 'Elwyn.Skiles',
        'email': 'Telly.Hoeger@billy.biz',
        'street': 'Rex Trail',
        'suite': 'Suite 280',
        'city': 'Howemouth',
        'zipcode': '58804-1099',
        'lat': '24.8918',
        'lng': '21.8984',
        'phone': '210.067.6132',
        'website': 'elvis.io',
        'companyname': 'Johns Group',
        'companycatchPhrase': 'Configurable multimedia task-force',
        'companybs': 'generate enterprise e-tailers',
        'thumbnailUrl': 'http://placehold.it/150/c672a0',
        'image': 'http://placehold.it/600/c672a0',
        'body': "est natus enim nihil est dolore omnis voluptatem numquam\net\n    omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil\n     sint nostrum voluptatem reiciendis et"
    },
    {
        'id': 8,
        'name': 'Nicholas Runolfsdottir V',
        'username': 'Maxime_Nienow',
        'email': 'Sherwood@rosamond.me',
        'street': 'Ellsworth Summit',
        'suite': 'Suite 729',
        'city': 'Aliyaview',
        'zipcode': '45169',
        'lat': '-14.3990',
        'lng': '-120.7677',
        'phone': '586.493.6943 x140',
        'website': 'jacynthe.com',
        'companyname': 'Abernathy Group',
        'companycatchPhrase': 'Implemented secondary concept',
        'companybs': 'e-enable extensible e-tailers',
        'thumbnailUrl': 'http://placehold.it/150/412ffd',
        'image': 'http://placehold.it/600/412ffd',
        'body': "quia molestiae reprehenderit quasi aspernatur\naut\n    expedita occaecati aliquam eveniet laudantium\nomnis quibusdam\n    delectus saepe quia accusamus maiores nam est\ncum et ducimus\n    et vero voluptates excepturi deleniti ratione"
    },
    {
        'id': 9,
        'name': 'Glenna Reichert',
        'username': 'Delphine',
        'email': 'Chaim_McDermott@dana.io',
        'street': 'Dayna Park',
        'suite': 'Suite 449',
        'city': 'Bartholomebury',
        'zipcode': '76495-3109',
        'lat': '24.6463',
        'lng': '-168.8889',
        'phone': '(775)976-6794 x41206',
        'website': 'conrad.com',
        'companyname': 'Yost and Sons',
        'companycatchPhrase': 'Switchable contextually-based project',
        'companybs': 'aggregate real-time technologies',
        'thumbnailUrl': 'http://placehold.it/150/15c072',
        'image': 'http://placehold.it/600/15c072',
        'body': "non et atque\noccaecati deserunt quas accusantium unde\n     odit nobis qui voluptatem\nquia voluptas consequuntur itaque\n     dolor\net qui rerum deleniti ut occaecati"
    },
    {
        'id': 10,
        'name': 'Clementina DuBuque',
        'username': 'Moriah.Stanton',
        'email': 'Rey.Padberg@karina.biz',
        'street': 'Kattie Turnpike',
        'suite': 'Suite 198',
        'city': 'Lebsackbury',
        'zipcode': '31428-2261',
        'lat': '-38.2386',
        'lng': '57.2232',
        'phone': '024-648-3804',
        'website': 'ambrose.net',
        'companyname': 'Hoeger LLC',
        'companycatchPhrase': 'Centralized empowering task-force',
        'companybs': 'target end-to-end models',
        'thumbnailUrl': 'http://placehold.it/150/e65eee',
        'image': 'http://placehold.it/600/e65eee',
        'body': "harum non quasi et ratione\ntempore iure ex voluptates in\n      ratione\nharum architecto fugit inventore cupiditate\nvoluptates\n       magni quo et"
    }
];
//# sourceMappingURL=lists-utils.js.map

/***/ }),

/***/ "../../../../../src/app/main/lists/lists.component.html":
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"column\" fxLayoutAlign=\"center top\" layout-margin>\r\n\r\n  <example-comp #ex1 collapsible=\"no\" collapsed=\"no\" fxFill [comp-name]=\"getComponentId('o-list-item-text')\" [files]=\"getFiles('o-list-item-text', list3)\"\r\n    (showSource)=\"onShowSource('o-list-item-text', list3, ex1)\">\r\n\r\n    <div fxLayout=\"row\" fxLayoutAlign=\"center start\" layout-padding>\r\n\r\n      <o-column elevation=\"1\" fxFlex=\"40\" layout-align=\"center\" attr=\"listColumn\">\r\n  \r\n        <o-list #list3  attr=\"list3\" columns=\"id;name;username;email;street;phone\" keys=\"id\" quick-filter-columns=\"name;username\"\r\n          query-on-init=\"true\" pageable=\"no\" [static-data]=\"getListData(5)\" [title]=\"list3Title.value\" [refresh-button]=\"refreshButtonToggle.checked\"\r\n          [insert-button]=\"insertButtonToggle.checked\" [selectable]=\"selectableToggle.checked\" [dense]=\"denseToggle.checked\"\r\n          [detail-button-in-row]=\"detailButtonInRowToggle.checked\" [detail-button-in-row-icon]=\"detailButtonInRowIconInput.value\"\r\n          [edit-button-in-row]=\"editButtonInRowToggle.checked\" [edit-button-in-row-icon]=\"editButtonInRowIconInput.value\" [quick-filter]=\"quickFilterToggle.checked\">\r\n\r\n          <o-list-item *ngFor=\"let row of list3.dataArray\">\r\n            <o-list-item-text #item [icon]=\"iconToggle.checked ? itemIcon.value : undefined\" [icon-position]=\"list3iconPosition\" (icon-action)=\"addToFavorites(row, item)\"\r\n              title=\"{{row.username}}\" secondary-text=\"{{ row.body }}\" ></o-list-item-text>\r\n          </o-list-item>\r\n\r\n        </o-list>\r\n      </o-column>\r\n\r\n      <o-column attr=\"conf\" title-label=\"{{ 'LIST_CONFIGURATION' | oTranslate }}\" elevation=\"0\" fxFlex=\"40\" layout-padding layout-align=\"center\">\r\n\r\n        <div fxLayout=\"row\" layout-padding fxLayoutAlign=\"center\" fxFill>\r\n          <md-input-container fxFlex=\"95\">\r\n            <input mdInput #list3Title placeholder=\"{{ 'TITLE' | oTranslate }}\" value=\"List\">\r\n          </md-input-container>\r\n        </div>\r\n        <div fxLayout=\"row\" layout-padding fxLayoutAlign=\"start\">\r\n          <div fxLayout=\"column\" layout-padding fxLayoutAlign=\"start\" fxFlex=\"50\">\r\n            <md-slide-toggle #quickFilterToggle checked=\"true\">\r\n              {{ 'QUICK_FILTER' | oTranslate }}\r\n            </md-slide-toggle>\r\n\r\n            <md-slide-toggle #refreshButtonToggle [checked]=\"true\">\r\n              {{ 'REFRESH_BUTTON' | oTranslate }}\r\n            </md-slide-toggle>\r\n\r\n            <md-slide-toggle #insertButtonToggle>\r\n              {{ 'INSERT_BUTTON' | oTranslate }}\r\n            </md-slide-toggle>\r\n\r\n          </div>\r\n\r\n          <div fxLayout=\"column\" layout-padding fxLayoutAlign=\"start\" fxFlex=\"50\">\r\n\r\n            <md-slide-toggle #denseToggle [checked]=\"list3.dense\">\r\n              {{ 'DENSE' | oTranslate }}\r\n            </md-slide-toggle>\r\n\r\n            <md-slide-toggle #selectableToggle>\r\n              {{ 'SELECTABLE' | oTranslate }}\r\n            </md-slide-toggle>\r\n\r\n          </div>\r\n        </div>\r\n        <o-row layout-padding layout-align=\"start\" title-label=\"{{ 'ITEM_CONFIGURATION' | oTranslate }}\" elevation=\"0\">\r\n          <div fxLayout=\"column\" layout-padding fxLayoutAlign=\"start\" fxFlex=\"50\">\r\n            <md-slide-toggle #editButtonInRowToggle>\r\n              {{ 'EDIT_BUTTON_IN_ROW' | oTranslate }}\r\n            </md-slide-toggle>\r\n\r\n            <md-slide-toggle #detailButtonInRowToggle>\r\n              {{ 'DETAIL_BUTTON_IN_ROW' | oTranslate }}\r\n            </md-slide-toggle>\r\n\r\n            <md-slide-toggle #iconToggle>\r\n              {{ 'SHOW_ICON' | oTranslate }}\r\n            </md-slide-toggle>\r\n\r\n            <span *ngIf=\"iconToggle.checked\">\r\n                {{ 'ICON_POSITION' | oTranslate }}\r\n              </span>\r\n\r\n            <md-radio-group *ngIf=\"iconToggle.checked\" layout-padding [value]=\"list3iconPosition\" (change)=\"list3iconPosition = $event.value\">\r\n              <md-radio-button value=\"left\">\r\n                {{ 'LEFT' | oTranslate }}\r\n              </md-radio-button>\r\n              <md-radio-button value=\"right\">\r\n                {{ 'RIGHT' | oTranslate }}\r\n              </md-radio-button>\r\n            </md-radio-group>\r\n          </div>\r\n          <div fxLayout=\"column\" layout-padding fxLayoutAlign=\"start\" fxFlex=\"50\">\r\n            <md-input-container class=\"padding-3\" [hidden]=\"!editButtonInRowToggle.checked\">\r\n              <input mdInput #editButtonInRowIconInput placeholder=\"{{ 'EDIT_BUTTON_IN_ROW_ICON' | oTranslate }}\" value=\"edit\">\r\n            </md-input-container>\r\n\r\n            <md-input-container class=\"padding-3\" [hidden]=\"!detailButtonInRowToggle.checked\">\r\n              <input mdInput #detailButtonInRowIconInput placeholder=\"{{ 'DETAIL_BUTTON_IN_ROW_ICON' | oTranslate }}\" value=\"chevron_right\">\r\n            </md-input-container>\r\n\r\n            <md-input-container class=\"padding-3\" [hidden]=\"!iconToggle.checked\">\r\n              <input mdInput #itemIcon placeholder=\"{{ 'ICON' | oTranslate }}\" value=\"mood\">\r\n            </md-input-container>\r\n          </div>\r\n        </o-row>\r\n      </o-column>\r\n    </div>\r\n  </example-comp>\r\n\r\n  <example-comp #ex2 collapsible=\"no\" collapsed=\"no\" fxFill [comp-name]=\"getComponentId('o-list-item-avatar')\" [files]=\"getFiles('o-list-item-avatar', list9)\"\r\n    (showSource)=\"onShowSource('o-list-item-avatar', list9, ex2)\">\r\n\r\n\r\n    <div fxLayout=\"row\" fxLayoutAlign=\"center start\" layout-padding>\r\n\r\n      <o-column elevation=\"1\" fxFlex=\"40\" layout-align=\"center\" attr=\"list9row\">\r\n        <o-list #list9 fxFill attr=\"list9\" [title]=\"list9Title.value\" columns=\"id;name;username;email;street;phone\" keys=\"id\" quick-filter-columns=\"name;username\"\r\n          query-on-init=\"true\" pageable=\"no\" [static-data]=\"getListData(5)\" [quick-filter]=\"quickFilterToggle2.checked\" [refresh-button]=\"refreshButtonToggle2.checked\"\r\n          [insert-button]=\"insertButtonToggle2.checked\" [selectable]=\"selectableToggle2.checked\" [dense]=\"denseToggle2.checked\"\r\n          [detail-button-in-row]=\"detailButtonInRowToggle2.checked\" [detail-button-in-row-icon]=\"detailButtonInRowIconInput2.value\"\r\n          [edit-button-in-row]=\"editButtonInRowToggle2.checked\" [edit-button-in-row-icon]=\"editButtonInRowIconInput2.value\">\r\n\r\n          <o-list-item *ngFor=\"let row of list9.dataArray\">\r\n            <o-list-item-avatar #avatarItem avatar=\"{{row.thumbnailUrl}}\" title=\"{{row.name}}\" secondary-text=\"{{ row.body }}\" [icon]=\"iconToggle2.checked ? itemIcon2.value : undefined\"\r\n              (icon-action)=\"addToFavorites(row, avatarItem)\"></o-list-item-avatar>\r\n          </o-list-item>\r\n        </o-list>\r\n      </o-column>\r\n\r\n      <o-column attr=\"conf2\" title-label=\"{{ 'LIST_CONFIGURATION' | oTranslate }}\" elevation=\"0\" fxFlex=\"40\" layout-padding layout-align=\"center\">\r\n        <div fxLayout=\"row\" layout-padding fxLayoutAlign=\"center\" fxFill>\r\n          <md-input-container fxFlex=\"95\">\r\n            <input mdInput #list9Title placeholder=\"{{ 'TITLE' | oTranslate }}\" value=\"List\">\r\n          </md-input-container>\r\n\r\n        </div>\r\n        <div fxLayout=\"row\" layout-padding fxLayoutAlign=\"start\">\r\n          <div fxLayout=\"column\" layout-padding fxLayoutAlign=\"start\" fxFlex=\"50\">\r\n            <md-slide-toggle #quickFilterToggle2 checked=\"true\">\r\n              {{ 'QUICK_FILTER' | oTranslate }}\r\n            </md-slide-toggle>\r\n\r\n            <md-slide-toggle #refreshButtonToggle2 [checked]=\"true\">\r\n              {{ 'REFRESH_BUTTON' | oTranslate }}\r\n            </md-slide-toggle>\r\n\r\n            <md-slide-toggle #insertButtonToggle2>\r\n              {{ 'INSERT_BUTTON' | oTranslate }}\r\n            </md-slide-toggle>\r\n\r\n          </div>\r\n\r\n          <div fxLayout=\"column\" layout-padding fxLayoutAlign=\"start\" fxFlex=\"50\">\r\n\r\n            <md-slide-toggle #denseToggle2 [checked]=\"list9.dense\">\r\n              {{ 'DENSE' | oTranslate }}\r\n            </md-slide-toggle>\r\n\r\n            <md-slide-toggle #selectableToggle2>\r\n              {{ 'SELECTABLE' | oTranslate }}\r\n            </md-slide-toggle>\r\n\r\n          </div>\r\n        </div>\r\n        <o-row layout-padding layout-align=\"start\" title-label=\"{{ 'ITEM_CONFIGURATION' | oTranslate }}\" elevation=\"0\">\r\n          <div fxLayout=\"column\" layout-padding fxLayoutAlign=\"start\" fxFlex=\"50\">\r\n            <md-slide-toggle #editButtonInRowToggle2>\r\n              {{ 'EDIT_BUTTON_IN_ROW' | oTranslate }}\r\n            </md-slide-toggle>\r\n\r\n            <md-slide-toggle #detailButtonInRowToggle2>\r\n              {{ 'DETAIL_BUTTON_IN_ROW' | oTranslate }}\r\n            </md-slide-toggle>\r\n\r\n            <md-slide-toggle #iconToggle2>\r\n              {{ 'SHOW_ICON' | oTranslate }}\r\n            </md-slide-toggle>\r\n\r\n          </div>\r\n          <div fxLayout=\"column\" layout-padding fxLayoutAlign=\"start\" fxFlex=\"50\">\r\n            <md-input-container class=\"padding-3\" [hidden]=\"!editButtonInRowToggle2.checked\">\r\n              <input mdInput #editButtonInRowIconInput2 placeholder=\"{{ 'EDIT_BUTTON_IN_ROW_ICON' | oTranslate }}\" value=\"edit\">\r\n            </md-input-container>\r\n\r\n            <md-input-container class=\"padding-3\" [hidden]=\"!detailButtonInRowToggle2.checked\">\r\n              <input mdInput #detailButtonInRowIconInput2 placeholder=\"{{ 'DETAIL_BUTTON_IN_ROW_ICON' | oTranslate }}\" value=\"chevron_right\">\r\n            </md-input-container>\r\n\r\n            <md-input-container class=\"padding-3\" [hidden]=\"!iconToggle2.checked\">\r\n              <input mdInput #itemIcon2 placeholder=\"{{ 'ICON' | oTranslate }}\" value=\"mood\">\r\n            </md-input-container>\r\n          </div>\r\n        </o-row>\r\n      </o-column>\r\n\r\n    </div>\r\n\r\n  </example-comp>\r\n\r\n  <example-comp #ex3 collapsible=\"no\" collapsed=\"no\" fxFill [comp-name]=\"getComponentId('o-list-item-card')\" [files]=\"getFiles('o-list-item-card', cardList)\"\r\n    (showSource)=\"onShowSource('o-list-item-card', cardList, ex3)\">\r\n    <div fxLayout=\"row\" fxLayoutAlign=\"center start\" layout-padding>\r\n\r\n      <o-column elevation=\"1\" fxFlex=\"40\" layout-align=\"center\" attr=\"listcardrow\">\r\n        <o-list #cardList fxFill attr=\"cardList\" [title]=\"cardListTitle.value\" columns=\"id;name;username;email;street;phone\" keys=\"id\"\r\n          quick-filter-columns=\"name;username\" query-on-init=\"true\" pageable=\"no\" [static-data]=\"getListData()\" [refresh-button]=\"refreshButtonToggle3.checked\"\r\n          selectable=\"no\" detail-button-in-row=\"no\" edit-button-in-row=\"no\" row-height=\"large\" [insert-button]=\"insertButtonToggle3.checked\"\r\n          [quick-filter]=\"quickFilterToggle3.checked\">\r\n\r\n          <o-list-item *ngFor=\"let row of cardList.dataArray\">\r\n            <o-list-item-card #itemCard title=\"{{row.username}}\" subtitle=\"{{row.name}}\" image=\"{{ row.image }}\" [action-1-text]=\"action1Toggle.checked ? actionText1.value : ''\"\r\n              [action-2-text]=\"action2Toggle.checked ? actionText2.value : ''\" (action-1)=\"onAction1()\" (action-2)=\"onAction2()\">\r\n            </o-list-item-card>\r\n          </o-list-item>\r\n        </o-list>\r\n      </o-column>\r\n\r\n      <o-column attr=\"conf3\" title-label=\"{{ 'LIST_CONFIGURATION' | oTranslate }}\" elevation=\"0\" fxFlex=\"40\" layout-padding layout-align=\"center\">\r\n        <div fxLayout=\"row\" layout-padding fxLayoutAlign=\"center\" fxFill>\r\n          <md-input-container fxFlex=\"95\">\r\n            <input mdInput #cardListTitle placeholder=\"{{ 'TITLE' | oTranslate }}\" value=\"List\">\r\n          </md-input-container>\r\n\r\n        </div>\r\n        <div fxLayout=\"row\" layout-padding fxLayoutAlign=\"start\">\r\n          <div fxLayout=\"column\" layout-padding fxLayoutAlign=\"start\" fxFlex=\"50\">\r\n\r\n            <md-slide-toggle #quickFilterToggle3>\r\n              {{ 'QUICK_FILTER' | oTranslate }}\r\n            </md-slide-toggle>\r\n\r\n            <md-slide-toggle #insertButtonToggle3>\r\n              {{ 'INSERT_BUTTON' | oTranslate }}\r\n            </md-slide-toggle>\r\n          </div>\r\n\r\n          <div fxLayout=\"column\" layout-padding fxLayoutAlign=\"start\" fxFlex=\"50\">\r\n            <md-slide-toggle #refreshButtonToggle3>\r\n              {{ 'REFRESH_BUTTON' | oTranslate }}\r\n            </md-slide-toggle>\r\n          </div>\r\n        </div>\r\n        <o-row layout-padding layout-align=\"start\" title-label=\"{{ 'ITEM_CONFIGURATION' | oTranslate }}\" elevation=\"0\">\r\n          <div fxLayout=\"column\" layout-padding fxLayoutAlign=\"start\" fxFlex=\"50\">\r\n            <md-slide-toggle #action1Toggle checked=\"true\">\r\n              {{ 'ACTION_1' | oTranslate }}\r\n            </md-slide-toggle>\r\n\r\n            <md-slide-toggle #action2Toggle checked=\"true\">\r\n              {{ 'ACTION_2' | oTranslate }}\r\n            </md-slide-toggle>\r\n\r\n            <span>\r\n                {{ 'ROW_HEIGHT' | oTranslate }}\r\n              </span>\r\n            <md-radio-group #rowHeight2 fxLayout=\"column\" layout-padding [value]=\"cardList.rowHeight\" (change)=\"cardList.rowHeight = $event.value\">\r\n              <md-radio-button value=\"small\">\r\n                {{ 'SMALL' | oTranslate }}\r\n              </md-radio-button>\r\n              <md-radio-button value=\"medium\">\r\n                {{ 'MEDIUM' | oTranslate }}\r\n              </md-radio-button>\r\n              <md-radio-button value=\"large\">\r\n                {{ 'LARGE' | oTranslate }}\r\n              </md-radio-button>\r\n            </md-radio-group>\r\n          </div>\r\n          <div fxLayout=\"column\" layout-padding fxLayoutAlign=\"start\" fxFlex=\"50\">\r\n            <md-input-container class=\"padding-3\" [hidden]=\"!action1Toggle.checked\">\r\n              <input mdInput #actionText1 placeholder=\"action-1-text\" value=\"ACTION 1\">\r\n            </md-input-container>\r\n\r\n            <md-input-container class=\"padding-3\" [hidden]=\"!action2Toggle.checked\">\r\n              <input mdInput #actionText2 placeholder=\"action-2-text\" value=\"ACTION 2\">\r\n            </md-input-container>\r\n          </div>\r\n        </o-row>\r\n      </o-column>\r\n    </div>\r\n  </example-comp>\r\n\r\n  <example-comp #ex4 collapsible=\"no\" collapsed=\"no\" fxFill [comp-name]=\"getComponentId('o-list-item-card-image')\" [files]=\"getFiles('o-list-item-card-image', cardImgList)\"\r\n    (showSource)=\"onShowSource('o-list-item-card-image', cardImgList, ex4)\">\r\n\r\n    <div fxLayout=\"row\" fxLayoutAlign=\"center start\" layout-padding>\r\n\r\n      <o-column elevation=\"1\" fxFlex=\"40\" layout-align=\"center\" attr=\"listcardrow\">\r\n        <o-list #cardImgList fxFill attr=\"cardImgList\" [title]=\"cardImgListTitle.value\" columns=\"id;name;username;email;street;phone\"\r\n          keys=\"id\" quick-filter-columns=\"name;username\" query-on-init=\"true\" pageable=\"no\" [static-data]=\"getListData(1)\"\r\n          [quick-filter]=\"quickFilterToggle4.checked\" [refresh-button]=\"refreshButtonToggle4.checked\" selectable=\"no\" detail-button-in-row=\"no\"\r\n          edit-button-in-row=\"no\" row-height=\"large\" [insert-button]=\"insertButtonToggle4.checked\">\r\n\r\n          <o-list-item *ngFor=\"let row of cardImgList.dataArray\">\r\n            <o-list-item-card-image #itemCardImg title=\"{{row.username}}\" subtitle=\"{{row.name}}\" content=\"{{ row.body }}\" [avatar]=\"avatarToggle.checked ? row.thumbnailUrl : undefined\"\r\n              [image]=\"imageToggle.checked ? row.image : undefined\" [action-1-text]=\"action1Toggle2.checked ? actionText12.value : ''\"\r\n              [action-2-text]=\"action2Toggle2.checked ? actionText22.value : ''\" (action-1)=\"onAction1()\" (action-2)=\"onAction2()\"\r\n              [icon]=\"iconToggle4.checked ? icon4.value : undefined\" (icon-action)=\"onIconAction()\" [collapsible]=\"collapsibleToggle.checked\"\r\n              [collapsed]=\"collapsedToggle.checked\">\r\n            </o-list-item-card-image>\r\n          </o-list-item>\r\n        </o-list>\r\n      </o-column>\r\n\r\n      <o-column attr=\"conf3\" title-label=\"{{ 'LIST_CONFIGURATION' | oTranslate }}\" elevation=\"0\" fxFlex=\"40\" layout-padding layout-align=\"center\">\r\n        <div fxLayout=\"row\" layout-padding fxLayoutAlign=\"center\" fxFill>\r\n\r\n          <md-input-container fxFlex=\"95\">\r\n            <input mdInput #cardImgListTitle placeholder=\"{{ 'TITLE' | oTranslate }}\" value=\"List\">\r\n          </md-input-container>\r\n\r\n        </div>\r\n        <div fxLayout=\"row\" layout-padding fxLayoutAlign=\"start\">\r\n\r\n          <div fxLayout=\"column\" layout-padding fxLayoutAlign=\"start\" fxFlex=\"50\">\r\n\r\n            <md-slide-toggle #quickFilterToggle4>\r\n              {{ 'QUICK_FILTER' | oTranslate }}\r\n            </md-slide-toggle>\r\n\r\n            <md-slide-toggle #refreshButtonToggle4>\r\n              {{ 'REFRESH_BUTTON' | oTranslate }}\r\n            </md-slide-toggle>\r\n\r\n            <md-slide-toggle #insertButtonToggle4>\r\n              {{ 'INSERT_BUTTON' | oTranslate }}\r\n            </md-slide-toggle>\r\n\r\n          </div>\r\n\r\n          <div fxLayout=\"column\" layout-padding fxLayoutAlign=\"start\" fxFlex=\"50\">\r\n\r\n            <md-slide-toggle #imageToggle checked=\"true\">\r\n              {{ 'IMAGE' | oTranslate }}\r\n            </md-slide-toggle>\r\n\r\n            <md-slide-toggle #avatarToggle>\r\n              {{ 'AVATAR' | oTranslate }}\r\n            </md-slide-toggle>\r\n\r\n            <md-slide-toggle #collapsibleToggle>\r\n              {{ 'COLLAPSIBLE' | oTranslate }}\r\n            </md-slide-toggle>\r\n\r\n            <md-slide-toggle #collapsedToggle checked=\"true\">\r\n              {{ 'COLLAPSED' | oTranslate }}\r\n            </md-slide-toggle>\r\n\r\n          </div>\r\n\r\n        </div>\r\n\r\n        <o-row layout-padding layout-align=\"start\" title-label=\"{{ 'ITEM_CONFIGURATION' | oTranslate }}\" elevation=\"0\">\r\n          <div fxLayout=\"column\" layout-padding fxLayoutAlign=\"start\" fxFlex=\"50\">\r\n            <md-slide-toggle #action1Toggle2 checked=\"true\">\r\n              {{ 'ACTION_1' | oTranslate }}\r\n            </md-slide-toggle>\r\n\r\n            <md-slide-toggle #action2Toggle2 checked=\"true\">\r\n              {{ 'ACTION_2' | oTranslate }}\r\n            </md-slide-toggle>\r\n\r\n            <md-slide-toggle #iconToggle4>\r\n              {{ 'SHOW_ICON' | oTranslate }}\r\n            </md-slide-toggle>\r\n\r\n            <span>\r\n                {{ 'ROW_HEIGHT' | oTranslate }}\r\n              </span>\r\n            <md-radio-group fxLayout=\"column\" layout-padding [value]=\"cardImgList.rowHeight\" (change)=\"cardImgList.rowHeight = $event.value\">\r\n              <md-radio-button value=\"small\">\r\n                {{ 'SMALL' | oTranslate }}\r\n              </md-radio-button>\r\n              <md-radio-button value=\"medium\">\r\n                {{ 'MEDIUM' | oTranslate }}\r\n              </md-radio-button>\r\n              <md-radio-button value=\"large\">\r\n                {{ 'LARGE' | oTranslate }}\r\n              </md-radio-button>\r\n            </md-radio-group>\r\n          </div>\r\n          <div fxLayout=\"column\" layout-padding fxLayoutAlign=\"start\" fxFlex=\"50\">\r\n            <md-input-container class=\"padding-3\" [hidden]=\"!action1Toggle2.checked\">\r\n              <input mdInput #actionText12 placeholder=\"action-1-text\" value=\"ACTION 1\">\r\n            </md-input-container>\r\n\r\n            <md-input-container class=\"padding-3\" [hidden]=\"!action2Toggle2.checked\">\r\n              <input mdInput #actionText22 placeholder=\"action-2-text\" value=\"ACTION 2\">\r\n            </md-input-container>\r\n\r\n            <md-input-container class=\"padding-3\" [hidden]=\"!iconToggle4.checked\">\r\n              <input mdInput #icon4 placeholder=\"icon\" value=\"share\">\r\n            </md-input-container>\r\n          </div>\r\n        </o-row>\r\n      </o-column>\r\n    </div>\r\n  </example-comp>\r\n\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/main/lists/lists.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "[hidden] {\n  visibility: hidden !important; }\n\n.padding-3 {\n  padding: 3px; }\n\n.mat-slide-toggle {\n  margin: 16px 0; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main/lists/lists.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ontimize_web_ngx__ = __webpack_require__("../../../../ontimize-web-ngx/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_navigation_bar_service__ = __webpack_require__("../../../../../src/app/shared/navigation-bar.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__lists_utils__ = __webpack_require__("../../../../../src/app/main/lists/lists-utils.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ListsComponent = (function () {
    function ListsComponent(navigationService, translateService) {
        this.navigationService = navigationService;
        this.translateService = translateService;
        this.list3iconPosition = 'right';
        this.staticListData = this.getListData(5);
    }
    ListsComponent.prototype.ngOnInit = function () {
        var title = '';
        title += this.translateService.get('FIELDS');
        title = title + ' > ' + this.translateService.get('LISTS');
        this.navigationService.setTitle(title);
    };
    ListsComponent.prototype.onAction1 = function () {
        alert('onAction1');
    };
    ListsComponent.prototype.onAction2 = function () {
        alert('onAction2');
    };
    ListsComponent.prototype.onIconAction = function () {
        alert('onIconAction');
    };
    ListsComponent.prototype.addToFavorites = function (itemData, avatarItem) {
        if (avatarItem.icon === 'star') {
            avatarItem.icon = 'star_border';
        }
        else {
            avatarItem.icon = 'star';
        }
    };
    ListsComponent.prototype.getListData = function (itemNumber) {
        var result = [];
        var arrayLength = itemNumber || 3;
        var USERS_LIST = __WEBPACK_IMPORTED_MODULE_3__lists_utils__["a" /* ListsUtils */].getUsers();
        for (var i = 0; i < arrayLength; i++) {
            result.push(USERS_LIST[i]);
        }
        // while (result.length < arrayLength) {
        //   let index = Math.floor(Math.random() * USERS_LIST.length);
        //   if (result.indexOf(USERS_LIST[index]) === -1) {
        //     result.push(USERS_LIST[index]);
        //   }
        // }
        return result;
    };
    ListsComponent.prototype.getComponentId = function (key) {
        return __WEBPACK_IMPORTED_MODULE_3__lists_utils__["a" /* ListsUtils */].getComponentId(key);
    };
    ListsComponent.prototype.getFiles = function (key, list) {
        return __WEBPACK_IMPORTED_MODULE_3__lists_utils__["a" /* ListsUtils */].getFiles(key, list);
    };
    ListsComponent.prototype.onShowSource = function (key, list, exampleComp) {
        var itemData = {
            iconPosition: this.list3iconPosition
        };
        if (this.iconToggle.checked) {
            itemData.icon = (this.itemIcon && this.itemIcon.nativeElement.value) ?
                this.itemIcon.nativeElement.value : '';
        }
        switch (key) {
            case 'o-list-item-card':
                itemData.action1 = (this.action1Toggle.checked && this.actionText1 &&
                    this.actionText1.nativeElement.value)
                    ? this.actionText1.nativeElement.value : '';
                itemData.action2 = (this.action2Toggle.checked && this.actionText2 &&
                    this.actionText2.nativeElement.value)
                    ? this.actionText2.nativeElement.value : '';
                break;
            case 'o-list-item-card-image':
                itemData.action1 = (this.action1Toggle2.checked && this.actionText12 &&
                    this.actionText12.nativeElement.value)
                    ? this.actionText12.nativeElement.value : '';
                itemData.action2 = (this.action2Toggle2.checked && this.actionText22 &&
                    this.actionText22.nativeElement.value)
                    ? this.actionText22.nativeElement.value : '';
                itemData.collapsible = this.collapsibleToggle.checked;
                itemData.collapsed = this.collapsedToggle.checked;
                itemData.image = this.imageToggle.checked;
                itemData.avatar = this.avatarToggle.checked;
                break;
            default:
                break;
        }
        exampleComp.html = __WEBPACK_IMPORTED_MODULE_3__lists_utils__["a" /* ListsUtils */].getHtml(key, list, itemData);
    };
    return ListsComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('iconToggle'),
    __metadata("design:type", Object)
], ListsComponent.prototype, "iconToggle", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('itemIcon'),
    __metadata("design:type", Object)
], ListsComponent.prototype, "itemIcon", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('actionText1'),
    __metadata("design:type", Object)
], ListsComponent.prototype, "actionText1", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('action1Toggle'),
    __metadata("design:type", Object)
], ListsComponent.prototype, "action1Toggle", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('actionText2'),
    __metadata("design:type", Object)
], ListsComponent.prototype, "actionText2", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('action2Toggle'),
    __metadata("design:type", Object)
], ListsComponent.prototype, "action2Toggle", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('actionText12'),
    __metadata("design:type", Object)
], ListsComponent.prototype, "actionText12", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('action1Toggle2'),
    __metadata("design:type", Object)
], ListsComponent.prototype, "action1Toggle2", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('actionText22'),
    __metadata("design:type", Object)
], ListsComponent.prototype, "actionText22", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('action2Toggle2'),
    __metadata("design:type", Object)
], ListsComponent.prototype, "action2Toggle2", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('collapsibleToggle'),
    __metadata("design:type", Object)
], ListsComponent.prototype, "collapsibleToggle", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('collapsedToggle'),
    __metadata("design:type", Object)
], ListsComponent.prototype, "collapsedToggle", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('imageToggle'),
    __metadata("design:type", Object)
], ListsComponent.prototype, "imageToggle", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('avatarToggle'),
    __metadata("design:type", Object)
], ListsComponent.prototype, "avatarToggle", void 0);
ListsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-lists',
        template: __webpack_require__("../../../../../src/app/main/lists/lists.component.html"),
        styles: [__webpack_require__("../../../../../src/app/main/lists/lists.component.scss")],
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__shared_navigation_bar_service__["a" /* NavigationBarService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_navigation_bar_service__["a" /* NavigationBarService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ontimize_web_ngx__["s" /* OTranslateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ontimize_web_ngx__["s" /* OTranslateService */]) === "function" && _b || Object])
], ListsComponent);

var _a, _b;
//# sourceMappingURL=lists.component.js.map

/***/ }),

/***/ "../../../../../src/app/main/lists/lists.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ontimize_web_ngx__ = __webpack_require__("../../../../ontimize-web-ngx/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__lists_component__ = __webpack_require__("../../../../../src/app/main/lists/lists.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__lists_routing_module__ = __webpack_require__("../../../../../src/app/main/lists/lists-routing.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var ListsModule = (function () {
    function ListsModule() {
    }
    return ListsModule;
}());
ListsModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__["a" /* SharedModule */],
            __WEBPACK_IMPORTED_MODULE_1_ontimize_web_ngx__["u" /* OntimizeWebModule */],
            __WEBPACK_IMPORTED_MODULE_4__lists_routing_module__["a" /* ListsRoutingModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__lists_component__["a" /* ListsComponent */]
        ]
    })
], ListsModule);

//# sourceMappingURL=lists.module.js.map

/***/ }),

/***/ "../../../../../src/app/main/main-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export loadButtonsModule */
/* unused harmony export loadCheckboxModule */
/* unused harmony export loadComboModule */
/* unused harmony export loadContainersModule */
/* unused harmony export loadDialogsModule */
/* unused harmony export loadHomeModule */
/* unused harmony export loadInputsModule */
/* unused harmony export loadListsModule */
/* unused harmony export routes */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__main_component__ = __webpack_require__("../../../../../src/app/main/main.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__buttons_buttons_module__ = __webpack_require__("../../../../../src/app/main/buttons/buttons.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__checkbox_checkbox_module__ = __webpack_require__("../../../../../src/app/main/checkbox/checkbox.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__combo_combo_module__ = __webpack_require__("../../../../../src/app/main/combo/combo.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__containers_containers_module__ = __webpack_require__("../../../../../src/app/main/containers/containers.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__dialogs_dialogs_module__ = __webpack_require__("../../../../../src/app/main/dialogs/dialogs.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__home_home_module__ = __webpack_require__("../../../../../src/app/main/home/home.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__inputs_inputs_module__ = __webpack_require__("../../../../../src/app/main/inputs/inputs.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__lists_lists_module__ = __webpack_require__("../../../../../src/app/main/lists/lists.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











function loadButtonsModule() {
    return __WEBPACK_IMPORTED_MODULE_3__buttons_buttons_module__["a" /* ButtonsModule */];
}
function loadCheckboxModule() {
    return __WEBPACK_IMPORTED_MODULE_4__checkbox_checkbox_module__["a" /* CheckboxModule */];
}
function loadComboModule() {
    return __WEBPACK_IMPORTED_MODULE_5__combo_combo_module__["a" /* ComboModule */];
}
function loadContainersModule() {
    return __WEBPACK_IMPORTED_MODULE_6__containers_containers_module__["a" /* ContainersModule */];
}
function loadDialogsModule() {
    return __WEBPACK_IMPORTED_MODULE_7__dialogs_dialogs_module__["a" /* DialogsModule */];
}
function loadHomeModule() {
    return __WEBPACK_IMPORTED_MODULE_8__home_home_module__["a" /* HomeModule */];
}
function loadInputsModule() {
    return __WEBPACK_IMPORTED_MODULE_9__inputs_inputs_module__["a" /* InputsModule */];
}
function loadListsModule() {
    return __WEBPACK_IMPORTED_MODULE_10__lists_lists_module__["a" /* ListsModule */];
}
var routes = [
    {
        path: 'main',
        component: __WEBPACK_IMPORTED_MODULE_2__main_component__["a" /* MainComponent */],
        // canActivate: [AuthGuardService],
        children: [
            {
                path: 'buttons',
                loadChildren: loadButtonsModule
            },
            {
                path: 'checkbox',
                loadChildren: loadCheckboxModule
            },
            {
                path: 'combo',
                loadChildren: loadComboModule
            },
            {
                path: 'containers',
                loadChildren: loadContainersModule
            },
            {
                path: 'dialogs',
                loadChildren: loadDialogsModule
            },
            {
                path: 'home',
                loadChildren: loadHomeModule
            },
            {
                path: 'inputs',
                loadChildren: loadInputsModule
            },
            {
                path: 'lists',
                loadChildren: loadListsModule
            },
            { path: '', redirectTo: 'home', pathMatch: 'full' }
        ]
    }
];
var MainRoutingModule = (function () {
    function MainRoutingModule() {
    }
    return MainRoutingModule;
}());
MainRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["e" /* RouterModule */].forChild(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["e" /* RouterModule */]]
    })
], MainRoutingModule);

//# sourceMappingURL=main-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/main/main.component.html":
/***/ (function(module, exports) {

module.exports = "<o-app-layout>\n  <!--<o-app-sidenav-image class=\"o-app-sidenav-image\"\n      opened-src=\"../../assets/images/sidenav-opened.png\"\n      closed-src=\"../../assets/images/sidenav-closed.png\">\n  </o-app-sidenav-image>-->\n  <router-outlet></router-outlet>\n</o-app-layout>\n"

/***/ }),

/***/ "../../../../../src/app/main/main.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main/main.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_navigation_bar_service__ = __webpack_require__("../../../../../src/app/shared/navigation-bar.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MainComponent = (function () {
    function MainComponent(navigationService) {
        this.navigationService = navigationService;
        this.sectionTitle = '';
    }
    MainComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.navigationService.onTitleChange(function (title) {
            _this.sectionTitle = title;
        });
    };
    return MainComponent;
}());
MainComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-main',
        template: __webpack_require__("../../../../../src/app/main/main.component.html"),
        styles: [__webpack_require__("../../../../../src/app/main/main.component.scss")],
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_navigation_bar_service__["a" /* NavigationBarService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_navigation_bar_service__["a" /* NavigationBarService */]) === "function" && _a || Object])
], MainComponent);

var _a;
//# sourceMappingURL=main.component.js.map

/***/ }),

/***/ "../../../../../src/app/main/main.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ontimize_web_ngx__ = __webpack_require__("../../../../ontimize-web-ngx/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__main_component__ = __webpack_require__("../../../../../src/app/main/main.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__main_routing_module__ = __webpack_require__("../../../../../src/app/main/main-routing.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var MainModule = (function () {
    function MainModule() {
    }
    return MainModule;
}());
MainModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__["a" /* SharedModule */],
            __WEBPACK_IMPORTED_MODULE_1_ontimize_web_ngx__["u" /* OntimizeWebModule */],
            __WEBPACK_IMPORTED_MODULE_4__main_routing_module__["a" /* MainRoutingModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__main_component__["a" /* MainComponent */]
        ]
    })
], MainModule);

//# sourceMappingURL=main.module.js.map

/***/ }),

/***/ "../../../../../src/app/shared/app.menu.config.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MENU_CONFIG; });
var MENU_CONFIG = [
    { id: 'home', name: 'HOME', icon: 'home', route: '/main/home' },
    {
        id: 'input',
        name: 'INPUT',
        icon: 'input',
        opened: false,
        items: [
            { id: 'inputs', name: 'INPUTS', route: '/main/inputs', icon: 'border_color' },
            { id: 'checkbox', name: 'CHECKBOX', route: '/main/checkbox', icon: 'check_circle' },
            { id: 'combo', name: 'COMBO', route: '/main/combo', icon: 'people' }
        ]
    },
    {
        id: 'button',
        name: 'BUTTON',
        icon: 'people',
        opened: false,
        items: [
            { id: 'buttons', name: 'BUTTONS', route: '/main/buttons', icon: 'people' }
        ]
    },
    {
        id: 'data',
        name: 'DATA',
        icon: 'storage',
        opened: false,
        items: [
            { id: 'list', name: 'LIST', route: '/main/lists', icon: 'list' }
        ]
    },
    {
        id: 'layout',
        name: 'LAYOUT',
        icon: 'layers',
        opened: false,
        items: [
            { id: 'containers', name: 'CONTAINERS', route: '/main/containers', icon: 'format_align_center' }
        ]
    },
    {
        id: 'modals',
        name: 'MODALS',
        icon: 'crop_landscape',
        opened: false,
        items: [
            { id: 'dialogs', name: 'DIALOGS', route: '/main/dialogs', icon: 'mode_comment' }
        ]
    }
];
//# sourceMappingURL=app.menu.config.js.map

/***/ }),

/***/ "../../../../../src/app/shared/app.services.config.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SERVICE_CONFIG; });
var SERVICE_CONFIG = {};
//# sourceMappingURL=app.services.config.js.map

/***/ }),

/***/ "../../../../../src/app/shared/example/example.component.html":
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"column\" fxLayoutAlign=\"center top\" fxFill>\r\n\r\n  <div fxLayout=\"column\" layout-padding fxFill>\r\n    <section fxLayout=\"column\" class=\"playground-container mat-elevation-z4\" [class.show-source]=\"showSource\">\r\n      <md-toolbar class=\"playground-toolbar\" color=\"primary\">\r\n        <span> {{ compName }}</span>\r\n        <span fxFlex></span>\r\n\r\n        <button *ngIf=\"!collapsed && orderedFiles && orderedFiles.length\" md-icon-button aria-label=\"View Source\" (click)=\"toggleShowSource()\">\r\n          <md-icon class=\"mat-24\">code</md-icon>\r\n        </button>\r\n\r\n        <button *ngIf=\"collapsible\" md-icon-button aria-label=\"Collapse\" (click)=\"collapsed = !collapsed\">\r\n          <md-icon *ngIf=\"!collapsed\" class=\"mat-24\">keyboard_arrow_up</md-icon>\r\n          <md-icon *ngIf=\"collapsed\" class=\"mat-24\">keyboard_arrow_down</md-icon>\r\n        </button>\r\n\r\n      </md-toolbar>\r\n\r\n      <!-- Source views -->\r\n      <md-tab-group *ngIf=\"showSource\">\r\n        <!--<md-tab *ngFor=\"let file of orderedFiles\" label=\"{{ file?.type | oTranslate }}\">\r\n              <div class=\"playground-source-container\">\r\n                <highlight-comp [template-content]=\"file.data\" [template-type]=\"file.type\" ></highlight-comp>\r\n              </div>\r\n          </md-tab>-->\r\n        <md-tab label=\"{{ 'html' | uppercase }}\" *ngIf=\"hasTplData('html')\">\r\n          <highlight-comp [template-content]=\"html ? html : getTplData('html')\" [template-type]=\"html\"></highlight-comp>\r\n        </md-tab>\r\n        <md-tab label=\"{{ 'scss' | uppercase }}\" *ngIf=\"hasTplData('scss')\">\r\n          <highlight-comp [template-content]=\"getTplData('scss')\" [template-type]=\"scss\"></highlight-comp>\r\n        </md-tab>\r\n        <md-tab label=\"{{ 'typescript' | uppercase }}\" *ngIf=\"hasTplData('typescript')\">\r\n          <highlight-comp [template-content]=\"getTplData('typescript')\" [template-type]=\"typescript\"></highlight-comp>\r\n        </md-tab>\r\n      </md-tab-group>\r\n\r\n      <!-- Live Demos -->\r\n      <div fxFlex=\"grow\" [class.collapsed]=\"collapsed\" [class.collapsible]=\"collapsible\">\r\n        <ng-content></ng-content>\r\n      </div>\r\n\r\n    </section>\r\n\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/shared/example/example.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".example-comp .playground-source-container {\n  display: block;\n  height: 300px;\n  overflow: hidden;\n  overflow-y: auto; }\n\n.example-comp .collapsible {\n  overflow: hidden;\n  transition: max-height 1.8s;\n  max-height: 2500px; }\n  .example-comp .collapsible.collapsed {\n    max-height: 0px; }\n\n.example-comp .o-form form.inner-form {\n  position: relative;\n  padding-top: 8px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/example/example.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExampleComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ontimize_web_ngx__ = __webpack_require__("../../../../ontimize-web-ngx/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ExampleComponent = (function () {
    function ExampleComponent(elRef) {
        this.elRef = elRef;
        this.showSource = false;
        this.compName = '';
        this.collapsible = false;
        this.collapsed = false;
        this.html = undefined;
        this.onShowSource = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.tplData = {};
    }
    ExampleComponent.prototype.toggleShowSource = function () {
        this.showSource = !this.showSource;
        if (this.showSource) {
            this.onShowSource.emit();
        }
    };
    ExampleComponent.prototype.ngOnInit = function () {
        this.tplData['html'] = this.initializeData('html');
        this.tplData['scss'] = this.initializeData('scss');
        this.tplData['typescript'] = this.initializeData('typescript');
    };
    ExampleComponent.prototype.initializeData = function (type) {
        var tpl = '';
        if (this.orderedFiles && this.orderedFiles.length > -1) {
            this.orderedFiles.forEach(function (item) {
                if (item['type'] === type) {
                    tpl = item['data'];
                }
            });
        }
        return tpl;
    };
    ExampleComponent.prototype.hasTplData = function (type) {
        var tpl = this.tplData[type];
        if (type === 'html' && this.html !== undefined) {
            return true;
        }
        return tpl ? tpl.length > 0 : false;
    };
    ExampleComponent.prototype.getTplData = function (type) {
        var tpl = this.tplData[type];
        return tpl ? tpl : '';
    };
    return ExampleComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ontimize_web_ngx__["c" /* InputConverter */])(),
    __metadata("design:type", Boolean)
], ExampleComponent.prototype, "collapsible", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ontimize_web_ngx__["c" /* InputConverter */])(),
    __metadata("design:type", Boolean)
], ExampleComponent.prototype, "collapsed", void 0);
ExampleComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'example-comp',
        styles: [__webpack_require__("../../../../../src/app/shared/example/example.component.scss")],
        template: __webpack_require__("../../../../../src/app/shared/example/example.component.html"),
        inputs: [
            'compName: comp-name',
            'orderedFiles: files',
            'collapsible',
            'collapsed'
        ],
        outputs: [
            'onShowSource : showSource'
        ],
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
        host: {
            '[class.example-comp]': 'true'
        }
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object])
], ExampleComponent);

var _a;
//# sourceMappingURL=example.component.js.map

/***/ }),

/***/ "../../../../../src/app/shared/highlight/highlight.component.html":
/***/ (function(module, exports) {

module.exports = "<section highlight-js-content=\"code.highlight\" fxFill>\r\n  <pre class=\"no-margin snippet\" fxFill>\r\n    <button id=\"copy-btn\" class=\"copy-btn\" data-clipboard-target=\"#code\">\r\n      <img class=\"clippy\" width=\"13\" src=\"./assets/images/clippy.svg\" alt=\"Copy to clipboard\">\r\n    </button>\r\n    <code id=\"code\" class=\"highlight\">\r\n      {{ templateContent }}\r\n    </code>\r\n  </pre>\r\n</section>"

/***/ }),

/***/ "../../../../../src/app/shared/highlight/highlight.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "pre.no-margin {\n  margin: 0 !important;\n  white-space: pre; }\n  pre.no-margin code {\n    min-height: 300px;\n    margin: 0; }\n\n.snippet {\n  position: relative; }\n  .snippet .copy-btn {\n    opacity: 1;\n    padding: 2px 6px;\n    position: absolute;\n    right: 4px;\n    top: 32px; }\n    .snippet .copy-btn .clippy {\n      margin-top: -3px;\n      position: relative;\n      top: 3px; }\n\n.copy-btn {\n  position: relative;\n  display: inline-block;\n  padding: 6px 12px;\n  font-size: 13px;\n  font-weight: bold;\n  line-height: 20px;\n  color: #333;\n  white-space: nowrap;\n  vertical-align: middle;\n  cursor: pointer;\n  background-color: #eee;\n  background-image: linear-gradient(#fcfcfc, #eee);\n  border: 1px solid #d5d5d5;\n  border-radius: 3px;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  -webkit-appearance: none; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/highlight/highlight.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HighlightComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HighlightComponent = (function () {
    function HighlightComponent(elRef) {
        this.elRef = elRef;
    }
    HighlightComponent.prototype.ngOnInit = function () {
        if (window['Clipboard'] && !this.clipboard) {
            var copyBtn = this.elRef.nativeElement.querySelectorAll('button#copy-btn');
            if (copyBtn.length) {
                var self_1 = this;
                var element = copyBtn[0];
                this.clipboard = new window['Clipboard'](element);
                this.clipboard.on('success', function (e) {
                    self_1.showTooltip(e.trigger, 'Copied!');
                });
                // this.clipboard.on('error', function(e) {
                //     console.log(e);
                // });
            }
        }
    };
    HighlightComponent.prototype.showTooltip = function (elem, msg) {
        // TODO show tooltip (solve problem of repainting that does not show tooltip)
        alert('Copied!');
    };
    HighlightComponent.prototype.ngOnDestroy = function () {
        if (this.clipboard) {
            this.clipboard.destroy();
        }
    };
    return HighlightComponent;
}());
HighlightComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'highlight-comp',
        styles: [__webpack_require__("../../../../../src/app/shared/highlight/highlight.component.scss")],
        template: __webpack_require__("../../../../../src/app/shared/highlight/highlight.component.html"),
        inputs: [
            'templateContent: template-content',
            'templateType: template-type'
        ],
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object])
], HighlightComponent);

var _a;
//# sourceMappingURL=highlight.component.js.map

/***/ }),

/***/ "../../../../../src/app/shared/navigation-bar.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavigationBarService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ontimize_web_ngx__ = __webpack_require__("../../../../ontimize-web-ngx/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var NavigationBarService = (function () {
    function NavigationBarService() {
        this.currentTitle = null;
        this.visible = true;
        this.titleEmitter = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.visibleEmitter = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    NavigationBarService.prototype.setTitle = function (title) {
        this.currentTitle = title;
        this._emitTitleChanged(this.currentTitle);
    };
    NavigationBarService.prototype.setVisible = function (visible) {
        this.visible = visible;
        this._emitVisibleChanged(this.visible);
    };
    /**
   * Subscribe to title updates
   */
    NavigationBarService.prototype.onTitleChange = function (onNext) {
        return __WEBPACK_IMPORTED_MODULE_1_ontimize_web_ngx__["t" /* ObservableWrapper */].subscribe(this.titleEmitter, onNext);
    };
    NavigationBarService.prototype.onVisibleChange = function (onNext) {
        return __WEBPACK_IMPORTED_MODULE_1_ontimize_web_ngx__["t" /* ObservableWrapper */].subscribe(this.visibleEmitter, onNext);
    };
    NavigationBarService.prototype._emitTitleChanged = function (title) {
        __WEBPACK_IMPORTED_MODULE_1_ontimize_web_ngx__["t" /* ObservableWrapper */].callEmit(this.titleEmitter, title);
    };
    NavigationBarService.prototype._emitVisibleChanged = function (visible) {
        __WEBPACK_IMPORTED_MODULE_1_ontimize_web_ngx__["t" /* ObservableWrapper */].callEmit(this.visibleEmitter, visible);
    };
    return NavigationBarService;
}());
NavigationBarService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
], NavigationBarService);

//# sourceMappingURL=navigation-bar.service.js.map

/***/ }),

/***/ "../../../../../src/app/shared/shared.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__navigation_bar_service__ = __webpack_require__("../../../../../src/app/shared/navigation-bar.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__example_example_component__ = __webpack_require__("../../../../../src/app/shared/example/example.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__highlight_highlight_component__ = __webpack_require__("../../../../../src/app/shared/highlight/highlight.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_highlight_js__ = __webpack_require__("../../../../angular2-highlight-js/lib/highlight-js.module.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_highlight_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_highlight_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ontimize_web_ngx__ = __webpack_require__("../../../../ontimize-web-ngx/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var SharedModule = (function () {
    function SharedModule() {
    }
    return SharedModule;
}());
SharedModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_5_ontimize_web_ngx__["u" /* OntimizeWebModule */],
            __WEBPACK_IMPORTED_MODULE_4_angular2_highlight_js__["HighlightJsModule"]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__example_example_component__["a" /* ExampleComponent */],
            __WEBPACK_IMPORTED_MODULE_3__highlight_highlight_component__["a" /* HighlightComponent */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_5_ontimize_web_ngx__["u" /* OntimizeWebModule */],
            __WEBPACK_IMPORTED_MODULE_2__example_example_component__["a" /* ExampleComponent */],
            __WEBPACK_IMPORTED_MODULE_3__highlight_highlight_component__["a" /* HighlightComponent */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_4_angular2_highlight_js__["HighlightJsService"],
            __WEBPACK_IMPORTED_MODULE_1__navigation_bar_service__["a" /* NavigationBarService */]
        ]
    })
], SharedModule);

//# sourceMappingURL=shared.module.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ontimize_web_ngx__ = __webpack_require__("../../../../ontimize-web-ngx/index.js");




// if (environment.production) {
Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
// }
var promise = Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
promise.then(__WEBPACK_IMPORTED_MODULE_3_ontimize_web_ngx__["v" /* ontimizePostBootstrap */]).catch(function (err) {
    console.error(err.message);
});
//# sourceMappingURL=main.js.map

/***/ }),

/***/ "../../../../moment/locale recursive ^\\.\\/.*$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "../../../../moment/locale/af.js",
	"./af.js": "../../../../moment/locale/af.js",
	"./ar": "../../../../moment/locale/ar.js",
	"./ar-dz": "../../../../moment/locale/ar-dz.js",
	"./ar-dz.js": "../../../../moment/locale/ar-dz.js",
	"./ar-kw": "../../../../moment/locale/ar-kw.js",
	"./ar-kw.js": "../../../../moment/locale/ar-kw.js",
	"./ar-ly": "../../../../moment/locale/ar-ly.js",
	"./ar-ly.js": "../../../../moment/locale/ar-ly.js",
	"./ar-ma": "../../../../moment/locale/ar-ma.js",
	"./ar-ma.js": "../../../../moment/locale/ar-ma.js",
	"./ar-sa": "../../../../moment/locale/ar-sa.js",
	"./ar-sa.js": "../../../../moment/locale/ar-sa.js",
	"./ar-tn": "../../../../moment/locale/ar-tn.js",
	"./ar-tn.js": "../../../../moment/locale/ar-tn.js",
	"./ar.js": "../../../../moment/locale/ar.js",
	"./az": "../../../../moment/locale/az.js",
	"./az.js": "../../../../moment/locale/az.js",
	"./be": "../../../../moment/locale/be.js",
	"./be.js": "../../../../moment/locale/be.js",
	"./bg": "../../../../moment/locale/bg.js",
	"./bg.js": "../../../../moment/locale/bg.js",
	"./bn": "../../../../moment/locale/bn.js",
	"./bn.js": "../../../../moment/locale/bn.js",
	"./bo": "../../../../moment/locale/bo.js",
	"./bo.js": "../../../../moment/locale/bo.js",
	"./br": "../../../../moment/locale/br.js",
	"./br.js": "../../../../moment/locale/br.js",
	"./bs": "../../../../moment/locale/bs.js",
	"./bs.js": "../../../../moment/locale/bs.js",
	"./ca": "../../../../moment/locale/ca.js",
	"./ca.js": "../../../../moment/locale/ca.js",
	"./cs": "../../../../moment/locale/cs.js",
	"./cs.js": "../../../../moment/locale/cs.js",
	"./cv": "../../../../moment/locale/cv.js",
	"./cv.js": "../../../../moment/locale/cv.js",
	"./cy": "../../../../moment/locale/cy.js",
	"./cy.js": "../../../../moment/locale/cy.js",
	"./da": "../../../../moment/locale/da.js",
	"./da.js": "../../../../moment/locale/da.js",
	"./de": "../../../../moment/locale/de.js",
	"./de-at": "../../../../moment/locale/de-at.js",
	"./de-at.js": "../../../../moment/locale/de-at.js",
	"./de-ch": "../../../../moment/locale/de-ch.js",
	"./de-ch.js": "../../../../moment/locale/de-ch.js",
	"./de.js": "../../../../moment/locale/de.js",
	"./dv": "../../../../moment/locale/dv.js",
	"./dv.js": "../../../../moment/locale/dv.js",
	"./el": "../../../../moment/locale/el.js",
	"./el.js": "../../../../moment/locale/el.js",
	"./en-au": "../../../../moment/locale/en-au.js",
	"./en-au.js": "../../../../moment/locale/en-au.js",
	"./en-ca": "../../../../moment/locale/en-ca.js",
	"./en-ca.js": "../../../../moment/locale/en-ca.js",
	"./en-gb": "../../../../moment/locale/en-gb.js",
	"./en-gb.js": "../../../../moment/locale/en-gb.js",
	"./en-ie": "../../../../moment/locale/en-ie.js",
	"./en-ie.js": "../../../../moment/locale/en-ie.js",
	"./en-nz": "../../../../moment/locale/en-nz.js",
	"./en-nz.js": "../../../../moment/locale/en-nz.js",
	"./eo": "../../../../moment/locale/eo.js",
	"./eo.js": "../../../../moment/locale/eo.js",
	"./es": "../../../../moment/locale/es.js",
	"./es-do": "../../../../moment/locale/es-do.js",
	"./es-do.js": "../../../../moment/locale/es-do.js",
	"./es.js": "../../../../moment/locale/es.js",
	"./et": "../../../../moment/locale/et.js",
	"./et.js": "../../../../moment/locale/et.js",
	"./eu": "../../../../moment/locale/eu.js",
	"./eu.js": "../../../../moment/locale/eu.js",
	"./fa": "../../../../moment/locale/fa.js",
	"./fa.js": "../../../../moment/locale/fa.js",
	"./fi": "../../../../moment/locale/fi.js",
	"./fi.js": "../../../../moment/locale/fi.js",
	"./fo": "../../../../moment/locale/fo.js",
	"./fo.js": "../../../../moment/locale/fo.js",
	"./fr": "../../../../moment/locale/fr.js",
	"./fr-ca": "../../../../moment/locale/fr-ca.js",
	"./fr-ca.js": "../../../../moment/locale/fr-ca.js",
	"./fr-ch": "../../../../moment/locale/fr-ch.js",
	"./fr-ch.js": "../../../../moment/locale/fr-ch.js",
	"./fr.js": "../../../../moment/locale/fr.js",
	"./fy": "../../../../moment/locale/fy.js",
	"./fy.js": "../../../../moment/locale/fy.js",
	"./gd": "../../../../moment/locale/gd.js",
	"./gd.js": "../../../../moment/locale/gd.js",
	"./gl": "../../../../moment/locale/gl.js",
	"./gl.js": "../../../../moment/locale/gl.js",
	"./gom-latn": "../../../../moment/locale/gom-latn.js",
	"./gom-latn.js": "../../../../moment/locale/gom-latn.js",
	"./he": "../../../../moment/locale/he.js",
	"./he.js": "../../../../moment/locale/he.js",
	"./hi": "../../../../moment/locale/hi.js",
	"./hi.js": "../../../../moment/locale/hi.js",
	"./hr": "../../../../moment/locale/hr.js",
	"./hr.js": "../../../../moment/locale/hr.js",
	"./hu": "../../../../moment/locale/hu.js",
	"./hu.js": "../../../../moment/locale/hu.js",
	"./hy-am": "../../../../moment/locale/hy-am.js",
	"./hy-am.js": "../../../../moment/locale/hy-am.js",
	"./id": "../../../../moment/locale/id.js",
	"./id.js": "../../../../moment/locale/id.js",
	"./is": "../../../../moment/locale/is.js",
	"./is.js": "../../../../moment/locale/is.js",
	"./it": "../../../../moment/locale/it.js",
	"./it.js": "../../../../moment/locale/it.js",
	"./ja": "../../../../moment/locale/ja.js",
	"./ja.js": "../../../../moment/locale/ja.js",
	"./jv": "../../../../moment/locale/jv.js",
	"./jv.js": "../../../../moment/locale/jv.js",
	"./ka": "../../../../moment/locale/ka.js",
	"./ka.js": "../../../../moment/locale/ka.js",
	"./kk": "../../../../moment/locale/kk.js",
	"./kk.js": "../../../../moment/locale/kk.js",
	"./km": "../../../../moment/locale/km.js",
	"./km.js": "../../../../moment/locale/km.js",
	"./kn": "../../../../moment/locale/kn.js",
	"./kn.js": "../../../../moment/locale/kn.js",
	"./ko": "../../../../moment/locale/ko.js",
	"./ko.js": "../../../../moment/locale/ko.js",
	"./ky": "../../../../moment/locale/ky.js",
	"./ky.js": "../../../../moment/locale/ky.js",
	"./lb": "../../../../moment/locale/lb.js",
	"./lb.js": "../../../../moment/locale/lb.js",
	"./lo": "../../../../moment/locale/lo.js",
	"./lo.js": "../../../../moment/locale/lo.js",
	"./lt": "../../../../moment/locale/lt.js",
	"./lt.js": "../../../../moment/locale/lt.js",
	"./lv": "../../../../moment/locale/lv.js",
	"./lv.js": "../../../../moment/locale/lv.js",
	"./me": "../../../../moment/locale/me.js",
	"./me.js": "../../../../moment/locale/me.js",
	"./mi": "../../../../moment/locale/mi.js",
	"./mi.js": "../../../../moment/locale/mi.js",
	"./mk": "../../../../moment/locale/mk.js",
	"./mk.js": "../../../../moment/locale/mk.js",
	"./ml": "../../../../moment/locale/ml.js",
	"./ml.js": "../../../../moment/locale/ml.js",
	"./mr": "../../../../moment/locale/mr.js",
	"./mr.js": "../../../../moment/locale/mr.js",
	"./ms": "../../../../moment/locale/ms.js",
	"./ms-my": "../../../../moment/locale/ms-my.js",
	"./ms-my.js": "../../../../moment/locale/ms-my.js",
	"./ms.js": "../../../../moment/locale/ms.js",
	"./my": "../../../../moment/locale/my.js",
	"./my.js": "../../../../moment/locale/my.js",
	"./nb": "../../../../moment/locale/nb.js",
	"./nb.js": "../../../../moment/locale/nb.js",
	"./ne": "../../../../moment/locale/ne.js",
	"./ne.js": "../../../../moment/locale/ne.js",
	"./nl": "../../../../moment/locale/nl.js",
	"./nl-be": "../../../../moment/locale/nl-be.js",
	"./nl-be.js": "../../../../moment/locale/nl-be.js",
	"./nl.js": "../../../../moment/locale/nl.js",
	"./nn": "../../../../moment/locale/nn.js",
	"./nn.js": "../../../../moment/locale/nn.js",
	"./pa-in": "../../../../moment/locale/pa-in.js",
	"./pa-in.js": "../../../../moment/locale/pa-in.js",
	"./pl": "../../../../moment/locale/pl.js",
	"./pl.js": "../../../../moment/locale/pl.js",
	"./pt": "../../../../moment/locale/pt.js",
	"./pt-br": "../../../../moment/locale/pt-br.js",
	"./pt-br.js": "../../../../moment/locale/pt-br.js",
	"./pt.js": "../../../../moment/locale/pt.js",
	"./ro": "../../../../moment/locale/ro.js",
	"./ro.js": "../../../../moment/locale/ro.js",
	"./ru": "../../../../moment/locale/ru.js",
	"./ru.js": "../../../../moment/locale/ru.js",
	"./sd": "../../../../moment/locale/sd.js",
	"./sd.js": "../../../../moment/locale/sd.js",
	"./se": "../../../../moment/locale/se.js",
	"./se.js": "../../../../moment/locale/se.js",
	"./si": "../../../../moment/locale/si.js",
	"./si.js": "../../../../moment/locale/si.js",
	"./sk": "../../../../moment/locale/sk.js",
	"./sk.js": "../../../../moment/locale/sk.js",
	"./sl": "../../../../moment/locale/sl.js",
	"./sl.js": "../../../../moment/locale/sl.js",
	"./sq": "../../../../moment/locale/sq.js",
	"./sq.js": "../../../../moment/locale/sq.js",
	"./sr": "../../../../moment/locale/sr.js",
	"./sr-cyrl": "../../../../moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "../../../../moment/locale/sr-cyrl.js",
	"./sr.js": "../../../../moment/locale/sr.js",
	"./ss": "../../../../moment/locale/ss.js",
	"./ss.js": "../../../../moment/locale/ss.js",
	"./sv": "../../../../moment/locale/sv.js",
	"./sv.js": "../../../../moment/locale/sv.js",
	"./sw": "../../../../moment/locale/sw.js",
	"./sw.js": "../../../../moment/locale/sw.js",
	"./ta": "../../../../moment/locale/ta.js",
	"./ta.js": "../../../../moment/locale/ta.js",
	"./te": "../../../../moment/locale/te.js",
	"./te.js": "../../../../moment/locale/te.js",
	"./tet": "../../../../moment/locale/tet.js",
	"./tet.js": "../../../../moment/locale/tet.js",
	"./th": "../../../../moment/locale/th.js",
	"./th.js": "../../../../moment/locale/th.js",
	"./tl-ph": "../../../../moment/locale/tl-ph.js",
	"./tl-ph.js": "../../../../moment/locale/tl-ph.js",
	"./tlh": "../../../../moment/locale/tlh.js",
	"./tlh.js": "../../../../moment/locale/tlh.js",
	"./tr": "../../../../moment/locale/tr.js",
	"./tr.js": "../../../../moment/locale/tr.js",
	"./tzl": "../../../../moment/locale/tzl.js",
	"./tzl.js": "../../../../moment/locale/tzl.js",
	"./tzm": "../../../../moment/locale/tzm.js",
	"./tzm-latn": "../../../../moment/locale/tzm-latn.js",
	"./tzm-latn.js": "../../../../moment/locale/tzm-latn.js",
	"./tzm.js": "../../../../moment/locale/tzm.js",
	"./uk": "../../../../moment/locale/uk.js",
	"./uk.js": "../../../../moment/locale/uk.js",
	"./ur": "../../../../moment/locale/ur.js",
	"./ur.js": "../../../../moment/locale/ur.js",
	"./uz": "../../../../moment/locale/uz.js",
	"./uz-latn": "../../../../moment/locale/uz-latn.js",
	"./uz-latn.js": "../../../../moment/locale/uz-latn.js",
	"./uz.js": "../../../../moment/locale/uz.js",
	"./vi": "../../../../moment/locale/vi.js",
	"./vi.js": "../../../../moment/locale/vi.js",
	"./x-pseudo": "../../../../moment/locale/x-pseudo.js",
	"./x-pseudo.js": "../../../../moment/locale/x-pseudo.js",
	"./yo": "../../../../moment/locale/yo.js",
	"./yo.js": "../../../../moment/locale/yo.js",
	"./zh-cn": "../../../../moment/locale/zh-cn.js",
	"./zh-cn.js": "../../../../moment/locale/zh-cn.js",
	"./zh-hk": "../../../../moment/locale/zh-hk.js",
	"./zh-hk.js": "../../../../moment/locale/zh-hk.js",
	"./zh-tw": "../../../../moment/locale/zh-tw.js",
	"./zh-tw.js": "../../../../moment/locale/zh-tw.js"
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "../../../../moment/locale recursive ^\\.\\/.*$";

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map