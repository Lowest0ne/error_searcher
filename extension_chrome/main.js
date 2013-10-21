function generateSearchResults( html, url ){
  // if url is local host
  query = processLocalHost( html );

  // use the query at stack overflow
  //result = queryStackOverflow( query );

  overflow_query = new Query(query);
  overflow_query.runQuery();

  // compile the result into an html string ( or whatever we need it to be )

  return compileResult( 'string' );
}

// responed to the messgage sent by clicking on the icon
chrome.runtime.onMessage.addListener(
  function( request, sender, sendResponse){
    sendResponse( generateSearchResults( 'string', 'string' )) ;
  }
);
