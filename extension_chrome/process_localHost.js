function processLocalHost( ){

  var string = document.body.getElementsByTagName('header')[0].innerText;

  if ( string.match(/ActiveRecord::RecordNotFound/) )
    string = 'ActiveRecord::RecordNotFound';

  var query = {
    error: string
  }

  return query;
}
