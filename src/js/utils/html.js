// for plugin 'lit-html' to highlight html&css
export const html = (strings, ...values) => String.raw({ raw: strings }, ...values)