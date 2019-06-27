// Code YouTubeDebugger Component Here
import React ,{Component} from 'react'



class YouTubeDebugger extends Component{
 constructor(){
 	super()
 	this.state ={
     errors: [],
     user: null,
     settings: {
     	bitrate: 8 ,
     	video: {
     		resolution: '1080p'

     	}
     	}
     	}
 }

 handleClick1 = () => {

 	this.setState({
 		settings: Object.assign({},this.state.settings,{bitrate: 12})

 	})
 }
 handleClick2 = () => {

 	this.setState({
 		settings: {
 			video: {
   ...this.state.settings.video,
  resolution: '720p',
}
}
 	})
 }



	render(){


		return(
			<div>
 <button class='bitrate' onClick={this.handleClick1}>Change Bitrate</button>
<button class='resolution' onClick={this.handleClick2}>Change Resolution</button>
			</div>


			)
	}
}
export default YouTubeDebugger;