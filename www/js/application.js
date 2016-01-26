class Application {
    constructor() {
        this._user = {};
        this._mailId = null;
        this._dispId = null;
    }
    get user() { return this._user; }
    set user(data) { this._user = (typeof(data) === 'object') ? ({
        id : data.id,
        name : data.name,
        desc : data.title,
    }) : {}; }
    get mailId() {return this._mailId; }
    set mailId(id) { this._mailId = (typeof(id) === 'number') ? id : null; }
    get dispId() {return this._dispId; }
    set dispId(id) { this._dispId = (typeof(id) === 'number') ? id : null; }
}

var app = new Application();
console.log(JSON.stringify(app,null,2));
app.user = 9090;
app.mailId = 9090;
console.log(JSON.stringify(app,null,2));