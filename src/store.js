const Store = require("electron-store");

const schema = {
    nightscoutURL: {
        type: "string",
        form: "uri",
        default: "",
    },
    refreshInterval: {
        type: "number",
        default: 20,
    },
};

const store = new Store({ schema });

module.exports = store;