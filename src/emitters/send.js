msngr.extend((function () {

	return {
		send: function (message, callback, context) {
			if (message === undefined) {
				msngr.utils.ThrowRequiredParameterMissingOrUndefinedException("message");
			}
			for (var i = 0; i < msngr.registry.count(); ++i) {
				msngr.registry.get(i).route(message, callback, context);
			}
		}
	};
}()));
