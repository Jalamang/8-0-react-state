
const Overdraft = (props)=> {
    return (
        <> 
            <h2>Your account is in overdraft by $ {props.balance}</h2>
            <div>Please make a deposit.</div>
            <button onClick={props.handleDeposit}> Deposit $5</button>
        </>
    )
}

export default Overdraft;