SC.initialize({
    client_id: '340f063c670272fac27cfa67bffcafc4'
});

$(document).ready(function () {

    SC.stream('/tracks/168167974', function (sound) {

        $('#start').click(function (e) {
            e.preventDefault();
            sound.start();
        });

        $('#stop').click(function (e) {
            e.preventDefault();
            sound.stop();
        });

    });
    SC.stream('/tracks/971028916', function (sound) {

        $('#sta1').click(function (e) {
            e.preventDefault();
            sound.start();
        });

        $('#sto1').click(function (e) {
            e.preventDefault();
            sound.stop();
        });

    });
    SC.stream('/tracks/556842441', function (sound) {

        $('#start2').click(function (e) {
            e.preventDefault();
            sound.start();
        });

        $('#stop2').click(function (e) {
            e.preventDefault();
            sound.stop();
        });

    });
    SC.stream('/tracks/345819962', function (sound) {

        $('#start3').click(function (e) {
            e.preventDefault();
            sound.start();
        });

        $('#stop3').click(function (e) {
            e.preventDefault();
            sound.stop();
        });

    });
  
    SC.stream('/tracks/649577930', function (sound) {

        $('#start5').click(function (e) {
            e.preventDefault();
            sound.start();
        });

        $('#stop5').click(function (e) {
            e.preventDefault();
            sound.stop();
        });

    });
    });

    //<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/971028916&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/user-490378388" title="ECSTAPSY" target="_blank" style="color: #cccccc; text-decoration: none;">ECSTAPSY</a> · <a href="https://soundcloud.com/user-490378388/ecstasy-master-the-blaster" title="Master - Master The Blaster | Ecstapsy Remix" target="_blank" style="color: #cccccc; text-decoration: none;">Master - Master The Blaster | Ecstapsy Remix</a></div>
