'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _typeof(obj) { return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Application = (function () {
    function Application() {
        _classCallCheck(this, Application);

        this._user = {};
        this._mailId = null;
        this._dispId = null;
        this._page = null;
        this.f7 = new Framework7();
        this.$$ = Dom7;
        this.mainView = this.addMainView();
    }

    _createClass(Application, [{
        key: 'warningConstructor',
        value: function warningConstructor(text, cons) {
            console.log("WARNING: " + text + " must be " + (typeof cons === 'undefined' ? 'undefined' : _typeof(cons)) + "!");
        }
    }, {
        key: 'addMainView',
        value: function addMainView() {
            return this.f7.addView('.view-main', {
                dynamicNavbar: true
            });
        }
    }, {
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
        key: 'loadAboutPage',
        value: function loadAboutPage(page) {
            ReactDOM.render(React.createElement(Content, { page: "about" }), document.getElementById("navbar"));
        }
    }, {
        key: 'loadDynamicPage',
        value: function loadDynamicPage(index) {
            this.mainView.router.loadContent('<!-- Top Navbar-->' + '<div class="navbar">' + '  <div class="navbar-inner">' + '    <div class="left"><a href="#" class="back link"><i class="icon icon-back"></i><span>Back</span></a></div>' + '    <div class="center sliding">Dynamic Page ' + index + '</div>' + '  </div>' + '</div>' + '<div class="pages">' + '  <!-- Page, data-page contains page name-->' + '  <div data-page="dynamic-pages" class="page">' + '    <!-- Scrollable page content-->' + '    <div class="page-content">' + '      <div class="content-block">' + '        <div class="content-block-inner">' + '          <p>Here is a dynamic page created on ' + new Date() + ' !</p>' + '          <p>Go <a href="#" class="back">back</a> or go to <a href="services.html">Services</a>.</p>' + '        </div>' + '      </div>' + '    </div>' + '  </div>' + '</div>');
            return;
        }
    }, {
        key: 'user',
        get: function get() {
            return this._user;
        },
        set: function set(data) {
            if ((typeof data === 'undefined' ? 'undefined' : _typeof(data)) === 'object') {
                this._user = {
                    id: data.id,
                    name: data.name,
                    desc: data.title
                };
            } else {
                this._user = {};
                this.warningConstructor("user", this._user);
            }
        }
    }, {
        key: 'mailId',
        get: function get() {
            return this._mailId;
        },
        set: function set(id) {
            if (typeof id === 'number') {
                this._mailId = id;
            } else {
                this._mailId = 0;
                this.warningConstructor("mailId", this._mailId);
                this._mailId = null;
            }
        }
    }, {
        key: 'dispId',
        get: function get() {
            return this._dispId;
        },
        set: function set(id) {
            if (typeof id === 'number') {
                this._dispId = id;
            } else {
                this._dispId = 0;
                this.warningConstructor("dispId", this._mailId);
                this._dispId = null;
            }
        }
    }, {
        key: 'page',
        get: function get() {
            return this._page;
        },
        set: function set(page) {
            if ((typeof page === 'undefined' ? 'undefined' : _typeof(page)) === 'object') {
                this._page = page.name;
            } else {
                this._page = {};
                this.warningConstructor("page", this._page);
                this._page = null;
            }
        }
    }]);

    return Application;
})();

var app = new Application();
console.log(app);

