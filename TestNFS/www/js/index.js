var app = {
    initialize: function() {
        this.bindEvents()
    },

    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false)
    },

    onDeviceReady: function() {
        // navigator.vibrate(300);
        app.receivedEvent('deviceready')
        nfc.addNdefListener(
          parseTag,

          function() {
            var d = document.getElementById("thing")
            d.innerHTML = "<p>Success! Wonderful.</p>"
          },
          function() {
            var d = document.getElementById("thing")
            d.innerHTML = "<p>Failure :( this is so sad </p>"
          }
        );
    },

    receivedEvent: function(id) {
    }

}

function parseTag() {
    var d = document.getElementById("thing")
    d.innerHTML = "<p>WE ARE PARSING THE TAG</p>"
}
