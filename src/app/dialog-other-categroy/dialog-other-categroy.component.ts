import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-other-categroy',
  templateUrl: './dialog-other-categroy.component.html',
  styleUrls: ['./dialog-other-categroy.component.css']
})
export class DialogOtherCategroyComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }


  ngOnInit(): void {
  }

}
