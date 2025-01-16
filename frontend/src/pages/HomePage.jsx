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
