/**

 */
// کلاس Products - برای مدیریت و نمایش کارت‌های محصول
class Products {
    // سازنده - هنگام ایجاد شیء جدید Products اجرا می‌شود
    // parent = جعبه‌ای که محصولات در آن قرار می‌گیرند، products = لیست اشیاء
    constructor(parent, products) {
        this.parent = parent  // ذخیره کردن عنصر حاویه
        this.products = products  // ذخیره کردن لیست محصولات
    }

    // متد showProducts - تمام محصولات را نمایش می‌دهد
    showProducts() {
        // حلقه زدن روی هر محصول و ایجاد کارت برای آن
        this.products.forEach((product) => this.createCard(product));
    }

    // متد createCard - یک کارت محصول را ایجاد می‌کند
    createCard(data) {
        // ایجاد یک جعبه div برای نگهداری کارت محصول
        const cardEle = document.createElement("div")
        cardEle.className = "card"

        // ایجاد عنصر تصویر
        const imgEL = this.productImg(data)
        const infoEl = this.productInfo(data)
         cardEle.innerHTML = imgEL
         cardEle.innerHTML += infoEl
        
      
        // ایجاد بخش اطلاعات
      

      
       
        // اضافه کردن کارت کامل به حاویه والد
        this.parent.appendChild(cardEle)

    }
    
    productImg(data){
          const {image, alt} = data
          const img = `<img src="${image}" alt="${alt}"/>`
         // اضافه کردن تصویر به کارت 
        return img 
    }
    productInfo (data){
        const {id ,name , price} = data
        const infoJSX = `
            <div id="info">
                <h3>${name}</h3>
                <div id= "pric">
                    <span> $ ${price}</span>
                    <button data-id="${id}">+</button>
                </div>
            </div>
        `
        return infoJSX
    }

}

export default Products

