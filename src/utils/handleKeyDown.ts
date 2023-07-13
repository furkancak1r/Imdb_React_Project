import Movies from "../components/movies/movies";
export const handleArrowDown = (state: Movies) => {
  const listGroupItems = document.getElementsByClassName("list-group-item");
  const currentItem = document.querySelector(".list-group-item.lightgray");

  // Eğer mevcut bir öğe varsa, stilini temizle
  if (currentItem) {
    currentItem.classList.remove("lightgray");
    const nextIndex =
      Array.from(listGroupItems).findIndex((item) => item === currentItem) + 1;
    const nextItem = listGroupItems.item(nextIndex);
    if (nextItem) {
      nextItem.classList.add("lightgray");
      state.setState({ movieName: (nextItem as any).innerText });
    } else {
      listGroupItems[0]?.classList.add("lightgray");
      state.setState({ movieName: (listGroupItems[0] as any)?.innerText });
    }
  } else if (listGroupItems.length > 0) {
    // Mevcut bir öğe yoksa, ilk öğeyi boyayın
    listGroupItems[0]?.classList.add("lightgray");
    state.setState({ movieName: (listGroupItems[0] as any)?.innerText });
  }
};

export const handleArrowUp = (state: Movies) => {
  const listGroupItems = document.getElementsByClassName("list-group-item");
  const currentItem = document.querySelector(".list-group-item.lightgray");

  // Eğer mevcut bir öğe varsa, stilini temizle
  if (currentItem) {
    currentItem.classList.remove("lightgray");
    const prevIndex =
      Array.from(listGroupItems).findIndex((item) => item === currentItem) - 1;
    const prevItem = listGroupItems.item(prevIndex);
    if (prevItem) {
      prevItem.classList.add("lightgray");
      state.setState({ movieName: (prevItem as any).innerText });
    } else {
      listGroupItems[listGroupItems.length - 1]?.classList.add("lightgray");
      state.setState({
        movieName: (listGroupItems[listGroupItems.length - 1] as any)
          ?.innerText,
      });
    }
  } else if (listGroupItems.length > 0) {
    // Mevcut bir öğe yoksa, son öğeyi boyayın
    listGroupItems[listGroupItems.length - 1]?.classList.add("lightgray");
    state.setState({
      movieName: (listGroupItems[listGroupItems.length - 1] as any)?.innerText,
    });
  }
};
