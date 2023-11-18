(function () {
    function copyAttributes(element, source) {
        for (let [idx, attr] of Object.entries(source.attributes))
            element.setAttribute(attr.name, attr.value);
        for (let [idx, attr] of Object.entries(element.attributes))
            if (!source.hasAttribute(attr.name)) element.removeAttribute(attr.name);
    }
	
    function create(aDoc, tag, props, isHTML = false) {
        let el = isHTML ? aDoc.createElement(tag) : aDoc.createXULElement(tag);
        for (let prop in props) {
            el.setAttribute(prop, props[prop]);
        }
        return el;
    }
	
    function registerSheet() {
        const css = ` /* empty */ `;
        let sss = Cc["@mozilla.org/content/style-sheet-service;1"].getService(
            Ci.nsIStyleSheetService
        );
        let uri = makeURI("data:text/css;charset=UTF=8," + encodeURIComponent(css));
        if (sss.sheetRegistered(uri, sss.AUTHOR_SHEET)) return;
        sss.loadAndRegisterSheet(uri, sss.AUTHOR_SHEET);
    }
	
    class UrlbarInTab {
        constructor() {
            gBrowser.tabContainer.addEventListener("TabSelect", this);
            this.handleEvent();
        }
        handleEvent(e) {
            gBrowser.selectedTab.querySelector(".tab-content").after(gURLBar.textbox);
        }
    }
	
    function init() {
        window.urlbarInTabProvider = new UrlbarInTab();
    }
    registerSheet();
    if (gBrowserInit.delayedStartupFinished) init();
    else {
        let delayedListener = (subject, topic) => {
            if (topic == "browser-delayed-startup-finished" && subject == window) {
                Services.obs.removeObserver(delayedListener, topic);
                init();
            }
        };
        Services.obs.addObserver(delayedListener, "browser-delayed-startup-finished");
    }
	
})();
