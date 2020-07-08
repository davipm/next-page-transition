import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { motion } from "framer-motion";

import data from "../../data";
const { products } = data();

let easing = [0.6, -0.05, 0.01, 0.99];

const fadeUp = {
  initial: {
    y: 60,
    opacity: 0,
    transition: {
      duration: 0.6,
      ease: easing
    }
  },

  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: easing
    }
  }
}

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.05
    }
  }
}

function Product() {
  const router = useRouter()
  const { id } = router.query;
  const [product, setProduct] = useState({});

  useEffect(() => {
    const product = products.find(product => product.id === id);

    setProduct(prevState => {
      return { ...prevState, ...product}
    })
  }, []);

  return (
    <motion.div initial="initial" animate="animate" exit={{ opacity: 0 }}>
      <div className="fullscreen">
        <div className="product">
          <motion.div animate={{ opacity: 1 }} initial={{ opacity: 0 }} className="img">
            <motion.img
              src={product.image}
              animate={{ x: 0, opacity: 1 }}
              initial={{ x: 200, opacity: 0 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 0.2 }}
            />
          </motion.div>

          <div className="product-details">
            <motion.div variants={stagger} className="inner">
              <Link href="/">
                <motion.div variants={fadeUp}>
                  <a className="go-back">Back to Figures</a>
                </motion.div>
              </Link>
              <motion.div variants={fadeUp}>
                <span className="category">Figure</span>
              </motion.div>

              <motion.h1 variants={fadeUp}>{product.name}</motion.h1>
              <motion.p variants={fadeUp}>{product.details}</motion.p>

              <motion.div variants={fadeUp} className="additonals">
                <span>Figure Action</span>
                <span>Re:Zero</span>
              </motion.div>

              <motion.div variants={fadeUp} className="qty-price">
                <div className="qty">
                  <div className="minus">-</div>
                  <div className="amount">1</div>
                  <div className="add">+</div>
                </div>
                <span className="price">{product.price}</span>
              </motion.div>

              <motion.div variants={fadeUp} className="btn-row">
                <button className="add-to-cart">Add to cart</button>
                <button className="subscribe">Subscribe</button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default Product;
