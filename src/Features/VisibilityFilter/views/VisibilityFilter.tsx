import React from 'react';
import { connect } from 'react-redux';
import { VisibilityFilterEnum } from 'Models/Enums';
import { RootState } from 'Core/reducers';
import { setActiveFilter } from 'Features/VisibilityFilter/redux';

export interface FilterMapStateToProps {
  activeFilter: VisibilityFilterEnum;
}

export interface FilterDispatchToProps {
  filterHandler: (filter: VisibilityFilterEnum) => void;
}

interface ComponentProps extends FilterMapStateToProps, FilterDispatchToProps {}

const mapStateToProps = ({
  visibilityFilter: { activeFilter }
}: RootState): FilterMapStateToProps => ({
  activeFilter
});

const mapDispatchToProps = (dispatch): FilterDispatchToProps => ({
  filterHandler: (filter: VisibilityFilterEnum) =>
    dispatch(setActiveFilter(filter))
});

const VisibilityFilter: React.SFC<ComponentProps> = ({
  activeFilter,
  filterHandler
}) => {
  const filtersData = [
    {
      text: 'Show All',
      type: VisibilityFilterEnum.SHOW_ALL
    },
    {
      text: 'Show Done',
      type: VisibilityFilterEnum.SHOW_DONE
    },
    {
      text: 'Show Todo',
      type: VisibilityFilterEnum.SHOW_TODO
    }
  ].map((item) => (
    <label key={item.type} htmlFor={item.type}>
      {item.text}
      <input
        checked={activeFilter === item.type}
        name="filter-type"
        id={item.type}
        value={item.type}
        type="radio"
        onChange={() => {
          filterHandler(item.type);
        }}
      />
    </label>
  ));

  return <section className="visibility-actions">{filtersData}</section>;
};

export default connect<FilterMapStateToProps, FilterDispatchToProps>(
  mapStateToProps,
  mapDispatchToProps
)(VisibilityFilter);
