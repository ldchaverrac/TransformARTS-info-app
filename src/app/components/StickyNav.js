// components/StickyNav.js
'use client'; // Si usas Next 13 app router, si no no hace falta

import { useEffect } from 'react';
import $ from 'jquery';

export default function StickyNav() {
  useEffect(() => {
    class StickyNavigation {
      constructor() {
        this.currentId = null;
        this.currentTab = null;
        this.tabContainerHeight = 70;

        const self = this;
        $('.et-hero-tab').on('click', function (event) {
          self.onTabClick(event, $(this));
        });

        $(window).on('scroll', () => this.onScroll());
        $(window).on('resize', () => this.onResize());
      }

      onTabClick(event, element) {
        event.preventDefault();
        const scrollTop =
          $(element.attr('href')).offset().top - this.tabContainerHeight + 1;
        $('html, body').animate({ scrollTop }, 600);
      }

      onScroll() {
        this.checkTabContainerPosition();
        this.findCurrentTabSelector();
      }

      onResize() {
        if (this.currentId) {
          this.setSliderCss();
        }
      }

      checkTabContainerPosition() {
        const offset =
          $('.et-hero-tabs').offset().top +
          $('.et-hero-tabs').height() -
          this.tabContainerHeight;
        if ($(window).scrollTop() > offset) {
          $('.et-hero-tabs-container').addClass('et-hero-tabs-container--top');
        } else {
          $('.et-hero-tabs-container').removeClass('et-hero-tabs-container--top');
        }
      }

      findCurrentTabSelector() {
        let newCurrentId;
        let newCurrentTab;
        const self = this;

        $('.et-hero-tab').each(function () {
          const id = $(this).attr('href');
          const offsetTop = $(id).offset().top - self.tabContainerHeight;
          const offsetBottom =
            $(id).offset().top + $(id).height() - self.tabContainerHeight;

          if (
            $(window).scrollTop() > offsetTop &&
            $(window).scrollTop() < offsetBottom
          ) {
            newCurrentId = id;
            newCurrentTab = $(this);
          }
        });

        if (this.currentId !== newCurrentId || this.currentId === null) {
          this.currentId = newCurrentId;
          this.currentTab = newCurrentTab;
          this.setSliderCss();
        }
      }

      setSliderCss() {
        let width = 0;
        let left = 0;
        if (this.currentTab) {
          width = this.currentTab.css('width');
          left = this.currentTab.offset().left;
        }
        $('.et-hero-tab-slider').css({ width, left });
      }
    }

    const nav = new StickyNavigation();

    return () => {
      $(window).off('scroll');
      $(window).off('resize');
      $('.et-hero-tab').off('click');
    };
  }, []);

  return null; // No renderiza nada visual
}
