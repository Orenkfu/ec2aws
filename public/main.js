(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main-navbar></main-navbar>\n<router-outlet>\n\n</router-outlet>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _main_navbar_main_navbar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./main-navbar/main-navbar.component */ "./src/app/main-navbar/main-navbar.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _first_task_first_task_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./first-task/first-task.component */ "./src/app/first-task/first-task.component.ts");
/* harmony import */ var _second_task_second_task_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./second-task/second-task.component */ "./src/app/second-task/second-task.component.ts");
/* harmony import */ var _third_task_third_task_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./third-task/third-task.component */ "./src/app/third-task/third-task.component.ts");
/* harmony import */ var _fourth_task_fourth_task_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./fourth-task/fourth-task.component */ "./src/app/fourth-task/fourth-task.component.ts");
/* harmony import */ var _fifth_task_fifth_task_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./fifth-task/fifth-task.component */ "./src/app/fifth-task/fifth-task.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_countries_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./services/countries.service */ "./src/app/services/countries.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/esm5/expansion.es5.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm5/toolbar.es5.js");
/* harmony import */ var _pipes_summary_pipe__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./pipes/summary.pipe */ "./src/app/pipes/summary.pipe.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






















var routes = [
    {
        path: '',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"]
    },
    {
        path: "first",
        component: _first_task_first_task_component__WEBPACK_IMPORTED_MODULE_7__["FirstTaskComponent"]
    },
    {
        path: "second",
        component: _second_task_second_task_component__WEBPACK_IMPORTED_MODULE_8__["SecondTaskComponent"],
    },
    {
        path: "third",
        component: _third_task_third_task_component__WEBPACK_IMPORTED_MODULE_9__["ThirdTaskComponent"],
    },
    {
        path: "fourth",
        component: _fourth_task_fourth_task_component__WEBPACK_IMPORTED_MODULE_10__["FourthTaskComponent"],
    },
    {
        path: "fifth",
        component: _fifth_task_fifth_task_component__WEBPACK_IMPORTED_MODULE_11__["FifthTaskComponent"],
    },
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _main_navbar_main_navbar_component__WEBPACK_IMPORTED_MODULE_5__["MainNavbarComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
                _first_task_first_task_component__WEBPACK_IMPORTED_MODULE_7__["FirstTaskComponent"],
                _second_task_second_task_component__WEBPACK_IMPORTED_MODULE_8__["SecondTaskComponent"],
                _third_task_third_task_component__WEBPACK_IMPORTED_MODULE_9__["ThirdTaskComponent"],
                _fourth_task_fourth_task_component__WEBPACK_IMPORTED_MODULE_10__["FourthTaskComponent"],
                _fifth_task_fifth_task_component__WEBPACK_IMPORTED_MODULE_11__["FifthTaskComponent"],
                _pipes_summary_pipe__WEBPACK_IMPORTED_MODULE_18__["SummaryPipe"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HttpClientModule"],
                _angular_material_expansion__WEBPACK_IMPORTED_MODULE_15__["MatExpansionModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_0__["MatCardModule"],
                _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_17__["MatToolbarModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_20__["MatIconModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_16__["BrowserAnimationsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_12__["RouterModule"].forRoot(routes),
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"].forRoot(),
            ],
            providers: [_services_countries_service__WEBPACK_IMPORTED_MODULE_13__["CountriesService"],
                {
                    provide: _angular_common__WEBPACK_IMPORTED_MODULE_19__["LocationStrategy"],
                    useClass: _angular_common__WEBPACK_IMPORTED_MODULE_19__["HashLocationStrategy"]
                }
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/fifth-task/fifth-task.component.css":
/*!*****************************************************!*\
  !*** ./src/app/fifth-task/fifth-task.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".image{\r\n    width: 100%;\r\n    height: 100%;\r\n}"

/***/ }),

/***/ "./src/app/fifth-task/fifth-task.component.html":
/*!******************************************************!*\
  !*** ./src/app/fifth-task/fifth-task.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container mat-body-2\">\n  <div class=\"row\">\n\n    <div class=\"col-md-6\">\n\n      <img class=\"image\" src=\"http://nihongo-e-na.com/archives/006/201206/large-4fe806d39a5fc.png\" alt=\"\">\n    </div>\n    <div class=\"col-md-6\">\n      <h3>\n        <small>\n          This website's design is very bad. Here's a few of the reasons why:\n        </small>\n      </h3>\n      <ol class=\"list-group\">\n        <li class=\"list-group-item\">\n          1. It's incredibly dense. content is packed together, makes it very distracting and difficult to navigate.\n        </li>\n        <li class=\"list-group-item\">\n          2. Too many colors! a good website design has a primary color, a secondary (accent) color, perhaps a few different shades\n          of those and a few more color-cue colors (success, danger).\n          <br>This website's colors provide no input and no coherent flow, besides, they're ugly.\n        </li>\n        <li class=\"list-group-item\">\n          3. No focus. There is no header, no footer, and nowhere to focus attention in the website.\n          <br> Everything is packed together in such a mess that any new visitor would find trouble searching for his prefered\n          content.\n        </li>\n        <li class=\"list-group-item\">\n          4. No personality. the use of seemingly random and various colors, no order and no theme, and no memorable 'brand' to set\n          it apart of peer websites.\n        </li>\n        <li class=\"list-group-item\">\n          These are some of probably MANY critiques to this website's design. I confess my design knowledge is mostly self-learned\n          and so I lack the professional expertise for a more detailed, high level breakdown of the design choices.\n        </li>\n      </ol>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/fifth-task/fifth-task.component.ts":
/*!****************************************************!*\
  !*** ./src/app/fifth-task/fifth-task.component.ts ***!
  \****************************************************/
/*! exports provided: FifthTaskComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FifthTaskComponent", function() { return FifthTaskComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FifthTaskComponent = /** @class */ (function () {
    function FifthTaskComponent() {
    }
    FifthTaskComponent.prototype.ngOnInit = function () {
    };
    FifthTaskComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-fifth-task',
            template: __webpack_require__(/*! ./fifth-task.component.html */ "./src/app/fifth-task/fifth-task.component.html"),
            styles: [__webpack_require__(/*! ./fifth-task.component.css */ "./src/app/fifth-task/fifth-task.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FifthTaskComponent);
    return FifthTaskComponent;
}());



/***/ }),

/***/ "./src/app/first-task/first-task.component.css":
/*!*****************************************************!*\
  !*** ./src/app/first-task/first-task.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".image{\r\n    max-height: 600px;\r\n    width: 100%;\r\n    height: 60%\r\n}\r\n.shadow { \r\n       text-shadow: 2px 2px black;\r\n}"

/***/ }),

/***/ "./src/app/first-task/first-task.component.html":
/*!******************************************************!*\
  !*** ./src/app/first-task/first-task.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\n  <ngb-carousel *ngIf=\"tasks\">\n    <ng-template ngbSlide *ngFor=\"let task of tasks.frontend_home_questionnaire.tasks; index as i\">\n      <img [src]=\"getImage(i)\" class=\"image\" alt=\"Random second slide\">\n      <div class=\"carousel-caption shadow\">\n        <h3 class=\"mat-title\">{{task.taskName}}</h3>\n        <div class=\"mat-body-2 \">\n          <p>{{task.description}}</p>\n          <p>\n            {{task.taskType}}\n          </p>\n          <p>\n            {{task.associatedFile | summary }}\n          </p>\n        </div>\n      </div>\n    </ng-template>\n  </ngb-carousel>\n</div>"

/***/ }),

