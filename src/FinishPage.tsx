interface FinishPageProps
{
    score : number,
    className? : string
};

function FinishPage(props : FinishPageProps)
{
    return <h1 className={props.className}>Your final score is {props.score}!</h1>
}

export default FinishPage;