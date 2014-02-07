$(function(){

    // Parse alerts
    console.log("out");
    $.getJSON("alerts.json").done(function(data) {
        console.log("in");
        if (data["active_alerts"].length > 0) {
            $("#alerts").append(
                $("<div>", {
                    "class": "orange strip"
                }).append(
                    $("<div>", {
                        "class": "content"
                    })
                )
            );
            $alerts = $("#alerts .content");
            data["active_alerts"].forEach(function(alert) {
                $alerts.append(
                    $("<div>", {
                        "class": "alert"
                    }).append(
                        $("<h3>", {
                            text: alert["title"]
                        }),
                        $("<p>", {
                            html: alert["message"]
                        })
                    )
                );
            });
        }

    });

    // Parse the Schedule
    $.getJSON("schedule.json").done(function(data) {
        var baseurl = "../img/devfest/logos/";

        $.each(data, function(column, days){
            $column = $("."+column);
            days.forEach(function(day) {
                $wrapper = $("<div>", {
                    "class": day["id"] + "-wrapper"
                }).append(
                    $("<h4>", {
                        text: day["name"]
                    })
                );
                day.events.forEach(function(e){
                    $event = $("<div>", {
                        "class": "dev-event " + e["class"]
                    }).append(
                        $("<div>", {
                            "class": "left-wrapper"
                        }).append(
                            $("<strong>", {
                                "class": "title",
                                text: e["name"]
                            }),
                            $("<p>", {
                                "class": "timespan",
                                text: e["timespan"]
                            })
                        ),
                        $("<span>", {
                            html:e["location"]
                        }).prepend(
                            $("<i>", {
                                "class": "fa fa-map-marker"
                            })
                        )
                    );
                    $event.append(
                        $("<p>", {
                            "class": "desc",
                            html: e["description"]
                        })
                    );
                    if ("buttons" in e) {
                        $buttons = $("<div>", {
                            "class": "buttons"
                        });
                        e["buttons"].forEach(function(button) {
                            $buttons.append(
                                $("<a>", {
                                    "href": button["link"]
                                }).append(
                                    $("<button>", {
                                        "class": "button-blue",
                                        "html": button["title"]
                                    })
                                )
                            );
                        });
                        $event.append($buttons)
                    }
                    if ("sponsor" in e) {
                        $event.append(
                            $("<hr>" ,{
                                "class": "dark"
                            }),
                            $("<div>", {
                                "class": "sponsored-by"
                            }).append(
                                $("<p>", {
                                    text: "Sponsored by"
                                }),
                                $("<a>", {
                                    "class": "scroll",
                                    href: "#sponsors"
                                }).append (
                                    $("<img>", {
                                        src: baseurl + e["sponsor"]["img"]
                                    })
                                )
                            )
                        );
                    }
                    $wrapper.append($event);
                });
                $column.append($wrapper);
            });

        });
    });

    // Parse the FAQ
    $.getJSON("faq.json").done(function(data) {
        var $faqs = $(".faqs");

        data["faqs"].forEach(function(faq) {
            $faqs.append(
                $("<div>", {
                    "class": "faq"
                }).append(
                    $("<h4>", {
                        text: faq["question"]
                    }),
                    $("<p>", {
                        html: faq["answer"]
                    })
                )
            );
        });
    });

    // Parse the Judges
    $.getJSON("judges.json").done(function(data) {
        var $judges = $(".judges");
        var baseurl = "../img/devfest/judges/";

        data["judges"].forEach(function(rows) {
            var $row = $('<div>', {
                "class": "row"
            });
            rows.forEach(function(judge) {
                $row.append(
                    $("<div>", {
                        "class": "judge responsive-block "+judge["class"]
                    }).append(
                        $("<img>", {
                            src: baseurl + judge["image"]
                        }),
                        $("<h4>", {
                            text: judge["name"]
                        }),
                        $("<p>", {
                            html: judge["bio"]
                        })
                    )
                );
            });
            $judges.append($row);
        });
    });

    // Parse the prizes
    $.getJSON("prizes.json").done(function(data) {
        var $prizes = $(".prizes");
        var baseurl = "../img/devfest/logos/";

        var $placeprizes = $("<div>", {
            "class": "place-prizes row"
        });
        data["prizes"].forEach(function(prize) {
            $placeprizes.append(
                $("<div>", {
                    "class": "prize place-prize responsive-block"
                }).append(
                    $("<h3>", {
                        text: prize["title"]
                    }),
                    $("<p>", {
                        text: prize["prize"]
                    })
                )
            )
        });
        $prizes.append($placeprizes);

        var $sponsorprizes = $("<div>", {
            "class": "sponsor-prizes row"
        });
        data["sponsor-prizes"].forEach(function(prize) {
            $sponsorprizes.append(
                $("<div>", {
                    "class": "prize sponsor-prize responsive-block " + prize["class"]
                }).append(
                    $("<h4>", {
                        text: prize["title"]
                    }),
                    $("<p>", {
                        text: prize["prize"]
                    }),
                    $("<div>", {
                        "class": "prize-sponsor"
                    }).append(
                        $("<p>", {
                            "class":"sponsored-by",
                            text:"Sponsored by:"
                        }),
                        $("<a>", {
                            "class": "scroll",
                            href: "#sponsors"
                        }).append (
                            $("<img>", {
                                src: baseurl + prize["sponsor"]["img"]
                            })
                        )
                    )
                )
            );
        });

        $prizes.append($sponsorprizes);
    });

    // Parse the Sponsors
    $.getJSON("sponsors.json").done(function(data) {
        var $sponsors = $(".sponsors");
        var baseurl = "../img/devfest/logos/";
        var levels = ["gold", "silver", "bronze"];

        levels.forEach(function(level) {
            $wrapper = $("<div>", {
                "class": level + "-wrapper"
            }).append(
                $("<h1>", {
                    "class": "sponsor-level section-title",
                    text: level.charAt(0).toUpperCase() + level.slice(1) + " Sponsors"
                })
            );
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
            $wrapper.append($("<hr>"));
            $sponsors.append($wrapper);

        });
    });

    $.ajax({
        url: "http://courses.adicu.com/beta/stats.json",
        jsonpCallback: "devfestStats",
        dataType: "jsonp",
        success: function(response) {
            // Countdown
            var start = 0;
            var end = response.stats.num;
            var studentCount = new countUp("student-count", start, end, 0, 2);
            studentCount.start();
        }
    });
});