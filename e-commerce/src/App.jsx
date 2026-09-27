import './App.css'
import products from './phone-products/products.json'
import { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'

const categoryAssets = '/assets/pictures/category'

function App() {
  const numberOfSlides = 7
  const heroBannerSlides = 3

  const [swiper, setSwiper] = useState(null)
  const [activeIndex, setActiveIndex] = useState(0)
  const [heroSwiper, setHeroSwiper] = useState(null)

  return (
    <>
      <header>
        <div className="mega-mart-wrapper">
          <div className="mega-mart">
            <p>Welcome to worldwide Megamart!</p>

            <div className="mega-mart-actions">
              <div className="delivery">
                <img src={`${categoryAssets}/icons/location.png`} alt="Location" />
                <p>
                  Deliver to <span>423651</span>
                </p>
              </div>

              <div className="order">
                <img src={`${categoryAssets}/icons/delivery-truck.png`} alt="Delivery truck" />
                <p>Track your order</p>
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
              <img src={`${categoryAssets}/icons/open-list.png`} alt="Menu" />
            </div>
            <h1>MegaMart</h1>
          </div>

          <div className="header-actions">
            <div className="search-block">
              <img className="search-icon" src={`${categoryAssets}/icons/search.png`} alt="Search" />
              <input type="text" placeholder="Search essentials, groceries and more..." />
              <img className="suggestions" src={`${categoryAssets}/icons/list.png`} alt="Suggestions" />
            </div>

            <div className="authentication">
              <img src={`${categoryAssets}/icons/user.png`} alt="User" />
              <a href="">Sign Up/Sign In</a>
            </div>

            <div className="items-in-cart">
              <img src={`${categoryAssets}/icons/cart.png`} alt="Cart" />
              <a href="">Cart</a>
            </div>
          </div>
        </section>

        <section className="categories">
          <nav className="categories-nav">
            {[
              'Groceries',
              'Premium Fruits',
              'Home & Kitchen',
              'Fashion',
              'Electronics',
              'Beauty',
              'Home Improvement',
              'Sports, Toys & Luggage',
            ].map((label) => (
              <div className="category-item" key={label}>
                <button className="category-button">{label}</button>
                <img className="category-arrow" src={`${categoryAssets}/icons/arrow-down.png`} alt="" />
              </div>
            ))}
          </nav>
        </section>
      </header>

      <main>
        <section className="hero-banner-section">
          <div className="hero-banner-wrapper">
            <Swiper className="hero-banner" onSwiper={setHeroSwiper} loop modules={[Autoplay]} autoplay={{ delay: 2000 }}>
              {Array.from({ length: heroBannerSlides }).map((_, index) => (
                <SwiperSlide className="hero-slide" key={index}>
                  <div className="hero-text">
                    <h2>Best Deal Online on smart watches</h2>
                    <p>SMART WEARABLE.</p>
                    <p>UP to 80% OFF</p>
                  </div>

                  <img className="hero-product-image" src={`${categoryAssets}/technology/smart-watch.png`} alt="Smart Watch" />
                  <img className="circle-bottom" src={`${categoryAssets}/circles/circle-darkblue-bottom.png`} alt="" />
                  <img className="circle-top" src={`${categoryAssets}/circles/circle-darkblue-top.png`} alt="" />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <button className="arrow-right" onClick={() => heroSwiper?.slideNext()}>
            <img src={`${categoryAssets}/icons/arrow-right.png`} alt="" />
          </button>

          <button className="arrow-left" onClick={() => heroSwiper?.slidePrev()}>
            <img src={`${categoryAssets}/icons/arrow-left.png`} alt="" />
          </button>
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
                <img className="view-all-arrow" src={`${categoryAssets}/icons/arrow-right.png`} alt="" />
              </a>
            </div>

            <div className="product-container">
              <Swiper
                className="product-grid"
                slidesPerView={1}
                autoplay={{ delay: 2000 }}
                onSwiper={setSwiper}
                modules={[Autoplay]}
                onSlideChange={(swiperInstance) => {
                  setActiveIndex(swiperInstance.activeIndex)
                }}
              >
                {Array.from({ length: numberOfSlides }).map((_, index) => (
                  <SwiperSlide key={index} className="product-slide">
                    {products.phones.samsung.map((product) => (
                      <div className="product-card-wrapper" key={product.model}>
                        <div className="product-card">
                          <div className="product-image-wrapper">
                            <div className="discount-badge">
                              <p>56%</p>
                              <p>OFF</p>
                            </div>

                            <img className="product-image" src={product.img} alt="" />
                          </div>

                          <div className="product-info">
                            <h3>{product.model}</h3>

                            <p className="product-price">
                              ₹{product.price}
                              <span className="original-price">₹{product.oldPrice}</span>
                            </p>

                            <p className="product-saving">Save - ₹{product.save}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            <div className="product-slider">
              {Array.from({ length: numberOfSlides }).map((_, index) => (
                <button
                  className={`slider-button ${swiper?.activeIndex === index ? 'blue' : ''}`}
                  key={index}
                  onClick={() => swiper?.slideTo(index)}
                ></button>
              ))}
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
              <img className="view-all-arrow" src={`${categoryAssets}/icons/arrow-right.png`} alt="" />
            </a>
          </div>

          <nav className="categories-grid">
            <a href="#" className="category-card">
              <div className="category-image-wrapper">
                <img className="category-image" src={`${categoryAssets}/technology/galaxy-s22-ultra.png`} alt="" />
              </div>
              <p>Mobile</p>
            </a>

            <a href="#" className="category-card">
              <div className="category-image-wrapper">
                <img className="category-image" src={`${categoryAssets}/other/cream.png`} alt="" />
              </div>
              <p>Cosmetics</p>
            </a>

            <a href="#" className="category-card">
              <div className="category-image-wrapper">
                <img className="category-image" src={`${categoryAssets}/technology/electronics.png`} alt="" />
              </div>
              <p>Electronics</p>
            </a>

            <a href="#" className="category-card">
              <div className="category-image-wrapper">
                <img className="category-image" src={`${categoryAssets}/other/sofa.png`} alt="" />
              </div>
              <p>Furniture</p>
            </a>

            <a href="#" className="category-card">
              <div className="category-image-wrapper">
                <img className="category-image" src={`${categoryAssets}/technology/smart-watch-small.png`} alt="" />
              </div>
              <p>Watches</p>
            </a>

            <a href="#" className="category-card">
              <div className="category-image-wrapper">
                <img className="category-image" src={`${categoryAssets}/other/plant.png`} alt="" />
              </div>
              <p>Decor</p>
            </a>

            <a href="#" className="category-card">
              <div className="category-image-wrapper">
                <img className="category-image" src={`${categoryAssets}/other/necklace.png`} alt="" />
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
              <img className="view-all-arrow" src={`${categoryAssets}/icons/arrow-right.png`} alt="" />
            </a>
          </div>

          <div className="phone-brands">
            <a href="#" className="brand-card apple-card">
              <div className="phone-brand apple-brand">IPHONE</div>
              <img className="brand-logo" src={`${categoryAssets}/logos/apple-logo.png`} alt="apple" />
              <p>UP to 80% OFF</p>
              <img className="brand-product-image" src={`${categoryAssets}/technology/apple.png`} alt="" />
              <img className="brand-background-circle" src={`${categoryAssets}/circles/black-circle.png`} alt="" />
            </a>

            <a href="#" className="brand-card realme-card">
              <div className="phone-brand realme-brand">REALME</div>
              <img className="brand-logo" src={`${categoryAssets}/logos/realme-logo.png`} alt="realme" />
              <p>UP to 80% OFF</p>
              <img className="brand-product-image" src={`${categoryAssets}/technology/realme.png`} alt="" />
              <img className="brand-background-circle" src={`${categoryAssets}/circles/pale-yellow-circle.png`} alt="" />
            </a>

            <a href="#" className="brand-card xiaomi-card">
              <div className="phone-brand xiaomi-brand">XIAOMI</div>
              <img className="brand-logo" src={`${categoryAssets}/logos/xiaomi-logo.png`} alt="xiaomi" />
              <p>UP to 80% OFF</p>
              <img className="brand-product-image" src={`${categoryAssets}/technology/xiaomi-black.png`} alt="" />
              <img className="brand-background-circle" src={`${categoryAssets}/circles/peach-color-circle.png`} alt="" />
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
              <img className="view-all-arrow" src={`${categoryAssets}/icons/arrow-right.png`} alt="" />
            </a>
          </div>

          <div className="essentials-grid">
            <a href="#" className="essential-card">
              <div className="essential-image-wrapper">
                <img className="essential-image" src={`${categoryAssets}/food/products.png`} alt="" />
              </div>
              <h3 className="essential-title">Daily Essentials</h3>
              <p className="essential-offer">UP to 50% OFF</p>
            </a>

            <a href="#" className="essential-card">
              <div className="essential-image-wrapper">
                <img className="essential-image" src={`${categoryAssets}/food/grocery.png`} alt="" />
              </div>
              <h3 className="essential-title">Daily Essentials</h3>
              <p className="essential-offer">UP to 50% OFF</p>
            </a>

            <a href="#" className="essential-card">
              <div className="essential-image-wrapper">
                <img className="essential-image" src={`${categoryAssets}/food/fruits.png`} alt="" />
              </div>
              <h3 className="essential-title">Daily Essentials</h3>
              <p className="essential-offer">UP to 50% OFF</p>
            </a>

            <a href="#" className="essential-card">
              <div className="essential-image-wrapper">
                <img className="essential-image" src={`${categoryAssets}/food/strawberry.png`} alt="" />
              </div>
              <h3 className="essential-title">Daily Essentials</h3>
              <p className="essential-offer">UP to 50% OFF</p>
            </a>

            <a href="#" className="essential-card">
              <div className="essential-image-wrapper">
                <img className="essential-image" src={`${categoryAssets}/food/mango-fruit.png`} alt="" />
              </div>
              <h3 className="essential-title">Daily Essentials</h3>
              <p className="essential-offer">UP to 50% OFF</p>
            </a>

            <a href="#" className="essential-card">
              <div className="essential-image-wrapper">
                <img className="essential-image" src={`${categoryAssets}/food/cherry-fruit.png`} alt="" />
              </div>
              <h3 className="essential-title">Daily Essentials</h3>
              <p className="essential-offer">UP to 50% OFF</p>
            </a>
          </div>
        </section>
      </main>

      <footer className="footer-content">
        <img className="blue-circle" src={`${categoryAssets}/circles/blue-circle.png`} alt="" />

        <div className="footer-columns">
          <div className="footer-column">
            <p className="footer-brand">MegaMart</p>
            <h2 className="footer-title">Contact Us</h2>

            <ul className="footer-contact-list">
              <li className="footer-contact-item">
                <img className="footer-icon" src={`${categoryAssets}/icons/whats-app-outlined.png`} alt="" />
                <div className="footer-contact-text">
                  <p className="footer-contact-label">Whats App</p>
                  <p className="footer-contact-value">+1 202-918-2132</p>
                </div>
              </li>

              <li className="footer-contact-item">
                <img className="footer-icon" src={`${categoryAssets}/icons/call.png`} alt="" />
                <div className="footer-contact-text">
                  <p className="footer-contact-label">Call Us</p>
                  <p className="footer-contact-value">+1 202-918-2132</p>
                </div>
              </li>
            </ul>

            <p className="footer-subtitle">Download App</p>

            <div className="footer-app-links">
              <a href="#" className="footer-app-link">
                <img src={`${categoryAssets}/icons/app-store.png`} alt="" />
              </a>
              <a href="#" className="footer-app-link">
                <img src={`${categoryAssets}/icons/google-play.png`} alt="" />
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
