import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css']
})
export class WorkComponent implements OnInit {
  baseUrl:string = '/portfolio/assets';

  constructor() { }

  ngOnInit() {

  }

}
