"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModalstatusComponent = void 0;
var core_1 = require("@angular/core");
var ModalstatusComponent = /** @class */ (function () {
    function ModalstatusComponent(dialogRef, router) {
        this.dialogRef = dialogRef;
        this.router = router;
        this.status = window.localStorage.getItem('status');
        this.message = window.localStorage.getItem('message');
    }
    ModalstatusComponent.prototype.ngOnInit = function () {
        console.log(this.status, this.message);
    };
    ModalstatusComponent.prototype.actionFunction = function () {
        this.closeModal();
        window.localStorage.removeItem('status');
        window.localStorage.removeItem('message');
        window.localStorage.removeItem('cart');
        this.router.navigate(['/produtos']);
    };
    ModalstatusComponent.prototype.closeModal = function () {
        this.dialogRef.close();
    };
    ModalstatusComponent = __decorate([
        core_1.Component({
            selector: 'app-modalstatus',
            templateUrl: './modalstatus.component.html',
            styleUrls: ['./modalstatus.component.css']
        })
    ], ModalstatusComponent);
    return ModalstatusComponent;
}());
exports.ModalstatusComponent = ModalstatusComponent;
