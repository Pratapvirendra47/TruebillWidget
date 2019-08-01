import React from 'react';

import RecordTracking from './components/RecordTracking';
import TestDriveComponent from './components/TestDriveComponent';
import CarLoanComponent from './components/CarLoanComponent';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      testDriveData : null,
      testDriveDetails: true,
      tokenDetails: false,
      carLoanDetails: false,
      carDeliveryDetails: false,
    };
    this.setUserTestDriveData = this.setUserTestDriveData.bind(this);
    this.setUserToken = this.setUserToken.bind(this);
    this.setCarLoan = this.setCarLoan.bind(this);
    this.setCarDeliveryData = this.setCarDeliveryData.bind(this);
  }

  setUserTestDriveData(carName, driveDate) {
    this.setState({
      testDriveData: {
        carName: carName,
        driveDate: driveDate,
      },
      testDriveDetails: false,
      tokenDetails: true
    })
  }
  setUserToken( carName, tokenData) {
    this.setState({
      userToken: {
        carName: carName,
        tokenData: tokenData
      },
      tokenDetails: false,
      carLoanDetails: true
    })
  }

  setCarLoan(amount, loanDate) {
    console.log(amount, loanDate)
    this.setState({
      loanData: {
        amount: amount,
        loanDate: loanDate
      },
      carLoanDetails: false,
      carDeliveryDetails: true
    })
  }
  setCarDeliveryData(location, deliveryDate) {
      console.log(location, deliveryDate)
      this.setState({
        deliveryData: {
          location: location,
          deliveryDate: deliveryDate
        },
        carDeliveryDetails: false
      })
  }

  render() {
    let textStyle = {
      fontSize: "21px",
      marginBottom: "30px",
      fontFamily: "monospace"
    }
    return(
      <div>
        <div
          style={{
            display: "flex"
          }}
        >
          <div
            style={{
              width: "50%",
              background: "#e9e2e2",
              height: "100vh",
              display: "flex"
            }}
          >
            <div
              style={{
                justifyContent: "center",
                display: "flex",
                flexDirection: "column",
                marginLeft: "50px",
                width: "100%"
              }}
            >
              <div
                style={textStyle}
              >
                <div
                  style={{
                    color: this.state.testDriveDetails ? 'black' : 'green'
                  }}
                >
                  Testdrive Details
                </div>
                {
                  this.state.testDriveDetails ? 
                    <TestDriveComponent 
                      userTestDriveData={this.setUserTestDriveData}
                    />:
                  null
                }

              </div>
              <div
                style={textStyle}

              >
                <div
                  style={{
                    color: !this.state.tokenDetails && this.state.userToken ? 'green' : 'black'
                  }}
                >
                  Token to truebill
                </div>
                {
                  this.state.tokenDetails ?
                    <TestDriveComponent 
                      userToken = {this.setUserToken}
                    />:
                  null
                }
              </div>
              <div
                style={textStyle}
              >
                <div
                  style={{
                    color: !this.state.carLoanDetails && this.state.loanData ? 'green' : 'black'
                  }}
                >
                  Apply for Car loan
                </div>
                {
                  this.state.carLoanDetails ? 
                    <CarLoanComponent 
                      setCarLoan = {this.setCarLoan}
                    />:
                  null
                }
              </div>
              <div
                style={textStyle}
              >
                <div
                  style={{
                    color: !this.state.carDeliveryDetails && this.state.deliveryData ? 'green' : 'black'
                  }}
                >
                  Car Delivery
                </div>
                {
                  this.state.carDeliveryDetails ?
                    <TestDriveComponent 
                      setCarDeliveryData={this.setCarDeliveryData}
                    />:
                  null
                }
              </div>
              <div
                style={textStyle}
              >
              <div
                style={{
                    color: !this.state.carDeliveryDetails && this.state.deliveryData ? 'green' : 'black'
                  }}
              >
                Owner Ship and Paper Transfer
              </div>  
              </div>
            </div>
          </div>
          <div
            style={{
              width: "50%"
            }}
          >
            <RecordTracking 
              testDriveData={this.state.testDriveData}
              userTokenData = {this.state.userToken ? this.state.userToken : null}
              loanData = {this.state.loanData ? this.state.loanData : null}
              carDeliveryDetails ={this.state.deliveryData ? this.state.deliveryData : null}
            />
          </div>
        </div>
      </div>
    )
  }
}


export default App;