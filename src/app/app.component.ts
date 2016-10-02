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

    $('form').on('submit', function(evt){
      console.log("success");
      evt.preventDefault(); 
      var phone = $(this).find('#fieldPhone').val();
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
        console.log('did it work..?')
      }
      var clickTime = new Date().toTimeString()
      //Set timer for 2 hoursand 45 minutes
      var myVar = setTimeout(function() { text(phone, "Here's your reminder!", clickTime) }, 60000);
      //clearTimeout(myVar);
    });
  }
}
