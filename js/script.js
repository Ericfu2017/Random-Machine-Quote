
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











    

