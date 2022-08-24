export const fuzzy = (items, key) => {
  //let searchByCategory = fuzzy(list, 'category');

  return (query) => {
    let words = query.toLowerCase().split(" ");

    return items.filter((item) => {
      let normalizedTerm = item[key].toLowerCase();

      return words.every((word) => {
        return normalizedTerm.indexOf(word) > -1;
      });
    });
  };
};

export const groupByProp = (items, prop) => {

  const groups = {};
  items.map(item => {
    if (groups[item[prop]]) {
      groups[item[prop]].push(item)
    } else {
      groups[item[prop]] = [item]
    }
  });

  return groups;
}

export const createSlug = (title, id) => {
  if (title && id) {
    console.log('1');
    return (
      title
      .toLowerCase()
      .replace(/[^\w ]+/g, '')
      .replace(/ +/g, '-') +
      '-' +
      id
      )
    } else if (title) {
    console.log('2');
    return (
      title
        .toLowerCase()
        .replace(/[^\w ]+/g, '-')
        .replace(/ /g, '-')
    )
  } else {
    console.log('no title or id', title, id)
  }
}

export const getPostDetails = (data) => {
  let title = data.find(element => element.type == "heading");
  title = title?.content[0]?.text || "";
  let description = data.find(element => element.type == "paragraph");
  description = description?.content[0]?.text || "";
  let image = data.find(element => element.type == "image");
  image = image?.attrs?.src || ""

  return { title, description, image }
}

export const getYTLink = (link) => {

  // console.log('getYTLink', link)
  let ytLink = "";
  const regExp =
    /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/
  const match = link.match(regExp)
  ytLink = match && match[2].length === 11 ? match[2] : null

  if (ytLink) {
    // console.log('getYTLink', ytLink)
    return ytLink
  } else {
    return 'Invalid YouTube link'
  }
}