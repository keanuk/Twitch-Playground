$(document).ready(function() {
  console.log("Controller");

  $('.twitch-connect').click(function() {
    console.log("Logging in to Twitch");
    Twitch.login({
      scope: ['user_read', 'channel_read']
    });
  })

  $('#logout button').click(function() {
    console.log("Logging out of Twitch");
    Twitch.logout();

    // Reload page and reset url hash. You shouldn't
    // need to do this.
    window.location = window.location.pathname
  })

  $('#get-name button').click(function() {
    console.log("Getting name");
    Twitch.api({method: 'user'}, function(error, user) {
      $('#get-name input').val(user.display_name);
    });
  })

  $('#get-stream-key button').click(function() {
    console.log("Getting stream key");
    Twitch.api({method: 'channel'}, function(error, channel) {
      $('#get-stream-key input').val(channel.stream_key);
    });
  })
});
