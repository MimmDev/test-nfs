var app = {
    initialize: function() {
        this.bindEvents()
    },

    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false)
    },

    onDeviceReady: function() {
        navigator.vibrate(300);
        app.receivedEvent('deviceready')
        nfc.addNdefListener(
          app.onNdef,
          function() {
            console.log("Success.");
          },
          function() {
            console.log("Fail.");
          }
        );
    },

    receivedEvent: function(id) {
    },

    onNdef: function(nfcEvent) {
        console.log(JSON.stringify(nfcEvent.tag));
        navigator.vibrate(5000);
    }

}



function parseTag(nfcEvent) {
  var records = nfcEvent.tagData;

  for (var i = 0; i < records.length; i++) {
    var record = records[i],
    p = document.createElement('p');
    p.innerHTML = nfc.bytesToString(record.payload);
    display.appendChild(p);
  }
}
