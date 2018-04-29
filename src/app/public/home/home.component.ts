import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() {
  }

  slideConfig = {
    accessibility: false,
    autoplay: true,
    autoplaySpeed: 500,
    arrows: false,
    draggable: false,
    pauseOnFocus: false,
    pauseOnHover: false,
    vertical: true
  };

  slides = [
    { topic: 'Web Development' },
    { topic: 'Immunology' },
    { topic: 'Mathematics' },
    { topic: 'Virology' },
    { topic: 'Law' },
    { topic: 'Data Science' },
    { topic: 'Bioinformatics' },
    { topic: 'Machine Learning' },
    { topic: 'Education' },
    { topic: 'Molecular Biology' },
    { topic: 'Statistics' },
    { topic: 'Radiology' },
    { topic: 'Data Engineering' },
    { topic: 'Software Architecture' },
    { topic: 'Biophysics' },
    { topic: 'Genetics' },
    { topic: 'Chemistry' },
  ];

  ngOnInit() {
  }

}



// dns1.p07.nsone.net
// dns2.p07.nsone.net
