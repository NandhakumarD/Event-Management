import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ReactiveFormsModule, FormsModule } from '@angular/forms'

@Component({
  selector: 'app-event',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, CommonModule],
  templateUrl: './event.component.html',
  styleUrl: './event.component.css'
})
export class EventComponent {
  
  eventForm : FormGroup;
  eventList : any[] = [];

  constructor(){
    this.eventForm = new FormGroup({
      id : new FormControl(),
      Title : new FormControl(),
      Location : new FormControl(),
      Date : new FormControl(),
      Description : new FormControl()
    });
  }

  addEvent(){
    let modalID = document.getElementById('modalId');
    modalID.style.display = 'block';
  }
  closeModal(){
    let modalID = document.getElementById('modalId');
    modalID.style.display = 'none';
  }

  submitForm(form){
    console.log(form.value);
    if(!form.valid){
      alert("Please Enter Cost");
      return;
    }
    this.eventList = JSON.parse(localStorage.getItem('Events') || '[]'); 
    console.log(this.eventList.length);   
    form.get('id').setValue(this.eventList.length == 0 ? 1 : this.eventList[this.eventList.length-1].id +1);
  
    if (this.eventList.length > 0) {
      console.log(this.eventList);
      this.eventList.push(form.value);
      console.log(this.eventList);
    } else {
      console.log("No LocalStorage");
      console.log(this.eventList);
      this.eventList.push(form.value);
      console.log(this.eventList);
    }  
    localStorage.setItem('Entries', JSON.stringify(this.eventList)); 
    this.eventForm.reset();
  }
}
