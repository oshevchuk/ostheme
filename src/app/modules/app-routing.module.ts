/**
 * Created by Oshevchuk on 25.09.2017.
 * http://oshevchuk2016.16mb.com/
 */
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "../components/Home/home.component";
import {ContactComponent} from "../components/Contact/contact.component";


const routes:Routes=[
    {path: 'home', component: HomeComponent, pathMatch: 'full'},
    {path: 'contact', component: ContactComponent, pathMatch: 'full'},
    {path: '', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export  class AppRoutingModule{}