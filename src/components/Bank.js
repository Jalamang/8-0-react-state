import React from "react";
import Overdraft from "./Overdraft";
import ATM from "./ATM";

export default class Bank extends React.Component {
  constructor() {
    super();
    this.state = {
      currentBalance: 0,
    };
  }

  //event handler
  handleWithdrawal = () => {
    this.setState({ currentBalance: this.state.currentBalance - 5 });
  };

  //event handler
  handleDeposit = () => {
    this.setState({ currentBalance: this.state.currentBalance + 5 });
  };

  render() {
    //destructuring state
    let { currentBalance } = this.state;

    // created a variable to reassign the correct component that should render depending on our current balance
    //   let atmOrOverdraft = <ATM handleDeposit={this.handleDeposit} handleWithdrawal={this.handleWithdrawal} />

    //   if(currentBalance <0){
    //       atmOrOverdraft =  <Overdraft balance={currentBalance} handleDeposit={this.handleDeposit}/>
    //   }

    return (
      <>
        <div>Current Balance: $ {currentBalance}</div>

        {/* Uses short circuiting to render component. If the conditional is true, it will render the expression on the right */}
        {currentBalance < 0 && (
          <Overdraft
            balance={currentBalance}
            handleDeposit={this.handleDeposit}
          />
        )}
        {currentBalance >= 0 && (
          <ATM
            handleDeposit={this.handleDeposit}
            handleWithdrawal={this.handleWithdrawal}
          />
        )}

        {/* ******************************************** */}
        {/* Uses the ternary conditional to decide which component to render */}
        {/* {currentBalance < 0
            ? <Overdraft balance={currentBalance} handleDeposit={this.handleDeposit}/>
            : <ATM handleDeposit={this.handleDeposit} handleWithdrawal={this.handleWithdrawal} />
        } */}

        {/* *********************************************** */}
        {/* Will render ATM or Overdraft depending on the conditional handled in our render function above   */}
        {/* {atmOrOverdraft} */}
      </>
    );
  }
}
