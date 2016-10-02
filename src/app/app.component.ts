/// <reference path="../typings/globals/jquery/index.d.ts"/>
import { Component } from '@angular/core';
//declare var $:JqueryStatic;


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  ngAfterViewInit() {
    var phone; 
    var mesg; 

    $('form').on('submit', function(evt){
      console.log("success");
      evt.preventDefault(); 
      var phone = $(this).find('#fieldPhone').val();
      var mesg = $(this).find('#time').val();

      $(this).html("Congratuations! Your number " + phone + " has been processed.");

      // Send a request to the server with the message dest/contents.
      var text = function(number, mesg, cTime) {
        $.ajax({
            url: 'http://localhost:3000/sms',
            method: 'POST',
            data: {
                num: number,
                msg: mesg + "\nButton clicked: " + cTime + "\nText sent: " + new Date().toTimeString()
            }
        });
      }
      var clickTime = new Date().toTimeString()
      //Set timer for 2 hoursand 45 minutes
      var myVar = setTimeout(function() { text(phone, "Here's your reminder!", clickTime) }, 60000);
      //clearTimeout(myVar);
    });
    
    var num = 1 
    $(document).ready(function(){

      $("#nav-toggle").click(function(){
        num += 1 
        $("#nav-toggle").toggleClass("active");
        if(num%2==0){
          $("#additionalFeatures").css("width", "50%");
          $("#features").show();
          //$("#main").css("marginLeft", "50%");
          // $("#content").css("backgroundColor", "rgba(0,0,0,0.5)");
        }
        else{
          $("#additionalFeatures").css("width", "0%");
          $("#features").hide();
          //$("#main").css("marginLeft", "0%");

        }
      });
    })

  }
}
