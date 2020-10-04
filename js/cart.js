var articlesArray = [ ];

function showArticles(array){

    let htmlContentToAppend = "";
    for(let i = 0; i < array.articles.length; i++){
        let article = array.articles[i];

        htmlContentToAppend += `
          <tr>
            <td style="width:10%"><img width="80%" src="` + article.src + `"></td>
            <td>`+ article.name +`</td>
            <td>` + article.currency + " " + article.unitCost + `</td>
            <td>` + article.count + `</td>
            <td style="width:8%">` + article.count*article.unitCost + `</td>
          </tr>
        `
        document.getElementById("articles-container").innerHTML = htmlContentToAppend;
    }
}

//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function(e){
    getJSONData("https://japdevdep.github.io/ecommerce-api/cart/654.json").then(function(resultObj){
        if (resultObj.status === "ok")
        {
            articlesArray = resultObj.data;
            //Muestro los artículos ordenados
            showArticles(articlesArray);
        }
    });
});