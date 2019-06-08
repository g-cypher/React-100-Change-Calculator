import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      due: ' ',
      received: ' ',
      twenties: 0,
      tens: 0,
      fives: 0,
      ones: 0,
      quarters: 0,
      dimes: 0,
      nickels: 0,
      pennies: 0
    };
    this.handleChange = this.handleChange.bind(this);
    this.calculateChange = this.calculateChange.bind(this);
  }
  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  calculateChange(due, received) {
    const amountGiven = Number(received * 100);
    const amountDue = Number(due * 100);
    let answerTotal = amountGiven - amountDue;
    // Need to setState of alert with answerTotal value here divided by 100 to get total change due

    if (answerTotal >= 2000) {
      const twenty = Math.floor(answerTotal / 2000);
      answerTotal %= 2000;
      this.setState({ twenties: twenty });
    } else {
      this.setState({ tewenties: 0 });
    }
    if (answerTotal >= 1000) {
      const ten = Math.floor(answerTotal / 1000);
      answerTotal %= 1000;
      this.setState({ tens: ten });
    } else {
      this.setState({ tens: 0 });
    }
    if (answerTotal >= 500) {
      const five = Math.floor(answerTotal / 500);
      answerTotal %= 500;
      this.setState({ fives: five });
    } else {
      this.setState({ fives: 0 });
    }
    if (answerTotal >= 100) {
      const one = Math.floor(answerTotal / 100);
      answerTotal %= 100;
      this.setState({ ones: one });
    } else {
      this.setState({ ones: 0 });
    }
    if (answerTotal >= 25) {
      const quarter = Math.floor(answerTotal / 25);
      answerTotal %= 25;
      this.setState({ quarters: quarter });
    } else {
      this.setState({ quarters: 0 });
    }
    if (answerTotal >= 10) {
      const dime = Math.floor(answerTotal / 10);
      answerTotal %= 10;
      this.setState({ dimes: dime });
    } else {
      this.setState({ dimes: 0 });
    }
    if (answerTotal >= 5) {
      const nickel = Math.floor(answerTotal / 5);
      answerTotal %= 5;
      this.setState({ nickels: nickel });
    } else {
      this.setState({ nickels: 0 });
    }
    if (answerTotal >= 1) {
      const penny = Math.ceil(answerTotal / 1);
      answerTotal %= 1;
      this.setState({ pennies: penny });
    } else {
      this.setState({ pennies: 0 });
    }
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
                    <input type='number' className='form-control' name='due' value={ this.state.due } onChange={ this.handleChange }id='inputDue' placeholder='Enter Amount Due' />
                  </div>
                  <div className='form-group'>
                    <label htmlFor='receivedInput'>How much was received?</label>
                    <input type='number' className='form-control' name='received' value={ this.state.received } onChange={ this.handleChange }id='receivedInput' placeholder='Enter Amount Received' />
                  </div>
                  <button type='submit' name='calcButton'className='btn btn-primary' onClick={ () => this.calculateChange(this.state.due, this.state.received, this.state.twenties) }>Calculate</button>
                  
            
              </div>
            </div>
          </div>
        
          <div className='col-sm-8'>
            <div className='card'>
              <div className='card-body'>
                <div className='row text-center'>
                    <div className='col'>
                      <div className='alert alert-success' role='alert'>
                        <strong>Well done!</strong> You successfully read this important alert message.
                    </div>
                  </div>
                </div>
              <div className='container'>
                <div className='row justify-content-center'>
                  
                  <div className='col-sm-2'>
                    <div className='card bg-light'>
                    <div className='card-body'>
                      <h5 className='text-center'>Twenties</h5>
                      <p name='Twenties' className='text-center' onChange={ this.handleChange }>{ this.state.twenties }</p>
                    </div>
                    </div>
                  </div>  
                  
                  <div className='col-sm-2'>
                    <div className='card bg-light'>
                      <div className='card-body'>
                        <h5 className='text-center'>Tens</h5>
                        <p name='Tens' className='text-center' onChange={ this.handleChange }>{this.state.tens}</p>
                      </div>
                    </div>
                  </div>
                  <div className='col-sm-2'>
                    <div className='card bg-light'>
                      <div className='card-body'>
                        <h5 className='text-center'>Fives</h5>
                        <p name='Fives' className='text-center' onChange={ this.handleChange }>{ this.state.fives }</p>
                      </div>
                    </div>
                  </div>
                  <div className='col-sm-2'>
                    <div className='card bg-light'>
                      <div className='card-body'>
                        <h5 className='text-center'>Ones</h5>
                        <p name='Ones' className='text-center' onChange={ this.handleChange }>{ this.state.ones }</p>
                      </div>
                    </div>
                  </div>
                </div>
              
                <div className='row justify-content-center'>

                  <div className='col-sm-2'>
                    <div className='card bg-light'>
                      <div className='card-body'>
                        <h5 className='text-center'>Quarters</h5>
                        <p name='Quarters' className='text-center' onChange={ this.handleChange }>{ this.state.quarters }</p>
                      </div>
                    </div>
                  </div>
                  <div className='col-sm-2'>
                    <div className='card bg-light'>
                      <div className='card-body'>
                        <h5 className='text-center'>Dimes</h5>
                        <p name='Dimes' className='text-center' onChange={ this.handleChange }>{ this.state.dimes }</p>
                      </div>
                    </div>
                  </div>
                  <div className='col-sm-2'>
                    <div className='card bg-light'>
                      <div className='card-body'>
                        <h5 className='text-center'>Nickels</h5>
                        <p name='Nickels' className='text-center' onChange={ this.handleChange }>{ this.state.nickels }</p>
                      </div>
                    </div>
                  </div>
                  <div className='col-sm-2'>
                    <div className='card bg-light'>
                      <div className='card-body'>
                        <h5 className='text-center'>Pennies</h5>
                        <p name='Pennies' className='text-center' onChange={ this.handleChange }>{ this.state.pennies }</p>
                      </div>
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
