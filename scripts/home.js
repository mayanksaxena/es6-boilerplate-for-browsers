class Home {
    constructor(options) {
        const DEFAULTS = {
            buttonId: '#homePageButton'
        };
        Object.assign(this, DEFAULTS, options);
        $("body").append("class init successfully");
        this.bindEvents();
    }
    bindEvents() {
        $(this.buttonId).click(e => alert("Bind Events works fine."));
    }
    printName() {
        return this.buttonId;
    }
}

export default Home;
