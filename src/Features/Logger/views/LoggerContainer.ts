import Logger from 'Features/Logger/views/Logger';
import { connect } from 'react-redux';
import { LoggerTypes } from 'Models/Enums';
import { RootState } from 'Core/reducers';
import { toggleLoggerVisibility } from 'Features/Logger/redux';
import 'Theme/Logger.scss';

export interface LoggerMapStateToProps {
  message: string;
  type: LoggerTypes;
  isVisible: boolean;
}

export interface LoggerMapDispatchToProps {
  toggleVisibility: () => void;
}

const mapStateToProps = ({
  logger: { message, type, isVisible }
}: RootState): LoggerMapStateToProps => ({
  message,
  type,
  isVisible
});

const mapDispatchToProps = (dispatch): LoggerMapDispatchToProps => ({
  toggleVisibility: () => dispatch(toggleLoggerVisibility())
});

export default connect<LoggerMapStateToProps, LoggerMapDispatchToProps>(
  mapStateToProps,
  mapDispatchToProps
)(Logger);
