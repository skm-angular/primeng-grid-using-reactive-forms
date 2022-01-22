import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InputTextModule } from 'primeng/inputtext';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { CustomGridComponent } from './custom-grid/custom-grid.component';
@NgModule({
  declarations: [AppComponent, CustomGridComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    InputTextModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    TableModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
