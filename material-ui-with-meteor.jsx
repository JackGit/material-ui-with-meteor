if (Meteor.isClient) {

  Meteor.startup(function() {
    injectTapEventPlugin(); // this is mandatory, or some event won't happened

    React.render(<App />, document.getElementById('mountNode'));
  });

}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
