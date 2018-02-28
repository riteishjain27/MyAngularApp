import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  constructor() 
  {
    // setTimeout(function(){
    //   $(document).ready(function(){
    //     $('#example').DataTable( {
    //       scrollY:        "300px",
    //       scrollX:        true,
    //       scrollCollapse: true,
    //       paging:         false,
    //       fixedColumns:   {
    //         leftColumns: 2
    //     }
    //   } );
    // });
    // }, 1000);
  
}
}