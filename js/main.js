import React from 'react';
import ReactDOM from 'react-dom';
import ExampleWork from './example-work';

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
  {
    'title': "URL Shortener",
    'image': {
      'desc': "URL Shortener",
      'src': "images/url.png",
      'comment': ""
    }
  }
]

ReactDOM.render(<ExampleWork work={myWork}/>, document.getElementById('example-work'));
