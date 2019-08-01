import React from 'react';

class RecordTracking extends React.Component {

	render() {
		console.log(this.props);
		let BoxStyle={
			margin: "25px",
		    fontSize: "21px",
		    background: "lightblue",
		    padding: "13px"	,
		    fontFamily: "monospace"
		}
		let TextStyle={
			fontSize: "25px",
			fontWeight: "bold",
			marginBottom: "10px"
		}
		return(
			<div
				style={{
					height: '100%'
				}}
			>
				<div
					style={{
						display: "flex",
						height : "100%",
						flexDirection:"column",
						justifyContent: "center"
					}}
				>
					<div>
						{
							this.props.testDriveData ? 
								<div
									style={BoxStyle}
								>
									<div
										style={TextStyle}
									>
										You have Taken Test Drive
									</div>
									<div>
										Car : {this.props.testDriveData.carName}
									</div>
									<div>
										Date : {this.props.testDriveData.driveDate}
									</div>
								</div>:
							null
						}
					</div>
					<div>
						{
							this.props.userTokenData ?
								<div
									style={BoxStyle}
								>
									<div
										style={TextStyle}
									>
										Processing Your Token
									</div>
									<div>
										Car : {this.props.userTokenData.carName}
									</div>
									<div>
										Date : {this.props.userTokenData.tokenData}
									</div>
								</div>:
							null
						}
					</div>
					<div>
						{
							this.props.loanData ?
								<div
									style={BoxStyle}
								>
									<div
										style={TextStyle}
									>
										Processing Your Loan
									</div>
									<div>
										Amount : Rs. {this.props.loanData.amount}
									</div>
									<div>
										Applied On : {this.props.loanData.loanDate}
									</div>
								</div>:
							null
						}
					</div>

					<div>
						{
							this.props.carDeliveryDetails ?
								<div
									style={BoxStyle}
								>
									<div
										style={TextStyle}
									>
										Delivery Details
									</div>
									<div>
										Showroom : {this.props.carDeliveryDetails.location}
									</div>
									<div>
										Deliver By : {this.props.carDeliveryDetails.deliveryDate}
									</div>
								</div>:
							null
						}
					</div>
					<div>
						{
							this.props.carDeliveryDetails ?
								<div
									style={BoxStyle}
								>
									<div
										style={TextStyle}
									>
										Start owner ship transfer papers
									</div>
								</div>:
							null
						}
					</div>
				</div>
			</div>
		)
	}
}
export default RecordTracking;