/***/ "./src/app/first-task/first-task.component.ts":
/*!****************************************************!*\
  !*** ./src/app/first-task/first-task.component.ts ***!
  \****************************************************/
/*! exports provided: FirstTaskComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirstTaskComponent", function() { return FirstTaskComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FirstTaskComponent = /** @class */ (function () {
    function FirstTaskComponent(_http) {
        this._http = _http;
    }
    FirstTaskComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getJSONDataAsync("../assets/home_assignment.json").then(function (data) {
            //using seperate function b/c "this" is out of scope.
            _this.setTasks(data);
        });
    };
    ;
    //async get json files from 'path'
    //does not assume file location; can return json files from remote or local path
    FirstTaskComponent.prototype.getJSONDataAsync = function (path) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this._http.get(path, { responseType: 'json' }).subscribe(function (res) {
                resolve(res);
            });
        });
    };
    //returns image for current ngfor index
    //hard coded to go to search carousel folder and search for an image between 0-4 based on the amount of tasks.
    FirstTaskComponent.prototype.getImage = function (i) {
        return "../../assets/carousel/" + i + ".jpeg";
    };
    FirstTaskComponent.prototype.setTasks = function (data) {
        this.tasks = data;
    };
    FirstTaskComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-first-task',
            template: __webpack_require__(/*! ./first-task.component.html */ "./src/app/first-task/first-task.component.html"),
            styles: [__webpack_require__(/*! ./first-task.component.css */ "./src/app/first-task/first-task.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], FirstTaskComponent);
    return FirstTaskComponent;
}());



