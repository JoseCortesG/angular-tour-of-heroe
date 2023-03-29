import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';
@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  heroes = HEROES;
  
  @Input() hero: Hero={
    id: 0,
    name:'default'}

  constructor() { }
  ngOnInit() {
  }
}