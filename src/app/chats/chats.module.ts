import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { PerfectScrollbarModule } from 'angular2-perfect-scrollbar';

import { ChatsService } from './chats.service';
import { ChatsComponent } from './chats.component';
import { ContactsComponent } from './contacts/contacts.component';
import { ChatComponent } from './chat/chat.component';
import { ChatRoutingModule } from './chats.routing';


@NgModule({
  imports: [
    SharedModule,
    ChatRoutingModule,
    PerfectScrollbarModule.forChild()
  ],
  declarations: [
    ChatsComponent,
    ContactsComponent,
    ChatComponent
  ],
  providers: [
    { provide: 'ChatsService', useClass: ChatsService}
  ]
})
export class ChatsModule { }
