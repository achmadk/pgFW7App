var Navbar = React.createClass({
    displayName: "Navbar",

    render: function () {
        return React.createElement(
            "div",
            { className: "navbar" },
            React.createElement(
                "div",
                { className: "navbar-inner" },
                React.createElement(
                    "div",
                    { className: "left" },
                    React.createElement(
                        "a",
                        { href: "#", className: "back link" },
                        " ",
                        React.createElement("i", { className: "icon icon-back" }),
                        React.createElement(
                            "span",
                            null,
                            "Back"
                        )
                    )
                ),
                React.createElement(
                    "div",
                    { className: "center sliding" },
                    this.props.page
                ),
                React.createElement(
                    "div",
                    { className: "right" },
                    React.createElement(
                        "a",
                        { href: "#", className: "link icon-only open-panel" },
                        " ",
                        React.createElement("i", { className: "icon icon-bars" })
                    )
                )
            )
        );
    }
});

var Content = React.createClass({
    displayName: "Content",

    render: function () {
        return React.createElement(
            "div",
            { className: "page-content" },
            React.createElement(
                "div",
                { className: "content-block" },
                React.createElement(
                    "div",
                    { className: "content-block-inner" },
                    React.createElement(LinkText, { page: this.props.page }),
                    React.createElement(
                        "p",
                        null,
                        "Mauris posuere sit amet metus id venenatis. Ut ante dolor, tempor nec commodo rutrum, varius at sem. Nullam ac nisi non neque ornare pretium. Nulla mauris mauris, consequat et elementum sit amet, egestas sed orci. In hac habitasse platea dictumst."
                    ),
                    React.createElement(
                        "p",
                        null,
                        "Fusce eros lectus, accumsan eget mi vel, iaculis tincidunt felis. Nulla tincidunt pharetra sagittis. Fusce in felis eros. Nulla sit amet aliquam lorem, et gravida ipsum. Mauris consectetur nisl non sollicitudin tristique. Praesent vitae metus ac quam rhoncus mattis vel et nisi. Aenean aliquet, felis quis dignissim iaculis, lectus quam tincidunt ligula, et venenatis turpis risus sed lorem. Morbi eu metus elit. Ut vel diam dolor."
                    )
                )
            )
        );
    }
});

var LinkText = React.createClass({
    displayName: "LinkText",

    getInitialState: function () {
        return { index: 0 };
    },
    handleClick: function () {
        this.replaceState({ index: this.state.index + 1 }, function () {
            app.loadDynamicPage(this.state.index);
            console.log("Dynamic Page " + this.state.index + " has been created");
        });
    },
    render: function () {
        var welcome = "Here is " + this.props.page + " page!";
        return React.createElement(
            "div",
            null,
            React.createElement(
                "p",
                null,
                welcome
            ),
            React.createElement(
                "p",
                null,
                "Go ",
                React.createElement(
                    "a",
                    { href: "#", className: "back" },
                    "back"
                ),
                " or click  ",
                React.createElement(
                    "a",
                    { className: "create-page", onClick: this.handleClick },
                    "here "
                ),
                "to create dynamic page."
            )
        );
    }
});

var Page = React.createClass({
    displayName: "Page",

    render: function () {
        return React.createElement(
            "div",
            null,
            React.createElement(Navbar, { page: this.props.name }),
            React.createElement(
                "div",
                { className: "pages" },
                React.createElement("pages", { page: this.props.name })
            )
        );
    }
});

//ReactDOM.render(
//    <Content page="about" />, document.getElementsById("navbar")
//);