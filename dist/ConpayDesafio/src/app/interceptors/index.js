"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.httpInterceptorProviders = void 0;
var http_1 = require("@angular/common/http");
var auth_interceptor_1 = require("./auth-interceptor");
exports.httpInterceptorProviders = [
    { provide: http_1.HTTP_INTERCEPTORS, useClass: auth_interceptor_1.AuthInterceptor, multi: true },
];