/***/ }),

/***/ "./src/app/fourth-task/fourth-task.component.css":
/*!*******************************************************!*\
  !*** ./src/app/fourth-task/fourth-task.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "a {\r\n  color: purple;\r\n}\r\n.base { \r\n  color: #f938ab\r\n}"

/***/ }),

/***/ "./src/app/fourth-task/fourth-task.component.html":
/*!********************************************************!*\
  !*** ./src/app/fourth-task/fourth-task.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container mat-body-2 text-center base\">\n\n  <p class=\"mat-title\">\n    This is a LESS code snippet for styling box shadows.\n  </p>\n  <p>\n    It declares a base color (shade of pink) and a function that takes parameters and uses them to style a .box-shadow class,\n    as well as a default .box class.\n  </p>\n  <p>\n    Less is a pre-processor styling language.\n  </p>\n\n  <p>\n    Preprocessors such as less or scss allow us (programmers) to use dynamic features such as variables, functions, loops, imports\n    and more in our stylesheet to create a more elegant and maintainable style for our front end application.\n    <br>Such preprocessors can then be compiled to standard CSS for our runtime environment.\n    <br> For a detailed brief on styling preprocessors, check the documentation for\n    <a href=\"http://lesscss.org/features/\">less</a> or\n    <a href=\"http://sass-lang.com/documentation/file.SASS_REFERENCE.html\">sass</a>\n  </p>\n</div>"

/***/ }),

/***/ "./src/app/fourth-task/fourth-task.component.ts":
/*!******************************************************!*\
  !*** ./src/app/fourth-task/fourth-task.component.ts ***!
  \******************************************************/
/*! exports provided: FourthTaskComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FourthTaskComponent", function() { return FourthTaskComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FourthTaskComponent = /** @class */ (function () {
    function FourthTaskComponent() {
    }
    FourthTaskComponent.prototype.ngOnInit = function () {
    };
    FourthTaskComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-fourth-task',
            template: __webpack_require__(/*! ./fourth-task.component.html */ "./src/app/fourth-task/fourth-task.component.html"),
            styles: [__webpack_require__(/*! ./fourth-task.component.css */ "./src/app/fourth-task/fourth-task.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FourthTaskComponent);
    return FourthTaskComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h1 {\r\n    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif\r\n}"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"text-center jumbotron\">\n  <h1>\n    Razor Grip Project\n  </h1>\n</div>\n<div class=\"container text-center mat-body-2\">\n  <img src=\"../../assets/razorgrip-logo.jpg\" alt=\"\">\n  <br>\n  <p class=\"mat-title\">\n    This project was built using Angular6, Angular Material, and Bootstrap.\n  </p>\n  <p>\n    I chose these technologies because they are the ones I'm most familiar with, although any other tech would do.\n  </p>\n  <p>\n    Use the navbar to navigate between the different tasks. the batman icon represents a logo to navigate home :).\n  </p>\n  <div class=\"mat-body-2\">\n    <div class=\"mat-title\">\n      Breakdown & Issues:\n    </div>\n\n    <ul class=\"text-left\">\n      <li>\n        Task 1: I genuinely hope I correctly understood the goal of this task :). otherwise, no issues.\n      </li>\n      <li>\n        Task 2: I am certain a better performant implementation is possible. I put most of my effort implementing this logic in a\n        concise and readable way, the javascript style.\n      </li>\n    </ul>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/main-navbar/main-navbar.component.css":
/*!*******************************************************!*\
  !*** ./src/app/main-navbar/main-navbar.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/main-navbar/main-navbar.component.html":
/*!********************************************************!*\
  !*** ./src/app/main-navbar/main-navbar.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar class=\"navbar navbar-expand-md navbar-light fixed-top\" color=\"primary\">\n  <mat-toolbar-row>\n    <a style=\"padding-top: 15px\" class=\"navbar-brand\" routerLink='/'>\n      <mat-icon #icon svgIcon=\"batman\"></mat-icon>\n    </a>\n    <span class=\"nav-item\">\n      <a class=\"nav-link pointer\" routerLink=\"/first\">First Task</a>\n    </span>\n\n\n    <span class=\"nav-item\">\n      <a class=\"nav-link pointer\" routerLink=\"/second\">Second Task</a>\n    </span>\n\n    <span class=\"nav-item\">\n      <a class=\"nav-link pointer\" routerLink=\"/third\">Third Task</a>\n    </span>\n    <span class=\"nav-item\">\n      <a class=\"nav-link pointer\" routerLink=\"/fourth\">Fourth Task</a>\n    </span>\n    <span class=\"nav-item\">\n      <a class=\"nav-link pointer\" routerLink=\"/fifth\">Fifth Task</a>\n    </span>\n  </mat-toolbar-row>\n\n</mat-toolbar>"

/***/ }),

/***/ "./src/app/main-navbar/main-navbar.component.ts":
/*!******************************************************!*\
  !*** ./src/app/main-navbar/main-navbar.component.ts ***!
  \******************************************************/
/*! exports provided: MainNavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainNavbarComponent", function() { return MainNavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MainNavbarComponent = /** @class */ (function () {
    function MainNavbarComponent(iconRegistry, sanitizer) {
        iconRegistry.addSvgIcon('batman', sanitizer.bypassSecurityTrustResourceUrl('../../assets/icons/batman.svg'));
    }
    MainNavbarComponent.prototype.log = function (any) {
        console.log(any);
    };
    MainNavbarComponent.prototype.ngOnInit = function () {
    };
    MainNavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'main-navbar',
            template: __webpack_require__(/*! ./main-navbar.component.html */ "./src/app/main-navbar/main-navbar.component.html"),
            styles: [__webpack_require__(/*! ./main-navbar.component.css */ "./src/app/main-navbar/main-navbar.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIconRegistry"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"]])
    ], MainNavbarComponent);
    return MainNavbarComponent;
}());



/***/ }),

