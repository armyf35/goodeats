angular.module("Twitter", ["ngSanitize"])


.controller("TwitterController", function($scope) {

$scope.myHTML = '<a class="twitter-timeline"  href="https://twitter.com/hashtag/pizza" data-widget-id="806294283846295552">#pizza Tweets</a><script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?"http":"https";if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+"://platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");</script>';


})