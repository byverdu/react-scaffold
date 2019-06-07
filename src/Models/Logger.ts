import { LoggerTypes } from 'Models/Enums';

export interface LoggerState {
  isVisible: boolean;
  message: string;
  type: LoggerTypes;
}
