import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import {map} from "rxjs/operators";
@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  routPathParam$:Observable<string>;
  constructor(private router:ActivatedRoute) { }

  ngOnInit(): void {
    // this.router.queryParams.subscribe(data => {
    //   console.log(data);
    // })
    // this.routPathParam = this.router.url.pipe(map(data => console.log(data)));
    // this.router.params.subscribe((data) => {
    //   console.log(data);
    // })

    this.routPathParam$ = this.router.paramMap.pipe(map(() => window.history.state));
  }

}
