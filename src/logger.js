"use strict";
var Logger = (function () {
    function Logger() {
        this._loggerQueue = [];
    }
    Logger.prototype.assert = function (test, message) {
        var optionalParams = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            optionalParams[_i - 2] = arguments[_i];
        }
        this.addToQueue(function () {
            if (optionalParams.length > 0) {
                console.assert(test, message, optionalParams);
            }
            else {
                console.assert(test, message);
            }
        });
        return this;
    };
    Logger.prototype.clear = function () {
        this.addToQueue(function () {
            console.clear();
        });
        return this;
    };
    Logger.prototype.count = function (countTitle) {
        this.addToQueue(function () {
            console.count(countTitle);
        });
        return this;
    };
    Logger.prototype.debug = function (message) {
        var optionalParams = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            optionalParams[_i - 1] = arguments[_i];
        }
        this.addToQueue(function () {
            if (optionalParams.length > 0) {
                console.debug(message, optionalParams);
            }
            else {
                console.debug(message);
            }
        });
        return this;
    };
    Logger.prototype.dir = function (value) {
        var optionalParams = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            optionalParams[_i - 1] = arguments[_i];
        }
        this.addToQueue(function () {
            if (optionalParams.length > 0) {
                console.dir(value, optionalParams);
            }
            else {
                console.dir(value);
            }
        });
        return this;
    };
    Logger.prototype.dirxml = function (value) {
        this.addToQueue(function () {
            console.dirxml(value);
        });
        return this;
    };
    Logger.prototype.error = function (message) {
        var optionalParams = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            optionalParams[_i - 1] = arguments[_i];
        }
        this.addToQueue(function () {
            if (optionalParams.length > 0) {
                console.error(message, optionalParams);
            }
            else {
                console.error(message);
            }
        });
        return this;
    };
    Logger.prototype.info = function (message) {
        var optionalParams = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            optionalParams[_i - 1] = arguments[_i];
        }
        this.addToQueue(function () {
            if (optionalParams.length > 0) {
                console.info(message, optionalParams);
            }
            else {
                console.info(message);
            }
        });
        return this;
    };
    Logger.prototype.log = function (message) {
        var optionalParams = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            optionalParams[_i - 1] = arguments[_i];
        }
        this.addToQueue(function () {
            if (optionalParams.length > 0) {
                console.log(message, optionalParams);
            }
            else {
                console.log(message);
            }
        });
        return this;
    };
    Logger.prototype.msIsIndependentlyComposed = function (element) {
        this.addToQueue(function () {
            return console.msIsIndependentlyComposed(element);
        });
        return this;
    };
    Logger.prototype.profile = function (reportName) {
        this.addToQueue(function () {
            console.profile(reportName);
        });
        return this;
    };
    Logger.prototype.profileEnd = function () {
        this.addToQueue(function () {
            console.profileEnd();
        });
        return this;
    };
    Logger.prototype.select = function (element) {
        this.addToQueue(function () {
            console.select(element);
        });
        return this;
    };
    Logger.prototype.time = function (timerName) {
        this.addToQueue(function () {
            console.time(timerName);
        });
        return this;
    };
    Logger.prototype.timeEnd = function (timerName) {
        this.addToQueue(function () {
            console.timeEnd(timerName);
        });
        return this;
    };
    Logger.prototype.trace = function (message) {
        var optionalParams = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            optionalParams[_i - 1] = arguments[_i];
        }
        this.addToQueue(function () {
            if (optionalParams.length > 0) {
                console.trace(message, optionalParams);
            }
            else {
                console.trace(message);
            }
        });
        return this;
    };
    Logger.prototype.warn = function (message) {
        var optionalParams = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            optionalParams[_i - 1] = arguments[_i];
        }
        this.addToQueue(function () {
            if (optionalParams.length > 0) {
                console.warn(message, optionalParams);
            }
            else {
                console.warn(message);
            }
        });
        return this;
    };
    Logger.prototype.addToQueue = function (func) {
        func();
    };
    Logger.prototype.triggerQueue = function () {
        this._loggerQueue.forEach(function (func) {
            func();
        });
        this._loggerQueue = [];
    };
    return Logger;
}());
exports.Logger = Logger;
//# sourceMappingURL=logger.js.map