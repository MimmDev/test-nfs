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
            console.log("Success.");
          },
          function() {
            console.log("Fail.");
          }
        );
    },

    receivedEvent: function(id) {
    }

}

function parseTag(lol) {
    alert(lol)
}
