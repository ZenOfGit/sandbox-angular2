"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlayerListComponent = void 0;
var core_1 = require("@angular/core");
var PlayerListComponent = /** @class */ (function () {
    function PlayerListComponent() {
        this.players = [
            { code: 'plr101', name: 'Brett', gender: 'Male', annualSalary: 2750000, dateOfBirth: '8/9/1964' },
            { code: 'plr102', name: 'Wayne', gender: 'Male', annualSalary: 2200000, dateOfBirth: '1/26/1961' },
            { code: 'plr103', name: 'Alexander', gender: 'Male', annualSalary: 9500000, dateOfBirth: '11/17/1985' },
            { code: 'plr104', name: 'Patrick', gender: 'Male', annualSalary: 10000000, dateOfBirth: '11/19/1988' }
        ];
    }
    PlayerListComponent.prototype.getPlayers = function () {
        this.players = [
            { code: 'plr101', name: 'Brett', gender: 'Male', annualSalary: 2750000, dateOfBirth: '8/9/1964' },
            { code: 'plr102', name: 'Wayne', gender: 'Male', annualSalary: 2200000, dateOfBirth: '1/26/1961' },
            { code: 'plr103', name: 'Alexander', gender: 'Male', annualSalary: 9500000, dateOfBirth: '11/17/1985' },
            { code: 'plr104', name: 'Patrick', gender: 'Male', annualSalary: 10000000, dateOfBirth: '11/19/1988' },
            { code: 'plr105', name: 'Ed', gender: 'Male', annualSalary: 2950000, dateOfBirth: '4/21/1965' }
        ];
    };
    PlayerListComponent.prototype.trackByPlayerCode = function (index, employee) {
        return employee.code;
    };
    PlayerListComponent.prototype.ngOnInit = function () {
    };
    PlayerListComponent = __decorate([
        core_1.Component({
            selector: 'app-player-list',
            templateUrl: './player-list.component.html',
            styleUrls: ['./player-list.component.css']
        }),
        __metadata("design:paramtypes", [])
    ], PlayerListComponent);
    return PlayerListComponent;
}());
exports.PlayerListComponent = PlayerListComponent;
//# sourceMappingURL=player-list.component.js.map