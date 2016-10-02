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

  }
}
