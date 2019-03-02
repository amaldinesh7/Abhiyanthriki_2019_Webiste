function generate(type, text) {
    
        if(window.innerWidth>500){
                var n = noty({
                    text        : text,
                    type        : type,
                    dismissQueue: false,
                    timeout: 4000,
                    layout      : 'topCenter',
                    theme       : 'relax',
                    progessBar	: true, 
                });
        }
        else{
            var n = noty({
                text        : text,
                type        : type,
                dismissQueue: false,
                timeout: 4000,
                layout      : 'bottomCenter',
                theme       : 'relax',
                progessBar	: true, 
            });
        }
        console.log('html: ' + n.options.id);
        return n;
    }
       

        

       	function generateAll() {
// generate('notification',"Bus schedule is available at profile section");
// generate('error',"Registerations for Formula UNO, Eye Tracking Robot, Self Balancing Bot, Whiz-war is closed!");
generate('notification',"Avishkar abstract submissions has been extended upto 24th February, 2019!");
// generate('error',"Registrations deadline is extended to March 14,11:00pm ");
// generate('notification',"Updated schedule is available for download at profile section");
// generate('success','<a href="https://www.onlinesbi.com/prelogin/institutiontypedisplay.htm" target="_blank" style="color:#000;">Payment can be done using SBI COLLECT/NEFT/TEZ</a>');
// generate("warning","Registration are open for events and workshops");
//generate('notification',"Schedule is available for download at profile section");

          
       	}

        // function generate(type, text) {

        //     var n = noty({
        //         text        : text,
        //         type        : type,
        //         dismissQueue: true,
        //         progressBar : true,
        //         timeout     : 5000,
        //         layout      : 'Left',
        //         closeWith   : ['click'],
        //         theme       : 'relax',
        //         maxVisible  : 10,
        //         animation   : {
        //             open  : 'animated bounceInLeft',
        //             close : 'animated bounceOutLeft',
        //             easing: 'swing',
        //             speed : 500
        //         }
        //     });
        //     console.log('html: ' + n.options.id);
        //     return n;
        // }


       	$(document).ready(function(){
         // generate("information","hi","hi");
       		setInterval(function () {
            generateAll();
          
        }, 3000);

       	});