import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardSidebar } from './dashboard-sidebar';

describe('DashboardSidebar', () => {
  let component: DashboardSidebar;
  let fixture: ComponentFixture<DashboardSidebar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardSidebar],
    }).compileComponents();

    fixture = TestBed.createComponent(DashboardSidebar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a menuItems array', () => {
    expect(Array.isArray(component.menuItems)).toBeTrue();
    expect(component.menuItems.length).toBeGreaterThan(0);
  });

  it('should render menu items', () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    component.menuItems.forEach((item) => {
      expect(compiled.textContent).toContain(item.label);
    });
  });

  it('should navigate when a menu item is clicked', () => {
    const router = TestBed.inject<any>(TestBed.inject('Router'));
    spyOn(router, 'navigateByUrl');
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const menuItem = compiled.querySelector('.menu-item');
    if (menuItem) {
      menuItem.dispatchEvent(new Event('click'));
      fixture.detectChanges();
      expect(router.navigateByUrl).toHaveBeenCalled();
    }
  });
});
