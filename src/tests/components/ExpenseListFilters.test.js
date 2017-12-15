import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseListFilters } from '../../components/ExpenseListFilters';
import { filters, altFilters } from '../fixtures/filters';

let setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate, wrapper;

beforeEach(() => {
    setTextFilter = jest.fn();
    sortByDate = jest.fn();
    sortByAmount = jest.fn();
    setStartDate = jest.fn();
    setEndDate = jest.fn();
    wrapper = shallow(
        <ExpenseListFilters 
            filters={filters}
            setTextFilter={setTextFilter}
            sortByDate={sortByDate}
            sortByAmount={sortByAmount}
            setStartDate={setStartDate}
            setEndDate={setEndDate}
        />
    );
});

test('should render ExpenseListFilters', () => {
    expect(wrapper).toMatchSnapshot();
});

test('should render ExpenseListFilters with alt data', () => {
    wrapper.setProps({ filters: altFilters });
    expect(wrapper).toMatchSnapshot();
});

test('should handle text change', () => {
    const value = 'something that is a value. who cares.';
    wrapper.find('input').at(0).prop('onChange')({'target':{ value }});
    expect(setTextFilter).toHaveBeenLastCalledWith(value);
});

test('should handle sortbydate', () => {
    const value = 'date';
    wrapper.find('select').at(0).prop('onChange')({'target':{ value }});
    expect(sortByDate).toHaveBeenCalledTimes(1);
    expect(sortByAmount).toHaveBeenCalledTimes(0);
});

test('should handle sortbyamount', () => {
    const value = 'date';
    wrapper.find('select').at(0).prop('onChange')({'target':{ value }});
    expect(sortByDate).toHaveBeenCalledTimes(1);
    expect(sortByAmount).toHaveBeenCalledTimes(0);
});

test('should handle date changes', () => {
    const startDate = altFilters.startDate;
    const endDate = altFilters.endDate;
    wrapper.find('DateRangePicker').prop('onDatesChange')({ startDate, endDate });
    expect(setStartDate).toHaveBeenLastCalledWith(startDate);
    expect(setEndDate).toHaveBeenLastCalledWith(endDate);
});

test('should handle the DateFocusChange event on DateRangePicker', () => {
    wrapper.find('DateRangePicker').prop('onFocusChange')(true);
    expect(wrapper.state('calendarFocused')).toEqual(true);

    wrapper.find('DateRangePicker').prop('onFocusChange')(false);
    expect(wrapper.state('calendarFocused')).toEqual(false);
});