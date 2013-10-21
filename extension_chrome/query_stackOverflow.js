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
        "pageisize", "5",
        "title", encodeURIComponent( options.error )
      ]
    };
    return params;
  }


  this.runQuery = function(){
    var query_params = this.createParams();
    var query_url = this.createUrl( query_params );
    alert( query_url );
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", query_url, false );
    xmlHttp.send( null );
    var response = xmlHttp.responseText;
    var obj = JSON.parse( response );
    return this.compileResult(obj.items);
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
      compiled.push( { title: result[i].title,
                     answer_id: result[i].accepted_answer_id } );
    }
   return compiled;
  }

};
