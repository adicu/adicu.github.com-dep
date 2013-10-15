$(document).ready(function(){

	if($(window).height() < 740)
		$("#events").css("left", "240px"); 
	$(window).resize(function(){
		if($(window).height() < 740)
			$("#events").css("left", "240px");
		else
			$("#events").css("left", "0px"); 
	});


	var url = "https://www.googleapis.com/calendar/v3/calendars/adicu.com_tud5etmmo5mfmuvdfb54u733i4%40group.calendar.google.com/events?maxResults=2000&singleEvents=true&key=AIzaSyBztZfIH_qcLxRBsjcJN5Q5-7YAlfyLovE";
	
	$.get(url, function(response){
		
		if (typeof response == 'string' || response instanceof String)
		{
			response = $.parseJSON(response);
		}
		
		response.items.forEach(function(event){
			
			if(event != undefined && event.start != undefined && event.start.dateTime != undefined)
			{
				var original = event.start.dateTime;
				
				var year = original.substring(0, 4);
				var month = original.substring(5, 7);
				var day = original.substring(8, 10);
				
				var summary = event.summary != undefined ? event.summary : "No Title";
				var description = event.description != undefined ? event.description : "No Description";
			
				var html = "<li data-link=" + event.htmlLink + " class='" + event.summary + "' title='" + month + " " + day + " " + year + " " + "'>" + description + "</li>";
				$("#eventsList").append(html);
			}
		});
		
		var timeline = new Timeline("timeline");
		
		$("#month").html(timeline.getDateString());
		
		$("#nextButton").click(function(){
			timeline.nextMonth();
			$("#month").html(timeline.getDateString());
		});
		
		$("#prevButton").click(function(){
			timeline.previousMonth();
			$("#month").html(timeline.getDateString());
		});
		
	});
	
	
	
});