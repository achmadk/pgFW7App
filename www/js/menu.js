var mainMenuEntry = [{
    "link": "about.html",
    "text": "About"
}, {
    "link": "services.html",
    "text": "Services"
}, {
    "link": "form.html",
    "text": "Form"
}];

var MainMenu = React.createClass({
    render: function() {
        var data = this.props.data;
        return <li>
                <a href={data.link} className="item-link">
                    <div className="item-content">
                        <div className="item-inner">
                            <div className="item-title">{data.text}</div>
                        </div>
                    </div>
                </a>
            </li>
    }
});

ReactDOM.render(<ul>{
    mainMenuEntry.map((m, index) => <MainMenu data={m} key={index} />)
                }</ul>, document.getElementById("simpleNav"));
