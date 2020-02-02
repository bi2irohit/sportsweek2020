json = {"match_id":1,"date":"2020-01-31T18:30:00.000Z","time":"03:00:00","venue":"PG",
"sport_name":"Badminton","event_name":"Mens Singles","stage_name":"Final",
"team_1":"A","team_1_score":20,"team_2":"B","team_2_score":10,"bonus":false}

var type1 = function(winner, loser, sport, event_name, winner_score, loser_score, stage_name, bonus){
  if (bonus){
      sent = winner + ' defeated ' + loser + ' in a thrilling '+ sport + ' - ' + event_name + ' ' + stage_name + ' with ' + winner_score + '-' + loser_score + ' as the final score and gained the bonus point';
  }
  else{
      sent = winner + ' defeated ' + loser + ' in a thrilling '+ sport + ' - ' + event_name + ' ' + stage_name + ' with ' + winner_score + '-' + loser_score + ' as the final score';
  }
  return sent
}

var type2 = function(winner, loser, sport, event_name, winner_score, loser_score, stage_name, bonus){
  if (bonus){
    sent = 'In an exciting ' + sport_name + ' - ' + event_name + ' ' + stage_name + ', ' + winner + ' won over ' + loser +  ' with final score standing as ' + winner_score + '-' + loser_score + ' and gained the bonus point';
  }
  else{
    sent = 'In an exciting ' + sport_name + ' - ' + event_name + ' ' + stage_name + ', ' + winner + ' won over ' + loser +  ' with final score standing as ' + winner_score + '-' + loser_score;
  }
  return sent
}

var type3 = function(winner, loser, sport, event_name, winner_score, loser_score, stage_name, bonus){
  if(bonus){
    sent = loser + ' lost to ' + winner + ' in an exhilarating ' + sport_name + ' - ' + event_name + ' ' + stage_name + ' with ' + winner_score + '-' + loser_score + ' as the final score and gained the bonus point'
  }
    sent = loser + ' lost to ' + winner + ' in an exhilarating ' + sport_name + ' - ' + event_name + ' ' + stage_name + ' with ' + winner_score + '-' + loser_score + ' as the final score'
  return sent
}


var createSent = function(json){
sport_name = json['sport_name']
event_name = json['event_name']
stage_name = json['stage_name']
team1 = json['team_1']
team2 = json['team_2']
team1_score = json['team_1_score']
team2_score = json['team_2_score']
date = json['date']
time = json['time']
venue = json['venue']
bonus = json['bonus']

if(team1_score>team2_score){
  winner = team1;
  winner_score = team1_score;
  loser = team2;
  loser_score = team2_score;
}
else{
  winner = team2;
  winner_score = team2_score;
  loser = team1;
  loser_score = team1_score;
}

type = Math.floor(Math.random() * 3) + 1;
if (type == 1){
  sent = type1(winner, loser, sport_name, event_name, winner_score, loser_score, stage_name, bonus);
}
else if (type == 2) {
  sent = type2(winner, loser, sport_name, event_name, winner_score, loser_score, stage_name, bonus);
}
else if (type == 3) {
  sent = type3(winner, loser, sport_name, event_name, winner_score, loser_score, stage_name, bonus);
}
return sent
}

sent = createSent(json);
