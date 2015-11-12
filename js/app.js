angular.module("rtfmApp", ["firebase", "ui.router"])

.constant("fb", {
	url: "https://kf-rtfmproject.firebaseio.com/"
})

.config(function($urlRouterProvider, $stateProvider){

	
	$stateProvider
		.state("threads", {
			url: "/threads",
			templateUrl: "js/threads/threads.html",
			controller: "threadsCtrl",
			resolve: {
				threadsRef: function(threadService){
					return threadService.getThreads();
				}
			}

		})
		.state("thread", {
			url: "/threads/:threadId",
			templateUrl: "js/thread/thread.html",
			controller: "threadCtrl",
			resolve: {
				threadRef: function(threadService, $stateParams){
					return threadService.getThread($stateParams.threadId);
				},
				commentsRef: function(threadService, $stateParams){
					return threadService.getComments($stateParams.threadId);
				}
			}
		})

	$urlRouterProvider.otherwise("/threads");	







});









