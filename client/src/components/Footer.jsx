import React,{ Component } from 'react';

import '../App.css';

class Footer extends Component {
  render(){
    return (
    <div className="footer">
      <p className= 'created'>&copy; 2019 Created By <img className='logo' src='https://files.slack.com/files-pri/T0351JZQ0-FPM0UN0SU/image.png' /> &trade; </p>
    </div>
  );
}
}
export default Footer;
