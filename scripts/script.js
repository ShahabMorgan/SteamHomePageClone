const productBody = document.querySelectorAll('#products-js');
const productTitle = document.querySelectorAll('#product-title-js');
const productprice = document.querySelectorAll('#product-price-js');
const productImg = document.querySelectorAll('#js-images-prewive');
const productTypes = document.querySelectorAll('#js-prewvie-types');
const previewSection = document.querySelector('#previewSection-js');
const previewTitle = document.querySelector('.product-prewvie-title');
const finalPoint = document.querySelector('#js-final-point');


let defultHovred = true;


const reviewStyles = {
    ['Mostly Negative']:'#c35c2c'
    ,
    ['Mixed']:'#B9A074'
    ,
    ['Positive']:'#66C0F4'
    ,
    ['Veary Positive']:'#66C0F4'
    ,
    ['Overwhelmingly Positive']:'#66C0F4'
}
const productList = [
    {
        name :"Call of Duty®" 
        ,
        userReview:"Mostly Negative"
        ,
        types:['FPS','Multiplayer','Shooter','Action']
        ,
        image0:"./assets/call of duty1.jpg"
        ,
        
        image1:"./assets/call of duty2.jpg"
        ,
        
        image2:"./assets/call of duty3.jpg"
        ,
        
        image3:"./assets/call of duty4.jpg"
    }
    ,
    {
        name :"PUBG: BATTLEGROUNDS" 
        ,
        userReview:"Positive"
        ,
        types:['Survival', 'Shooter', 'Battle Royale', 'Multiplayer']
        ,
        image0:"./assets/battelgrounds1.jpg"
        ,
                
        image1:"./assets/battelgrounds2.jpg"
        ,
                
        image2:"./assets/battelgrounds3.jpg"
        ,
                
        image3:"./assets/battelgrounds4.jpg"
    }
    ,   {
        name :"Counter-Strike 2" 
        ,
        userReview:"Mixed"
        ,
        types:['FPS', 'Shooter', 'Multiplayer', 'Competitive']
        ,
        image0:"./assets/counter strike1.jpg"
        ,
                
        image1:"./assets/counter strike2.jpg"
        ,
                
        image2:"./assets/counter strike3.jpg"
        ,
                
        image3:"./assets/counter strike4.jpg"
    }
    ,   {
        name :"Farming Simulator 22" 
        ,
        userReview:"Overwhelmingly Positive"
        ,
        types:['Advanture','Story Rich','Visual Novel','Action']
        ,
        image0:"./assets/farming simulator1.jpg"
        ,
                
        image1:"./assets/farming simulator2.jpg"
        ,
                
        image2:"./assets/farming simulator3.jpg"
        , 
        image3:"./assets/farming simulator4.jpg"
    }
]



changePreview(productTitle[0])

productBody.forEach((v,i)=>{
    
    v.addEventListener('mouseover',()=>{
        productBody.forEach((v,i) => {
            
           v.classList.remove('product-hovred');
           productTitle[i].classList.remove('focused');
           productprice[i].classList.remove('focused');

        });


           v.classList.add('product-hovred');
           productTitle[i].classList.add('focused');
           productprice[i].classList.add('focused');
           changePreview(productTitle[i])

    })});


    function changePreview(gameName)
    {   
        productList.forEach((v,i) => {
            if(v.name===gameName.innerHTML)
            {
                previewTitle.innerHTML=v.name;
                finalPoint.innerHTML=v.userReview;
                finalPoint.style.cssText=`color:${reviewStyles[v.userReview]}`;
                productImg.forEach((s,x) => {
                s.src=v[`image${x}`];
               });

               productTypes.forEach((s,x)=>{
                s.innerHTML = v.types[x];
               });

            }
        });

    }




    
