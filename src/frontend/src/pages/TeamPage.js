import { MatchDetailCard } from "../Components/MatchDetailCard"
import { MatchSmallCard } from "../Components/MatchSmallCard"

export const TeamPage = () => {
  return (
    <div className="TeamPage">
        <h1>Team Name</h1>
        <MatchDetailCard></MatchDetailCard>
        <MatchSmallCard></MatchSmallCard>
        <MatchSmallCard></MatchSmallCard>
        <MatchSmallCard></MatchSmallCard>
    </div>
  );
}
