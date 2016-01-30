var Navbar = React.createClass({
   render: function() {
       return <div className="navbar">
           <div className="navbar-inner">
                    <div className="left"><a href="#" className="back link"> <i className="icon icon-back"></i><span>Back</span></a></div>
                    <div className="center sliding">{this.props.page}</div>
                    <div className="right"><a href="#" className="link icon-only open-panel"> <i className="icon icon-bars"></i></a></div>
                  </div>
                </div>
   } 
});

var Content = React.createClass({
    render: function() {
        return <div className="page-content">
                      <div className="content-block">
                        <div className="content-block-inner">
                          <LinkText page={this.props.page} />
                          <p>Mauris posuere sit amet metus id venenatis. Ut ante dolor, tempor nec commodo rutrum, varius at sem. Nullam ac nisi non neque ornare pretium. Nulla mauris mauris, consequat et elementum sit amet, egestas sed orci. In hac habitasse platea dictumst.</p>
                          <p>Fusce eros lectus, accumsan eget mi vel, iaculis tincidunt felis. Nulla tincidunt pharetra sagittis. Fusce in felis eros. Nulla sit amet aliquam lorem, et gravida ipsum. Mauris consectetur nisl non sollicitudin tristique. Praesent vitae metus ac quam rhoncus mattis vel et nisi. Aenean aliquet, felis quis dignissim iaculis, lectus quam tincidunt ligula, et venenatis turpis risus sed lorem. Morbi eu metus elit. Ut vel diam dolor.</p>
                        </div>
                      </div>
                    </div>
    }
});

var LinkText = React.createClass({
    getInitialState: function() {
        return { index: 0 };
    },
    handleClick: function() {
        this.replaceState({ index: this.state.index + 1 }, function() {
            app.loadDynamicPage(this.state.index);
            console.log("Dynamic Page " + this.state.index + " has been created");
        });
    },
   render: function() {
       var welcome = "Here is " + this.props.page + " page!";
       return <div> 
                <p>{welcome}</p>
                <p>Go <a href="#" className="back">back</a> or click  <a className="create-page" onClick={this.handleClick}>here </a>to create dynamic page.</p>
            </div>
   } 
});

var Page = React.createClass({
   render: function() {
       return <div>
                <Navbar page={this.props.name} />
                <div className="pages">
                    <pages page={this.props.name} />
                </div>
           </div>
   } 
});

//ReactDOM.render(
//    <Content page="about" />, document.getElementsById("navbar")
//);