function generateSearchResults( html, url ){
  // if url is local host
//  query = processLocalHost( html );

  // use the query at stack overflow
//  result = queryStackOverflow( query );

  // compile the result into an html string ( or whatever we need it to be )
  var new_html = compileResult( 'string' );
  return compileResult( 'string' );
}

// responed to the messgage sent by clicking on the icon
chrome.runtime.onMessage.addListener(
  function( request, sender, sendResponse){
    sendResponse( generateSearchResults( 'string', 'string' )) ;
  }
);
