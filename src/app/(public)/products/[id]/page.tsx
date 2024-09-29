import ProductDetailsContainer from "@/components/(public)/products/[id]/ProductDetailsContainer";
import Container from "@/components/shared/Container";
import TopbarBanner from "@/components/shared/TopbarBanner";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Product Details",
  description:
    "Explore detailed information about Chez Tati's products, including features, specifications, customer reviews, and pricing. Make informed decisions before adding items to your cart.",
};
const ProductDetaisPage = () => {
  return (
    <div>
      <TopbarBanner></TopbarBanner>
      <Container className="mt-8">
        <ProductDetailsContainer></ProductDetailsContainer>
      </Container>
    </div>
  );
};

export default ProductDetaisPage;
