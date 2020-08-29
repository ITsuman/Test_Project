
let items;
// let filteredItem = [];
let filteredItemsByColor = [];
let filteredItemsByPrice = [];
window.addEventListener('load', () => {
    getAllItems('');
    document.getElementById('collection').addEventListener('click', () => {
        if(document.getElementById('panel1').style.display == "block"){
            document.getElementById('panel1').style.display ="none"
        }else{
            document.getElementById('panel1').style.display ="block"
        }
    });


    document.getElementById('color').addEventListener('click', () => {
        if(document.getElementById('panel2').style.display == "block"){
            document.getElementById('panel2').style.display ="none"
        }else{
            document.getElementById('panel2').style.display ="block"
        }
    });


    document.getElementById('price').addEventListener('click', () => {
        if(document.getElementById('panel3').style.display == "block"){
            document.getElementById('panel3').style.display ="none"
        }else{
            document.getElementById('panel3').style.display ="block"
        }
    });

    document.getElementById('item_type').addEventListener('keyup',  () => {
            let key = document.getElementById('item_type').value
            getAllItems(key);

    });

   

    document.getElementsByClassName('slider')[0].addEventListener('change', () => {
        let filteredItem = [];
        if(filteredItemsByColor.length == 0) {
            items.item.forEach(element => {
                if(element.price < document.getElementsByClassName('slider')[0].value) {
                   console.log(element)
                    filteredItem.push(element)
                }
            });
        }else {
            filteredItemsByColor.forEach(element => {
                if(element.price < document.getElementsByClassName('slider')[0].value) {
                   console.log(element)
                    filteredItem.push(element)
                }
            });
        }
        filteredItemsByPrice = filteredItem;
        renderResult(filteredItem);
    })
    
});
    filterItemByColor = (item) => {
        newArray = [];
        if(filteredItemsByPrice.length == 0) {
            items.item.forEach((e) => {
                console.log(e);
                if( document.getElementById(e.color).checked ) {
                    newArray.push(e);
                }
            })
        }else {
            filteredItemsByPrice.forEach((e) => {
                console.log(e);
                if( document.getElementById(e.color).checked ) {
                    newArray.push(e);
                }
            })
        }
    filteredItemsByColor = newArray;
    renderResult(newArray);
}



getAllItems = (key) => {
    getItem(key)
        .then((response) =>  response.json())
        .then(data => {
            items = data
            console.log(items);
            renderResult(items.item);
            });

}

renderResult =  (res) => {
    let el = document.getElementsByClassName('card');
    console.log(el.length);
    if(el.length > 0) {
        while(el.length > 0) {
            el[0].remove();
         }
    }
    for(let x = 0; x < res.length; x++) {
        let mark = `
            <div id="spl" class="card">
                <img src="${res[x].img}" alt="Avatar" style="width:100%; height: 150px;">
                <div class="result" style="display:grid">
                    <div style="display: inline-flex; flex-grow: 1;">
                        <p style="margin-block-start: 0px;"><b>${res[x].colection}</b></p> 
                        <span style="flex: 1"></span>
                        <p style="margin-block-start: 0px;">$ ${res[x].price}</p>
                    </div>
                    <div style="display: inline-flex; flex-grow: 1;">
                        <span>rating</span> 
                        <span style="flex: 1"></span>
                        <button class="add-to-cart"><i class='fas fa-cart-arrow-down'></i></button>
                    </div>
                </div>
            </div>
        `
        document.getElementById('result').insertAdjacentHTML('afterbegin',mark)

    }
}