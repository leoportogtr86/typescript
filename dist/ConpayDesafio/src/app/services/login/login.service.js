"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginService = void 0;
var http_1 = require("@angular/common/http");
var core_1 = require("@angular/core");
var jwt_decode_1 = __importDefault(require("jwt-decode"));
var LoginService = /** @class */ (function () {
    function LoginService(http, api, alert, router, _location) {
        this.http = http;
        this.api = api;
        this.alert = alert;
        this.router = router;
        this._location = _location;
    }
    LoginService.prototype.login = function (accessKeyId, secretKey) {
        var _this = this;
        var options = {
            headers: new http_1.HttpHeaders({ 'Content-type': 'application/json; charset=UTF-8' }),
            observe: 'response'
        };
        return this.http.post("" + (this.api.base + this.api.login), { accessKeyId: accessKeyId, secretKey: secretKey }, options)
            .subscribe(function (res) {
            if (res && res.headers.get('ACCESS_TOKEN')) {
                window.localStorage.setItem('token', res.headers.get('ACCESS_TOKEN'));
                _this.alert.alertaSnackBar("Login efetuado com sucesso!!!", "OK");
                _this._location.back();
            }
        }, function (error) {
            console.log(error);
            _this.alert.alertaSnackBar(error.error.message, "Ok");
        });
    };
    LoginService.prototype.getAuthToken = function () {
        var token = window.localStorage.getItem('token');
        return token;
    };
    LoginService.prototype.getTokenExpirationDate = function (token) {
        var decoded = jwt_decode_1.default(token);
        if (decoded.exp === undefined) {
            return null;
        }
        var date = new Date(0);
        date.setUTCSeconds(decoded.exp);
        return date;
    };
    LoginService.prototype.isTokenExpired = function (token) {
        if (!token) {
            return true;
        }
        var date = this.getTokenExpirationDate(token);
        if (date === undefined) {
            return false;
        }
        return !(date.valueOf() > new Date().valueOf());
    };
    LoginService.prototype.isUserLoggedIn = function () {
        var token = this.getAuthToken();
        if (!token) {
            return false;
        }
        else if (this.isTokenExpired(token)) {
            return false;
        }
        else {
            return true;
        }
    };
    LoginService.prototype.logout = function () {
        window.localStorage.removeItem('token');
        this.router.navigate(['/produtos']);
    };
    LoginService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], LoginService);
    return LoginService;
}());
exports.LoginService = LoginService;
