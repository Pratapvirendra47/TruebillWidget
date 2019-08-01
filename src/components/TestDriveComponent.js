import React from 'react';

class TestDriveComponent extends React.Component {

	constructor() {
		super();
		
		this.state = {
			carName : "",
			testDriveData: false,
			testDriveDate: "",
			hasError: false
		}
	}
	render() {
		let ButtonStyle = {
			width: "186px",
		    height: "51px",
		    border: "none",
		    color: "white",
		    background: "#a3a3f4",
		    fontSize: "21px",
		    fontWeight: "bold",
		    borderRadius: "19px"
		}

		let InputStyle = {
			height: "50px",
		    width: "350px",
		    border: "none",
		    fontSize: "23px",
		    padding: "6px"
		}
		return (
			<div>
				{
					!this.state.testDriveData ?
						<div
							style={{
								margin: "10px"
							}}
						>
							<div
								style={{
									marginBottom: "10px"
								}}
							>
								<input 
									placeholder={this.props.setCarDeliveryData ? "Showroom" : "Car Name"}
									style={InputStyle}
									onChange={(e) => {
										console.log('carName', e.target.value);
										this.setState({
											carName: e.target.value,
										})
									}}
								/>
							</div>
							<div
								style={{
									marginBottom: "10px"
								}}
							>
								<input 
									placeholder="Date"
									style={InputStyle}
									type="date"
									onChange={(e) => {
										this.setState({
											testDriveDate : e.target.value
										})
									}}
								/>
							</div>
							<button
								style={ButtonStyle}
								onClick={() => {
									if (this.state.carName && this.state.testDriveDate) {
										if (this.props.userTestDriveData) {
											this.props.userTestDriveData(this.state.carName, this.state.testDriveDate);
										}

										if (this.props.userToken) {
											this.props.userToken(this.state.carName, this.state.testDriveDate);
										}
										if (this.props.setCarDeliveryData) {
											this.props.setCarDeliveryData(this.state.carName, this.state.testDriveDate);	
										}
										this.setState({
											testDriveData: true
										})
									} else {
										this.setState({
											hasError: true
										})
									}
								}}
							>
								Save
							</button>
							{
								this.state.hasError ? 
									<div
										style={{
											marginTop: "10px",
											fontSize: "21px",
											fontWeight: "bold",
											color: 'red'
										}}
									>
										Enter Data
									</div> :
								null
							}
						</div>
						:
					null
				}
			</div>
		)
	}
}

export default TestDriveComponent;