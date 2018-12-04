import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableModule } from 'primeng/table';
import { SearchComponent } from './search/search.component';
import { SearchService } from './search/search.service';
import { HttpModule } from '@angular/http';

@NgModule({
   declarations: [
      AppComponent,
      SearchComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      TableModule,
     HttpClientModule,
     HttpModule
   ],
  providers: [
    SearchService
  ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
