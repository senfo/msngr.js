if (typeof assert === "undefined" && typeof window === "undefined") {
    var assert = require("assert");
}
if (typeof chai === "undefined" && typeof window === "undefined") {
    var chai = require("chai");
}

var expect = chai.expect;

var tests = (function (description, msngrPath, uniqueKey) {
    describe(description, function () {
        it("At least one binder is registered", function () {
            expect((msngr.registry.binders.count() > 0)).to.equal(true);
        });

        it("msngr.bind works as expected in single event", function (done) {
            var div = document.createElement("div");

            msngr.bind(div, "testEvent1", "testEvent1");

            msngr.register("testEvent1", function (e) {
                expect(e).to.not.equal(undefined);
                done();
            });

            var event1 = document.createEvent('CustomEvent');
            event1.initCustomEvent('testEvent1', false, false, null);
            div.dispatchEvent(event1);
        });

        /*
        it("msngr.bind works as expected when removing one or more events", function (done) {
            var div = document.createElement("div");

            msngr.bind(div, "testEvent2", "testEvent2");
            msngr.register("testEvent2", function (e) {
                throw "test failure";
            });

            msngr.unbind(div, "testEvent2", "testEvent2");
            var event2 = document.createEvent('CustomEvent');
            event2.initCustomEvent('testEvent2', false, false, null);
            div.dispatchEvent(event2);

            window.setTimeout(function () {
                done();
            }, 100);
        });
        */
    });
});
tests("msngr.binders", undefined, Math.floor(Math.random() * 1000));
