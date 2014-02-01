

doge.storeData = function(){
    localStorage["dogeData"] = JSON.stringify(doge.data);
};

doge.loadData = function(){
    var loaded;
    if(localStorage["dogeData"] != undefined){
        loaded = JSON.parse(localStorage["dogeData"]);
        $.extend(doge.data, loaded);
    }
};

doge.main = function () {
    var settingsUrl = '/settings.json';

    $.get(settingsUrl, function (settings) {
        doge.settings = settings;
        doge.settingsLoaded();
    }, "json");

    $("#moon-button").click(function () {
        doge.alarm.celebrate();
    });
};

doge.intialRequestFinished = function(){

};

doge.applyLoadedData = function(){
    doge.alarm.render();
    $("#analyzeCount").val(doge.data.analyzeCount);
    doge.orders.renderLog();

};

doge.initialRequest = function() {

    doge.api.getMethod("all", function (data) {
        doge.api.distributeResponse(data);
        doge.intialRequestFinished();

        setTimeout(function(){
            doge.api.refresh();
        }, 3000)

    });

};

doge.settingsLoaded = function () {
    doge.initialRequest();
    doge.convert.bind();
    doge.calc.bind();
    doge.alarm.bind();
    doge.trades.bind();
    doge.api.rates();

    doge.loadData();
    doge.applyLoadedData();
};