'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
  .controller('indexCtrl', [function() {
  	$scope.uxData = {
  		title: "My Awesome Media app",
  		content: "<p>So there's this video game coming out Tuesday called Grand Theft Auto 5. Don't know if you've heard of it. Anyways, it's all about crime and gangs and some roughneck ne'er-do-wells, so I thought this would be the perfect time to talk about times when we've been... well, less than perfect.</p><p>When I was a young'un, I was a frequent visitor to the local swimming pool. I was also a frequent lover of AirHeads candy, which the pool happened to sell. Waiting, watching, stalking the counter like a big cat in the savannah, I waited for the perfect opportunity to strike. While the lifeguards were busy, I snuck through the gate, reached up and took both cherry and "mystery white" AirHeads. I quickly ran out to the sidewalk and reveled in my sweet, delicious victory... for all of ten seconds, before I felt guilty enough to sneak back in and return the .20 worth of candy I had stolen.</p><p>While you confess your crimes - hopefully minor, and nothing you can be persecuted for - take a moment to enjoy this week's webcomics, and vote for your favorite after the jump.</p>",
  		rating: 5,
  	};

  }])
  .controller('addCtrl', [function() {

  }]);

