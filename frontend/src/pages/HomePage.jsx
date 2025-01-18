import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../redux/slices/productSlice";
import ProductCard from "../components/ProductCard";
import Navbar from "../components/Navbar";
import "../styles/HomePage.css";

const HomePage = () => {
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts()); // Fetch products on page load
  }, [dispatch]);

  return (
    <>

    <div class="home-hero-wrap">
      <div class="home-hero-navbar">
        <Navbar />
      </div>
      <div class="h-hero-img-wrap_is__ov-h">
        <img src="https://cdn.prod.website-files.com/671898ae57fbee5bf1da9fba/673daa20f8d824dc60d87727_bg-1.webp"  loading="lazy" alt="woman" class="image is-home" ></img>
      </div>
    </div>

    

    {/* <section class= "section is__ov-h">
        <div class= "container">
          <div class = "applications">
              <div class="applications_top blur-animation is-act" style="will-change: auto;">
                  <div class="txt-body-s t-black-30 t-w-med blur-animation is-act" style="will-change: auto;">Applications</div>
              <h3>Welcome to our Ecom-Website Project</h3>
              </div>
              <div class="applications-wrap">
                <div class="applications_grid blur-animation is-act" style="will-change: auto;">
                  <div class="application-item">
                    <div class="app-img-wrap">
                      <img src="https://cdn.prod.website-files.com/671898ae57fbee5bf1da9fba/6748577ad24e2f2050ddaf30_man.webp" loading="lazy" alt="man in white t-short looking forward " class="app-img"></img>
                      <div class="app-img-grad"></div>
                    </div>
                    <div class="app_bttm">
                      <div class="app-category">
                        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 20 20" preserveAspectRatio="none" fill="none" class="app-gr-img">
                          <circle cx="10" cy="10" r="10" fill="url(#paint0_radial_820_315)">
                          </circle>
                          <defs>
                            <radialGradient id="paint0_radial_820_315" cx="0" cy="0" r="1" gradientUnits="objectBoundingBox" spreadMethod="pad" gradientTransform="translate(0.25 0.95) rotate(-54.2933) scale(0.985 0.728)"  >
                            <stop stop-color="#FF9A2B"></stop>
                            <stop offset="0.615993" stopColor="#FFDFCF"></stop>
                            <stop offset="1" stop-color="#FFAD37"></stop>
                            </radialGradient>
                          </defs>
                        </svg>
                        <div class="h4 h5-tab">One</div>
                      </div>
                    </div>
                    <a href="/auth" class="app__link w-inline-block"></a>
                  </div>
                  <div id="w-node-_2529b5eb-7924-1f6b-e303-a0286eebdbf7-f1da9fcb" class="application-item">
                    <div class="app-img-wrap">
                        <img src="https://cdn.prod.website-files.com/671898ae57fbee5bf1da9fba/673c1a67dd8dc2f34eb35582_Portrait%20of%20Black%20Woman%203.webp" loading="eager" alt height="Auto" class-="app-img"></img>
                        <div class="app-img-grad"></div>
                    </div>
                    <div class="app_bttm">
                      <div class="app-title is-2">
                        <div class="txt-body-m t-black-50 t-mob-11">
                          wao
                        </div>
                      </div>
                      <div class="app-category">
                        
                        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 21 21" fill="none" class="app-gr-img">
                          <circle cx="10" cy="10" r="10" fill="url(#paint0_radial_820_342)"></circle>
                          <circle cx="10" cy="10" r="10" fill="url(#paint0_radial_820_342)"></circle>
                          <defs>
                            <radialGradient id="paint0_radial_820_342" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"  gradientTransform="translate(17.3359 3.5) rotate(132.797) scale(18.3984)"  >
                                <stop stop-color="#FF97E7"></stop>
                                <stop offset="1" stop-color="#FF66B9"></stop>
                            </radialGradient>
                            <radialGradient id="paint1_radial_820_342" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"  gradientTransform="translate(5.33594 17) rotate(-47.7263) scale(22.2991)"  >
                                <stop stop-color="#FF8FE1"></stop>
                                <stop offset="0.45" stop-color="#FFDDFE"></stop>
                                <stop offset="1" stop-color="#FF9DE5"></stop>
                            </radialGradient>
                          </defs>
                        </svg>
                        <div class="h4 h5-tab">Two</div>
                      </div>
                    </div>
                    <a href="/auth" class="app__link blur-animation w-inline-block is-act" style="will-change: auto;"></a>
                  </div>
                </div>
              </div>
                <div id="w-node-f3b1b9a2-d541-464b-fee7-ad2274c889ed-f1da9fcb" class="application-item">
                  <div class="app-img-wrap">
                    <img src="https://cdn.prod.website-files.com/671898ae57fbee5bf1da9fba/671b4edb7e08b9f23ffd16d8_Smiling%20Woman%20Purple%20Glasses%201.webp" loading="eager" alt="old woman is smiling" class="app-img">
                    </img>
                    <div class="app-img-grad"></div>
                  </div>
                  <div class="app-bttm">
                    <div class="app-title">
                      <div class="txt-body-m t-black-50 t-mob-11">
                        brah
                      </div>
                    </div>
                    <div class="app-category">
                      <svg xmlns="http://www.w3.org/2000/svg"  width="100%" height="100%" viewBox="0 0 21 21" fill="none" class="app-gr-img">
                        <circle cx="10" cy="10" r="10" fill="url(#paint0_radial_820_342)"></circle>
                        <circle cx="10" cy="10" r="10" fill="url(#paint0_radial_820_342)"></circle>
                        <defs>
                          <radialGradient id="paint0_radial_820_342" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"  gradientTransform="translate(17.1641 4) rotate(132.879) scale(19.105)"  >
                              <stop stop-color="#FF783F"></stop>
                              <stop offset="1" stop-color="#FF3232"></stop>
                          </radialGradient>
                          <radialGradient id="paint1_radial_820_342" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"  gradientTransform="translate(5.16406 18.5) rotate(-52.0013) scale(20.3039)"  >
                              <stop offset="0.106621" stop-color="#FF3124"></stop>
                              <stop offset="0.6147" stop-color="#FF8A35"></stop>
                              <stop offset="0.922649" stop-color="#FF3124"></stop>
                          </radialGradient>
                        </defs>
                      </svg>
                      <div class="h4 h5-tab">Three</div>
                    </div>
                  </div>
                  <a href="/auth" class="app__link blur-animation w-inline-block is-act" style="will-change: auto;" ></a>
                </div>
                <a href="/products" class="btn_black is-app blur-animation w-inline-block is-act" style="will-change: auto;">
                  <div class="txt-btn">All Products</div>
                  <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 20 18" fill="none" class="btn-arrow">
                    <path d="M1 9L19 9M19 9L11.35 17M19 9L11.35 1" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"stroke-linejoin="round"></path>
                  </svg>
                </a>
          </div>
        </div>
    </section>   */}

    </>
  );
};


export default HomePage;




    /* <div class="home-hero-wrap">
    <section class="section is-nav-s is-wht is-m">
        <div data-animation="default" class="navbar is-wht w-nav" data-easing2="ease" fs-scrolldisable-element="smart-nav" data-easing="ease" data-collapse="medium" data-w-id="6b66ac5f-a8c2-cdd2-aff2-f24e8c3768e6" role="banner" data-duration="400">
            <div class="nav-cc is-wht">
                <a href="/?r=0" aria-current="page" class="nav-logo is-wht w-nav-brand w--current">
                    <div class="w-embed">
                        <svg width="100%" height="auto" viewBox="0 0 185 19" fill="currentcolor" xmlns="http://www.w3.org/2000/svg"></svg>
                    </div>
                </a>
        </div>
      
       */



        