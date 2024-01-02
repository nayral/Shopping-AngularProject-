import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarModule } from 'primeng/toolbar';
import { MultiSelectModule } from 'primeng/multiselect';
import { InputTextModule } from 'primeng/inputtext';
import { SelectButtonModule } from 'primeng/selectbutton';
import {FormsModule} from '@angular/forms'
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-body',
  standalone: true,
  imports: [CommonModule, ToolbarModule, MultiSelectModule, InputTextModule, SelectButtonModule,FormsModule, CardModule, ButtonModule],
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent {

  value: any;

    justifyOptions: any[] = [
        { icon: 'pi pi-bars', justify: 'Left' },
        { icon: 'pi pi-table', justify: 'Right' },
    ];

}
