import { Component, OnInit } from '@angular/core';
import { AboutService } from '../../services/about.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  baseUrl: '/porfolio'
  about: any;

  constructor(public aboutService: AboutService) { }

  ngOnInit() {
    this.getAbout();
  }

  getAbout() {
    this.aboutService.getAbout().subscribe((payload) => {
      this.about = payload['data'];

      console.log('this.about', this.about)
    });
  }
}
