import React, { Component } from "react";
// css
import "./CreditCard.css";
// images
import chip from "./images/card-chip-png-15.png";
import mscrdlogo from "./images/Mastercard-logo.png";
import visalogo from "./images/Visa_Inc._logo.svg.png";

class CreditCard extends Component {
  state = {
    name: "Customer Full Name",
    validThru: "MM/YY",
    cardNum: "XXXX XXXX XXXX XXXX"
  };

  typeName = e => {
    this.setState({ name: e.target.value.toUpperCase() });
  };

  typeValidThru = e => {
    this.setState({
      validThru:
        e.target.value.length === 2 && !this.state.validThru.includes("/")
          ? // !e.target.value.includes("/")
            ((this.validThru += "/"), (e.target.value += "/"))
          : e.target.value
    });
  };

  typeCardNum = e => {
    let typed = e.target.value;

    !isNaN(typed) && !typed.includes(" ")
      ? this.setState({ cardNum: typed })
      : (e.target.value = this.state.cardNum);
  };

  render() {
    return (
      <React.Fragment>
        <div className="credit-card">
          <div className="credit-card-title">
            <h1 className="cc-title">CREDIT CARD</h1>
            <div>
              <img className="chip" src={chip} alt="credit card chip" />
            </div>
          </div>

          <div className="second-part">
            <div className="credit-card-info">
              <h2 className="credit-card-number">{this.state.cardNum}</h2>
              <div className="pin-date">
                <h2 className="credit-card-pin">5422</h2>
                <div className="credit-card-date-title">
                  <h2 className="credit-card-date-t">VALID UP TO</h2>
                  <h2 className="credit-card-date">{this.state.validThru}</h2>
                </div>
              </div>
              <h2 className="credit-card-holder">{this.state.name}</h2>
            </div>
            <div className="credit-card-logo">
              <div className="children-imgs">
                <img className="logo" src={mscrdlogo} alt="mastercard logo" />
              </div>
              <div className="children-imgs">
                <img className="logo" src={visalogo} alt="visa logo" />
              </div>
            </div>
          </div>
        </div>
        <div>
          <form action="">
            <input
              type="text"
              placeholder="Your Name Here.."
              onChange={this.typeName}
              maxLength="20"
            />
            <input
              type="text"
              placeholder="MM/YY"
              onChange={this.typeValidThru}
              // onChange={this.typeName}
              maxLength="5"
            />
            <input
              type="text"
              placeholder="Your Card Number here..."
              onChange={this.typeCardNum}
              // onChange={this.typeName}
              maxLength="19"
            />
          </form>
        </div>
      </React.Fragment>
    );
  }
}
export default CreditCard;

// validateDate() {
//   // Assuming variables inputYear and inputMonth are already defined and correspond to user's input.
//   const todayDate = new Date()
//   const todayYear = todayDate.getFullYear() // It gives you four digits so you might want to slice out the last two digits
//   const todayMonth = todayDate.getMonth()
//   if (!(inputMonth >= 1 && inputMonth <= 12)) return false
//   if (inputYear > todayYear) return true
//   else if (inputMonth > todayMonth) return true
//   else return false
// }
