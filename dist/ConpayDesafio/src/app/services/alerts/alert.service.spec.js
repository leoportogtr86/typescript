"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var alert_service_1 = require("./alert.service");
describe('AlertService', function () {
    var service;
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({});
        service = testing_1.TestBed.inject(alert_service_1.AlertService);
    });
    it('should be created', function () {
        expect(service).toBeTruthy();
    });
});
