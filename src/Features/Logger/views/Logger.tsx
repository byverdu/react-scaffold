import React, { useEffect } from 'react';
import {
  LoggerMapStateToProps,
  LoggerMapDispatchToProps
} from 'Features/Logger/views/LoggerContainer';
import 'Theme/Logger.scss';

const classnames = require('classnames');

export interface LoggerProps
  extends LoggerMapStateToProps,
    LoggerMapDispatchToProps {}

const Logger: React.SFC<LoggerProps> = ({
  message,
  type,
  isVisible,
  toggleVisibility
}) => {
  const classNames = classnames(
    'logger',
    { visible: isVisible },
    { hidden: !isVisible },
    type
  );

  useEffect(() => {
    if (isVisible) {
      setTimeout(() => {
        toggleVisibility();
      }, 2000);
    }
  });

  return <div className={classNames}>{message}</div>;
};

export default Logger;
