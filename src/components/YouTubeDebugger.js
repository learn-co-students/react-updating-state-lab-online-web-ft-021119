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
 		settings: {
 			...this.state.settings,
 			bitrate: 12

 		} 

 	})
 }
 handleClick2 = () => {
// A QUESTION about bitrate.
 	this.setState({
 		
 			settings: { 
 			...this.state.settings,	
            
 				video: {
   ...this.state.settings.video,

  resolution: '720p'

}
}
 	})
 }



	render(){


		return(
			<div>
 <button className='bitrate' onClick={this.handleClick1}>Change Bitrate</button>

<button className='resolution' onClick={this.handleClick2}>Change Resolution</button>
			</div>


			)
	}
}
export default YouTubeDebugger;