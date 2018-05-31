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
    var backgroudImgUrl = "/img/water.jpg";
    $('body').append('<img class="background-img" src="' + backgroudImgUrl + '">')    
    getQuote();
    $('#next').on('click', function(){
        getQuote();
    })
    
    

});
*/


function mycallback(data) {
    console.log(data);
    quote = data[0].content;
    author = data[0].title;
   $('#single-quote').html(quote); 
   $('#author').text("-- " + author);
   text = $('#single-quote').text();
   console.log(text);
}

$(document).ready(function(){
    
    function getQuote(){
       
        $.ajax ({
            url: 'http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&_jsonp=mycallback', 
            dataType: 'jsonp'
        }) 

    }
    var backgroudImgUrl = "/img/water.jpg";
    $('body').append('<img class="background-img" src="' + backgroudImgUrl + '">');
    getQuote();  
    $('#next').on('click', function(event){
        event.preventDefault()
        getQuote();
    });
    $('#share').on('click', function(event){
        event.preventDefault();
        window.open('https://twitter.com/intent/tweet?text=' + encodeURIComponent(text + ' -- ' + author));
    });
    

})









    

