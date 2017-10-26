var app = {
    initialize: function() {
        this.bindEvents();
    },

    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false)
    },

    onDeviceReady: function () {
        app.alert("Woooooooooohhh");
        navigator.notification.alert("Device ready");
        output = getElementById("thing");
        output.innerHTML("Some dynamic output");

        function failure(reason) {
            navigator.notification.alert(reason, function() {}, "There was a problem");
        }

        nfc.addNdefListener(
            app.onNdef,
            function() {
                console.log("Listening for NDEF tags.");
            },
            failure
        );

        if (device.platform == "Android") {

            // Android reads non-NDEF tag. BlackBerry and Windows don't.
            nfc.addTagDiscoveredListener(
                app.onNfc,
                function() {
                    console.log("Listening for non-NDEF tags.");
                },
                failure
            );

            // Android launches the app when tags with mime type text/pg are scanned
            // because of an intent in AndroidManifest.xml.
            // phonegap-nfc fires an ndef-mime event (as opposed to an ndef event)
            // the code reuses the same onNfc handler
            nfc.addMimeTypeListener(
                'text/pg',
                app.onNdef,
                function() {
                    console.log("Listening for NDEF mime tags with type text/pg.");
                },
                failure
            );
        }
    },

    onNfc: function (nfcEvent) {

        // var tag = nfcEvent.tag;
        //
        // console.log(JSON.stringify(nfcEvent.tag));
        // app.clearScreen();
        //
        // tagContents.innerHTML = app.nonNdefTagTemplate(tag);
        // navigator.notification.vibrate(100);
    },

    onNdef: function (nfcEvent) {

        // console.log(JSON.stringify(nfcEvent.tag));
        // app.clearScreen();
        //
        // var tag = nfcEvent.tag;
        //
        // // BB7 has different names, copy to Android names
        // if (tag.serialNumber) {
        //     tag.id = tag.serialNumber;
        //     tag.isWritable = !tag.isLocked;
        //     tag.canMakeReadOnly = tag.isLockable;
        // }
        //
        // tagContents.innerHTML = app.tagTemplate(tag);
        //
        // navigator.notification.vibrate(100);
    },

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
