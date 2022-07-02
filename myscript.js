 $(function(){
        // ブラウザバック禁止
        history.pushState(null, null, null);
        $(window).on("popstate", function(e){
          if (!e.originalEvent.state){
            play_se();
            history.pushState(null, null, null);
            return;
          }
        });

        // モーダル初期化
        $('.modal').modal({dismissible: false});
        $('#alert').modal('open');
        $('#close').click(function(){
          $('#alert').modal('close');
          play_se();
        });

        var device = navigator.userAgent.match(/Android|iPhone|iPad/);
        if (device == null){
          device = '端末';
        }
    $('#device').text(device);

    var time = 200;
    setInterval(function(){
    	time--;
        $('#timer').text(time);
    }, 1000);
 
