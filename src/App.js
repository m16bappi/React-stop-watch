/* eslint-disable no-unused-vars */
import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

import Title from './Components/Title/Title'
import CountDown from './Components/CountDown/CountDown'
import Controller from './Components/Controller/Controller'
import Laps from './Components/Lap/Laps'

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      time: {
        min: 0,
        sec: 0,
        mili: 0
      },
      laps: []
    }
  }

  startCountDown() {
    this.InterverId = setInterval(() => {
      let min = this.state.time.min
      let sec = this.state.time.sec
      let mili = this.state.time.mili

      if (sec >= 59) {
        min += 1
        sec = 0
      }

      if (mili >= 9) {
        sec += 1
        mili = 0
      }

      this.setState({
        ...this.state,
        time: {
          min,
          sec,
          mili: mili + 1,
        }
      })
    }, 100);
  }

  pause() {
    clearInterval(this.InterverId)
  }

  lap() {
    this.setState({
      ...this.state,
      laps: this.state.laps.concat(this.state.time)
    })
    console.log(this.state.laps)
  }

  reset() {
    this.setState({
      ...this.state,
      time: {
        min: 0,
        sec: 0,
        mili: 0,
      },
      laps: []
    })
    this.pause()
  }

  render() {
    return (
      <div className="App">
        <div className="container py-5">
          <div className="row">
            <div className="col">

              <Title />

              <CountDown time={this.state.time} />

              <Controller
                start={() => this.startCountDown()}
                pause={() => this.pause()}
                lap={() => this.lap()}
                reset={() => this.reset()}
              />
              <Laps className='my-5' laps={this.state.laps} />

            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default App;
