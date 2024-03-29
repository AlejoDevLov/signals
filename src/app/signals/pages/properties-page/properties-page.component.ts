import { Component, OnDestroy, computed, effect, signal } from '@angular/core';
import { User } from '../../interfaces/user-api.interface';

@Component({
  selector: 'app-properties-page',
  templateUrl: './properties-page.component.html',
  styleUrl: './properties-page.component.css'
})
export class PropertiesPageComponent implements OnDestroy {

  public user = signal<User>({
    id: 2,
    email: 'janet.weaver@reqres.in',
    first_name: 'Janet',
    last_name: 'Weaver',
    avatar: 'https://reqres.in/img/faces/2-image.jpg'
  });

  public counter = signal(10);

  public fullName = computed( () => `${ this.user().first_name } ${ this.user().last_name }` )

  public userChangedEffect = effect( () => {
    console.log( this.user().first_name );
    console.log( this.counter());
  });


  ngOnDestroy(): void {
    this.userChangedEffect.destroy();
  }

  increaseCounterBy( value: number ) {
    this.counter.update( current => current + value );
  }

  onFieldUpdate( field: keyof User, value: string ){
    // this.user.update( current => ({...current, [field]: value}) )

    this.user.update( current => {

      switch(field) {
        case 'first_name':
          current.first_name = value;
          break;

        case 'last_name':
          current.last_name = value;
          break;

        case 'email':
          current.email = value;
          break;
      }

      return current;
    })
  }
}
