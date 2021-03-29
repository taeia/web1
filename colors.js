var Links=
        {
            setColor:function setColor(color)
            {
                // var links = document.querySelectorAll('a');
                //     var i = 0;
                //     while(i<links.length){
                //         links[i].style.color = color;
                //         i += 1;
                    // }
                $('a').css('color', color);
            }
        }
        var Body=
        {
            setColor:function(color)
            {
                // document.querySelector('body').style.color=color;
                $('body').css('color', color);
            },
            setBackgroundColor:function(color)
            {
                // document.querySelector('body').style.backgroundColor=color;
                $('body').css('backgroundColor', color);
            }
        }


        function nightDayHandler(self)
        {
            var target = document.querySelector('body');
            if(self.value === 'day')
            {
                Body.setColor('white');
                Body.setBackgroundColor('black');
                self.value = 'night'
                Links.setColor('powderblue')
                
            } 
            else 
            {
                Body.setColor('black');
                Body.setBackgroundColor('white');
                self.value = 'day'
                Links.setColor('black')
            }
        }