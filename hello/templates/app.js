window_error = 15;

doc_h = Math.floor($(window).height())+window_error;
doc_w = Math.floor($(window).width());
doc_volume = doc_h*doc_w
console.log(doc_h);
console.log(doc_h*doc_w);
font_size_past = Math.floor(0.00000828472*doc_volume);
font_size_present = Math.floor(0.00001215093*doc_volume);
font_size_future = Math.floor(0.00000828472*doc_volume);
past_logo_size = Math.floor(0.00005523153*doc_volume);
present_logo_size = Math.floor(0.00011046306*doc_volume);
future_logo_size = Math.floor(0.00005523153*doc_volume);


var margin_div = 0;

var bi2i_logo_row_h = Math.floor(0.015*doc_h);
var content_row_h = Math.floor(0.985*doc_h);
var content_row_h_marginless = content_row_h-3*margin_div;
var gallery_div_h_marginless = content_row_h-3*margin_div;

var bulletin_div_h = Math.floor(0.1*content_row_h_marginless);
var news_div_h = Math.floor(0.39*content_row_h_marginless);
var trend_title_div_h = Math.floor(0.03*content_row_h_marginless);
var trend_chart_h = Math.floor(0.47*content_row_h_marginless);

// var picture_div_h = Math.floor(0.93*gallery_div_h_marginless);
var picture_div_h = doc_h;


$('#PIC_DIV').css('height', content_row_h+'px');

$('#PIC_DIV').css('padding-left', margin_div+'px');
$('#PIC_DIV').css('padding-right', margin_div+'px');
$('#CONT_DIV').css('padding-left', margin_div+'px');
$('#CONT_DIV').css('padding-right', margin_div+'px');

$('#content_row').css('height', content_row_h+'px');
$('#content_div').css('height', content_row_h-3*margin_div+'px');
$('#content_div').css('margin-top', margin_div+'px');
$('#content_div').css('margin-bottom', margin_div+'px');
$('#content_div').css('background-color', '#ededed');
$('#bulletin_div').css('height', bulletin_div_h+'px');
$('#bulletin_div').css('margin-bottom', margin_div+'px');

$('#news_div').css('height', news_div_h);
$('#news_div').css('padding-left', margin_div+'px');
$('#news_div').css('padding-right', margin_div+'px');
$('#news_div').css('margin-left', margin_div+'px');
$('#news_div').css('margin-right', margin_div+'px');


$('#trend_title_div').css('height', trend_title_div_h+'px');
$('#trend_chart').css('height', trend_chart_h+'px');

$('#gallery_div').css('height', content_row_h-2*margin_div+'px');
$('#gallery_div').css('margin-top', margin_div+'px');
$('#gallery_div').css('background-color', 'none');

$('#gallery_title_div').css('height', bulletin_div_h+'px');
$('#gallery_title_div').css('margin-bottom', margin_div+'px');

$('#picture_div').css('height', $('#PIC_DIV').height()+'px');

$('#picture').css('height', $('#picture_div').height()+'px');
$('#picture').css('width', $('#picture_div').width()+'px');




$('#bi2i_logo_row').css('padding-left', margin_div+'px');
$('#bi2i_logo_row').css('padding-right', margin_div+'px');
$('#bi2i_logo_row').css('height', bi2i_logo_row_h+'px');
$('#bi2i_logo_row').css('padding-left', margin_div+'px');
$('#bi2i_logo_row').css('padding-right', margin_div+'px');

$('#bi2i_logo_div').css('padding-left', margin_div+'px');
$('#bi2i_logo_div').css('padding-right', margin_div+'px');
$('#bi2i_logo_div').css('height', bi2i_logo_row_h+'px');
$('#bi2i_logo_div').css('padding-left', margin_div+'px');
$('#bi2i_logo_div').css('padding-right', margin_div+'px');


var cards_margin_past_fut_h = Math.floor(0.00005523153*doc_volume);
var cards_margin_past_fut_w = Math.floor(0.00003313891*doc_volume);
var cards_margin_present_h = Math.floor(0.0000110463*doc_volume);
var cards_margin_present_w = Math.floor(0.0000110463*doc_volume);


$('#past').css('height', news_div_h-cards_margin_past_fut_h+'px');
$('#past').css('width', $('#past_div').width()-cards_margin_past_fut_w+'px');
$('#present').css('height', news_div_h-cards_margin_present_h+'px');
$('#present').css('width', $('#present_div').width()-cards_margin_present_w+'px');
$('#future').css('height', news_div_h-cards_margin_past_fut_h+'px');
$('#future').css('width', $('#future_div').width()-cards_margin_past_fut_w+'px');


var present_h = $('#present').height()
var present_sport_h = Math.floor(0.1*present_h)
var present_event_h = Math.floor(0.1*present_h)
var present_stage_h = Math.floor(0.1*present_h)
var present_teams_h = Math.floor(0.6*present_h)
var present_venue_h = Math.floor(0.1*present_h)

