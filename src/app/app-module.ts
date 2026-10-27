import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { MenuComponent } from './components/menu-component/menu-component';
import { HomeComponent } from './components/home-component/home-component';
import { appRoutingProvider, routing } from './app.routing';
import { FormsModule } from '@angular/forms';
import { ServiceDepartamentos } from './services/service.departamentos';

@NgModule({
  declarations: [App, MenuComponent, HomeComponent],
  imports: [BrowserModule, AppRoutingModule, routing, FormsModule],
  providers: [provideBrowserGlobalErrorListeners(), appRoutingProvider, ServiceDepartamentos],
  bootstrap: [App],
})
export class AppModule {}
