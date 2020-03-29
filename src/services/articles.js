export default function getArticle(language, list, title) {
  if (!list || !title) {
    return null;
  }

  return list.find(item => item.node[`title_${language}`] === title);
}
