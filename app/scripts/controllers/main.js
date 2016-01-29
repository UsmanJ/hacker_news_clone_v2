'use strict';

/**
 * @ngdoc function
 * @name hackerNewsCloneApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the hackerNewsCloneApp
 */
angular.module('hackerNewsCloneApp')
  .controller('MainCtrl', ['$scope', 'New', 'Story', function ($scope, New, Story) {

    var self = this;

    self.stories = [];
    self.topStories = 0;
    self.loaded = false;

    self.getTop = function() {
      New.get()
        .then(function(response) {
          self.topStories = response.data;
          self.getStories(self.topStories);
      });
    };

    self.getStories = function(topStoryId) {
      var i;
      for (i = 0; i < 30; i++) {
        Story.get(topStoryId[i])
        .then(function(response) {
          self.stories.push(response.data);
          self.loaded = true;
        });
      }
    };

    angular.element(document).ready(function () {
      self.getTop();
    });
  }]);
