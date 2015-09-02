describe("eventListController", function() {
  beforeEach(module('app', 'eventList'));

  var eventListController, getEventList, hostEvent;
  
  getEventList = [{title: 'Yosemiti', city: 'San Francisco'}, {title: 'Napa Valley', city: 'San Francisco'}];

  hostEvent = {title: 'Tempus', city: 'San Francisco', id: 1};

  beforeEach(inject(function ($controller) {
    eventListController = $controller('eventListController', {
      'getEventList': getEventList,
      'hostEvent': hostEvent
    });
  }));
  
  it('should have displayEvents function', function () {
    expect(eventListController.displayEvents).toBeDefined();
  });

  beforeEach(inject(function ($state) {
    spyOn($state, 'go');
  }));

  it('should display eventList mached with user search', inject(function($state) {
    eventListController.findCity = 'san francisco';
    eventListController.displayEvents();

    expect($state.go).toHaveBeenCalledWith('eventList', {city: eventListController.findCity});
  }));

  it('should move to the eventDetail page after clicking a event', inject(function($state) {
    eventListController.toEventDetail(hostEvent);

    expect($state.go).toHaveBeenCalledWith('eventDetail', {eventId: hostEvent.id});
  }));

});

