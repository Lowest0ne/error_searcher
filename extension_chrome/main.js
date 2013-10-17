function generateSearchResults( html, url ){
  // if url is local host
  query = processLocalHost( html );

  // use the query at stack overflow
  result = queryStackOverflow( query );

  // compile the result into an html string ( or whatever we need it to be )
  new_html = compileResult( result );
  return result;
}

/*

function myRequest( request, sender, sendResponse ){

  alert( 'hey, that happened' );

}


chrome.extension.onRequest.addListener( myRequest );
*/

chrome.runtime.onMessage.addListener(
  function( request, sender, sendResponse){
    sendResponse( generateSearchResults( 'string', 'string' )) ;
  }
);

//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js
