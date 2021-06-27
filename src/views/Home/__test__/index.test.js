import React from 'react';

import Enzyme, { mount } from 'enzyme';
import EnzymeAdapter from '@wojtekmaj/enzyme-adapter-react-17';

import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import logger from "redux-logger";
import thunk from "redux-thunk";

import Home from '../';
import reducers from '../../../store/reducers';

Enzyme.configure({ adapter: new EnzymeAdapter() });

describe('<Home /> unit test', () => {
    const getWrapper = (mockStore = createStore(reducers, applyMiddleware(thunk, logger))) => mount(
        <Provider store={mockStore}>
            <Home />
        </Provider>
    );

    it('should render correct title', () => {
        const wrapper = getWrapper();
        expect(wrapper.find('h1').text()).toEqual('Movies');
    });

    it('input search movies with keyword', () => {
        const keyword = "Avenger";
        const wrapper = getWrapper();
        wrapper.find('input').simulate('change', { target: { name: 'query', value: keyword } });
        expect(wrapper.find('input').props().value).toEqual(keyword);
    });

    it('should search movies', async () => {
        const mockStore = createStore(reducers, applyMiddleware(thunk, logger));
        mockStore.dispatch = jest.fn();

        const wrapper = getWrapper(mockStore);
        expect(mockStore.dispatch).toHaveBeenCalled()
    });
});