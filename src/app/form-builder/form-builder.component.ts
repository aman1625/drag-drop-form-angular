import { Component } from '@angular/core';
import { DragDropModule} from '@angular/cdk/drag-drop';
import { NgFor,NgIf } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormDataService } from '../form-data.service';
import { SideNavComponent } from '../side-nav/side-nav.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

interface FormData {
  name: string;
  email: string;
  password: string;
  number: string;
  gender: string;
  address: string;
}
@Component({
  selector: 'app-form-builder',
  standalone: true,
  imports: [NgFor,DragDropModule,NgIf,SideNavComponent,ReactiveFormsModule],
    templateUrl: './form-builder.component.html',
  styleUrl: './form-builder.component.css'
})

export class FormBuilderComponent {
  form: FormGroup;
  formFields: any[] = []; 
  formJSON:any;
  constructor(private fb: FormBuilder, private formDataService: FormDataService,private snackBar: MatSnackBar) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      number: [+91, Validators.required],
      gender: ['', Validators.required],
      address: ['', Validators.required],
    });
  }

  onDrop(event: DragEvent): void {
    event.preventDefault();
    console.log(event);

    const component = event.dataTransfer!.getData('text/plain');
    console.log(component)
    const isTypePresent = this.formFields.some(item => item.type === component);
if (!isTypePresent) {
  this.formFields.push({ type: component, value: '' });
} else {
  this.snackBar.open("The field has already been added to the form", 'Close', { duration: 3000, panelClass: 'success-snackbar' });
}

  }
  onDragStart(event: DragEvent, type: string): void {
    event.dataTransfer!.setData('text/plain', type);
  }
  onDragOver(event: DragEvent): void {
    event.preventDefault();
  }

  pushDataToForm(){
    const jsonData = JSON.parse(this.formJSON) 
    this.form.setValue({
      name: jsonData.name || '',
      email: jsonData.email || '',
      password: jsonData.password || '',
      number: jsonData.number || 0,
      gender: jsonData.gender || '',
      address: jsonData.address || '',
    });

  }

  onSubmit(saveType:string){
    console.log(this.formFields);
    // console.log( ...this.form.value);
    console.log( this.form.value);


    
    const formData = { ...this.form.value, fields: this.formFields };
    console.log(formData)
    if(saveType === 'exportJSON'){
      this.formJSON = JSON.stringify(formData);
    }else if(saveType === 'saveData'){
    this.formDataService.saveFormData(formData);
    this.formFields = [];
    }
    this.form.reset(); 

  }

}