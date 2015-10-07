msngr.extend((function(external, internal) {
    "use strict";

    internal.InvalidParametersException = function(str) {
        return {
            name: "InvalidParametersException",
            severity: "unrecoverable",
            message: ("Invalid parameters supplied to the {method} method".replace("{method}", str))
        };
    };

    internal.ReservedKeywordsException = function(keyword) {
        return {
            name: "ReservedKeywordsException",
            severity: "unrecoverable",
            message: ("Reserved keyword {keyword} supplied as action.".replace("{keyword}", keyword))
        };
    };

    internal.MangledException = function(variable, method) {
        return {
            name: "MangledException",
            severity: "unrecoverable",
            message: ("The {variable} was unexpectedly mangled in {method}.".replace("{variable}", variable).replace("{method}", method))
        };
    };

    // This is an internal extension; do not export explicitly.
    return {};
}));
