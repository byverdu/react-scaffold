import React from 'react';
import ReactDOM from 'react-dom';
import App from 'Features/App/App';
import enzyme, { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

describe('<App />', () => {
	let wrapper: enzyme.ShallowWrapper;

	beforeEach(() => {
		wrapper = shallow(<App />);
	});

	it('renders without crashing', () => {
		const div = document.createElement('div');
		ReactDOM.render(<App />, div);
		ReactDOM.unmountComponentAtNode(div);
	});

	it('should create a snapshot', () => {
		expect(toJson(wrapper)).toMatchSnapshot();
	});
});
