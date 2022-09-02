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
  // console.log("data", data)
  if (data && data.content) {
    let title = data.content.find(element => element.type == "heading");
    if (title && title.content) {
      title = title?.content[0]?.text || "";
    }

    let description = data.content.find(element => element.type == "paragraph");
    if (description && description.content) {
      description = description?.content[0]?.text || "";
    }

    let image = data.content.find(element => element.type == "image");
    image = image?.attrs?.src || ""

    return { title, description, image }
  }
  // return
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

export const convertDate = (d) => {
  const newDate = new Date(d.seconds * 1000);
  let day = newDate.getDate();
  let m = newDate.getMonth();
  let y = newDate.getFullYear();

  let h = newDate.getHours();
  let min = newDate.getMinutes()

  let months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  return day + " " + months[m] + " " + y + " " + h + ":" + min;
};