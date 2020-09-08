var currentProductsArray = [];
var currentCommentsArray = [];
var relatedProductsArray = [];
var product = {};

function showImages(array) {
	let htmlContentToAppend = "";

	for (let i = 0; i < array.length; i++) {
		let imageSrc = array[i];

		htmlContentToAppend +=
        `
        <div class="col-lg-3 col-md-4 col-6">
            <div class="d-block mb-4 h-100">
                <img class="img-fluid img-thumbnail" src="` + imageSrc + `" alt="">
            </div>
        </div> `;

		document.getElementById("productImages").innerHTML = htmlContentToAppend;
	}
}

function showComments(array){

    let htmlContentToAppend = "";

    for(let i = 0; i < array.length; i++){
        let comment = array[i];   

            htmlContentToAppend += `
            <div class="list-group-item list-group-item-action">
                <div class="row">
                    <div class="col-3">
                    <i class="fas fa-user"></i>`+ " " + comment.user +`
                    </div>
                    <div class="col">
                        <div class="d-flex w-100 justify-content-between">
                            <h5 class="mb-1"><span class="fa fa-star checked">`+ comment.score +`</h5>
                            <small class="text-muted">` + comment.dateTime + ` </small>
                        </div>
                        <p class="mb-1">` + comment.description + `</p>
                    </div>
                </div>
            </div>
            `
        document.getElementById("comments-container").innerHTML = htmlContentToAppend;
    }
}

function showRelatedProducts(array){

    let htmlContentToAppend = "";
        let relatedProduct = array[1];  
        let relatedProduct2 = array[3]; 

            htmlContentToAppend += `
            <div style="display:flex;">
            <div style="width: 250px; margin-right: 0.5rem">
                ` + relatedProduct.name + `<br> <img class="img-fluid img-thumbnail" width="100%" src="` + relatedProduct.imgSrc + `" alt=""></img>
            </div>
            <div style="width: 250px">
                ` + relatedProduct2.name + `<br> <img class="img-fluid img-thumbnail" width="100%" src="` + relatedProduct2.imgSrc + `" alt=""></img>
            </div>
            </div>
            `
        document.getElementById("relatedProducts").innerHTML = htmlContentToAppend;
}

//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function(e){
    getJSONData(PRODUCT_INFO_URL).then(function(resultObj){
        if (resultObj.status === "ok")
        {product = resultObj.data;
            document.getElementById("productName").innerHTML = product.name;
            document.getElementById("productDesc").innerHTML = product.description;
            document.getElementById("productCost").innerHTML = product.currency + " " + product.cost;
            document.getElementById("productSoldCount").innerHTML = product.soldCount;
            document.getElementById("productCategory").innerHTML = product.category;
            showImages(product.images);
        }
    });
});

document.addEventListener("DOMContentLoaded", function(e){
    getJSONData(PRODUCT_INFO_COMMENTS_URL).then(function(resultObj){
        if (resultObj.status === "ok")
        {
            currentCommentsArray = resultObj.data;
            showComments(currentCommentsArray);
        }
    });
});

document.addEventListener("DOMContentLoaded", function(e){
    getJSONData(PRODUCTS_URL).then(function(resultObj){
        if (resultObj.status === "ok")
        {
            relatedProductsArray = resultObj.data;
            showRelatedProducts(relatedProductsArray);
        }
    });
});