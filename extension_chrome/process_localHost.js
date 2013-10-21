function processLocalHost( html ){

  // process the raw html into a javscript object that contains
  // important query data

  var string = document.getElementById('container').children[0].innerText;

  if ( string.match(/No route matches/) )
    string = 'No route matches';



  var query = {
    error: string
  }

  return query;
}
