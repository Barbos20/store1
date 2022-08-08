import React from "react";
import { RoutesPath } from "../../../4RoutesPath/RoutesPath";
import { ProductItems } from "../../3ProductItems/ProductItems";
import { useDispatch } from "react-redux";
import { setCurrentProduct } from "../../../2Redux/Product/reducer";

import Grey from "../2.2Product/color/grey.svg";
import Black from "../2.2Product/color/black.svg";
import Green from "../2.2Product/color/green.svg";
import style from "./Woman.module.scss";

export const PRODUCT = [
  {
    firmProduct: "Apollo ",
    nameProduct: "Running Short",
    price: 60.0,
    sizes: { list: ["XS", "S", "M", "L"], currentValue: "M" },
    colors: {
      list: [Grey, Black, Green],
      currentValue: Black,
    },
    image: "/imgElements/img1.png",
    changeImage:[{src:"/imgElements/img1.png"},{src:"/imgElements/img2.png"},{src:"/imgElements/img3.png"}],
    count: 1,
    path: `${RoutesPath.product}`,
    id: 1,
  },
  {
    firmProduct: "Apollo ",
    nameProduct: "Running Short",
    price: 50.0,
    sizes: { list: ["XS", "S", "M", "L"], currentValue: "M" },
    colors: {
      list: [Grey, Black, Green],
      currentValue: Black,
    },
    image: "/imgElements/img4.png",
    changeImage:[{src:"/imgElements/img4.png"},{src:"/imgElements/img2.png"},{src:"/imgElements/img3.png"}],
    count: 1,
    path: `${RoutesPath.product}`,
    id: 2,
  },
  {
    firmProduct: "Apollo ",
    nameProduct: "Running Short",
    price: 50.0,
    sizes: { list: ["XS", "S", "M", "L"], currentValue: "M" },
    colors: {
      list: [Grey, Black, Green],
      currentValue: Black,
    },
    image: "/imgElements/img2.png",
    changeImage:[{src:"/imgElements/img2.png"},{src:"/imgElements/img2.png"},{src:"/imgElements/img3.png"}],
    count: 1,
    path: `${RoutesPath.product}`,
    id: 3,
  },
  {
    firmProduct: "Apollo ",
    nameProduct: "Running Short",
    price: 50.0,
    sizes: { list: ["XS", "S", "M", "L"], currentValue: "M" },
    colors: {
      list: [Grey, Black, Green],
      currentValue: Black,
    },
    image: "/imgElements/img1.png",
    changeImage:[{src:"/imgElements/img1.png"},{src:"/imgElements/img2.png"},{src:"/imgElements/img3.png"}],
    count: 1,
    path: `${RoutesPath.product}`,
    id: 4,
  },
  {
    firmProduct: "Apollo ",
    nameProduct: "Running Short",
    price: 50.0,
    sizes: { list: ["XS", "S", "M", "L"], currentValue: "M" },
    colors: {
      list: [Grey, Black, Green],
      currentValue: Black,
    },
    image: "/imgElements/img3.png",
    changeImage:[{src:"/imgElements/img3.png"},{src:"/imgElements/img2.png"},{src:"/imgElements/img3.png"}],
    count: 1,
    path: `${RoutesPath.product}`,
    id: 5,
  },
  {
    firmProduct: "Apollo ",
    nameProduct: "Running Short",
    price: 50.0,
    sizes: { list: ["XS", "S", "M", "L"], currentValue: "M" },
    colors: {
      list: [Grey, Black, Green],
      currentValue: Black,
    },
    image: "/imgElements/img3.png",
    changeImage:[{src:"/imgElements/img3.png"},{src:"/imgElements/img2.png"},{src:"/imgElements/img3.png"}],
    count: 1,
    path: `${RoutesPath.product}`,
    id: 6,
  },
];

export const Woman = () => {
  const dispatch = useDispatch();
  const openProduct = (product) => {
    dispatch(setCurrentProduct(product));
  };

  return (
    <div id={"woman"} className={style.womContainer}>
      <h1 className={style.title}> Category name</h1>
      <div className={style.products}>
        {PRODUCT.map((product) => (
          <ProductItems
            product={product}
            key={product.id}
            handleOpenProduct={() => {
              openProduct(product);
            }}
          />
        ))}
      </div>
    </div>
  );
};