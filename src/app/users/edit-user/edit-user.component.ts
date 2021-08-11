import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {

  userId: string = '';
  userDetails:any;
  editUserForm:FormGroup=new FormGroup({});
  dataLoaded:boolean=false;

  constructor(private userService: UserService, private activatedRoute: ActivatedRoute, private formBuilder:FormBuilder,private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data => {
      this.userId = data.id
    });

    if (this.userId!=='') {
      this.userService.viewUser(this.userId).toPromise().then(data=>{
      this.userDetails=data;

      this.editUserForm=this.formBuilder.group({
        'username':new FormControl(this.userDetails.name,[Validators.required,Validators.minLength(3)]),
        'email':new FormControl(this.userDetails.email,[Validators.required,Validators.email]),
        'phone':new FormControl(this.userDetails.phone,[Validators.required,Validators.maxLength(10)])
      })
      this.dataLoaded=true;
      })
      .catch(error=>{
        console.log(error);
      });

      
    }
  }
  updateUser(){
    this.userService.updateUser(this.userId,this.editUserForm.value).subscribe(data=>{
      this._snackBar.open("User updated successfully")
    },err => {
      this._snackBar.open("Unable to update user")
    });
  }
}
