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
                    console.log($(event.currentTarget.children[1]))
                });
            }
        });
    }
})