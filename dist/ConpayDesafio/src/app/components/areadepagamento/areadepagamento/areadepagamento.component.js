"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AreadepagamentoComponent = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var AreadepagamentoComponent = /** @class */ (function () {
    function AreadepagamentoComponent(pagamentoService, fBuilder) {
        this.pagamentoService = pagamentoService;
        this.fBuilder = fBuilder;
        this.img = '/assets/img/logo-conpay.png';
        this.data = this.pagamentoService.allProdutoObj;
        this.estados = [
            { value: "AC" },
            { value: "AL" },
            { value: "AP" },
            { value: "AM" },
            { value: "BA" },
            { value: "CE" },
            { value: "DF" },
            { value: "ES" },
            { value: "GO" },
            { value: "MA" },
            { value: "MT" },
            { value: "MS" },
            { value: "MG" },
            { value: "PA" },
            { value: "PB" },
            { value: "PR" },
            { value: "PE" },
            { value: "PI" },
            { value: "RJ" },
            { value: "RN" },
            { value: "RS" },
            { value: "RO" },
            { value: "RR" },
            { value: "SC" },
            { value: "SP" },
            { value: "SE" },
            { value: "TO" },
        ];
        this.parcelas = [
            { value: 1, nome: "1x " },
            { value: 2, nome: "2x " },
            { value: 3, nome: "3x " },
            { value: 4, nome: "4x " },
            { value: 5, nome: "5x " },
            { value: 6, nome: "6x " },
            { value: 7, nome: "7x " },
            { value: 8, nome: "8x " },
            { value: 9, nome: "9x " },
            { value: 10, nome: "10x " },
            { value: 11, nome: "11x " },
            { value: 12, nome: "12x " }
        ];
        this.fGroupDP = fBuilder.group({
            fullName: ['', forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.maxLength(80)])],
            email: ['', forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.maxLength(60), forms_1.Validators.pattern(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i)])],
            documentNumber: ['', forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.maxLength(14)])],
            dateOfBirth: [''],
            ddd: ['', forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.minLength(2), forms_1.Validators.maxLength(2)])],
            phoneNumber: ['', forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.minLength(8), forms_1.Validators.maxLength(9)])]
        });
        this.fGroupADR = fBuilder.group({
            street: ['', forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.maxLength(80)])],
            number: ['', forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.maxLength(20)])],
            complement: ['', forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.maxLength(40)])],
            postalCode: ['', forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.minLength(8), forms_1.Validators.maxLength(8)])],
            district: ['', forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.maxLength(60)])],
            city: ['', forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.maxLength(60)])],
            federationUnit: ['', forms_1.Validators.compose([forms_1.Validators.required])]
        });
        this.fGroupSADR = fBuilder.group({
            street: [this.fGroupADR.value.street],
            receiverName: [this.fGroupADR.value.receiverName],
            number: [this.fGroupADR.value.number],
            complement: [this.fGroupADR.value.complement],
            postalCode: [this.fGroupADR.value.postalCode],
            district: [this.fGroupADR.value.district],
            city: [this.fGroupADR.value.city],
            federationUnit: [this.fGroupADR.value.federationUnit]
        });
        this.fGroupCARD = fBuilder.group({
            number: ['', forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.maxLength(16)])],
            exp_month: ['', forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.minLength(2), forms_1.Validators.maxLength(2)])],
            exp_year: ['', forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.minLength(4), forms_1.Validators.maxLength(4)])],
            security_code: ['', forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.minLength(3), forms_1.Validators.maxLength(4)])],
            name: ['', forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.maxLength(26)])],
            parcelas: [1, forms_1.Validators.compose([forms_1.Validators.required])]
        });
    }
    AreadepagamentoComponent.prototype.ngOnInit = function () {
        console.log(this.pagamentoService.allProdutoObj);
    };
    AreadepagamentoComponent.prototype.endPayment = function () {
        this.pagamentoService.allProdutoObj.client = this.fGroupDP.value;
        this.pagamentoService.allProdutoObj.client.address = this.fGroupADR.value;
        this.pagamentoService.allProdutoObj.client.shippingAddress = this.fGroupSADR.value;
        this.pagamentoService.allProdutoObj.card.number = this.fGroupCARD.value.number;
        this.pagamentoService.allProdutoObj.card.exp_month = this.fGroupCARD.value.exp_month;
        this.pagamentoService.allProdutoObj.card.exp_year = this.fGroupCARD.value.exp_year;
        this.pagamentoService.allProdutoObj.card.security_code = this.fGroupCARD.value.security_code;
        this.pagamentoService.allProdutoObj.card.holder.name = this.fGroupCARD.value.name;
        this.pagamentoService.allProdutoObj.installments = parseInt(this.fGroupCARD.value.parcelas);
        console.log(this.pagamentoService.allProdutoObj);
        this.pagamentoService.finalizarTransacao(this.data);
    };
    AreadepagamentoComponent = __decorate([
        core_1.Component({
            selector: 'app-areadepagamento',
            templateUrl: './areadepagamento.component.html',
            styleUrls: ['./areadepagamento.component.css']
        })
    ], AreadepagamentoComponent);
    return AreadepagamentoComponent;
}());
exports.AreadepagamentoComponent = AreadepagamentoComponent;
