var articlesArray = [ ];

function showArticles(array){

    let htmlContentToAppend = "";
    for(let i = 0; i < array.articles.length; i++){
        let article = array.articles[i];

        htmlContentToAppend += `
          <tr>
            <td style="width: 10%"><img width="80%" src="` + article.src + `"></td>
            <td style="width: 22%;">`+ article.name +`</td>
            <td style="width: 15%;">`+ article.currency +`</td>
            <td style="width: 15%;">`+ article.unitCost + `</td>
            <td style="width: 15%"><input style="width: 43%; border: 1px solid lightgray; border-radius:0.2rem;" type="number" value="` + article.count + `"></td>
            <td style="width: 1%">`+ article.count*article.unitCost +`</td>
          </tr>
        `
        document.getElementById("articles-container").innerHTML = htmlContentToAppend;        
        
            document.getElementsByTagName("input")[1].addEventListener("change", function(){
                document.getElementsByTagName("td")[11].textContent = +($(this).val()*article.unitCost);
            });
            
            document.getElementsByTagName("input")[0].addEventListener("change", function(){
                document.getElementsByTagName("td")[5].textContent = + $(this).val()*array.articles[0].unitCost;
            });            
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