/* eslint-disable */
import React from 'react'
import { Image, Paragraph, Button } from '../../lib/bundle_sitecore.js'
import PropTypes from 'prop-types'

import './banner-and-two-image.css'

const BannerAndTwoImage = (props) => {
  return (
    <div className="banner-and-two-image-container">
      <div className="banner-and-two-image-container1">
        <Image field={props.fields.image_1} className="banner-and-two-image-image"></Image>
        <Paragraph
          field={props.fields.paragraph_4}
          className="banner-and-two-image-paragraph"
        ></Paragraph>
        <Image field={props.fields.image_0} className="banner-and-two-image-image1"></Image>
      </div>
      <Button
        field={props.fields.button_1630526953636}
        className="banner-and-two-image-button"
      ></Button>
      <Paragraph
        field={props.fields.paragraph_1630597077769}
        className="banner-and-two-image-paragraph1"
      ></Paragraph>
    </div>
  )
}

BannerAndTwoImage.defaultProps = {
  'fields.image_0': 'src',
  fields: {},
  'fields.image_1': 'src',
  'fields.paragraph_4': 'text',
  'fields.button_1630526953636': 'text',
  'fields.paragraph_1630597077769': 'text',
}

BannerAndTwoImage.propTypes = {
  'fields.image_0': PropTypes.object,
  fields: PropTypes.object,
  'fields.image_1': PropTypes.object,
  'fields.paragraph_4': PropTypes.string,
  'fields.button_1630526953636': PropTypes.string,
  'fields.paragraph_1630597077769': PropTypes.string,
}

export default BannerAndTwoImage
