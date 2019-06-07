import enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import MockAdapter from 'axios-mock-adapter';
import axios from 'axios';

enzyme.configure({ adapter: new Adapter() });

export const axiosMock = new MockAdapter(axios);
