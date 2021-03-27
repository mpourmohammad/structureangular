import { Component, OnInit } from '@angular/core';
import { Users } from 'src/app/core/models/public/User';

@Component({
  selector: 'app-tableuser',
  templateUrl: './tableuser.component.html',
  styleUrls: ['./tableuser.component.scss']
})
export class TableuserComponent implements OnInit {

  arryJson: Array<Users>;


  constructor() { }
  ngOnInit(): void {

    this.arryJson = [
      { id: 1, name: 'Meysam' },
      { id: 2, name: 'Ali' },
      { id: 3, name: 'Mohammad' },
      { id: 4, name: 'Mahdi' },
    ];

  }

}
