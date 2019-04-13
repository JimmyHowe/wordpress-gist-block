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
     * @param code
     */
    function updateCode(code)
    {
      console.log(code);

      props.setAttributes({ code: code })
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
        onChange: updateCode
      })
    )
  },
  save      : function (props)
  {
    return wp.element.createElement("script", {
      src: props.attributes.code + ".js"
    });
  }
});