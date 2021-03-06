'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _Client2 = require('./Client');

var _Client3 = _interopRequireDefault(_Client2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * adyen-client
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright (c) 2015 Daniel Biedma Ramos
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Licensed under the MIT license.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

var Method = function (_Client) {
    _inherits(Method, _Client);

    function Method(config, clientCfg) {
        _classCallCheck(this, Method);

        var method = config.method;
        var path = config.path;
        var fields = config.fields;

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Method).call(this, clientCfg, path));

        _this.method = method;
        _this.path = path;
        _this.fields = fields;
        _this.merchantAccount = clientCfg.merchantAccount;
        return _this;
    }

    _createClass(Method, [{
        key: 'checkRequiredParams',
        value: function checkRequiredParams(params) {
            var inputKeys = Object.keys(params);
            var definitionKeys = Object.keys(this.fields);
            var requiredRemainParams = [];

            for (var i = 0; i < definitionKeys.length; i++) {
                var ky = definitionKeys[i];
                var cfgField = this.fields[ky];

                if (keys.indexOf(ky.field) < 0 && cfgField.required) {
                    requiredParams.push(ky.field);
                }
            }

            if (requiredRemainParams.length > 0) {
                return Promise.reject(new Error('You dont send all required params. [' + requiredRemainParams.toString() + ']'));
            }

            return Promise.resolve(params);
        }
    }, {
        key: 'run',
        value: function run(params) {
            var data = Object.assign({
                merchantAccount: this.merchantAccount
            }, params);

            return this.checkRequiredParams(data).then(this.makeRequest);
        }
    }]);

    return Method;
}(_Client3.default);

exports.default = Method;
//# sourceMappingURL=Method.js.map