import { Screen } from '../../models/screen';

import type { ScreenContext } from '../../../interfaces/models/screen';
import type { ScreenMembersOnResetPasswordRequest as OverrideOptions } from '../../../interfaces/screens/reset-password-request';

export class ScreenOverride extends Screen implements OverrideOptions {
  constructor(screenContext: ScreenContext) {
    super(screenContext);
    this.data = ScreenOverride.getScreenData(screenContext);
  }

  static getScreenData = (screenContext: ScreenContext): OverrideOptions['data'] => {
    const data = screenContext.data;
    if (!data) return null;
    return {
      ...data,
      email: data.email,
      username: data.username,
    } as OverrideOptions['data'];
  };
}
