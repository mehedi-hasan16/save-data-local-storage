const addToCart = ()=>{
    const productName = document.getElementById('product-name').value;
    const productQuentity = document.getElementById('product-quentity').value;

    displayList(productName, productQuentity);

    document.getElementById('product-name').value='';
    document.getElementById('product-quentity').value='';
    setDataToLocalStorage(productName,productQuentity);
}

const displayList =(pName, pQuentity)=>{
    const listContainer = document.getElementById('list-container');
    const li = document.createElement('li');
    li.innerText=`${pName}: ${pQuentity}`;
    listContainer.appendChild(li)
}

const getDataFromLocalStorage=()=>{
    let cart ={};
    const storedCart = localStorage.getItem('cart');
    if(storedCart){
        cart = JSON.parse(storedCart)
    }
    return cart;
}


const setDataToLocalStorage=(name, quentity)=>{
    const cart = getDataFromLocalStorage();
    cart[name]= quentity;
    const stringifyCart= JSON.stringify(cart);
    localStorage.setItem('cart', stringifyCart)
}

const displayFromLocalStorage =()=>{
    const savedCart = getDataFromLocalStorage();
    for(product in savedCart){
    const quentity= savedCart[product];
    displayList (product, quentity);
    }
}


displayFromLocalStorage();