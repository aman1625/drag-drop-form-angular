import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-side-nav',
  standalone: true,
  imports: [NgFor],
  templateUrl: './side-nav.component.html',
  styleUrl: './side-nav.component.css'
})

export class SideNavComponent {
  availableComponents = ['Name', 'Email', 'Password', 'Number', 'Address','Gender'];
  onDragStart(event: DragEvent, component: string): void {
    event.dataTransfer!.setData('text/plain', component);
  }
}
