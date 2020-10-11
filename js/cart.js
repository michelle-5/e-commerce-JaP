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
            <td style="width: 15%"><input min="1" style="width: 43%; border: 1px solid lightgray; border-radius:0.2rem;" type="number" value="` + article.count + `"></td>
            <td style="width: 1%">`+ article.count*article.unitCost +`</td>
          </tr>
        `
        document.getElementById("articles-container").innerHTML = htmlContentToAppend;        
        
            document.getElementsByTagName("input")[1].addEventListener("change", function(){
                document.getElementsByTagName("td")[11].textContent = ($(this).val()*article.unitCost);
                document.getElementById("productCostText").innerHTML = "UYU " + (parseInt(document.getElementsByTagName("td")[5].textContent) + parseInt(document.getElementsByTagName("td")[11].textContent*40));

                if (document.getElementById("goldradio").checked === true){
                    document.getElementById("comissionText").innerHTML = Math.round((parseInt(document.getElementsByTagName("td")[5].textContent) + parseInt(document.getElementsByTagName("td")[11].textContent*40)) * 0.15);
                    document.getElementById("totalCostText").innerHTML = parseInt(document.getElementsByTagName("td")[5].textContent) + parseInt(document.getElementsByTagName("td")[11].textContent*40) + parseInt(document.getElementById("comissionText").textContent);
    
                }
                if (document.getElementById("premiumradio").checked === true){
                    document.getElementById("comissionText").innerHTML = Math.round((parseInt(document.getElementsByTagName("td")[5].textContent) + parseInt(document.getElementsByTagName("td")[11].textContent*40)) * 0.07);
                    document.getElementById("totalCostText").innerHTML = (parseInt(document.getElementsByTagName("td")[5].textContent) + parseInt(document.getElementsByTagName("td")[11].textContent*40)) + parseInt(document.getElementById("comissionText").textContent);
    
                }
            
                if (document.getElementById("standardradio").checked === true){
                    document.getElementById("comissionText").innerHTML = Math.round((parseInt(document.getElementsByTagName("td")[5].textContent) + parseInt(document.getElementsByTagName("td")[11].textContent*40)) * 0.05);
                    document.getElementById("totalCostText").innerHTML = (parseInt(document.getElementsByTagName("td")[5].textContent) + parseInt(document.getElementsByTagName("td")[11].textContent*40)) + parseInt(document.getElementById("comissionText").textContent);

                }

            });
            
            document.getElementsByTagName("input")[0].addEventListener("change", function(){
                document.getElementsByTagName("td")[5].textContent = $(this).val()*array.articles[0].unitCost;
                document.getElementById("productCostText").innerHTML = "UYU " + (parseInt(document.getElementsByTagName("td")[5].textContent) + parseInt(document.getElementsByTagName("td")[11].textContent*40));

                if (document.getElementById("goldradio").checked === true){
                    document.getElementById("comissionText").innerHTML = Math.round((parseInt(document.getElementsByTagName("td")[5].textContent) + parseInt(document.getElementsByTagName("td")[11].textContent*40)) * 0.15);
                    document.getElementById("totalCostText").innerHTML = (parseInt(document.getElementsByTagName("td")[5].textContent) + parseInt(document.getElementsByTagName("td")[11].textContent*40)) + parseInt(document.getElementById("comissionText").textContent);
    
                }
                if (document.getElementById("premiumradio").checked === true){
                    document.getElementById("comissionText").innerHTML = Math.round((parseInt(document.getElementsByTagName("td")[5].textContent) + parseInt(document.getElementsByTagName("td")[11].textContent*40)) * 0.07);
                    document.getElementById("totalCostText").innerHTML = (parseInt(document.getElementsByTagName("td")[5].textContent) + parseInt(document.getElementsByTagName("td")[11].textContent*40)) + parseInt(document.getElementById("comissionText").textContent);

                }
            
                if (document.getElementById("standardradio").checked === true){
                    document.getElementById("comissionText").innerHTML = Math.round((parseInt(document.getElementsByTagName("td")[5].textContent) + parseInt(document.getElementsByTagName("td")[11].textContent*40)) * 0.05);
                    document.getElementById("totalCostText").innerHTML = (parseInt(document.getElementsByTagName("td")[5].textContent) + parseInt(document.getElementsByTagName("td")[11].textContent*40)) + parseInt(document.getElementById("comissionText").textContent);
    
                }

            });     
    }
            document.getElementById("productCostText").innerHTML = "UYU " + (parseInt(document.getElementsByTagName("td")[5].textContent) + parseInt(document.getElementsByTagName("td")[11].textContent*40));
        
let envío = `<div class="d-block my-3">
<div class="custom-control custom-radio">
  <input id="goldradio" name="publicationType" type="radio" class="custom-control-input" checked="" required="">
  <label class="custom-control-label" for="goldradio">Premium: 2 a 5 días (15%)</label>
</div>
<div class="custom-control custom-radio">
  <input id="premiumradio" name="publicationType" type="radio" class="custom-control-input" required="">
  <label class="custom-control-label" for="premiumradio">Express: 5 a 8 días (7%)</label>
</div>
<div class="custom-control custom-radio">
  <input id="standardradio" name="publicationType" type="radio" class="custom-control-input" required="">
  <label class="custom-control-label" for="standardradio">Estándar: 12 a 15 días (5%)</label>
</div>
</div>`

document.getElementById("envío").innerHTML = envío;

document.getElementById("goldradio").addEventListener("change", function(){
        document.getElementById("comissionText").innerHTML = Math.round((parseInt(document.getElementsByTagName("td")[5].textContent) + parseInt(document.getElementsByTagName("td")[11].textContent*40)) * 0.15);
        document.getElementById("totalCostText").innerHTML = (parseInt(document.getElementsByTagName("td")[5].textContent) + parseInt(document.getElementsByTagName("td")[11].textContent*40)) + parseInt(document.getElementById("comissionText").textContent);
    });
document.getElementById("premiumradio").addEventListener("change", function(){
    document.getElementById("comissionText").innerHTML = Math.round((parseInt(document.getElementsByTagName("td")[5].textContent) + parseInt(document.getElementsByTagName("td")[11].textContent*40)) * 0.07);
    document.getElementById("totalCostText").innerHTML = (parseInt(document.getElementsByTagName("td")[5].textContent) + parseInt(document.getElementsByTagName("td")[11].textContent*40)) + parseInt(document.getElementById("comissionText").textContent);

});

document.getElementById("standardradio").addEventListener("change", function(){
    document.getElementById("comissionText").innerHTML = Math.round((parseInt(document.getElementsByTagName("td")[5].textContent) + parseInt(document.getElementsByTagName("td")[11].textContent*40)) * 0.05);
    document.getElementById("totalCostText").innerHTML = (parseInt(document.getElementsByTagName("td")[5].textContent) + parseInt(document.getElementsByTagName("td")[11].textContent*40)) + parseInt(document.getElementById("comissionText").textContent);

});

if (document.getElementById("goldradio").checked === true){
    document.getElementById("comissionText").innerHTML = Math.round((parseInt(document.getElementsByTagName("td")[5].textContent) + parseInt(document.getElementsByTagName("td")[11].textContent*40)) * 0.15);
    document.getElementById("totalCostText").innerHTML = (parseInt(document.getElementsByTagName("td")[5].textContent) + parseInt(document.getElementsByTagName("td")[11].textContent*40)) + parseInt(document.getElementById("comissionText").textContent);

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