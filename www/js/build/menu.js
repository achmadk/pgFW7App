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
    displayName: "MainMenu",

    render: function() {
        var data = this.props.data;
        return React.createElement(
            "li",
            null,
            React.createElement(
                "a", {
                    href: data.link,
                    className: "item-link"
                },
                React.createElement(
                    "div", {
                        className: "item-content"
                    },
                    React.createElement(
                        "div", {
                            className: "item-inner"
                        },
                        React.createElement(
                            "div", {
                                className: "item-title"
                            },
                            data.text
                        )
                    )
                )
            )
        );
    }
});

ReactDOM.render(React.createElement(
    "ul",
    null,
    mainMenuEntry.map((m, index) => React.createElement(MainMenu, {
        data: m,
        key: index
    }))
), document.getElementById("simpleNav"));
