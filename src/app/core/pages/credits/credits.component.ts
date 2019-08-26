import {Component, OnInit} from '@angular/core';
import {IDependency, IPackage} from '@app/shared/interfaces/package';
import {environment} from '@env/environment';


declare const PACKAGE_JSON: IPackage;


@Component({
  selector: 'credits',
  templateUrl: './credits.component.html',
  styleUrls: ['./credits.component.scss'],
})
export class CreditsComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

  getDeps(): IDependency[] {
    let deps: IDependency[] = [];

    for (let key in environment.package.dependencies) {
      if (environment.package.dependencies.hasOwnProperty(key)) {
        deps.push({
          name: key,
          version: environment.package.dependencies[key],
        });
      }
    }
    for (let key in environment.package.devDependencies) {
      if (environment.package.devDependencies.hasOwnProperty(key)) {
        deps.push({
          name: key,
          version: environment.package.devDependencies[key],
        });
      }
    }

    return deps;
  }
}
