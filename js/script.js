---
---

$(document).ready(function(){

    var events = new Array();

    {% for event in site.categories.event %}
        events.push({
            "title" : "{{event.title}}",
            "link" : "{{event.url}}",
            "date" : "{{event.date}}",
            "dateString" : "{{event.event_date}}",
            "timeString" : "{{event.event_time}}",
            "location" : "{{event.event_location}}"
        });
    {% endfor %}

    events.sort(function(a, b){

        var aDate = Date.parse(a.date);
        var bDate = Date.parse(b.date);

        if(aDate == NaN)
            return 1;
        if(bDate == NaN)
            return -1;

        return aDate - bDate;
    });

    var nowIndex = events.length;
    for(var x=0; x<events.length; x++)
    {
        if(Date.parse(events[x].date) > new Date())
        {
            nowIndex = x;
            break;
        }
    }


    var startIndex = 0; //<---For testing | var startIndex = nowIndex - 5;
    var outIndex = events.length; //<---For testing | var outIndex = startIndex+10 > events.length ? events.length : startIndex+10;

    for(var x=startIndex; x<outIndex; x++)
    {
        var html =
            '<li class="event">'+
              '<div class="event-header">'+
                '<div class="event-header-content">'+
                 '<h2 class="event-title"><a href="' + events[x].link + '">' +  events[x].title +'</a></h2>'+
                '</div>'+
              '</div>'+
              '<div class="event-details">'+
                '<div class="event-detail">'+
                  '<i class="event-deatil-icon fa fa-lg fa-calendar"></i>'+
                  '<p class="event-detail-text">'+events[x].dateString+'</p>'+
                '</div>'+
                '<div class="event-detail">'+
                  '<i class="event-detail-icon fa fa-lg fa-clock-o"></i>'+
                  '<p class="event-detail-text">'+events[x].timeString+'</p>'+
                '</div>'+
                '<div class="event-detail">'+
                  '<i class="event-detail-icon fa fa-lg fa-map-marker"></i>'+
                  '<p class="event-detail-text">'+events[x].location+'</p>'+
                '</div>'+
              '</div>'+
              '<div class="event-buttons navbar-inverse">'+
              '</div>'+
            '</li>';

        $(".events-carousel").append(html);
    }

	/* Configure bxSlider */
  	$('.bxslider').bxSlider( {
  		minSlides: 1,
  		maxSlides: 10,
  		slideWidth: 300,
  		slideMargin: 10,
  		startSlide: 1,
  		pager: false,
  		infiniteLoop: false,
  		hideControlOnEnd: true
  	});
});