$('#present_sport').css('height', present_sport_h+'px');
$('#present_event').css('height', present_event_h+'px');
$('#present_stage').css('height', present_stage_h+'px');
$('#present_teams').css('height', present_teams_h+'px');
$('#vs_present').css('height', present_teams_h+'px');
$('#present_venue').css('height', present_venue_h+'px');


$('#present_sport_div').css('height', present_sport_h+'px');
$('#present_event_div').css('height', present_event_h+'px');
$('#present_stage_div').css('height', present_stage_h+'px');
$('#present_teams_div').css('height', present_teams_h+'px');
$('#vs_present_div').css('height', present_teams_h+'px');
$('#present_venue_div').css('height', present_venue_h+'px');


$('#present_vs_content').css('font-size', font_size_present+'px');
$('#present_time_content').css('font-size', font_size_present+'px');
$('#present_venue_content').css('font-size', font_size_present+'px');
$('#present_sport_content').css('font-size', font_size_present+'px');
$('#present_event_content').css('font-size', font_size_present+'px');
$('#present_stage_content').css('font-size', font_size_present+'px');
$('#present_team1_logo').css('width', present_logo_size+'px');
$('#present_team1_logo').css('height', present_logo_size+'px');
$('#present_team2_logo').css('width', present_logo_size+'px');
$('#present_team2_logo').css('height', present_logo_size+'px');






var past_h = $('#past').height()
var past_sport_h = Math.floor(0.15*past_h)
var past_event_h = Math.floor(0.15*past_h)
var past_stage_h = Math.floor(0.15*past_h)
var past_teams_h = Math.floor(0.40*past_h)
var past_venue_h = Math.floor(0.15*past_h)

$('#past_sport').css('height', past_sport_h+'px');
$('#past_event').css('height', past_event_h+'px');
$('#past_stage').css('height', past_stage_h+'px');
$('#past_teams').css('height', past_teams_h+'px');
$('#vs_past').css('height', past_teams_h+'px');
$('#past_venue').css('height', past_venue_h+'px');
$('#past_team1').css('height', past_teams_h+'px');
$('#past_team2').css('height', past_teams_h+'px');


$('#past_sport_div').css('height', past_sport_h+'px');
$('#past_event_div').css('height', past_event_h+'px');
$('#past_stage_div').css('height', past_stage_h+'px');
$('#past_teams_div').css('height', past_teams_h+'px');
$('#vs_past_div').css('height', past_teams_h+'px');
$('#past_venue_div').css('height', past_venue_h+'px');
$('#past_team1_div').css('height', past_teams_h+'px');
$('#past_team2_div').css('height', past_teams_h+'px');


$('#past_vs_content').css('font-size', font_size_past+'px');
$('#past_team1_score_content').css('font-size', font_size_past+'px');
$('#past_team2_score_content').css('font-size', font_size_past+'px');
$('#past_sport_content').css('font-size', font_size_past+'px');
$('#past_event_content').css('font-size', font_size_past+'px');
$('#past_stage_content').css('font-size', font_size_past+'px');
$('#past_team1_logo').css('width', past_logo_size+'px');
$('#past_team1_logo').css('height', past_logo_size+'px');
$('#past_team2_logo').css('width', past_logo_size+'px');
$('#past_team2_logo').css('height', past_logo_size+'px');





var future_h = $('#future').height()
var future_sport_h = Math.floor(0.15*future_h)
var future_event_h = Math.floor(0.15*future_h)
var future_stage_h = Math.floor(0.15*future_h)
var future_teams_h = Math.floor(0.40*future_h)
var future_venue_h = Math.floor(0.15*future_h)

$('#future_sport').css('height', future_sport_h+'px');
$('#future_event').css('height', future_event_h+'px');
$('#future_stage').css('height', future_stage_h+'px');
$('#future_teams').css('height', future_teams_h+'px');
$('#vs_future').css('height', future_teams_h+'px');
$('#future_venue').css('height', future_venue_h+'px');
$('#future_team1').css('height', future_teams_h+'px');
$('#future_team2').css('height', future_teams_h+'px');


$('#future_sport_div').css('height', future_sport_h+'px');
$('#future_event_div').css('height', future_event_h+'px');
$('#future_stage_div').css('height', future_stage_h+'px');
$('#future_teams_div').css('height', future_teams_h+'px');
$('#vs_future_div').css('height', future_teams_h+'px');
$('#future_venue_div').css('height', future_venue_h+'px');
$('#future_team1_div').css('height', future_teams_h+'px');
$('#future_team2_div').css('height', future_teams_h+'px');


$('#future_vs_content').css('font-size', font_size_future+'px');
$('#future_team1_score_content').css('font-size', font_size_future+'px');
$('#future_team2_score_content').css('font-size', font_size_future+'px');
$('#future_sport_content').css('font-size', font_size_future+'px');
$('#future_event_content').css('font-size', font_size_future+'px');
$('#future_stage_content').css('font-size', font_size_future+'px');
$('#future_team1_logo').css('width', future_logo_size+'px');
$('#future_team1_logo').css('height', future_logo_size+'px');
$('#future_team2_logo').css('width', future_logo_size+'px');
$('#future_team2_logo').css('height', future_logo_size+'px');
