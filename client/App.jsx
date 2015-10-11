var RaisedButton = mui.RaisedButton;
var ThemeManager = new mui.Styles.ThemeManager();
var DatePicker = mui.DatePicker;
var TextField = mui.TextField;


App = React.createClass({

    // this is required by material-ui
    childContextTypes: {
        muiTheme: React.PropTypes.object
    },

    // this is required by material-ui
    getChildContext: function() {
        return {
            muiTheme: ThemeManager.getCurrentTheme()
        };
    },

    render: function() {
        return (
            <div>
                <h4>test</h4>
                <RaisedButton label="BUTTON" />
                <DatePicker />
                <TextField
                    floatingLabelText="Float Label Text"
                    hintText="Hint Text" />
            </div>
        );
    }
});