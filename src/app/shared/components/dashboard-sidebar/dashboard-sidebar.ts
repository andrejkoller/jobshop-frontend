import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  LucideAngularModule,
  LayoutDashboard,
  Calendar,
  Settings,
  Users,
} from 'lucide-angular';

interface MenuItem {
  label: string;
  icon: any;
  route: string;
}

@Component({
  selector: 'app-dashboard-sidebar',
  standalone: true,
  imports: [LucideAngularModule, RouterLink],
  templateUrl: './dashboard-sidebar.html',
  styleUrls: ['./dashboard-sidebar.scss'],
})
export class DashboardSidebar {
  menuItems: MenuItem[] = [
    { label: 'Dashboard', icon: LayoutDashboard, route: '/dashboard' },
    { label: 'Patients', icon: Users, route: '/dashboard/patients' },
    {
      label: 'Appointments',
      icon: Calendar,
      route: '/dashboard/appointments',
    },
    { label: 'Settings', icon: Settings, route: '/dashboard/settings' },
  ];
}
