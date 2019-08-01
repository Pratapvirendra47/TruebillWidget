import React from 'react';

class CarLoanComponent extends React.Component {

	constructor() {
		super();

		this.state = {
			carLoanData: false,
			loanAmount: "",
			loanDate: ""
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
		let TextStyle={
			height: "50px",
		    width: "350px",
		    border: "none",
		    fontSize: "23px",
		    padding: "6px"
		}
		return (
			<div>
				{
					!this.state.carLoanData ?
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
									style={TextStyle}
									placeholder="Amount"
									type="number"
									onChange={(e) => {
										console.log('carName', e.target.value);
										this.setState({
											loanAmount: e.target.value,
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
									style={{
										height: "50px",
									    width: "350px",
									    border: "none",
									    fontSize: "23px",
									    padding: "6px"
									}}
									type="date"
									onChange={(e) => {
										this.setState({
											loanDate : e.target.value
										})
									}}
								/>
							</div>
							<button
								style={ButtonStyle}
								onClick={() => {
									if (this.state.loanAmount && this.state.loanDate) {
										this.props.setCarLoan(this.state.loanAmount, this.state.loanDate);
										this.setState({
											carLoanData: true
										})
									} else {
										this.setState({
											hasError: true
										})
									}
								}}
							>
								Submit
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
export default CarLoanComponent;