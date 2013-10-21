function Query( options ){
  this.options = options;

  this.createParams = function(){
    var params = {
      url: "http://api.stackexchange.com/2.1/",
      type: "search/advanced/",
      options: [
        "site", "stackoverflow",
        "tagged", "ruby-on-rails",
        "accepted", "True",
        "pagesize", "5",
        "title", encodeURIComponent( options.error ),
        "sort", "activity",
        "key", "LKwYYIv127PJRW6Ll8tqIA(("
      ]
    };
    return params;
  }


  this.runQuery = function(){
    var query_params = this.createParams();
    var query_url = this.createUrl( query_params );
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", query_url, false );
    xmlHttp.send( null );
    var response = xmlHttp.responseText;
    var obj = JSON.parse( response );
    var question_data = this.compileResult( obj.items );

    for ( var i = 0; i < question_data.length; i++ )
    {
      var url = 'http://api.stackexchange.com/2.1/answers/' +
                question_data[i].answer_id +
                '?site=stackoverflow&filter=!-0NOezokjTM7&key=LKwYYIv127PJRW6Ll8tqIA((';

      xmlHttp.open( "GET", url, false );
      xmlHttp.send( null );
      var this_response = xmlHttp.responseText;
      var this_json = JSON.parse( this_response );
      question_data[i].answer = this_json.items[0].body;
    }

    return question_data;
  }

  this.createUrl = function( params ){
    var string = params.url + params.type + '?';
    for ( var i = 0; i < params.options.length; i+=2)
    {
      var str = params.options[i] + '=' + params.options[i + 1] + '&';
      string += str;
    }
    return string.slice(0,-1);
  }

  this.compileResult = function( result ){
    var compiled = [];
    for ( var i = 0; i < result.length; i++)
    {
      compiled.push(
        { title: result[i].title,
          answer_id: result[i].accepted_answer_id,
          question_id: result[i].question_id
        }
      );
    }
    return compiled;
  }

};
