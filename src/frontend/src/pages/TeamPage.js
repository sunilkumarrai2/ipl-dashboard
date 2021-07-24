// import React from 'react';

import { MatchDetailCard } from "../Components/MatchDetailCard"
import { MatchSmallCard } from "../Components/MatchSmallCard"


export const TeamPage = () => {
    return (
      // notice we have used 'classname' in div but in html 'class' is what we use. The reason is
      // in javascript 'class' is a reserved word. And hence we use 'classname'. React will
      // convert it to 'class'
      <div className="TeamPage">
          <h1>Team Name</h1>
          <MatchDetailCard />
          <MatchSmallCard />
          <MatchSmallCard />
          <MatchSmallCard />
      </div>
    );
  }


/*
function TeamPage() {
  return (
    <div className="TeamPage">
        <h1>IPL Dashboard</h1>
    </div>
  );
}

export default TeamPage;
*/