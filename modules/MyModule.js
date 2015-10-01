sap.ui.define(["sap/m/MessageToast", "sap/training/util/Formatter"], function(MessageToast, Formatter) {
	"use strict";
	return {
		showMessage: function(sMsg) {
			var sMessage = Formatter.uppercaseFirstChar(sMsg);
			MessageToast.show(sMessage);
		}

	};
});