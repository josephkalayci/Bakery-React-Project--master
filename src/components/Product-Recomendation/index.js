/* eslint-disable */
import React from 'react'
import { Header, Image, Paragraph, Button } from '../../lib/bundle_sitecore.js'
import PropTypes from 'prop-types'

import './product-recomendation.css'

const ProductRecomendation = (props) => {
  return (
    <div className="product-recomendation-container">
      <div className="product-recomendation-container1">
        <div className="product-recomendation-container2">
          <Header field={props.fields.header_7} className="product-recomendation-header"></Header>
          <Image field={props.fields.image_1} className="product-recomendation-image"></Image>
        </div>
        <div className="product-recomendation-container3">
          <Header field={props.fields.header_6} className="product-recomendation-header1"></Header>
          <Image field={props.fields.image_0} className="product-recomendation-image1"></Image>
        </div>
        <div className="product-recomendation-container4">
          <Header field={props.fields.header_8} className="product-recomendation-header2"></Header>
          <Image field={props.fields.image_2} className="product-recomendation-image2"></Image>
        </div>
      </div>
      <div className="product-recomendation-container5">
        <Paragraph
          field={props.fields.paragraph_10}
          className="product-recomendation-paragraph"
        ></Paragraph>
        <Paragraph
          field={props.fields.paragraph_11}
          className="product-recomendation-paragraph1"
        ></Paragraph>
        <Paragraph
          field={props.fields.paragraph_9}
          className="product-recomendation-paragraph2"
        ></Paragraph>
      </div>
      <div className="product-recomendation-container6">
        <Button field={props.fields.button_3} className="product-recomendation-button"></Button>
        <Button field={props.fields.button_5} className="product-recomendation-button1"></Button>
        <Button field={props.fields.button_4} className="product-recomendation-button2"></Button>
      </div>
    </div>
  )
}

ProductRecomendation.defaultProps = {
  'fields.image_0': 'src',
  fields: {},
  'fields.image_1': 'src',
  'fields.image_2': 'src',
  'fields.button_3': 'text',
  'fields.button_4': 'text',
  'fields.button_5': 'text',
  'fields.header_6': 'text',
  'fields.header_7': 'text',
  'fields.header_8': 'text',
  'fields.paragraph_9': 'text',
  'fields.paragraph_10': 'text',
  'fields.paragraph_11': 'text',
}

ProductRecomendation.propTypes = {
  'fields.image_0': PropTypes.object,
  fields: PropTypes.object,
  'fields.image_1': PropTypes.object,
  'fields.image_2': PropTypes.object,
  'fields.button_3': PropTypes.string,
  'fields.button_4': PropTypes.string,
  'fields.button_5': PropTypes.string,
  'fields.header_6': PropTypes.string,
  'fields.header_7': PropTypes.string,
  'fields.header_8': PropTypes.string,
  'fields.paragraph_9': PropTypes.string,
  'fields.paragraph_10': PropTypes.string,
  'fields.paragraph_11': PropTypes.string,
}

export default ProductRecomendation
