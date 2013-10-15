$(document).ready(function(){



	var url = "https://www.googleapis.com/calendar/v3/calendars/adicu.com_tud5etmmo5mfmuvdfb54u733i4%40group.calendar.google.com/events?maxResults=2000&singleEvents=true&key=AIzaSyBztZfIH_qcLxRBsjcJN5Q5-7YAlfyLovE";
	
	$.get(url, function(response){
		
		if (typeof response == 'string' || response instanceof String)
		{
			response = $.parseJSON(response);
		}
		
		response.items.forEach(function(event){
			
			if(event != undefined && event.start != undefined && event.start.dateTime != undefined)
			{
				var originalTime = event.start.dateTime;
				
				var year = originalTime.substring(0, 4);
				var month = originalTime.substring(5, 7);
				var day = originalTime.substring(8, 10);
				var time = originalTime.substring(11, 16);
				
				var summary = event.summary != undefined ? event.summary : "No Title";
				var description = event.description != undefined ? event.description : "No Description";
			
				var location = event.location != undefined ? event.location : "No Location";
			
				var html = "<span class='event' data-title='" + summary + "'"
							+ " data-location='" + location + "'"
							+ " data-date='" + day + "/" + month + "/" + year + "/" + "'"
							+ " data-icon='Gear'"
							+ " data-time= '" + time + "'"
							+ " data-dateString = '" + originalTime + "'"
							+ " data-gcalLink = '" + event.htmlLink + "'"
							+ " data-customText=''>"
							+ description
							+ "</span>";
							
				$("#calendar").append(html);
			}
		});
		
		$("#calendar").RegalCalendar({
			theme: 'blue',
			base: 'white',
			modal: false,
			show: 'mouseenter',
			timeFormat: 'ampm',
			minDate: new Date(2012, 1 - 1, 1),
			maxDate: new Date(2014, 12 - 1, 31),
			tooltip: 'bootstrap',
			twitter: '@adicu'
		});
		
		
	});
	
	
	
});