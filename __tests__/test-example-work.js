import React from 'react';
import { shallow } from 'enzyme';
import ExampleWork from '../js/example-work';

const myWork = [
  {
    'title': "Connect Calculator",
    'image': {
      'desc': "Connect Calculator",
      'src': "images/connectcalc.png",
      'comment': ""
    }
  },
  {
    'title': "Video Transcoder",
    'image': {
      'desc': "Video Transcoder",
      'src': "images/video.png",
      'comment': ""
    }
  },
];

describe("ExampleWork component", () => {
  let component = shallow(<ExampleWork work={myWork}/>);

  it("Should be a 'section' element", () => {
    expect(component.type()).toEqual('section');
  });
});
