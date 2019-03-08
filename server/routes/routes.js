module.exports = (app) => {

    app.get('/api/users', TradeController.list)


}