import type { CustomOptions } from '../common';
import type { BaseMembers } from '../models/base-context';
import type { ScreenMembers, PhonePrefix } from '../models/screen';

/**
 * Interface for screen data specific to mfa-country-codes screen
 */
export interface ScreenMembersOnMfaCountryCodes extends ScreenMembers {
  data: {
    /** List of available phone prefixes */
    phone_prefixes: PhonePrefix[];
  } | null;
}

/**
 * Options for selecting a country code
 */
export interface SelectCountryCodeOptions {
  /** The action to perform, must match pattern ^selection-action::[A-Z]{2}[0-9]{1,4}$ */
  action: string;
  /** Any additional custom options */
  [key: string]: string | number | boolean | undefined;
}

/**
 * Interface defining the available methods and properties for the mfa-country-codes screen
 */
export interface MfaCountryCodesMembers extends BaseMembers {
  screen: ScreenMembersOnMfaCountryCodes;
  /**
   * Selects a country code from the available options
   * @param payload The options containing the country code selection action
   */
  selectCountryCode(payload: SelectCountryCodeOptions): Promise<void>;
  /**
   * Navigates back to the previous screen
   * @param payload Optional custom options to include with the request
   */
  goBack(payload?: CustomOptions): Promise<void>;
}
