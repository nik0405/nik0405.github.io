var app = angular.module("app", ["ngRoute"]);
app.config(function ($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "views/enroll.html",
            controller: "enrollController"
        })
        .when("/setledger", {
            templateUrl: "views/ledger.html",
            controller: "ledgerController"
        })
        .when("/dashboard", {
            templateUrl: "views/dashboard.html",
            controller: "dashboardController"
        });
});
