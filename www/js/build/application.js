'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

//Object.defineProperty(exports, "__esModule", {
//    value: true
//});

function _typeof(obj) { return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Application = (function () {
    function Application() {
        _classCallCheck(this, Application);

        this._user = {};
        this._mailId = null;
        this._dispId = null;
    }

    _createClass(Application, [{
        key: 'loadIndexPage',
        value: function loadIndexPage(e) {
            ReactDOM.render(React.createElement("ul", null, mainMenuEntry.map(function (m, index) {
                return React.createElement(MainMenu, {
                    data: m,
                    key: index
                });
            })), document.getElementById("simpleNav"));
            ReactDOM.render(React.createElement(PanelColumn, { data: sidePanelData }), document.getElementById("sidePanel"));
        }
    }, {
        key: 'user',
        get: function get() {
            return this._user;
        },
        set: function set(data) {
            this._user = (typeof data === 'undefined' ? 'undefined' : _typeof(data)) === 'object' ? {
                id: data.id,
                name: data.name,
                desc: data.title
            } : {};
        }
    }, {
        key: 'mailId',
        get: function get() {
            return this._mailId;
        },
        set: function set(id) {
            this._mailId = typeof id === 'number' ? id : null;
        }
    }, {
        key: 'dispId',
        get: function get() {
            return this._dispId;
        },
        set: function set(id) {
            this._dispId = typeof id === 'number' ? id : null;
        }
    }]);

    return Application;
})();

var app = new Application();
console.log(JSON.stringify(app,null,2));
app.user = 9090;
app.mailId = 9090;
console.log(JSON.stringify(app,null,2));