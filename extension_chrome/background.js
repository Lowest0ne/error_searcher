function createView( result ){
  var divider = document.createElement('div');
  var a = document.createElement('a');
  a.href = 'http://www.stackoverflow.com/questions/' + result.question_id;
  a.target = '_blank';
  a.innerText = result.title;

  var p = document.createElement('p');
  p.innerHTML = result.answer;


  divider.appendChild( a );
  divider.appendChild( p );
  return divider;
}


document.addEventListener('DOMContentLoaded',
  function(){ chrome.tabs.getSelected( null,
  function(tab){
    chrome.tabs.sendMessage( tab.id,{},
    function( response )
    {
      for ( var i = 0; i < response.length; i++)
        document.body.appendChild( createView( response[i]) );
    });
  });
});
