export const MatchSmallCard = () => {
    return (
      // notice we have used 'classname' in div but in html 'class' is what we use. The reason is
      // in javascript 'class' is a reserved word. And hence we use 'classname'. React will
      // convert it to 'class'
      <div className="MatchSmallCard">
          <p>Match Small Card</p>
      </div>
    );
  }