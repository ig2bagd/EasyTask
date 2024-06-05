import {
  Component,
  Input,
  Output,
  EventEmitter,
  computed,
  input,
  output,
  signal,
} from '@angular/core';

import { type User } from './user.model';
import { CardComponent } from "../shared/card/card.component";

// import { DUMMY_USERS } from '../dummy-users';

// const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
    selector: 'app-user',
    standalone: true,
    templateUrl: './user.component.html',
    styleUrl: './user.component.css',
    imports: [CardComponent]
})
export class UserComponent {
  // selectedUser = signal(DUMMY_USERS[randomIndex]);

  // @Input({required: true}) id!: string;
  // @Input({required: true}) avatar!: string;
  // @Input({required: true}) name!: string;
  @Input({ required: true }) user!: User;
  @Input({required: true}) selected!: boolean;
  @Output() select = new EventEmitter<string>();

  // avatar = input('');
  // avatar = input.required<string>();      // read-only
  // name = input.required<string>();        //   "   "
  // select = output<string>();

  get imagePath() {
    // return 'assets/users/' + this.selectedUser.avatar;
    return 'assets/users/' + this.user.avatar;
  }

  // imagePath = computed(() => 'assets/users/' + this.avatar());
  // imagePath = computed(() => 'assets/users/' + this.avatar);

  onSelectUser() {
    // const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
    // this.selectedUser.set(DUMMY_USERS[randomIndex]);

    this.select.emit(this.user.id);
  }
}
