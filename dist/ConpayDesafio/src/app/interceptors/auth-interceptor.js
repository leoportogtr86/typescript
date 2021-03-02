"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthInterceptor = void 0;
var core_1 = require("@angular/core");
var AuthInterceptor = /** @class */ (function () {
    function AuthInterceptor(loginService) {
        this.loginService = loginService;
    }
    AuthInterceptor.prototype.intercept = function (req, next) {
        var token = this.loginService.getAuthToken();
        var request = req;
        if (token) {
            /*Como o request é imutável, é preciso fazer um clone
            para mudar as suas propriedades e passar o token com Authorization Bearer*/
            request = req.clone({
                headers: req.headers.set('Authorization', "Bearer " + token)
            });
        }
        //Retorna o request com o erro tratado
        return next.handle(request);
    };
    AuthInterceptor = __decorate([
        core_1.Injectable()
    ], AuthInterceptor);
    return AuthInterceptor;
}());
exports.AuthInterceptor = AuthInterceptor;
