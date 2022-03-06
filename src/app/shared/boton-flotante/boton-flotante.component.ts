
import { DOCUMENT } from '@angular/common';
import { Component, HostListener, Inject, Input, OnInit } from '@angular/core';
@Component({
  selector: 'app-boton-flotante',
  templateUrl: './boton-flotante.component.html',
  styleUrls: ['./boton-flotante.component.css']
})
export class BotonFlotanteComponent implements OnInit {


  //el @Input me permite modificar el nombre del botón flotante dependiendo de la página en la que me ecnuentre
  @Input() ubicacion: string = '';

  windowScrolled: boolean | undefined;

  ngOnInit(): void {
  }

  constructor(@Inject(DOCUMENT) private document: Document) {}

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
      if (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop > 100) {
          this.windowScrolled = true;
      }
     else if (this.windowScrolled && window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop < 10) {
          this.windowScrolled = false;
      }
  }
  scrollToTop(): void {
      (function smoothscroll(): void {
          const currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
          if (currentScroll > 0) {
              window.requestAnimationFrame(smoothscroll);
              window.scrollTo(0, currentScroll - (currentScroll / 1.5));
          }
      })();
  }

}

