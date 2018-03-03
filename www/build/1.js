webpackJsonp([1],{

/***/ 494:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupChoicePageModule", function() { return SignupChoicePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__signup_choice__ = __webpack_require__(499);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SignupChoicePageModule = (function () {
    function SignupChoicePageModule() {
    }
    return SignupChoicePageModule;
}());
SignupChoicePageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__signup_choice__["a" /* SignupChoicePage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__signup_choice__["a" /* SignupChoicePage */]),
        ]
    })
], SignupChoicePageModule);

//# sourceMappingURL=signup-choice.module.js.map

/***/ }),

/***/ 499:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupChoicePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(34);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the SignupChoicePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SignupChoicePage = (function () {
    function SignupChoicePage(menuCtrl, navCtrl, navParams) {
        this.menuCtrl = menuCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.menuCtrl.enable(false, 'navMenu');
    }
    SignupChoicePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SignupChoicePage');
    };
    SignupChoicePage.prototype.goToPersonalSignupPage = function () {
        this.navCtrl.push('UserSignupPage');
    };
    SignupChoicePage.prototype.goToOrganizationSignupPage = function () {
        this.navCtrl.push('OrgSignupPage');
    };
    return SignupChoicePage;
}());
SignupChoicePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-signup-choice',template:/*ion-inline-start:"/Users/amandabrummett/Desktop/490/Beacon/src/pages/signup-choice/signup-choice.html"*/'<!--\n  Generated template for the SignupChoicePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="secondary">\n    <ion-title>Account type:</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <p>Choose this if you are an\n    <strong>individual entity</strong> \n    in search of posts from organizations. \n  </p>\n  <button ion-button block type="submit" (click)="goToPersonalSignupPage()">\n     Personal account\n  </button>\n\n  <p>Choose this if you are an\n    <strong>organization or non-profit</strong> desiring to\n    <strong>provide aid, support, and relief</strong> to local people.\n  </p>\n  <button ion-button block type="submit" (click)="goToOrganizationSignupPage()">\n    Organization account\n  </button>\n\n</ion-content>\n'/*ion-inline-end:"/Users/amandabrummett/Desktop/490/Beacon/src/pages/signup-choice/signup-choice.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* MenuController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
], SignupChoicePage);

//# sourceMappingURL=signup-choice.js.map

/***/ })

});
//# sourceMappingURL=1.js.map