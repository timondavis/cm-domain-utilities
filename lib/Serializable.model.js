"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SerializableModel = /** @class */ (function () {
    function SerializableModel() {
    }
    SerializableModel.prototype.toState = function () {
        return this.state;
    };
    SerializableModel.prototype.stringify = function () {
        return JSON.stringify(this.toState());
    };
    return SerializableModel;
}());
exports.SerializableModel = SerializableModel;
//# sourceMappingURL=Serializable.model.js.map