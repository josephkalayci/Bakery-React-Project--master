import { CommonFieldTypes, SitecoreIcon, Manifest } from "@sitecore-jss/sitecore-jss-manifest";

export default function (manifest) {
  manifest.addComponent({
    name: "wefwfewef",
    icon: SitecoreIcon.DocumentTag,
    fields: [{
      name: "label_0",
      type: CommonFieldTypes.SingleLineText
    }, {
      name: "label_1",
      type: CommonFieldTypes.SingleLineText
    }, {
      name: "label_2",
      type: CommonFieldTypes.SingleLineText
    }, {
      name: "label_3",
      type: CommonFieldTypes.SingleLineText
    }, {
      name: "paragraph_5",
      type: CommonFieldTypes.SingleLineText
    }]
  });
}
