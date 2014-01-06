$(function(){
    var $sponsors = $(".sponsors");
    var baseurl = "../img/devfest/logos/";
    var xhr = $.getJSON("sponsors.json").done(function(data) {
    	console.log("done");
        levels = ["gold", "silver", "bronze"];
        levels.forEach(function(level) {
            console.log("Level: " + level)
            $wrapper = $("<div>", {
                "class": level + "-wrapper"
            });
            data[level].forEach(function(company){
            	console.log("Company: " + company["id"]);
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
                )
            });
            $sponsors.append($wrapper);
        });
    });
});