import { Component, HostListener, OnInit, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [RouterLink, NgClass],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header implements OnInit {
  protected readonly title = 'jobshop';
  protected isScrolled = signal(false);

  ngOnInit() {
    this.checkScrollPosition();
  }

  @HostListener('window:scroll')
  onWindowScroll() {
    this.checkScrollPosition();
  }

  private checkScrollPosition() {
    const scrollPosition =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0;
    this.isScrolled.set(scrollPosition > 0);
  }

  get isScroll() {
    return { scrolled: this.isScrolled() };
  }
}
