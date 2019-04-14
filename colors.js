
        var links = {
            SetColor : function(color){
//                var alist = document.querySelectorAll('a');
//                var i = 0;
//                while(i < alist.length){
//                    alist[i].style.color = color;
//                    i = i + 1;
//            }
                $('a').css('color', color);
            }
            
        }
        
        var body = {
            SetColor : function(color){
//                document.querySelector('body').style.color = color;
                $('body').css('color', color);
            },
            SetBackgroundColor : function(color){
//                document.querySelector('body').style.backgroundColor = color;
                $('body').css('backgroundColor', color);
        }
        }
                
        function nightDayHandler(helf){
            var target = document.querySelector('body');
            if(helf.value === 'night'){
                body.SetBackgroundColor('black');
                body.SetColor('white');
                helf.value = 'day';

                links.SetColor('yellow');
            }else {
                 body.SetBackgroundColor('white');
                 body.SetColor('black');
                 helf.value = 'night';

                 links.SetColor('blue');
            }
        }
    