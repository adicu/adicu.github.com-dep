$(function(){
    // Parse the Schedule
    $.getJSON("schedule.json").done(function(data) {
        console.log("done.")
        $schedule = $(".schedule");
        data.days.forEach(function(day) {
            console.log(day.name)
            $wrapper = $("<div>", {
                "class": day.id + "-wrapper"
            }).append(
                $("<h4>", {
                    text: day.name
                })
            );
            day.events.forEach(function(e){
                $wrapper.append(
                    $("<div>", {
                        "class": "dev-event"
                    }).append(
                        $("<p>", {
                            html: "<strong>" + e.name + "</strong> " + e.timespan
                        })
                    )
                );
            });
            $schedule.append($wrapper);
        });
    });


    // Parse the Sponsors
    $.getJSON("sponsors.json").done(function(data) {
        var $sponsors = $(".sponsors");
        var baseurl = "../img/devfest/logos/";
        var levels = ["gold", "silver", "bronze"];

        levels.forEach(function(level) {
            $wrapper = $("<div>", {
                "class": level + "-wrapper"
            });
            data[level].forEach(function(company){
                $wrapper.append(
                    $("<div>", {
                        "class": level,
                        id: company["id"]
                    }).append(
                        $("<div>", {
                            "class": "wrapper-inner"
                        }).append(
                            $("<a>", {
                                "href": company["url"]
                            }).append(
                                $("<img>", {
                                    src: baseurl + company["img"]
                                })
                            )
                        )
                    )
                );
            });
            $sponsors.append($wrapper);
        });
    });
});