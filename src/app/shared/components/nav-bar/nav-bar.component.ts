import { Component, OnInit } from '@angular/core';
import { Router, Routes } from '@angular/router';
import { NavLink } from '../../models/nav-link.interface';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit{
  links: NavLink[] = [];

  constructor(private router: Router) {}

  ngOnInit() {
    const routes: Routes = this.router.config;
    this.links = this.router.config.filter(route => route.path)
    .map(route => ({ label: route.data?.['title'], path: route.path }));
  }
}
