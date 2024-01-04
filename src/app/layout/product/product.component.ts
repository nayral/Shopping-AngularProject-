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
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, ToolbarModule, MultiSelectModule, InputTextModule, SelectButtonModule,FormsModule, CardModule, ButtonModule],
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {

  value: any;

    justifyOptions: any[] = [
        { icon: 'pi pi-bars', justify: 'Left' },
        { icon: 'pi pi-table', justify: 'Right' },
    ];

}
