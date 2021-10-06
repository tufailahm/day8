import { Component } from "@angular/core";

@Component({
    selector: 'first-component',
    templateUrl: 'welcome.component.html',
    styles :  [ 'h1 { color: red} ']
})
export class WelcomeComponent
{
        authorName = "Mohammad Tufail Ahmed";
        cityName = "Newyork"
}