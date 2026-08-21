import './App.css'
import products from './phone-products/products.json'

function App() {


  return (
    <>

      <header>
        <div className="mega-mart-wrapper">
          <div className="mega-mart">

            <p>Welcome to worldwide Megamart!</p>

            <div className="mega-mart-actions">

              <div className="delivery">
                <img src="/assets/Icons/Location.png" alt="Location" />
                <p>
                  Deliver to <span>423651</span>
                </p>
              </div>

              <div className="order">
                <img src="/assets/Icons/Delivery-truck.png" alt="Delivery truck" />
                <p>
                  Track your order
                </p>
              </div>

              <div className="offers">
                <p>All Offers</p>
              </div>

            </div>
          </div>
        </div>

        <section className="header">

          <div className="logo-block">
            <div className="icon-box">
              <img src="/assets/Pictures/Category/Icons/Open-list.png" alt="Menu" />
            </div>
            <h1>MegaMart</h1>
          </div>

          <div className="header-actions">

            <div className="search-block">
              <img className="search-icon" src="/assets/Pictures/Category/Icons/Search.png" alt="Search" />
              <input type="text" placeholder="Search essentials, groceries and more..." />
              <img className="suggestions" src="/assets/Pictures/Category/Icons/list.png" alt="Suggestions" />
            </div>

            <div className="authentication">
              <img src="/assets/Pictures/Category/Icons/User.png" alt="User" />
              <a href="">Sign Up/Sign In</a>
            </div>

            <div className="items-in-cart">
              <img src="/assets/Pictures/Category/Icons/Cart.png" alt="Cart" />
              <a href="">Cart</a>
            </div>

          </div>
        </section>

        <section className="categories">
          <nav className="categories-nav">

            <div className="category-item">
              <button className="category-button">Groceries</button>
              <img className="category-arrow" src="/assets/Pictures/Category/Icons/Arrow - Down.png" alt="" />
            </div>

            <div className="category-item">
              <button className="category-button">Premium Fruits</button>
              <img className="category-arrow" src="/assets/Pictures/Category/Icons/Arrow - Down.png" alt="" />
            </div>

            <div className="category-item">
              <button className="category-button">Home & Kitchen</button>
              <img className="category-arrow" src="/assets/Pictures/Category/Icons/Arrow - Down.png" alt="" />
            </div>

            <div className="category-item">
              <button className="category-button">Fashion</button>
              <img className="category-arrow" src="/assets/Pictures/Category/Icons/Arrow - Down.png" alt="" />
            </div>

            <div className="category-item">
              <button className="category-button">Electronics</button>
              <img className="category-arrow" src="/assets/Pictures/Category/Icons/Arrow - Down.png" alt="" />
            </div>

            <div className="category-item">
              <button className="category-button">Beauty</button>
              <img className="category-arrow" src="/assets/Pictures/Category/Icons/Arrow - Down.png" alt="" />
            </div>

            <div className="category-item">
              <button className="category-button">Home Improvement</button>
              <img className="category-arrow" src="/assets/Pictures/Category/Icons/Arrow - Down.png" alt="" />
            </div>

            <div className="category-item">
              <button className="category-button">Sports, Toys & Luggage</button>
              <img className="category-arrow" src="/assets/Pictures/Category/Icons/Arrow - Down.png" alt="" />
            </div>
          </nav>
        </section>
      </header>
      <main>
        <section className="hero-banner">
          <div className="hero-slide">
            <div className="hero-text">
              <h2>Best Deal Online on smart watches</h2>
              <p>SMART WEARABLE.</p>
              <p>UP to 80% OFF</p>
            </div>

            <img className="hero-product-image" src="/assets/Pictures/Category/Technology/Smart-Watch.png"
              alt="Smart Watch" />

            <img className="circle-bottom" src="/assets/Pictures/Category/Circles/Circle-DarkBlue-Bottom.png" alt="" />
            <img className="circle-top" src="/assets/Pictures/Category/Circles/Circle-DarkBlue-Top.png" alt="" />


            <button className="arrow-right">
              <img src="/assets/Pictures/Category/Icons/Arrow-Right.png" alt="" />
            </button>



            <button className="arrow-left">
              <img src="/assets/Pictures/Category/Icons/Arrow-Left.png" alt="" />
            </button>
          </div>
        </section>

        <section className="product-section">
          <div className="product-section-container">

            <div className="section-header">
              <h2 className="section-title">
                Grab the best deal on
                <span className="blue-text">Smartphones</span>
              </h2>

              <a href="" className="view-all-link">
                View All
                <img className="view-all-arrow" src="/assets/Pictures/Category/Icons/Arrow-Right.png" alt="" />
              </a>
            </div>

            <div className="product-grid">  {
              products.phones.samsung.map((product) => (

                <div className="product-card">
                  <div className="product-image-wrapper">
                    <div className="discount-badge">
                      <p>56%</p>
                      <p>OFF</p>
                    </div>

                    <img className="product-image" src={product.img}
                      alt="" />
                  </div>

                  <div className="product-info">
                    <h3>{product.model}</h3>

                    <p className="product-price">
                      ₹{product.price}
                      <span className="original-price">₹{product.oldPrice}</span>
                    </p>

                    <p className="product-saving">
                      Save - ₹{product.save}
                    </p>
                  </div>
                </div>


              ))
            }
            </div>

            <div className="product-slider">
              <button className="slider-button"></button>
              <button className="slider-button"></button>
              <button className="slider-button"></button>
              <button className="slider-button"></button>
              <button className="slider-button"></button>
              <button className="slider-button"></button>
              <button className="slider-button"></button>
            </div>
          </div>
        </section>


        <section className="top-categories-section">

          <div className="section-header">
            <h2 className="section-title">
              Shop From
              <span className="blue-text">Top Categories</span>
            </h2>

            <a href="" className="view-all-link">
              View All
              <img className="view-all-arrow" src="/assets/Pictures/Category/Icons/Arrow-Right.png" alt="" />
            </a>
          </div>

          <nav className="categories-grid">

            <a href="#" className="category-card">
              <div className="category-image-wrapper">
                <img className="category-image" src="/assets/Pictures/Category/Technology/Galaxy-S22-Ultra.png"
                  alt="" />
              </div>

              <p>Mobile</p>
            </a>

            <a href="#" className="category-card">
              <div className="category-image-wrapper">
                <img className="category-image" src="/assets/Pictures/Category/Other/Cream.png" alt="" />
              </div>

              <p>Cosmetics</p>
            </a>

            <a href="#" className="category-card">
              <div className="category-image-wrapper">
                <img className="category-image" src="/assets/Pictures/Category/Technology/Multiple-Phones.png"
                  alt="" />
              </div>

              <p>Electronics</p>
            </a>

            <a href="#" className="category-card">
              <div className="category-image-wrapper">
                <img className="category-image" src="/assets/Pictures/Category/Other/Sofa.png" alt="" />
              </div>

              <p>Furniture</p>
            </a>

            <a href="#" className="category-card">
              <div className="category-image-wrapper">
                <img className="category-image" src="/assets/Pictures/Category/Technology/Smart-Watch-Small.png"
                  alt="" />
              </div>

              <p>Watches</p>
            </a>

            <a href="#" className="category-card">
              <div className="category-image-wrapper">
                <img className="category-image" src="/assets/Pictures/Category/Other/Plant.png" alt="" />
              </div>

              <p>Decor</p>
            </a>

            <a href="#" className="category-card">
              <div className="category-image-wrapper">
                <img className="category-image" src="/assets/Pictures/Category/Other/Necklace.png" alt="" />
              </div>

              <p>Accessories</p>
            </a>

          </nav>

        </section>


        <section>

          <div className="section-header">
            <h2 className="section-title">
              Top
              <span className="blue-text"> Electronics Brands</span>
            </h2>

            <a href="" className="view-all-link">
              View All
              <img className="view-all-arrow" src="/assets/Pictures/Category/Icons/Arrow-Right.png" alt="" />
            </a>
          </div>

          <div className="phone-brands">
            <a href="#" className="brand-card apple-card">
              <div className="phone-brand apple-brand">
                IPHONE
              </div>

              <img className="brand-logo" src="/assets/Pictures/Category/Logos/Apple-logo.png" alt="apple" />

              <p>UP to 80% OFF</p>

              <img className="brand-product-image" src="/assets/Pictures/Category/Technology/Apple.png" alt="" />

              <img className="brand-background-circle" src="/assets/Pictures/Category/Circles/Black-Circle.png" alt="" />

            </a>

            <a href="#" className="brand-card realme-card">


              <div className="phone-brand realme-brand">
                REALME
              </div>

              <img className="brand-logo" src="/assets/Pictures/Category/Logos/Realme-logo.png" alt="realme" />

              <p>UP to 80% OFF</p>


              <img className="brand-product-image" src="/assets/Pictures/Category/Technology/Realme.png" alt="" />

              <img className="brand-background-circle" src="/assets/Pictures/Category/Circles/Pale-Yellow-Circle.png"
                alt="" />

            </a>

            <a href="#" className="brand-card xiaomi-card">
              <div className="phone-brand xiaomi-brand">
                XIAOMI
              </div>

              <img className="brand-logo" src="/assets/Pictures/Category/Logos/Xiaomi-logo.png" alt="xiaomi" />

              <p>UP to 80% OFF</p>


              <img className="brand-product-image" src="/assets/Pictures/Category/Technology/Xiaomi-Black.png" alt="" />

              <img className="brand-background-circle" src="/assets/Pictures/Category/Circles/Peach-Color-Circle.png"
                alt="" />
            </a>
          </div>
        </section>


        <section className="daily-essentials-section">

          <div className="section-header">
            <h2 className="section-title">
              Daily
              <span className="blue-text">Essentials</span>
            </h2>

            <a href="" className="view-all-link">
              View All
              <img className="view-all-arrow" src="/assets/Pictures/Category/Icons/Arrow-Right.png" alt="" />
            </a>
          </div>

          <div className="essentials-grid">

            <a href="#" className="essential-card">
              <div className="essential-image-wrapper">
                <img className="essential-image" src="/assets/Pictures/Category/Food/products.png" alt="" />
              </div>
              <h3 className="essential-title">Daily Essentials</h3>
              <p className="essential-offer">UP to 50% OFF</p>
            </a>

            <a href="#" className="essential-card">
              <div className="essential-image-wrapper">
                <img className="essential-image" src="/assets/Pictures/Category/Food/grocery.png" alt="" />
              </div>
              <h3 className="essential-title">Daily Essentials</h3>
              <p className="essential-offer">UP to 50% OFF</p>
            </a>

            <a href="#" className="essential-card">
              <div className="essential-image-wrapper">
                <img className="essential-image" src="/assets/Pictures/Category/Food/fruits.png" alt="" />
              </div>
              <h3 className="essential-title">Daily Essentials</h3>
              <p className="essential-offer">UP to 50% OFF</p>
            </a>

            <a href="#" className="essential-card">
              <div className="essential-image-wrapper">
                <img className="essential-image" src="/assets/Pictures/Category/Food/strawberry.png" alt="" />
              </div>
              <h3 className="essential-title">Daily Essentials</h3>
              <p className="essential-offer">UP to 50% OFF</p>
            </a>

            <a href="#" className="essential-card">
              <div className="essential-image-wrapper">
                <img className="essential-image" src="/assets/Pictures/Category/Food/mango-fruit.png" alt="" />
              </div>
              <h3 className="essential-title">Daily Essentials</h3>
              <p className="essential-offer">UP to 50% OFF</p>
            </a>

            <a href="#" className="essential-card">
              <div className="essential-image-wrapper">
                <img className="essential-image" src="/assets/Pictures/Category/Food/cherry-fruit.png" alt="" />
              </div>
              <h3 className="essential-title">Daily Essentials</h3>
              <p className="essential-offer">UP to 50% OFF</p>
            </a>

          </div>

        </section>
      </main>

      <footer className="footer-content">

        <img className="blue-circle" src="/assets/Pictures/Category/Circles/Blue-Circle.png" alt="" />



        <div className="footer-columns">

          <div className="footer-column">
            <p className="footer-brand">MegaMart</p>
            <h2 className="footer-title">Contact Us</h2>

            <ul className="footer-contact-list">
              <li className="footer-contact-item">
                <img className="footer-icon" src="/assets/Pictures/Category/Icons/Whats-app-outlined.png" alt="" />
                <div className="footer-contact-text">
                  <p className="footer-contact-label">Whats App</p>
                  <p className="footer-contact-value">+1 202-918-2132</p>
                </div>
              </li>

              <li className="footer-contact-item">
                <img className="footer-icon" src="/assets/Pictures/Category/Icons/Call.png" alt="" />
                <div className="footer-contact-text">
                  <p className="footer-contact-label">Call Us</p>
                  <p className="footer-contact-value">+1 202-918-2132</p>
                </div>
              </li>
            </ul>

            <p className="footer-subtitle">Download App</p>

            <div className="footer-app-links">
              <a href="#" className="footer-app-link">
                <img src="/assets/Pictures/Category/Icons/App-store.png" alt="" />
              </a>
              <a href="#" className="footer-app-link">
                <img src="/assets/Pictures/Category/Icons/Google-play.png" alt="" />
              </a>
            </div>
          </div>

          <div>
            <h2 className="footer-title">Most Popular Categories</h2>

            <ul className="footer-list">
              <li>Staples</li>
              <li>Beverages</li>
              <li>Personal Care</li>
              <li>Home Care</li>
              <li>Baby Care</li>
              <li>Vegetables & Fruits</li>
              <li>Snacks & Foods</li>
              <li>Dairy & Bakery</li>
            </ul>
          </div>

          <div>
            <h2 className="footer-title">Customer Services</h2>

            <ul className="footer-list">
              <li>About Us</li>
              <li>Terms & Conditions</li>
              <li>FAQ</li>
              <li>Privacy Policy</li>
              <li>E-waste Policy</li>
              <li>Cancellation & Return Policy</li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2022 All rights reserved. Reliance Retail Ltd.</p>
        </div>
      </footer>
    </>
  )
}

export default App
