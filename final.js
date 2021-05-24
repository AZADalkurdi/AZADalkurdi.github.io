
/*
Azad Alkurdi

Final Project

Using JQuery , for fetching the news data from the Gnews API,
after receiving the data in a JSON format I parsed the data
and then displayed it in a proper form to the specified 
location using bootstrap cards. I added a search functionality
that lets the user look for a specific subject by entering
the keyword in the search box and after he clicks on the
search button, I resubmit another call to the API server with
the entered keyword and then receive a collection of data that
is related to that search genre.
*/

"use strict";

function showData(data){
   //output  
    let output = ""
    // give the error if there is any
    if(data.error){
        output += `${data.error}`
    // give the error if there is any
    }else if(data.code){
        output += `${data.msg}`
    // the output message
    }else{
    output += `<div class="row row-cols-1 row-cols-md-3 g-6">`
    // for loop to make 6 card
    for (let i = 0; i< 6; i++){
     
        output += `<div class="col">
         <div class="card">
        <img src="${data.articles[i].image}" class="card-img-top" alt="..." width="100" height="400">
        <div class="card-body">
        <h5 class="card-title">${data.articles[i].title}</h5>
          <p class="card-text">${data.articles[i].description}</p>
          <p class="card-text"><small class="text-muted"><a href="${data.articles[i].url}" class="stretched-link">Read more</a></small></p>
          <p class="card-text"><small class="text-muted"></small>${data.articles[i].source.name}</p>
        </div>
      </div>
      </div>`
            }
            output += `</div>`

   
}
  console.log(data)
  // display result on the html page
  $('#result').html(output);
}

$(document).ready( () => {

    // url from the GNEWS for top headlines
    let url = `https://gnews.io/api/v4/top-headlines?country=us&lang=en&token=dd877e1f8e5143f07ee00e2de2541db2`

    // json
    fetch(url)
    .then(response => response.json())
    //.then(json => console.log(json))
    .then(json => showData(json))
    .catch( e => console.log(e.message))

    // what to do when click the butten
    $("#add_task").click( () => {

        // take the value of checked radio buttne
        let radioValue = $("input[name='exampleRadios']:checked").val();
        console.log(radioValue)
        // user input keyword
        let search = $("#search").val()
        console.log(search)
        // if there is no value in search box 
        if(search == ""){
        // url from the GNEWS with only change value is radioValue
            url = `https://gnews.io/api/v4/search?lang=${radioValue}&token=dd877e1f8e5143f07ee00e2de2541db2`
        // if there is a value in search box 
        }else{
            // url from the GNEWS with two change value is radioValue and keyword
            url = `https://gnews.io/api/v4/search?lang=${radioValue}&q=${search}&token=dd877e1f8e5143f07ee00e2de2541db2`
        }
        // url from the weather page
        

        // json
        fetch(url)
        .then(response => response.json())
        //.then(json => console.log(json))
        .then(json => showData(json))
        .catch( e => console.log(e.message))



    })
});
