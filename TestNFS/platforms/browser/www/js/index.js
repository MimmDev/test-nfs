function parseTag() {
    var d = document.getElementById("thing")
    d.innerHTML = "<p>WE ARE PARSING THE TAG</p>"
}

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
        nfc.addNdefListener(parseTag);
    },

    receivedEvent: function(id) {
    }

}
