$(document).ready(() => {

    if ($('#projects').length != 0) {

        let projects = '';
        $.getJSON('./JSON/projects.json', (data) => {
            $.each(data, function (key, val) {
                projects += '<div class="project">';

                projects += '<div>';
                projects += '<img src="' + val.img + '" alt"' + val.img_alt + '">';
                projects += '</div>';

                projects += '<div>';

                projects += '<h2>' + val.name + '</h2>';

                projects += '<div>';

                let sentences = val.description.split('\n');
                sentences.forEach(element => {
                    projects += '<p>';
                    projects += element;
                    projects += '</p>';
                });

                projects += '</div>';

                if (val.more_infos.length != 0) {
                    projects += '<p><a href="' + val.more_infos + '" target="_blank">Weitere Informationen!</a></p>';
                }

                if (val.play_now.length != 0) {
                    projects += '<p><a href="' + val.play_now + '" target="_blank">Direkt zur anwendung!</a></p>';
                }

                projects += '</div>';

                projects += '</div>';
            });

            $('#projects-container').append(projects);

            if ($('.project').length != 0) {
                $('.project').hover((event) => {
                    $(event.currentTarget.children[0].children[0]).toggleClass('img-dark');
                    $(event.currentTarget.children[1]).toggleClass('show');
                });
            }
        });
    }

    $.fn.isInViewport = function () {
        var elementTop = $(this).offset().top;
        var elementBottom = elementTop + $(this).outerHeight();

        var viewportTop = $(window).scrollTop();
        var viewportBottom = viewportTop + $(window).height();

        return elementBottom > viewportTop && elementTop < viewportBottom;
    };

    $(document).on('scrollend', () => {
        $('#navigation').children().toArray().forEach((child) => {
            $(child).css('color', '');
        })
        if ($('#home').isInViewport()) {
            $('a[href$="#home"]').attr('style', 'color: var(--colorSecondText) !important');
        }
        if ($('#about').isInViewport()) {
            $('a[href$="#about"]').attr('style', 'color: var(--colorSecondText) !important');
        }
        if ($('#skills').isInViewport()) {
            $('a[href$="#skills"]').attr('style', 'color: var(--colorSecondText) !important');
        }
        if ($('#projects').isInViewport()) {
            $('a[href$="#projects"]').attr('style', 'color: var(--colorSecondText) !important');
        }
        if ($('#contact').isInViewport()) {
            $('a[href$="#contact"]').attr('style', 'color: var(--colorSecondText) !important');
        }
    });

    var url = window.location.href;
    var lastPart = url.substr(url.lastIndexOf('#') + 1);

    switch (lastPart) {
        case 'home':
            $('a[href$="#home"]').attr('style', 'color: var(--colorSecondText) !important');
            break;
        case 'about':
            $('a[href$="#about"]').attr('style', 'color: var(--colorSecondText) !important');
            break;
        case 'skills':
            $('a[href$="#skills"]').attr('style', 'color: var(--colorSecondText) !important');
            break;
        case 'projects':
            $('a[href$="#projects"]').attr('style', 'color: var(--colorSecondText) !important');
            break;
        case 'contact':
            $('a[href$="#contact"]').attr('style', 'color: var(--colorSecondText) !important');
            break;
        default:
            $('a[href$="#home"]').attr('style', 'color: var(--colorSecondText) !important');
            break;
    }
})