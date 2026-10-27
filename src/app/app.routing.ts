import { RouterModule,Routes } from "@angular/router";
import { HomeComponent } from "./components/home-component/home-component";
import { ModuleWithProviders } from "@angular/core";

const appRoutes: Routes = [
    { path: "", component: HomeComponent }

]

export const appRoutingProvider: any[] = []
export const routing: ModuleWithProviders<any> = 
RouterModule.forRoot(appRoutes);