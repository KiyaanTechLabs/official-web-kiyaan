"use client";

import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";

import Features from "@/components/Features";
import Divisions from "@/components/Divisions";
import Products from "@/components/Products";
import Innovation from "@/components/Innovation";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <Divisions />
      <Products />
      <Innovation />
      <Contact />
      <Footer />
    </>
  );
}