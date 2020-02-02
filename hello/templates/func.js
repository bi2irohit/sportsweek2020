var testFunc = function(){
  url = 'https://cheeky-tortoise.herokuapp.com/teampoints';
  $.ajax(
    { type : "GET",
      url: url,
      headers: {
        'Access-Control-Allow-Origin': '*'
        },
    dataType :  "text",
     success: function(result){
          console.log(result);
    }
  });
};
testFunc();
