import React from 'react'
import { Image, Header, Paragraph } from '../../lib/bundle_sitecore.js'
import PropTypes from 'prop-types'

import './tt.css'

const Tt = (props) => {
  return (
    <div className="tt-container">
      <Image field={props.fields.image_1} className="tt-image"></Image>
      <div className="tt-container1">
        <Header field={props.fields.header_0} className="tt-header"></Header>
        <Paragraph field={props.fields.paragraph_2} className="tt-paragraph"></Paragraph>
      </div>
    </div>
  )
}

Tt.defaultProps = {
  'fields.header_0': 'text',
  fields: {},
  'fields.image_1': 'src',
  'fields.paragraph_2': 'text',
}

Tt.propTypes = {
  'fields.header_0': PropTypes.string,
  fields: PropTypes.object,
  'fields.image_1': PropTypes.object,
  'fields.paragraph_2': PropTypes.string,
}

export default Tt
