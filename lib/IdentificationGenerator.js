"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var IdentificationGenerator = /** @class */ (function () {
    function IdentificationGenerator() {
    }
    IdentificationGenerator.UUID = function () {
        var uuid = require('uuid/v4');
        return uuid();
    };
    return IdentificationGenerator;
}());
exports.IdentificationGenerator = IdentificationGenerator;
//# sourceMappingURL=IdentificationGenerator.js.map