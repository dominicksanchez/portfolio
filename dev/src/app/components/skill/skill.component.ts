import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent implements OnInit {
  baseUrl:string = '/portfolio/assets';
  
  constructor() { }

  ngOnInit() {
  }

}
