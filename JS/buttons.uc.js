(function () {
    function init() {
        let toolbar = document.getElementById("TabsToolbar");
        let back = document.getElementById("back-button");
        let fwd = document.getElementById("forward-button");
	let menub = document.getElementById("PanelUI-menu-button");
	let ext = document.getElementById("unified-extensions-button");
	let tabstlbr = document.getElementById("tabbrowser-tabs");
        toolbar._customizationTarget.prepend(back);
        back.after(fwd);
	toolbar._customizationTarget.after(ext);
	ext.after(menub);
    }
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
