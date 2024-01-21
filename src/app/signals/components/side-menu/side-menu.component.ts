import { Component, signal } from '@angular/core';


interface MenuItem {
  title: string,
  route: string,
}

@Component({
  selector: 'side-menu',
  templateUrl: './side-menu.component.html',
  styleUrl: './side-menu.component.css'
})
export class SideMenuComponent {

  // Atributo con signal
  public menuItems = signal<MenuItem[]>([
    { title: 'Contador', route: 'counter' },
    { title: 'Usuario', route: 'user-info' },
    { title: 'Mutaciones', route: 'properties' },
  ])

  // Atributo de manera tradicional
  // public menuItems: MenuItem[] = [
  //   { title: 'Contador', route: 'counter' },
  //   { title: 'Usuario', route: 'user-info' },
  //   { title: 'Mutaciones', route: 'properties' },
  // ]

}
