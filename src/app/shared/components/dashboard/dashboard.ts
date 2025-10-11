import { Component } from '@angular/core';
import { DashboardHeader } from '../dashboard-header/dashboard-header';
import { DashboardSidebar } from "../dashboard-sidebar/dashboard-sidebar";

@Component({
  selector: 'app-dashboard',
  imports: [DashboardHeader, DashboardSidebar],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class Dashboard {}