/***/ "./src/app/pipes/summary.pipe.ts":
/*!***************************************!*\
  !*** ./src/app/pipes/summary.pipe.ts ***!
  \***************************************/
/*! exports provided: SummaryPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SummaryPipe", function() { return SummaryPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SummaryPipe = /** @class */ (function () {
    function SummaryPipe() {
    }
    SummaryPipe.prototype.transform = function (value, limit) {
        if (!value)
            return null;
        var actualLimit = (limit) ? limit : 50;
        if (value.length > actualLimit) {
            return value.substr(0, actualLimit) + '...';
        }
        else
            return value;
    };
    SummaryPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'summary'
        })
    ], SummaryPipe);
    return SummaryPipe;
}());



/***/ }),

/***/ "./src/app/second-task/second-task.component.css":
/*!*******************************************************!*\
  !*** ./src/app/second-task/second-task.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-subheading {\r\n    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif\r\n}"

/***/ }),

/***/ "./src/app/second-task/second-task.component.html":
/*!********************************************************!*\
  !*** ./src/app/second-task/second-task.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"heading\">\n    <h1 class=\"mat-subheading text-center\">\n      An accordion of countries! click on a country to reveal the list of cities\n    </h1>\n  </div>\n  <mat-accordion>\n    <mat-expansion-panel *ngFor='let location of locations'>\n      <mat-expansion-panel-header>\n        <mat-panel-title>\n\n        </mat-panel-title>\n        <mat-panel-description>\n          <h2>\n            <small>\n              {{location.country}}\n            </small>\n          </h2>\n        </mat-panel-description>\n      </mat-expansion-panel-header>\n      <div *ngFor=\"let city of location.cities\" class=\"text-center\">\n        <mat-action-row style=\"justify-content: left\">\n          {{city}}\n        </mat-action-row>\n      </div>\n    </mat-expansion-panel>\n  </mat-accordion>\n</div>\n\n<div class=\"container\">\n\n  <mat-accordion>\n    <mat-expansion-panel *ngFor='let country of countries; index as i'>\n      <mat-expansion-panel-header>\n        <mat-panel-title>\n\n        </mat-panel-title>\n        <mat-panel-description>\n          <h2>\n            <small>\n              {{country}}\n            </small>\n          </h2>\n        </mat-panel-description>\n      </mat-expansion-panel-header>\n      <div *ngFor=\"let city of test[i].cities\" class=\"text-center\">\n        <mat-action-row style=\"justify-content: left\">\n          {{city}}\n        </mat-action-row>\n      </div>\n    </mat-expansion-panel>\n  </mat-accordion>\n</div>"

/***/ }),

/***/ "./src/app/second-task/second-task.component.ts":
/*!******************************************************!*\
  !*** ./src/app/second-task/second-task.component.ts ***!
  \******************************************************/
