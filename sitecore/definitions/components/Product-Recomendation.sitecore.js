import { CommonFieldTypes, SitecoreIcon, Manifest } from "@sitecore-jss/sitecore-jss-manifest";

export default function (manifest) {
  manifest.addComponent({
    name: "Product-Recomendation",
    icon: SitecoreIcon.DocumentTag,
    fields: [{
      name: "image_0",
      type: CommonFieldTypes.Image
    }, {
      name: "image_1",
      type: CommonFieldTypes.Image
    }, {
      name: "image_2",
      type: CommonFieldTypes.Image
    }, {
      name: "button_3",
      type: CommonFieldTypes.SingleLineText
    }, {
      name: "button_4",
      type: CommonFieldTypes.SingleLineText
    }, {
      name: "button_5",
      type: CommonFieldTypes.SingleLineText
    }, {
      name: "header_6",
      type: CommonFieldTypes.SingleLineText
    }, {
      name: "header_7",
      type: CommonFieldTypes.SingleLineText
    }, {
      name: "header_8",
      type: CommonFieldTypes.SingleLineText
    }, {
      name: "paragraph_9",
      type: CommonFieldTypes.SingleLineText
    }, {
      name: "paragraph_10",
      type: CommonFieldTypes.SingleLineText
    }, {
      name: "paragraph_11",
      type: CommonFieldTypes.SingleLineText
    }]
  });
}
