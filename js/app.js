// واردکردن تابع fetchData از فایل httpReq.js
import { fetchData } from "../utils/httpReq.js";
// واردکردن کلاس Products از فایل Products.js
import Products from "../models/Products.js";
import Cart from "../models/Cart.js";
// یافتن عنصری که ID آن products است و ذخیره کردن آن
const productsNode = document.getElementById("products");
const cartListNode = document.getElementById("cart-list");
const totalPriceNode = document
  .getElementById("total-price")
  .querySelector("span");

/**
 * Renders products by fetching data and displaying them on the page.
 * @async
 * @function render
 * @returns {Promise<void>} A promise that resolves when products are rendered
 */
// تعریف یک تابع غیرهمزمان برای نمایش محصولات
async function render() {
  // دریافت اطلاعات محصولات از سرور
  const productsData = await fetchData();
  // ایجاد یک شی جدید از کلاس Products با نود و داده‌ها
  const cartInstant = new Cart(cartListNode, totalPriceNode);
  const productInstant = new Products(productsNode, productsData, cartInstant);
  // فراخوانی متد showProducts برای نمایش محصولات
  productInstant.showProducts();
  // چاپ شی در کنسول برای بررسی
}
// اضافه کردن شنونده: وقتی صفحه بارگذاری شد، تابع render را اجرا کن
document.addEventListener("DOMContentLoaded", render);

//پارادایم یعنی چه؟
