'use strict';

describe('Service: Story', function () {

  beforeEach(module('hackerNewsCloneApp'));

  var Story, $httpBackend;

  beforeEach(inject(function ($injector) {
  	$httpBackend   = $injector.get('$httpBackend');
  	Story            = $injector.get('Story');
  }));

  afterEach(function() {
  	$httpBackend.verifyNoOutstandingExpectation();
  	$httpBackend.verifyNoOutstandingRequest();
  });

  it('should do something', function () {
    expect(!!Story).toBe(true);
  });

  it('should load the entire story using its id', function() {
  	var searchData = {'config': {}, 'data': {
                      'by' : 'yarapavan',
                      'descendants' : 28,
                      'id' : 10994736,
                      'kids' : [ 10994790, 10994775, 10995131, 10994823, 10995799, 10995388, 10994847, 10995169, 10994818, 10994787, 10995194 ],
                      'score' : 234,
                      'time' : 1454069281,
                      'title' : 'Kinto by Mozilla – An open source Parse alternative',
                      'type' : 'story',
                      'url' : 'https://github.com/Kinto/kinto/'
                    }};
  	$httpBackend.whenGET('https://hacker-news.firebaseio.com/v0/item/10994736.json?print=pretty').respond(function() {
  	  return [200, searchData];
  	});
    Story.get('10994736').success(function (data) {
      expect(data.data.length).toBe(searchData.data.length);
    });
    $httpBackend.flush();
  });
});
