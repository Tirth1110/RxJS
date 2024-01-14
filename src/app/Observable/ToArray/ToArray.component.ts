import { Component, OnInit } from '@angular/core';
import { Subscription, from, interval, of, take } from 'rxjs';
import { toArray } from 'rxjs/internal/operators/toArray';

@Component({
  selector: 'app-ToArray',
  templateUrl: './ToArray.component.html',
  styleUrls: ['./ToArray.component.scss']
})
export class ToArrayComponent implements OnInit {

  sourceSubscription!: Subscription;
  users = [
    { name: 'John', email: 'johan@gmail.com' },
    { name: 'Tirth', email: 'tirth@gmail.com' },
    { name: 'Joy', email: 'joy@gmail.com' },
    { name: 'Jignesh', email: 'jignesh@gmail.com' },
  ]

  constructor() { }


  //Operator is used for transform to one form to another form
  ngOnInit() {
    //Example 1 toArray()
    const source = interval(1000)
    this.sourceSubscription = source
      .pipe(
        take(8),
        toArray()
      )
      .subscribe((res: any) => {
        //Returning a stream 
        console.log('Example 1 :', res);
      });

    //Example 2 
    const source2 = from(this.users);
    source2.pipe(toArray()).subscribe((res: any) => {
      console.log('Example 2 :', res);
    });

    //Example 3
    const source3 = of('Anup', 'Shekhar', 'Tirth');
    source3.pipe(toArray()).subscribe((res: any) => {
      console.log('Example 3 :', res);
    });
  }
}