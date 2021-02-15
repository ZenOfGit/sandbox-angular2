import { Component, OnInit } from '@angular/core';
import { UserPreferenceService } from '../services/user-preferences.service';

@Component({
    selector: 'app-dependency-injection-one',
  templateUrl: './dependency-injection-one.component.html',
  styleUrls: ['./dependency-injection-one.component.css']
})
export class DependencyInjectionOneComponent implements OnInit {

    constructor(private _userPreferencesService: UserPreferenceService) { }

    get color(): string {
        return this._userPreferencesService.colorPreference;
    }

    set color(value: string) {
        this._userPreferencesService.colorPreference = value;
    }

    ngOnInit(): void {
    }

}
