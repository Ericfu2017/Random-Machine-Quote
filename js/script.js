/*
$(document).ready(function(){
        
    function getQuote() {
        $.ajax( {
           
            url: 'http://quotes.stormconsultancy.co.uk/random.json',
                dataType: 'json',
                success: function (response) {
                    console.log('success', response);
                    quote = response.quote;
                    $('#single-quote').text('"' + quote +   '"');
                    if (response.author) {
                        $('#author').text('- ' + response.author);
                    } else {
                        $('#author').text('- unkown');
                    }
                }
                
          })
        }
    getQuote();
    

});

*/

function mycallback(data) {
    console.log(data);
   $('#single-quote').html(data[0].content);
   $('#author').text("-- " + data[0].title)
}

$(document).ready(function(){
    
    function getQuote(){
       
        $.ajax ({
            url: 'http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&_jsonp=mycallback', 
            dataType: 'jsonp'
        }) 

    
    };

    getQuote();
    

})









    

