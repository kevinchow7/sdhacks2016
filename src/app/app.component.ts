/// <reference path="../typings/globals/jquery/index.d.ts"/>
import { Component } from '@angular/core';
declare var $:JqueryStatic;


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  ngAfterViewInit() {
    $('form').on('submit', function(evt){
      console.log("success");
      evt.preventDefault(); 
      var phone = $(this).find('#fieldPhone').val();
      $(this).html("Congratuation! Your number " + phone + " has been processed.")

    });

    //$("#test").hide();

    // Send a request to the server with the message dest/contents.
    $.ajax({
        url: 'http://localhost:3000/sms',
        method: 'POST',
        data: {
            num: '<YOUR NUMBER HERE>',
            msg: '<YOUR MESSAGE HERE>'
        }
    });

  }
}
