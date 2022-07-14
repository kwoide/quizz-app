export default function Bookmark() {
  const listOfBookmarks = document.querySelectorAll(".quiz-card__bookmark");
  const listOfButtons = document.querySelectorAll(".quiz-card__button");
  const listOfCards = document.querySelectorAll(".quiz-card");

  for (let i = 0; i < listOfBookmarks.length; i++) {
    const bookmark = listOfBookmarks[i];
    bookmark.addEventListener("click", () => {
      if (bookmark.textContent === "bookmark") {
        bookmark.textContent = "bookmark_border";
      } else {
        bookmark.textContent = "bookmark";
      }
    });
  }
}
