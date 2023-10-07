$(document).ready(() => {

    if ($('#projects').length != 0) {

        let projects = '';
        $.getJSON('./JSON/projects.json', (data) => {
            $.each(data, function (key, val) {
                projects += '<div class="project">';

                if (data.length % 2 != 0) {
                    if (data.length - 1 == key) {
                        projects = projects.slice(0, -1) + ' style="flex: 1">';
                    }
                }

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

            $('#projects').append(projects);
        });
    }

    if ($('#skills').length != 0) {

        let skills = '';
        $.getJSON('./JSON/skills.json', (data) => { 
            skills = '<h2>Skill Level</h2>';

            $.each(data, function (key, val) { 
                skills += '<div>' + val.name;

                skills += '<div id="bar"><div id="skill" style="width: ' + val.levle + '%">';
                skills += '</div></div>';

                skills += '</div>';
            })

            $('#skills').append(skills);
        })
    }
})