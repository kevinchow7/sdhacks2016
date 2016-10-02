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
      var phones = $(this).find('#fieldPhone').val().replace(' ','').split(',');
      var mesg = $(this).find('#time').val();

      $(this).html("Congratuations! Your request has been processed. You will receive a confirmation message shortly.");

      // Send a request to the server with the message dest/contents.
      var text = function(number, mesg) {
        $.ajax({
            url: 'http://localhost:3000/sms',
            method: 'POST',
            data: {
                num: number,
                msg: mesg
            }
        });
      }

      var clickTime = new Date().toTimeString()
      console.log(phones);
      for (let phone of phones) {
          console.log(phone);
          text(phone,
            "Got your request! \nCurrent time: " + clickTime + "\nWe'll remind you in 5 seconds!");
          //Set timer for 2 hoursand 45 minutes
          setTimeout(function() { text(phone,
            "Here's your reminder! \nButton clicked: " + clickTime + "\nText sent: " + new Date().toTimeString()) }, 5000);
      }
      //clearTimeout(myVar);
    });

    var num = 1;
    $(document).ready(function(){

      $("#nav-toggle").click(function(){
        num += 1;
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
