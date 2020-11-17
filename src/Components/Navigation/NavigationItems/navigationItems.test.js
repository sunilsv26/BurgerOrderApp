import React from 'react';

import {configure,shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import NavigationItems from './NavigationItems';
import NavigationItem from './NavigationItem/NavigationItem'

configure({adapter: new Adapter()});


describe('<NavigationItems/>',()=>{
    let wrapper;
    beforeEach(()=>{
        wrapper = shallow(<NavigationItems />);
    })

    it('should render two comp if unAuth',()=>{
        expect(wrapper.find(NavigationItem)).toHaveLength(2)
    })
    it('should render three comp if Auth',()=>{
        wrapper.setProps({isLogIn:true})
        expect(wrapper.find(NavigationItem)).toHaveLength(3)
    })
})