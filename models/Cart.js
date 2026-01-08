

class Cart {
    constructor(parent, price) {
        this.parent = parent;
        this.price = price;
        this.products = [];
        this.toShow = [];
        this.parent.addEventListener("click", this)
    }
    
    showProducts() {
        this.toShow = [...new Set(this.products)];
        this.parent.innerHTML = "";
        // حلقه زدن روی هر محصول و ایجاد کارت برای آن
        this.toShow.forEach((product) => {
            const qty = this.products.filter((p) => p.id === product.id).length;
            this.createCard(product, qty);
        });
        this.calTotalPrice()
    }

    createCard(data, qty) {
        const cardEle = document.createElement("div");
        const ImgEle = this.productImg(data);
        const infoEle = this.productInfo(data);
        const controlEle = this.productControlELe(data, qty);

        cardEle.innerHTML = ImgEle;
        cardEle.innerHTML += infoEle;
        cardEle.innerHTML += controlEle;

        this.parent.appendChild(cardEle)
    }
    productImg(data){
        const { image, alt } = data;
        const imgJSX = `<img alt=${alt} src=${image} />`;
        return imgJSX;
    }
    productInfo(data){
        const { name, price } = data;
        const infoJSX = `
    <div>
    <h4>${name}</h4>
    <p> $ ${price}</p>
  </div>
    `;
        return infoJSX;
    }
    productControlELe(data, qty) {
        const { id } = data;
        const controlJSX = `
     <div>
    <div>
    <button data-id = ${id}>-</button>
    <span>${qty}</span>
    <button data-id = ${id}>+</button>
    </div>
    <button data-id = ${id}>Remove</button>
</div>`;
return controlJSX
    }
    handleEvent(event){
       const  tagName = event.target.tagName
       const id = event.target.dataset.id
       const type = event.target.innerText
       if (tagName !== "BUTTON") return
       switch (type) {
        case "+":
            this.increase(id)
            break;
       
        case "-" :
        this.decrease(id)
            break;

        case "Remove" :
        this.remove(id)
            break
       }
    }
    increase(id){
        const product = this.products.find( (p) => p.id === +id)
        this.products.push(product)
        this.showProducts()
    }
    decrease(id){
        const index = this.products.findIndex( (p) => p.id == id)
        this.products.splice(index ,1)
        this.showProducts()
    }
    remove(id){
        const newproduct = this.products.filter( (p) => p.id !== +id)
        this.products = newproduct
        this.showProducts()

    }
    calTotalPrice(){
        const total = this.products.reduce((acc , cur) => (acc += cur.price) ,0)
        this.price.innerText = "$" + total
    }
}

export default Cart;
/**
 * کلاس Cart مسئول مدیریت عملکردهای سبد خرید شامل نمایش محصولات،
 * کنترل تعداد و محاسبه قیمت کل است.
 * 
 * @class Cart
 * @param {HTMLElement} parent - عنصر DOM جایی که آیتم‌های سبد خرید رندر می‌شوند
 * @param {HTMLElement} price - عنصر DOM برای نمایش قیمت کل
 * 
 * @property {HTMLElement} parent - عنصر کانتینر برای آیتم‌های سبد خرید
 * @property {HTMLElement} price - عنصر نمایش قیمت کل
 * @property {Array<Object>} products - آرایه اشیاء محصولات در سبد خرید
 * @property {Array<Object>} toShow - آرایه محصولات منحصر به فرد برای نمایش
 * 
 * @method showProducts() - رندر کردن محصولات منحصر به فرد و بروزرسانی قیمت کل
 * @method createCard(data, qty) - ایجاد کارت محصول
 * @method productImg(data) - تولید رشته HTML برای تصویر
 * @method productInfo(data) - تولید رشته HTML برای اطلاعات محصول
 * @method productControlELe(data, qty) - تولید رشته HTML برای دکمه‌های کنترل
 * @method handleEvent(event) - مدیریت رویدادهای کلیک با تفویض رویداد
 * @method increase(id) - افزایش تعداد محصول با اضافه کردن یک نمونه دیگر
 * @method decrease(id) - کاهش تعداد محصول با حذف یک نمونه
 * @method remove(id) - حذف تمام نمونه‌های محصول از سبد خرید
 * @method calTotalPrice() - محاسبه و بروزرسانی قیمت کل سبد خرید
 */