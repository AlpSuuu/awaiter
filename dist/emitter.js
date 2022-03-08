"use strict";
var Emitter = /** @class */ (function () {
    function Emitter() {
        this.functions = [];
    }
    Emitter.prototype.getFuncs = function () {
        return this.functions;
    };
    Emitter.prototype.pushFuncs = function (func) {
        this.functions.push(func);
    };
    Emitter.prototype.call = function (caller) {
        this.pushFuncs(caller);
    };
    Emitter.prototype.emit = function (data) {
        function emit(callback) {
            callback.call(void 0, data);
        }
        this.getFuncs().forEach(emit);
    };
    return Emitter;
}());
var _Emitter_ = new Emitter();
module.exports = _Emitter_;