/*! exports provided: SecondTaskComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SecondTaskComponent", function() { return SecondTaskComponent; });
/* harmony import */ var _services_countries_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../services/countries.service */ "./src/app/services/countries.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SecondTaskComponent = /** @class */ (function () {
    function SecondTaskComponent(countriesService) {
        this.countriesService = countriesService;
        this.locations = [];
    }
    SecondTaskComponent.prototype.getAllCountries = function () {
        var _this = this;
        this.countriesService.get().subscribe(function (input) {
            /*
            In an actual project this code should be extracted to an external function to be reusable, testable, and maintainable.
            I highly suspect there is a more performant way to implement this logic, but within the timeframe I focused on keeping it concise and readable.
            */
            var result = input.reduce(function (accum, current, index) {
                //occurs once: accum starts as {}
                if (!(accum instanceof Array)) {
                    accum = [{ country: current.country, cities: [current.city] }];
                }
                //checks for duplicate on the country property of accum array
                if (!(accum.find(function (location) { return location.country == input[index].country; }))) {
                    accum.push({ country: current.country, cities: [current.city] });
                }
                else {
                    var country = accum.find(function (location) { return location.country == input[index].country; });
                    //checks for duplicate on the cities array of current country
                    if (!country.cities.includes(current.city)) {
                        var i = accum.indexOf(country);
                        accum[i].cities.push(current.city);
                    }
                }
                return accum;
            });
            _this.locations = result;
        });
    };
    SecondTaskComponent.prototype.ngOnInit = function () {
        this.getAllCountries();
    };
    SecondTaskComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-second-task',
            template: __webpack_require__(/*! ./second-task.component.html */ "./src/app/second-task/second-task.component.html"),
            styles: [__webpack_require__(/*! ./second-task.component.css */ "./src/app/second-task/second-task.component.css")]
        }),
        __metadata("design:paramtypes", [_services_countries_service__WEBPACK_IMPORTED_MODULE_0__["CountriesService"]])
    ], SecondTaskComponent);
    return SecondTaskComponent;
}());



/***/ }),

/***/ "./src/app/services/countries.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/countries.service.ts ***!
  \***********************************************/
/*! exports provided: CountriesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountriesService", function() { return CountriesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CountriesService = /** @class */ (function () {
    function CountriesService(http) {
        this.http = http;
        this.url = 'http://northwind.servicestack.net/customers.json';
    }
    CountriesService.prototype.get = function () {
        var list;
        var cities;
        return this.http.get(this.url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) {
            //returning only cities and countries for comfort and readability, although it is possibly inferior performance-wise
            return response['Customers'].map(function (customer) {
                return { city: customer.City, country: customer.Country };
            });
        }));
    };
    CountriesService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], CountriesService);
    return CountriesService;
}());



/***/ }),

/***/ "./src/app/third-task/third-task.component.css":
/*!*****************************************************!*\
  !*** ./src/app/third-task/third-task.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card {\r\n    max-width: 600px;\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/third-task/third-task.component.html":
/*!******************************************************!*\
  !*** ./src/app/third-task/third-task.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\n  <mat-card class=\"card secondary\">\n    <mat-card-header>\n      <mat-card-title>\n        <h1 class=\"mat-title\">\n          This is an image of grumpy cat!\n        </h1>\n      </mat-card-title>\n      <mat-card-subtitle>World's most famous cat</mat-card-subtitle>\n    </mat-card-header>\n    <img mat-card-image [src]=\"base64Image\" alt=\"Photo of a Shiba Inu\">\n    <mat-card-content class=\"secondary\">\n      <p>\n        More specifically, this is a base64 encoded image of grumpy cat.\n        <br> Base64 is basically a way to 'format' (encode) binary data in ASCII string format.\n        <br> This way, binary data can be easily stored or transfered without unexpected changes.\n      </p>\n    </mat-card-content>\n  </mat-card>\n</div>"

/***/ }),

/***/ "./src/app/third-task/third-task.component.ts":
/*!****************************************************!*\
  !*** ./src/app/third-task/third-task.component.ts ***!
  \****************************************************/
/*! exports provided: ThirdTaskComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThirdTaskComponent", function() { return ThirdTaskComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ThirdTaskComponent = /** @class */ (function () {
    function ThirdTaskComponent() {
        this.base64Image = 'data:image/jpeg;base64,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';
    }
    ThirdTaskComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-third-task',
            template: __webpack_require__(/*! ./third-task.component.html */ "./src/app/third-task/third-task.component.html"),
            styles: [__webpack_require__(/*! ./third-task.component.css */ "./src/app/third-task/third-task.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ThirdTaskComponent);
    return ThirdTaskComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Work\angular\RazorGrip-Project\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map