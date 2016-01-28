class Application {
    constructor() {
        this._user = {};
        this._mailId = null;
        this._dispId = null;
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
    warningConstructor(text,cons) {
        console.log("WARNING: " + text + " must be " + typeof(cons) + "!");
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
}

export default Application