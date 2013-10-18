var globe = {
  "results": 'this happens the first time.  Or, there were no results'
};

function processAnswers(data){
  //manage answer data
  var answerBody = data.items[0].body;
  globe.results = answerBody;
}

function processQuestionResult(data){
  alert("STUFS");
  var questionId = data.items[0].unescapedURL;
  alert("Question Id:" + questionId);
  $.get("https://api.stackexchange.com/2.1/questions/"+ questionId + "/answers?order=desc&sort=votes&site=stackoverflow&filter=!bc0qAAU9ADlgOV",
      processAnswers);
}

function queryStackOverflow(query){
  // result = query.example;
  // use different members of the query object to
  // create a stack overflow search through google
  
  var search_var = encodeURIComponent(query);
  // var search_var = encodeURIComponent( query.example );
  // noResults(search_var);
  alert("https://ajax.googleapis.com/ajax/services/search/web?v=1.0&q=" + search_var);
  $.get("https://ajax.googleapis.com/ajax/services/search/web?v=1.0&q=" + search_var,
    processQuestionResult);
  
  // maybe process result into an object
  return globe.results;
}

// function noResults(query){
//   $.get("http://api.stackexchange.com/2.1/search?page=1&order=desc&sort=relevance&intitle=" + query + "&site=stackoverflow",
//     data);
//   if data.items.length === 0 {
//     alert("No results for this error.")
//   } else {
//     return query
//   };
// };
