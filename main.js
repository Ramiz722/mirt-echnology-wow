const iPhone = document.querySelector(".iPhone")

const Samsung = document.querySelector(".Samsung")

const vivo = document.querySelector(".vivo")

const realme = document.querySelector(".realme")
iPhone.addEventListener("click", function(event)
{
    let clickTarget = event.target;
    let activeButton  = iPhone.querySelector('.active');
    let priceItem = iPhone.querySelector('.price');
    let currentPrice;
    let activeButtonColor = iPhone.querySelector('.active-border');
    if (clickTarget.classList.contains("color-btn") && !clickTarget.classList.contains("active-border"))
    {
    clickTarget.classList.add("active-border");
    activeButtonColor.classList.remove("active-border")    
    }
    if (clickTarget.classList.contains("btn") && !clickTarget.classList.contains("active"))
        {
        clickTarget.classList.add("active");
        activeButton.classList.remove("active")
        currentPrice = clickTarget.getAttribute("data-size")
        if (currentPrice === "medium")
        {
            priceItem.textContent = "Цена 80 000р" 
        }
        if (currentPrice === "large")
            {
                priceItem.textContent = "Цена 100 000р" 
            }       
        }
});

Samsung.addEventListener("click", function(event)
{
    let clickTarget = event.target;
    let activeButton  = Samsung.querySelector('.active');
    let priceItem = Samsung.querySelector('.price');
    let currentPrice;
    let activeButtonColor = Samsung.querySelector('.active-border');
    if (clickTarget.classList.contains("color-btn") && !clickTarget.classList.contains("active-border"))
    {
    clickTarget.classList.add("active-border");
    activeButtonColor.classList.remove("active-border")    
    }
    if (clickTarget.classList.contains("btn") && !clickTarget.classList.contains("active"))
        {
        clickTarget.classList.add("active");
        activeButton.classList.remove("active")
        currentPrice = clickTarget.getAttribute("data-size")
        if (currentPrice === "medium")
        {
            priceItem.textContent = "Цена 40 000р" 
        }
        if (currentPrice === "large")
            {
                priceItem.textContent = "Цена 80 000р" 
            }       
        }
});
vivo.addEventListener("click", function(event)
{
    let clickTarget = event.target;
    let activeButton  = vivo.querySelector('.active');
    let priceItem = vivo.querySelector('.price');
    let currentPrice;
    let activeButtonColor = vivo.querySelector('.active-border');
    if (clickTarget.classList.contains("color-btn") && !clickTarget.classList.contains("active-border"))
    {
    clickTarget.classList.add("active-border");
    activeButtonColor.classList.remove("active-border")    
    }
    if (clickTarget.classList.contains("btn") && !clickTarget.classList.contains("active"))
        {
        clickTarget.classList.add("active");
        activeButton.classList.remove("active")
        currentPrice = clickTarget.getAttribute("data-size")
        if (currentPrice === "medium")
        {
            priceItem.textContent = "Цена 15 242р" 
        }
        if (currentPrice === "large")
            {
                priceItem.textContent = "Цена 20 528р" 
            }       
        }
});
realme.addEventListener("click", function(event)
{
    let clickTarget = event.target;
    let activeButton  = realme.querySelector('.active');
    let priceItem = realme.querySelector('.price');
    let currentPrice;
    let activeButtonColor = realme.querySelector('.active-border');
    if (clickTarget.classList.contains("color-btn") && !clickTarget.classList.contains("active-border"))
    {
    clickTarget.classList.add("active-border");
    activeButtonColor.classList.remove("active-border")    
    }
    if (clickTarget.classList.contains("btn") && !clickTarget.classList.contains("active"))
        {
        clickTarget.classList.add("active");
        activeButton.classList.remove("active")
        currentPrice = clickTarget.getAttribute("data-size")
        if (currentPrice === "medium")
        {
            priceItem.textContent = "Цена 12 490р" 
        }
        if (currentPrice === "large")
            {
                priceItem.textContent = "Цена 17 850р" 
            }       
        }
});
