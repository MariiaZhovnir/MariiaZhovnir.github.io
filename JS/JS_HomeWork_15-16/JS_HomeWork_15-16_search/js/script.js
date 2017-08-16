(function() {
'use strict';
    var endpoint = 'https://pixabay.com/api/',
        mykey = '?key=6112363-31d691355408a0980d4f95bf5',
        //  request = '&q=encodeURIComponent(request)',
        perPage = '&per_page=10',
        imageType = '&image_type=photo',
        orientation = '&orientation=horizontal',
        parent = document.getElementById('container'),
        tmpl = document.getElementById('template').textContent;

    function getPictures() {

        var request = document.getElementsByClassName('input')[0].value;
        console.log('User\'s request = ', request);
        var apiUrl = endpoint + mykey + '&q='+ encodeURIComponent(request) + perPage + imageType + orientation;


        fetch(apiUrl)
            .then(function(response){
                console.log(response);
                if (response.ok){
                    return response.json();
                }
                throw new Error('ERROR fetching data!');
            })
            .then(function(data){
                console.log(data);
                var compiled = _.template(tmpl);
                parent.innerHTML = compiled(data);
            })
            .catch(function(error){
                console.log('Error: ', error);
            });

    }

    document.getElementsByClassName('button')[0].addEventListener("click", getPictures);
    document.getElementsByClassName('input')[0].addEventListener("keypress", function(event){
            if(event.keyCode === 13){getPictures();}
        }
    );

})();