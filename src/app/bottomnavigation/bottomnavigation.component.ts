import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bottomnavigation',
  templateUrl: './bottomnavigation.component.html',
  styleUrls: ['./bottomnavigation.component.css']
})
export class BottomnavigationComponent implements OnInit {
public urls = [{
  id:1,
  name:'Home'
},
{
  id:2,
  name:'Invest'
},
{
  id:3,
  name:'Portfolio'
},
{
  id:4,
  name:'Profile'
}
];
  constructor() { }

  ngOnInit(): void {
  }

}
