import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import { TieredMenuModule } from 'primeng/tieredmenu';
import { MenuItem } from 'primeng/api';
import { DividerModule } from 'primeng/divider';
import { SliderModule } from 'primeng/slider';
import { MultiSelectModule } from 'primeng/multiselect';
import {FormsModule} from '@angular/forms'


interface items {
  name: string,
  code: string
}
@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, SidebarModule, DividerModule, ButtonModule, TieredMenuModule, SliderModule, MultiSelectModule, FormsModule],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})

export class SidebarComponent implements OnInit{
 
  
  public sidebarVisible = false;
  public showSidebar(): void {
    this.sidebarVisible = true;
  }
// ItemsSideBar1
  items: MenuItem[] | undefined;
// ItemsSideBar2
  items2: MenuItem[]|undefined;

// ItemsSidebar3
  items3!: items[];
  selectedMultiSelectValues!: items[];

  ngOnInit() 
  {
      this.items = 
      [
          {
            label: 'Books',
            items: [
                    {
            }]
          },
          {
            label: 'Coffee Mugs',
            items: [
                    {  
            }]
          },
          {
            label: 'Mouse Pads',
            items: [
                    {
                        
            }]
          },
          {
            label: 'Luggage Tags',
            items: [
                    {
              }]
            },
      ];
        this.items2 = 
      [
          {
            label: 'Carrinho',
          },
          {
            label: 'Membros',
          },
          {
          label: 'Pedidos',
          },
      ];

      this.items3 = [
              {name: 'New York', code: 'NY'},
              {name: 'Rome', code: 'RM'},
              {name: 'London', code: 'LDN'},
              {name: 'Istanbul', code: 'IST'},
              {name: 'Paris', code: 'PRS'}
      ];
  }
}


