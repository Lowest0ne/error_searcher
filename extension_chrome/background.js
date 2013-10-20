document.addEventListener('DOMContentLoaded',
  function(){ chrome.tabs.getSelected( null,
  function(tab){
    chrome.tabs.sendMessage( tab.id,{},
    function( response )
    {
      result = response.items[0];
      var divider = document.createElement('div');
      var paragraph = document.createElement('p');
      var link = document.createElement('a');

      link.href = result.url;
      link.innerText = result.url_title
      link.onclick = function(){
        chrome.tabs.create( {active: true, url: result.url } );
      };


      paragraph.innerText = result.content;

      divider.appendChild( link );
      divider.appendChild( paragraph );

      document.body.appendChild(divider);

    });
  });
});
