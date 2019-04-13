/**
 *
 */

wp.blocks.registerBlockType('jhdc/gists', {
  title     : 'Gists',
  icon      : 'smiley',
  category  : 'common',
  attributes: {
    code: { type: 'string' }
  },
  edit      : function (props)
  {
    /**
     * On Update of Code Element
     * @param event
     */
    function updateContent(event)
    {
      console.log(event);

      props.setAttributes({ code: event.target.value })
    }

    return wp.element.createElement(
      "div",
      null,
      wp.element.createElement("label", {
        for: "jhdc-gists-code"
      }),
      wp.element.createElement(wp.components.TextControl, {
        id      : "jhdc-gists-code",
        value   : props.attributes.code,
        onChange: updateContent
      }),
    )
  },
  save      : function (props)
  {
    return wp.element.createElement("script", {
      src: props.attributes.code + ".js"
    });
  }
});