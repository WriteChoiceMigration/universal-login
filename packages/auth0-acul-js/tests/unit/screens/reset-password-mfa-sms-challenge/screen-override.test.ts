import { ScreenOverride } from '../../../../src/screens/reset-password-mfa-sms-challenge/screen-override';
import { Screen } from '../../../../src/models/screen';
import type { ScreenContext } from '../../../../interfaces/models/screen';

describe('ScreenOverride', () => {
  it('should initialize data correctly', () => {
    const screenContext: ScreenContext = {
      name: 'reset-password-mfa-sms-challenge',
      data: {
        phone_number: '+15551234567',
        remember_device: true,
      },
    } as ScreenContext;

    const screenOverride = new ScreenOverride(screenContext);

    expect(screenOverride.data).toEqual({
      phone_number: '+15551234567',
      remember_device: true,
    });
  });

  it('should handle missing data gracefully', () => {
    const screenContext: ScreenContext = {
      name: 'reset-password-mfa-sms-challenge',
    } as ScreenContext;

    const screenOverride = new ScreenOverride(screenContext);

    expect(screenOverride.data).toBeNull();
  });

  it('should handle remember_device as undefined', () => {
    const screenContext: ScreenContext = {
      name: 'reset-password-mfa-sms-challenge',
      data: {
        phone_number: '+15551234567',
        remember_device: false,
      },
    } as ScreenContext;

    const screenOverride = new ScreenOverride(screenContext);

    expect(screenOverride.data).toEqual({
      phone_number: '+15551234567',
      remember_device: false,
    });
  });

  it('should handle remember_device as false', () => {
    const screenContext: ScreenContext = {
      name: 'reset-password-mfa-sms-challenge',
      data: {
        phone_number: '+15551234567',
        remember_device: false,
      },
    } as ScreenContext;

    const screenOverride = new ScreenOverride(screenContext);

    expect(screenOverride.data).toEqual({
      phone_number: '+15551234567',
      remember_device: false,
    });
  });

  it('should extend Screen class', () => {
    const screenContext: ScreenContext = {
      name: 'reset-password-mfa-sms-challenge',
      data: {
        phone_number: '+15551234567',
        remember_device: true,
      },
    } as ScreenContext;

    const screenOverride = new ScreenOverride(screenContext);
    expect(screenOverride).toBeInstanceOf(Screen);
  });
});