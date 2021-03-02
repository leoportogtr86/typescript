"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PagamentoService = void 0;
var http_1 = require("@angular/common/http");
var core_1 = require("@angular/core");
var dialog_1 = require("@angular/material/dialog");
var modalstatus_component_1 = require("src/app/components/modalstatus/modalstatus.component");
var PagamentoService = /** @class */ (function () {
    function PagamentoService(http, api, matDialog) {
        this.http = http;
        this.api = api;
        this.matDialog = matDialog;
        this.allProdutoObj = {
            installments: 0,
            value: 0,
            shippingAmount: 0,
            card: {
                number: '',
                exp_month: '',
                exp_year: '',
                security_code: '',
                holder: {
                    name: ''
                }
            },
            split: [],
            client: {
                fullName: '',
                email: '',
                documentNumber: '',
                dateOfBirth: '',
                ddd: '',
                phoneNumber: '',
                address: {
                    street: '',
                    number: '',
                    complement: '',
                    postalCode: '',
                    district: '',
                    city: '',
                    federationUnit: ''
                },
                shippingAddress: {
                    street: '',
                    receiverName: '',
                    number: '',
                    complement: '',
                    postalCode: '',
                    district: '',
                    city: '',
                    federationUnit: ''
                }
            },
            shoppingCart: []
        };
    }
    PagamentoService.prototype.finalizarTransacao = function (allObj) {
        var _this = this;
        var options = {
            headers: new http_1.HttpHeaders({ 'Content-type': 'application/json; charset=UTF-8' }),
            observe: 'response'
        };
        return this.http.post("" + (this.api.base + this.api.pagar), JSON.stringify(allObj), options)
            .subscribe(function (data) {
            console.log(data);
            window.localStorage.setItem('status', data.body.status);
            window.localStorage.setItem('message', data.body.message);
            _this.openModal();
        });
    };
    PagamentoService.prototype.openModal = function () {
        var dialogConfig = new dialog_1.MatDialogConfig();
        // The user can't close the dialog by clicking outside its body
        dialogConfig.disableClose = true;
        dialogConfig.id = "modal-component";
        dialogConfig.height = "350px";
        dialogConfig.width = "600px";
        // https://material.angular.io/components/dialog/overview
        var modalDialog = this.matDialog.open(modalstatus_component_1.ModalstatusComponent, dialogConfig);
    };
    PagamentoService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], PagamentoService);
    return PagamentoService;
}());
exports.PagamentoService = PagamentoService;
