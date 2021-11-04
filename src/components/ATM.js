const ATM = (props) => {
  return (
    <>
    {/* Receives event handlers as props from Bank */}
      <button onClick={props.handleWithdrawal}> Withdraw $5</button>
      <button onClick={props.handleDeposit}> Deposit $5</button>
    </>
  );
};

export default ATM;
