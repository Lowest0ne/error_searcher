function generateSearchResults(){
  // if url is local host
  query = processLocalHost();

  // use the query at stack overflow
  //result = queryStackOverflow( query );

  overflow_query = new Query(query);
  return overflow_query.runQuery();

}

// responed to the messgage sent by clicking on the icon
chrome.runtime.onMessage.addListener(
  function( request, sender, sendResponse){
    sendResponse( generateSearchResults() ) ;
  }
);
