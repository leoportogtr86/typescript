"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginComponent = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var LoginComponent = /** @class */ (function () {
    function LoginComponent(fBuilder, loginService, alert) {
        this.fBuilder = fBuilder;
        this.loginService = loginService;
        this.alert = alert;
        this.img = '/assets/img/conpaycolor.svg';
        this.fGroup = fBuilder.group({
            accessKeyId: ["", forms_1.Validators.compose([forms_1.Validators.required])],
            secretKey: ["", forms_1.Validators.compose([forms_1.Validators.required])]
        });
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    Object.defineProperty(LoginComponent.prototype, "f", {
        get: function () { return this.fGroup.controls; },
        enumerable: false,
        configurable: true
    });
    LoginComponent.prototype.onSubmit = function () {
        if (this.fGroup.invalid) {
            if (this.f.accessKeyId.value == "") {
                this.alert.alertaSnackBar("Por favor, informe um usuário válido", "Ok");
                return;
            }
            else if (this.f.secretKey.value == "") {
                this.alert.alertaSnackBar("Por favor, informe uma senha válida", "Ok");
                return;
            }
        }
        else {
            this.loginService.login(this.f.accessKeyId.value, this.f.secretKey.value);
        }
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'app-login',
            templateUrl: './login.component.html',
            styleUrls: ['./login.component.css']
        })
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
