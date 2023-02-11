import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  links = [    
    { label: 'Home', path: '/home' },
    { label: 'Students', path: '/students' },
    { label: 'Courses', path: '/courses' },
  ];
}
