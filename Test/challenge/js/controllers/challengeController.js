 (function() {
   'use strict';

   challengeApp.controller('challengeController', challengeController);

   challengeController.$inject = ['challengeService', '$scope', '$location', '$rootScope', '$interval', '$q'];

   function challengeController(challengeService, $scope, $location, $rootScope, $interval, $q) {

	 $rootScope.challenge={};
     $rootScope.challenge.workArea='dashboard';
     $rootScope.challenge.templateSrc="challenge/html/challengeHome.html";


     $rootScope.challenge.loadPartialScripts = function(workArea) {

     };
     $scope.moreButton1=true;
     $scope.moreButton2=true;
     $scope.moreButton3=true;
     $scope.expandTiles = function(id){
    	 $(".tile"+id).animate({
             "height": "400px"
           });
    	 var hideInfo="hideInformation"+id;
    	 var showLess="showLess"+id;
    	 var moreButton="moreButton"+id;
    	 $scope[hideInfo]=true;
    	 $scope[showLess]=true;
    	 $scope[moreButton]=false;
    	 $(".allPrograms").animate({
             "padding": "450px 0 0 320px"
         });
     };
     $scope.collapseTiles = function(id){
    	 $(".tile"+id).animate({
             "height": "250px"
           });
    	 $("#moreButton").show();
    	 var hideInfo="hideInformation"+id;
    	 var showLess="showLess"+id;
    	 var moreButton="moreButton"+id;
    	 $scope[hideInfo]=false;
    	 $scope[showLess]=false;
    	 $scope[moreButton]=true;
    	 $(".allPrograms").animate({
             "padding": "320px"
         });
     };



   } //closing Controller

 })();
