class Application {
    constructor() {
        this._user = {};
        this._mailId = null;
        this._dispId = null;
        this._page = null;
        this.f7 = new Framework7();
        this.$$ = Dom7;
        this.mainView = this.addMainView();
    }
    get user() { return this._user; }
    set user(data) { 
        if(typeof(data) === 'object') {
            this._user = {
                id : data.id,
                name : data.name,
                desc : data.title        
            };    
        } else {
            this._user = {};
            this.warningConstructor("user",this._user);
        }
    }
    get mailId() {return this._mailId; }
    set mailId(id) { 
        if(typeof(id) === 'number') {
            this._mailId = id;    
        } else {
            this._mailId = 0;
            this.warningConstructor("mailId",this._mailId);
            this._mailId = null;
        }
    }
    get dispId() {return this._dispId; }
    set dispId(id) { 
        if(typeof(id) === 'number') {
            this._dispId = id;    
        } else {
            this._dispId = 0;
            this.warningConstructor("dispId",this._mailId);
            this._dispId = null;
        }
    }
    get page() { return this._page; }
    set page(page) {
        if(typeof(page) === 'object') {
            this._page = page.name;
        } else {
            this._page = {};
            this.warningConstructor("page",this._page);
            this._page = null;
        }
    }
    warningConstructor(text,cons) {
        console.log("WARNING: " + text + " must be " + typeof(cons) + "!");
    }
    addMainView() {
        return this.f7.addView('.view-main',{
           dynamicNavbar: true 
        });
    }
    loadIndexPage(e) {
        ReactDOM.render(React.createElement(
            "ul",
            null,
            mainMenuEntry.map((m, index) => React.createElement(MainMenu, {
                data: m,
                key: index
            }))
        ), document.getElementById("simpleNav"));
        ReactDOM.render(React.createElement(PanelColumn, { data: sidePanelData }), document.getElementById("sidePanel"));
    }
    loadAboutPage(page) {
        ReactDOM.render(React.createElement(Content, { page: "about" }), document.getElementById("navbar"));
    }
    loadDynamicPage(index) {
        this.mainView.router.loadContent('<!-- Top Navbar-->' +
        '<div class="navbar">' +
        '  <div class="navbar-inner">' +
        '    <div class="left"><a href="#" class="back link"><i class="icon icon-back"></i><span>Back</span></a></div>' +
        '    <div class="center sliding">Dynamic Page ' + index + '</div>' +
        '  </div>' +
        '</div>' +
        '<div class="pages">' +
        '  <!-- Page, data-page contains page name-->' +
        '  <div data-page="dynamic-pages" class="page">' +
        '    <!-- Scrollable page content-->' +
        '    <div class="page-content">' +
        '      <div class="content-block">' +
        '        <div class="content-block-inner">' +
        '          <p>Here is a dynamic page created on ' + new Date() + ' !</p>' +
        '          <p>Go <a href="#" class="back">back</a> or go to <a href="services.html">Services</a>.</p>' +
        '        </div>' +
        '      </div>' +
        '    </div>' +
        '  </div>' +
        '</div>');
        return;
    }
}

var app = new Application();
console.log(app);