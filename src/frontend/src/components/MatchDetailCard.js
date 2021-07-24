export const MatchDetailCard = () => {
    return (
      // notice we have used 'classname' in div but in html 'class' is what we use. The reason is
      // in javascript 'class' is a reserved word. And hence we use 'classname'. React will
      // convert it to 'class'
      <div className="MatchDetailCard">
          <h3>Latest Matches</h3>
          <h4>Match Details</h4>
      </div>
    );
  }