
var months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
var numSliderEvents = 20;

$(document).ready(function() {

  var events = [];

  var now = new Date();
  var lastMonth = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000);
  var lastMonthString = lastMonth.getFullYear() + "-" + lastMonth.getMonth() + "-" + lastMonth.getDate() + "T00:00:00.000Z";

	var url = "https://www.googleapis.com/calendar/v3/calendars/adicu.com_tud5etmmo5mfmuvdfb54u733i4%40group.calendar.google.com/events" +
                    "?maxResults=100" +
                    "&singleEvents=true" +
                    "&timeMin=" + lastMonthString +
                    "&key=AIzaSyBztZfIH_qcLxRBsjcJN5Q5-7YAlfyLovE";

	$.get(url, function(response) {

		if (typeof response == 'string' || response instanceof String) {
			response = $.parseJSON(response);
		}

		response.items.forEach(function(event) {

			if(event !== undefined && event.start !== undefined && event.start.dateTime !== undefined && event.description !== undefined) {

          var parts = event.description.split("---");

          event.description = parts[0];

          if(parts.length == 3) {
              event.longDescription = parts[1];
              var resources = parts[2];
              resources = resources.split("-->");
              event.resources = {};

              for(var x=0; x<resources.length; x+=2) {
                  event.resources[resources[x].toLowerCase().trim()] = resources[x+1];
              }
          }

          events.push(event);
			}
		});

    events.sort(function(a, b){

        var aDate = Date.parse(a.start.dateTime);
        var bDate = Date.parse(b.start.dateTime);

        if(isNaN(aDate))
            return 1;
        if(isNaN(bDate))
            return -1;

        return aDate - bDate;
    });

    var nowIndex = events.length;
    for(var y=0; y<events.length; y++) {
        if(Date.parse(events[y].start.dateTime) > new Date()) {
            nowIndex = y;
            break;
        }
    }

    var startIndex = nowIndex - numSliderEvents/2 < 0 ? 0 : nowIndex - numSliderEvents/2;
    var outIndex = startIndex+numSliderEvents > events.length ? events.length : startIndex+numSliderEvents;

    for(var x=startIndex; x<outIndex; x++) {
        var month = events[x].start.dateTime.substring(5, 7);
        var day = events[x].start.dateTime.substring(8, 10);

        var startTime = formatDate(events[x].start.dateTime.substring(11,16));
        var endTime = formatDate(events[x].end.dateTime.substring(11,16));

        var image = "http://adicu.com/img/genericevent.png";

        if(events[x].resources !== undefined) {
            if(events[x].resources.image !== undefined)
                image = events[x].resources.image;
        }

        var html =
            '<li class="event">'+
              '<div class="event-header" style="background-image: url(' + image + ');">'+
                '<div class="event-opacity">'+
                  '<div class="event-header-content">'+
                    '<h2 class="event-title"><a href="' + events[x].htmlLink + '">' +  events[x].summary +'</a></h2>'+
                  '</div>'+
                '</div>' +
              '</div>'+
              (x < nowIndex ? '<ul class="past event-details">' : '<ul class="event-details">') +
              '<li class="event-detail">'+
                  '<i class="event-deatil-icon fa fa-lg fa-calendar"></i>'+
                  '<p class="event-detail-text">'+ months[month-1] +' '+ day +'</p>'+
                '</li>'+
                '<li class="event-detail">'+
                  '<i class="event-detail-icon fa fa-lg fa-clock-o"></i>'+
                  '<p class="event-detail-text">'+ startTime +' - '+ endTime +'</p>'+
                '</li>'+
                '<li class="event-detail">'+
                  '<i class="event-detail-icon fa fa-lg fa-map-marker"></i>'+
                  '<p class="event-detail-text">'+events[x].location+'</p>'+
                '</li>'+
              '</ul>'+
            '</li>';

        $(".events-carousel").append(html);
    }

  /* Configure bxSlider */
  var slider = $('.bxslider').bxSlider( {
    minSlides: 1,
    maxSlides: 10,
    slideWidth: 300,
    slideMargin: 10,
    pager: false,
    infiniteLoop: false,
    hideControlOnEnd: true,
    speed:1
  });

  slider.goToSlide(parseInt((nowIndex-startIndex)/slider.getNumSlidesShowing(), 10));
    slider.setSpeed(500);

  });
});

function formatDate(date) {

    var hours = parseInt(date.split(":")[0], 10);
    var minutes = parseInt(date.split(":")[1], 10);

    var period = hours >= 12 ? "PM" : "AM";

    if(hours > 12) hours -= 12;


    if(hours === 0 && minutes === 0)
        return "Midnight";
    if(hours == 12 && minutes === 0)
        return "Noon";


    var hoursString = hours < 10 ? "0" + hours : hours;
    var minutesString = minutes < 10 ? "0" + minutes : minutes;

    return hoursString + ":" + minutesString + " " + period;
}
