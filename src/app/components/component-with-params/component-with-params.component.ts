import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-component-with-params',
  templateUrl: './component-with-params.component.html',
  styleUrls: ['./component-with-params.component.css']
})
export class ComponentWithParamsComponent implements OnInit {

  currentRoute: string = '';
  constructor(public activateRoute: ActivatedRoute, private router: Router) {
    router.events.subscribe((ev) => {
      if (ev instanceof NavigationEnd) {
        const params = this.activateRoute.snapshot.params;
        this.currentRoute = params['username'];
      }
    });
  }

  ngOnInit(): void {
    console.log('sono l\'on init');
    const queryParams = this.activateRoute.snapshot.queryParams;
    console.log('query params:', queryParams);

    // this.currentRoute = params['username'];
  }



}
