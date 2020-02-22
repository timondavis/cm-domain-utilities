"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DomainConverter = /** @class */ (function () {
    function DomainConverter() {
    }
    DomainConverter.hydrateModelFromData = function (domain, data) {
        var instance = Object.create(domain.prototype);
        instance.state = data;
        return instance;
    };
    DomainConverter.hydrateModelStateFromData = function (domain) {
        return domain.state;
    };
    return DomainConverter;
}());
exports.DomainConverter = DomainConverter;
//# sourceMappingURL=DomainConverter.js.map