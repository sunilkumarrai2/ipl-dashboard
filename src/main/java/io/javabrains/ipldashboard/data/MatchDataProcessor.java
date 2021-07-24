package io.javabrains.ipldashboard.data;

import io.javabrains.ipldashboard.model.Match;

import java.time.LocalDate;
import java.time.LocalDateTime;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import org.springframework.batch.item.ItemProcessor;

public class MatchDataProcessor implements ItemProcessor<MatchInput, Match> {

  private static final Logger log = LoggerFactory.getLogger(MatchDataProcessor.class);

  @Override
  public Match process(final MatchInput matchInput) throws Exception {

      Match match = new Match();
      match.setId(Long.parseLong(matchInput.getId()));
      match.setCity(matchInput.getCity());

      match.setDate(LocalDate.parse(matchInput.getDate()));

      match.setPlayerOfMatch(matchInput.getPlayer_of_match());
      match.setVenue(matchInput.getVenue());
      
      // set team 1 and team 2 depending upon inings order
      String firstInningsTeam, secondInningsteam;

      if("bat".equals(matchInput.getToss_decision())){
        firstInningsTeam = matchInput.getToss_winner();
        secondInningsteam = matchInput.getToss_winner().equals(matchInput.getTeam1()) 
          ? matchInput.getTeam2() : matchInput.getTeam1();

      }else{
        secondInningsteam = matchInput.getToss_winner();
        firstInningsTeam = matchInput.getToss_winner().equals(matchInput.getTeam1()) 
          ? matchInput.getTeam2() : matchInput.getTeam1();
      }
      match.setTeam1(firstInningsTeam);
      match.setTeam1(secondInningsteam);
      
      match.setTossWinner(matchInput.getToss_winner());
      match.setMatchWinner(matchInput.getWinner());
      match.setTossDecision(matchInput.getToss_decision());
      match.setResult(matchInput.getResult());
      match.setResultMargin(matchInput.getResult_margin());
      match.setUmpire1(matchInput.getUmpire1());
      match.setUmpire2(matchInput.getUmpire2());

      return match;
  }

}