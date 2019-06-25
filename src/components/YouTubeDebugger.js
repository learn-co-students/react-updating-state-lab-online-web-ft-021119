import React from 'react';
 
class YouTubeDebugger extends React.Component {

	constructor(){
		super();
    this. state = {
  			errors: [],
  			user: null,
  			settings: {
    			bitrate: 8,
    			video: {
      				resolution: '1080p'
    				}
  				}
  			};
	}

 handleClick = () => {
 	this.setState({
 		settings: {
 		...this.state.settings,
 			bitrate: 12
 		}
 	});
 };

 handle2Click = () => {
 	this.setState({
 		settings: {
 			...this.state.settings,
 			video:{
 			...this.state.settings.video,
 			resolution: '720p'
 		}
 	}
 	});
 }


  render() {
    return (
      <div>
        <button className="bitrate" onClick={this.handleClick}>Click me!</button>
        <button className="resolution" onClick={this.handle2Click}>Click me!</button>
      </div>
    );
 
}
}
 
export default YouTubeDebugger;
