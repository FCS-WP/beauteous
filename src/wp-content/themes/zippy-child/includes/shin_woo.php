<?php
//Remove tab additional information
add_filter('woocommerce_product_tabs', 'remove_product_tabs', 9999);
function remove_product_tabs($tabs)
{
  unset($tabs['additional_information']);
  return $tabs;
}

//Remove tab review
add_filter('woocommerce_product_tabs', 'remove_review_tab', 9999);
function remove_review_tab($tabs)
{
  unset($tabs['reviews']);
  return $tabs;
}


function display_product_category() {
  global $product;

  if ( ! is_a( $product, 'WC_Product' ) ) {
      return '';
  }

  $categories = wp_get_post_terms( $product->get_id(), 'product_cat' );
  $category_names = array();

  foreach ( $categories as $category ) {
      $category_names[] = $category->name;
  }

  echo '<p class="category-product"> ' . implode( ', ', $category_names ) . '</p>';
}

add_shortcode( 'show-product_category', 'display_product_category' );
