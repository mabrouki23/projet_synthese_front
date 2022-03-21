import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { MaterialModule } from '../material/material.module';

@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.css']
})
export class PopUpComponent implements OnInit {
value:number=1;
  // receive data from parent using 'MAT_DIALOG_DATA'
  constructor(@Inject(MAT_DIALOG_DATA)  public data: string,
    private dialogRef: MatDialogRef<PopUpComponent>,private _router:Router) { }
    cancel() {
      // closing itself and sending data to parent component
     
      this.dialogRef.close({ data: 0 })
    }
  
    confirm() {
      // closing itself and sending data to parent component
      this.dialogRef.close({ data: this.value })
    
    }
  

  ngOnInit(): void {
  }
  handleMinus() {
    this.value--;  
  }
  handlePlus() {
    this.value++;    
  }


}

