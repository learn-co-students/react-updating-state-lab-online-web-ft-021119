import React, { Component } from 'react'

export default class YouTubeDebugger extends Component {
   constructor(props) {
      super(props)
   
      this.state = {
         errors: [],
         user: null,
         settings: {
            bitrate: 8,
            video: {
               resolution: '1080p'
            }
         }
      }
   }
   
   changeBit = () => {
      this.setState({
         settings: {
            bitrate: 12,
            video: {
               resolution: '1080p'
            }
         }
      })
   }
   
   changeRes = () => {
      this.setState({
         settings: {
            bitrate: 8,
            video: {
               resolution: '720p'
            }
         }
      })
   }
   
   render() {
      return (
         <div>
         <button className="bitrate" onClick={this.changeBit}>Set Bitrate to 12</button>
         <br/>
         <button className="resolution" onClick={this.changeRes}>Change Resolution</button>
         </div>
      )
   }
}
