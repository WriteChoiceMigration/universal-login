import type { CustomOptions } from '../common';
import type { BaseMembers } from '../models/base-context';
import type { ScreenMembers, ScreenData } from '../models/screen';
import type { TransactionMembers } from '../models/transaction';

export interface ResetPasswordRequestOptions {
  email?: string;
  username?: string;
  [key: string]: string | number | boolean | undefined;
}

export interface ScreenDataOptions extends ScreenData {
  email?: string;
  username?: string;
  captcha?: string;
}

export interface TransactionMembersOnResetPasswordRequest extends TransactionMembers {
  allowedIdentifiers: ('email' | 'username' | 'phone')[] | null;
  requiredIdentifiers: ('email' | 'username' | 'phone')[] | null;
}

export interface ScreenMembersOnResetPasswordRequest extends ScreenMembers {
  data: {
    email?: string;
    username?: string;
  } | null;
}

export interface ResetPasswordRequestMembers extends BaseMembers {
  screen: ScreenMembersOnResetPasswordRequest;
  resetPassword(payload: ResetPasswordRequestOptions): Promise<void>;
  backToLogin(payload?: CustomOptions): Promise<void>;
}
