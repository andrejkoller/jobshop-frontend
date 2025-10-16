import { Component, OnInit, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import {
  LucideAngularModule,
  CircleUserRoundIcon,
  HomeIcon,
  MailOpenIcon,
  SettingsIcon,
  PanelRightOpenIcon,
  Columns2Icon,
} from 'lucide-angular';

interface MenuItem {
  label: string;
  icon: any;
  route: string;
}

@Component({
  selector: 'app-dashboard-sidebar',
  standalone: true,
  imports: [LucideAngularModule, RouterLink, RouterLinkActive],
  templateUrl: './dashboard-sidebar.html',
  styleUrls: ['./dashboard-sidebar.scss'],
})
export class DashboardSidebar implements OnInit {
  protected readonly title: string = 'jobshop';
  protected readonly titleShort: string = 'js';
  protected readonly PanelRightOpenIcon = PanelRightOpenIcon;
  protected readonly Columns2Icon = Columns2Icon;

  isCollapsed = signal(false);

  menuItems: MenuItem[] = [
    { label: 'Home', icon: HomeIcon, route: '/dashboard' },
    {
      label: 'Applications',
      icon: MailOpenIcon,
      route: '/dashboard/applications',
    },
    {
      label: 'Profile',
      icon: CircleUserRoundIcon,
      route: '/dashboard/profile',
    },
    { label: 'Settings', icon: SettingsIcon, route: '/dashboard/settings' },
  ];

  ngOnInit() {
    if (typeof window !== 'undefined' && window.localStorage) {
      const savedState = localStorage.getItem('sidebar-collapsed');
      if (savedState === 'true') {
        this.isCollapsed.set(true);
      }
    }
  }

  toggleSidebar() {
    const newState = !this.isCollapsed();
    this.isCollapsed.set(newState);

    if (newState) {
      localStorage.setItem('sidebar-collapsed', 'true');
    } else {
      localStorage.removeItem('sidebar-collapsed');
    }
  }
}
