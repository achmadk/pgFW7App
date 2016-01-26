var sidePanelData = [{
    "direction": "left",
    "text": "Side 1"
}, {
    "direction": "left",
    "text": "Side 2"
}, {
    "direction": "right",
    "text": "Side 3"
}, {
    "direction": "right",
    "text": "Side 4"
}, {
    "direction": "right",
    "text": "Side 5"
}];

var SidePanelItem = React.createClass({
   render: function() {
       var data = this.props.data;
       return <div className={this.props.col}><a href="#" data-panel={data.direction} className="button open-panel">{data.text}</a></div>
   } 
});

var PanelColumn = React.createClass({
   render: function() {
       var data=this.props.data;
       var col = Math.round(100/data.length);
       var colName = "col-" + col;
       return <div className="row no-gutter">{
        data.map((d,index) => <SidePanelItem key={index} data={d} col={colName}  />)
            }</div>
   } 
});

ReactDOM.render(
        <PanelColumn data={sidePanelData} />, document.getElementById("sidePanel")
);