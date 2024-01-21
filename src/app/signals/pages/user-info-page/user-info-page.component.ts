import { Component, OnDestroy, OnInit, computed, inject, signal } from '@angular/core';
import { UserServiceService } from '../../services/user-service.service';
import { User } from '../../interfaces/user-api.interface';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user-info-page',
  templateUrl: './user-info-page.component.html',
  styleUrl: './user-info-page.component.css'
})
export class UserInfoPageComponent implements OnInit, OnDestroy {

  private userService = inject(UserServiceService);
  public userId = signal(1);
  public currentUser = signal<User|undefined>(undefined);
  public userWasFound = signal(true);
  public fullName = computed<string>( () => {
    if ( !this.currentUser ) return 'Usuario no encontrado';
    return `${ this.currentUser()?.first_name } ${ this.currentUser()?.last_name }`
  })
  private userSubscription?: Subscription;

  ngOnInit(): void {
    this.loadUser( this.userId() );
  }

  ngOnDestroy(): void {
    this.userSubscription?.unsubscribe();
  }

  loadUser( id: number ){
    if( id <= 0 ) return;
    this.userId.set(id);
    this.currentUser.set(undefined);

    // this.userSubscription = this.userService.getUserById(id)
    //   .subscribe( user =>
    //     user ? this.currentUser.set(user)  : this.currentUser.set(undefined) );

    // if( !this.currentUser ){
    //   this.userWasFound.update( value => !value );
    // }

    this.userSubscription = this.userService.getUserById(id)
      .subscribe({
        next: (value) => {
            this.currentUser.set(value);
            this.userWasFound.set(true);
        },
        error: (err) => {
          this.userWasFound.set(false);
          this.currentUser.set(undefined);
        }
      })
  }

}
