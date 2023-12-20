import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormDataService {
  private formData: any;
  constructor() {}

  saveFormData(data: any): void {
    this.formData = data;
    this.saveFormDataToFile();
  }

  saveFormDataToFile(): void {
    const jsonData = JSON.stringify(this.formData, null, 2);
    const blob = new Blob([jsonData], { type: 'application/json' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = 'form-data.json';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }
}
