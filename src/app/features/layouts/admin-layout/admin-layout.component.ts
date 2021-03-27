import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.scss']
})
export class AdminLayoutComponent implements OnInit {

  res: any;

  map: any;
  slice: any[];
  join: any;
  indexOf: number;
  lastIndexOf: number;
  sort: any[];

  ngOnInit(): void {
    let obj: Array<any> = ['1', '2', '3', '4', '5'];
    let objSort: Array<any> = ['2', '1', '6', '4', '9'];
    let objNumber: Array<any> = [1, 2, 3, 4, 5];

    // Slider 1
    this.map = objNumber.map(x => x * 2)      // 2,4,6,8,10
    this.slice = obj.slice(2)                 // 3,4,5
    this.join = obj.join('---')               // 1---2---3---4---5
    this.indexOf = obj.indexOf('3')           // 2
    this.lastIndexOf = obj.lastIndexOf('3')   // 2

    // slider 2
    this.sort = objSort.sort()   // 2
  }
}
