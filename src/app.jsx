import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
    <div>
      <h2 className='Title'>Change Calculator</h2>

      
        <div className='row'>
          <div className='col-sm-4'>
            <div className='card'>
              <div className='card-body'>
                <div className='card-header'>
                  Enter Information
                </div>
                
                  <div className='form-group'>
                    <label htmlFor='inputDue'>How much is due?</label>
                    <input type='number' className='form-control' id='inputDue' aria-describedby='emailHelp' placeholder='Enter Amount Due' />
                  </div>
                  <div className='form-group'>
                    <label htmlFor='receivedInput'>How much was received?</label>
                    <input type='number' className='form-control' id='receivedInput' placeholder='Enter Amount Received' />
                  </div>
                  <button type='submit' className='btn btn-primary'>Calculate</button>
              </div>
            </div>
          </div>
          <div className='col-sm-8'>
            <div className='card'>
              <div className='card-body'>
                <div className='row'>
                  <output name='changeOutput' type='text'>
                  </output>
                </div>
                <div className='row'>
                  <div className='col-sm-2'>
                    <div className='card bg-light text-center'>
                      <div className='card-body'>
                        <h5 className='card-title'>Twenties</h5>
                      </div>
                    </div>
                  </div>
                  <div className='col-sm-2'>
                    <div className='card bg-light text-center'>
                      <div className='card-body'>
                        <h5 className='card-title'>Tens</h5>
                      </div>
                    </div>
                  </div>
                  <div className='col-sm-2'>
                    <div className='card bg-light text-center'>
                      <div className='card-body'>
                        <h5 className='card-title'>Fives</h5>
                      </div>
                    </div>
                  </div>
                  <div className='col-sm-2'>
                    <div className='card bg-light text-center'>
                      <div className='card-body'>
                        <h5 className='card-title'>Ones</h5>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='row'>
                  <div className='col-sm-2'>
                    <div className='card bg-light text-center'>
                      <div className='card-body'>
                        <h5 className='card-title'>Quarters</h5>
                      </div>
                    </div>
                  </div>
                  <div className='col-sm-2'>
                    <div className='card bg-light text-center'>
                      <div className='card-body'>
                        <h5 className='card-title'>Dimes</h5>
                      </div>
                    </div>
                  </div>
                  <div className='col-sm-2'>
                    <div className='card bg-light text-center'>
                      <div className='card-body'>
                        <h5 className='card-title'>Nickels</h5>
                      </div>
                    </div>
                  </div>
                  <div className='col-sm-2'>
                    <div className='card bg-light text-center'>
                      <div className='card-body'>
                        <h5 className='card-title'>Pennies</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
    </div>
    );
  }
}

export default App;
