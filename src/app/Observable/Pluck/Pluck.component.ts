import { Component, OnInit } from '@angular/core';
import { from, map, pluck, toArray } from 'rxjs';

@Component({
  selector: 'app-Pluck',
  templateUrl: './Pluck.component.html',
  styleUrls: ['./Pluck.component.scss']
})
export class PluckComponent implements OnInit {

  messages1 !: string;
  messages2 !: string;
  userData1: any;
  userData2: any;
  user = [
    {
      name: 'Tirth',
      skills: 'HTML',
      job: {
        title: 'Developer',
        exp: '2+'
      }
    },
    {
      name: 'Mul',
      skills: 'CSS',
      job: {
        title: 'QA',
        exp: '3+'
      }
    }
  ]

  constructor() { }

  ngOnInit() {

    //Example 1
    from(this.user)
      .pipe(
        //map(data => data.name),
        pluck('name'),
        toArray()
      )
      .subscribe((res: any) => {
        this.userData1 = res;
      });

      
    //Example 2
    from(this.user)
      .pipe(
        pluck('job', 'title'),
        toArray()
      )
      .subscribe((res: any) => {
        this.userData2 = res;
      });
  }
}
