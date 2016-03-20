// JavaScript Document
var App = angular.module('App', [] );

App.controller('CenterCTRL', function ($scope) {
$scope.mylan = function (lan) {
if(lan==1){
$scope.onvan = "img/title.png";
$scope.ashar = "img/ashar.png";
$scope.header = "این هدر";
$scope.texts = "این متن";
$scope.list1 = "img/list1.png";
$scope.list2 = "img/list2.png";
$scope.list3 = "img/list3.png";
$scope.list4 = "img/list4.png";
$scope.list5 = "img/list5.png";
$scope.list6 = "img/list6.png";
$scope.list7 = "img/list7.png";

}else if(lan==2){
$scope.onvan = "img/title_en.png";
$scope.ashar = "img/ashar_en.png";
$scope.header = "این هدر";
$scope.texts = "این متن";
$scope.list1 = "img/list1_en.png";
$scope.list2 = "img/list2_en.png";
$scope.list3 = "img/list3_en.png";
$scope.list4 = "img/list4_en.png";
$scope.list5 = "img/list5_en.png";
$scope.list6 = "img/list6_en.png";
$scope.list7 = "img/list7_en.png";
}}; 
});