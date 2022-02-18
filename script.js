console.log("hello babies")
// 'https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=e8a9af54d7234a9eb52ae8a33681770a'


// e8a9af54d7234a9eb52ae8a33681770a
const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://gnews.io/api/v4/top-headlines?&country=in&lang=en&token=a1d13eb31b7504d895e717156227568e', true);
xhr.onload = function () {
    let na = document.getElementById('newsAccordion')
    if (this.status === 200) {
        let json = JSON.parse(this.responseText);
        let articles = json.articles;
        console.log(articles)
        let str = "";

        articles.forEach(function (article, index) {
            console.log(article.title, article.content)
            str += `<div class="card">
            <div class="card-header" id="heading${index}">
                <h2 class="mb-0">
                <button class="btn btn-link show" type="button" data-toggle="collapse" data-target="#collapse${index}"
                    aria-expanded="false" aria-controls="collapse${index}">
                    <b>Breaking News ${index+1} :</b> ${article.title}
                   
                </button>
                </h2>
            </div>

            <div id="collapse${index}" class="collapsed" aria-labelledby="heading${index}" data-parent="#newsAccordion">
                <div class="card-body"> ${article.content}. <a href="${article.url}" target="_blank" >Read more here</a>  </div>
            </div>
        </div>
          <br>`
          ;


        })
        na.innerHTML = str;
    }
    else {
        console.log("Error")
    }
}
xhr.send();
