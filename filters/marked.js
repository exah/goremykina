import marked from 'marked';

export default (text) => marked(text, { sanitize: true });
