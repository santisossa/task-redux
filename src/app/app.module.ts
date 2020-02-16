import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { TodoComponent } from './todo/todo.component';
import { ListComponent } from './todo/list/list.component';
import { ItemComponent } from './todo/item/item.component';
import { TdFooterComponent } from './todo/td-footer/td-footer.component';
import { AddComponent } from './todo/add/add.component';
import { StoreModule } from '@ngrx/store';
import { environment } from 'src/environments/environment';
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { ReactiveFormsModule } from "@angular/forms";
import { APP_REDUCERS } from './app.reducers';
import { FilterPipe } from './filter/filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    TodoComponent,
    ListComponent,
    ItemComponent,
    TdFooterComponent,
    AddComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    StoreModule.forRoot(APP_REDUCERS),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
