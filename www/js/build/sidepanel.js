var sidePanelData = [{
    "direction": "left",
    "text": "Side Left"
}, {
    "direction": "right",
    "text": "Side Right"
}];

var SidePanelItem = React.createClass({
    displayName: "SidePanelItem",

    render: function () {
        var data = this.props.data;
        return React.createElement(
            "div",
            { className: this.props.col },
            React.createElement(
                "a",
                { href: "#", "data-panel": data.direction, className: "button open-panel" },
                data.text
            )
        );
    }
});

var PanelColumn = React.createClass({
    displayName: "PanelColumn",

    render: function () {
        var data = this.props.data;
        var col = Math.round(100 / data.length);
        var colName = "col-" + col;
        return React.createElement(
            "div",
            { className: "row" },
            data.map((d, index) => React.createElement(SidePanelItem, { key: index, data: d, col: colName }))
        );
    }
});

ReactDOM.render(React.createElement(PanelColumn, { data: sidePanelData }), document.getElementById("sidePanel"));