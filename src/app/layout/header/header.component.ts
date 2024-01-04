import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarModule } from 'primeng/toolbar';
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { SidebarComponent } from '../sidebar/sidebar.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule,ToolbarModule,SidebarModule,ButtonModule, InputTextModule, SidebarComponent],
  templateUrl: './header.component.html',
  styleUrls: []
})
export class HeaderComponent {
    sidebarVisible: boolean = false;
    roundedButton: boolean =  true;
    textButton: boolean = true;
    value: string | undefined;
}

