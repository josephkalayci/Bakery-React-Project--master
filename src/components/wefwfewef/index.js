/* eslint-disable */
import React from 'react'
import { Linebreak, Label, Paragraph } from '../../lib/bundle_sitecore.js'
import PropTypes from 'prop-types'

import './wefwfewef.css'

const Wefwfewef = (props) => {
  return (
    <div className="wefwfewef-container">
      <div className="wefwfewef-container1">
        <Linebreak className="wefwfewef-linebreak"></Linebreak>
        <Label field={props.fields.label_3} className="wefwfewef-label"></Label>
      </div>
      <div className="wefwfewef-container2">
        <Label field={props.fields.label_0} className="wefwfewef-label1"></Label>
        <Linebreak className="wefwfewef-linebreak1"></Linebreak>
      </div>
      <Label field={props.fields.label_2} className="wefwfewef-label2"></Label>
      <div className="wefwfewef-container3">
        <Label field={props.fields.label_1} className="wefwfewef-label3"></Label>
        <Paragraph field={props.fields.paragraph_5} className="wefwfewef-paragraph"></Paragraph>
      </div>
    </div>
  )
}

Wefwfewef.defaultProps = {
  'fields.label_0': 'text',
  fields: {},
  'fields.label_1': 'text',
  'fields.label_2': 'text',
  'fields.label_3': 'text',
  'fields.paragraph_5': 'text',
}

Wefwfewef.propTypes = {
  'fields.label_0': PropTypes.string,
  fields: PropTypes.object,
  'fields.label_1': PropTypes.string,
  'fields.label_2': PropTypes.string,
  'fields.label_3': PropTypes.string,
  'fields.paragraph_5': PropTypes.string,
}

export default Wefwfewef
