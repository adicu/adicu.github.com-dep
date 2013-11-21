$(function () {

    $.scrollUp({
        scrollName: 'scrollUp',
        scrollDistance: 300,
        scrollFrom: 'top',
        scrollSpeed: 300,
        easingType: 'linear',
        animation: 'fade',
        animationInSpeed: 200,
        animationOutSpeed: 200,
        scrollText: 'Scroll to top',
        scrollTitle: false,
        scrollImg: true,
        activeOverlay: false,
        zIndex: 2147483647
    });

    $('.jumbotron h1, .jumbotron p').delay(100).animate({ opacity: 1 }, 800);

    var xhr = $.get("resources.json");
    xhr.done(function(data) { 
        var html = ''; 
        html += '<div class="path-wrapper">'
        for (var i = 0; i < data.paths.length; i++) {
            html += '<h2 class="path-name">' + data.paths[i].name + '</h2>';
            html += '<div class="description">' + data.paths[i].description + '</div>';
            html += '<div class="path-topics-wrapper">';
            for (var j = 0; j < data.paths[i].topics.length; j++) {
                var id = data.paths[i].topics[j].replace(".", "").replace(" ","").toLowerCase();
                html += '<a class="path-topics" href="' + id + '">' + data.paths[i].topics[j] + '</a>';
            }
            html += '</div>';
        }
        html += '</div>'
        $('.paths').append(html);

        html = '';
        for (var i = 0; i < data.topics.length; i++) {
            var id = data.topics[i].name.replace(".", "").replace(" ","").toLowerCase(); 
            html += '<h2 id="' + id + '" class="topic">' + data.topics[i].name + '<div class="arrow"></div>' + '</h2>';
            html += '<div class="topic-content">';
            html += '<div class="description">' + data.topics[i].description + '</div>';
            html += '<div class="resources">';
            for (var j = 0; j < data.topics[i].resources.length; j++) {
                html += '<li><a target="_blank" href=' + data.topics[i].resources[j].url + '>' 
                + data.topics[i].resources[j].name + '</a> &#8212; ' +  data.topics[i].resources[j].description + '</li>';
            }
            html += '</div></div>';
        }
        $('.topics').append(html);

        html = "";
        for (var i = 0; i < data.topics.length; i++) {
            var id = data.topics[i].name.replace(".", "").replace(" ","").toLowerCase();
            html += '<option value="' + id + '">' + data.topics[i].name + '</option>';
        }
        $("#submit-technology").append(html);

        $('.topic').on('click', function (event) {
            var topic = $(event.currentTarget);
            if (! topic.hasClass('active')){
                topic.addClass('active');
                topic.next('.topic-content').slideDown("slow");
            } 
            else if (topic.hasClass('active')){
                topic.removeClass('active');
                topic.next('.topic-content').slideUp("slow");
            }  
        });

        function scrollToElement(selector, time, verticalOffset, completion) {
            console.log("selector:", selector)
            time = typeof(time) != 'undefined' ? time : 1000;
            verticalOffset = typeof(verticalOffset) != 'undefined' ? verticalOffset : 0;
            element = $(selector);
            offset = element.offset();
            offsetTop = offset.top + verticalOffset;
            $('html, body').animate({
                scrollTop: offsetTop
            }, time, completion);
        };

        $('.path-topics').on('click', function(event){
            event.preventDefault();
            console.log("target: ", $(this), $(this).attr("href"));
            var topic = '#' + $(this).attr("href");
            scrollToElement(topic, 500, 0, function(){
                if (! $(topic).hasClass('active')){
                    $(topic).addClass('active');
                    $(topic).next('.topic-content').slideDown("slow");
                } 
            });

        });
    }); 

    $('#open-modal').click(function() {
        $('.modal-wrapper').show();
        
        /* autofocus the submit form */
        if(!("autofocus" in document.createElement("input"))) {
            $("#submit-your-name").focus();
        }

        $('body').addClass("noscroll");
        $('#scrollUp').hide();
    });

    $('input, select, textarea').on("input", function() {
        console.log("Changing.");
        url = 'mailto:workshops@adicu.com?subject=' +
            encodeURIComponent('[learn.adicu.com] Resource Submission: ') + $('#submit-resource-name').val() +
            '&body=';
        url += encodeURIComponent('Feel free to type and additional message above this line.\n\n' +
            '-----------------------\n' +
            'Name: ' + $('#submit-your-name').val() + '\n' +
            'Email: ' + ($('#submit-email').val() ? $('#submit-email').val() : '<No email provided>') + '\n' +
            'Technology: ' + $('#submit-technology').val() + '\n' +
            'Resource Name: ' + $('#submit-resource-name').val() + '\n' +
            'Resource URL: ' + $('#submit-resource-url').val() + '\n' +
            'Resourec Description: ' + $('#submit-resource-desc').val() + '\n'
            );
        $('#submit-submit-link').attr('href', url);
    });

    $('#close-modal').click(function() {
        $('body').removeClass("noscroll");
        $('.modal-wrapper').hide();
        $('#scrollUp').show();
    })

    $('.modal-overlay').click(function() {
        $('#close-modal').click();
    });

    $("form").submit(function(e) {
        e.preventDefault();
        window.open($('#submit-submit-link').attr('href'), '_self');
    })

    
});
