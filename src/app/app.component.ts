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
    $("#test").hide();

  }
}
