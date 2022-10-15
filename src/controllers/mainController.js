const path = require("path");

const mainController = {
    login: (req, res) => {
        res.render('index')
    },

    registro: (req, res) => {
        res.render('registro')
    },

    processRegistrer: (req, res) => {
        ;
    }
}

module.exports = mainController;

