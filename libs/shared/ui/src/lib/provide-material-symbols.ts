import { ENVIRONMENT_INITIALIZER, EnvironmentProviders, inject, makeEnvironmentProviders } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';

export function provideMaterialSymbols(): EnvironmentProviders {
  return makeEnvironmentProviders([
    {
      provide: ENVIRONMENT_INITIALIZER,
      multi: true,
      useValue: () => inject(MatIconRegistry).setDefaultFontSetClass('material-symbols-outlined'),
    },
  ]);
}
