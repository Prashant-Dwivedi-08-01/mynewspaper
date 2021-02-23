console.log("This is my index js file");

// Initialize the news api parameters
let source = 'the-times-of-india';
let apiKey = '54873d00fa0f4838862e1e6a4f6a63d4'

// Grab the news container
let newsAccordion = document.getElementById('newsAccordion');

// Create an ajax get request
const xhr = new XMLHttpRequest();
xhr.open('GET', `https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=${apiKey}`, true);
// xhr.setRequestHeader('Access-Control-Allow-Origin','*');

// What to do when response is ready
xhr.onload = function () {
    if (this.status === 200) {
        console.log("Kaam Ho gaya");
        let json = JSON.parse(this.responseText);
        let articles = json.articles;
        console.log(articles);
        console.log(articles[0].urlToImage);
        for(news of articles){

            let news_str =` <div class="newsCard">
                        <div class="headline">
                        <h4>${news.title}</h4>
                        </div>
                        <div class="image">
                            <img src="${news.urlToImage}" alt="">
                        </div>
                        <div class="link">
                        <a href="${news.url}">Link to Full Article</a>
                        </div>
                    </div>`
            let div = document.createElement('div');
            div.innerHTML = news_str;
            // console.log(div);
            document.getElementById('newsAccordion').appendChild(div);
        }
    }
    else {
        console.log("Some error occured")
    }
}

xhr.send()


