fetch("https://striveschool-api.herokuapp.com/books")
  .then((booksUncompiled) => {
    return booksUncompiled.json();
  })
  .then((booksList) => {
    // console.log(booksList);
    const booksListContainer = document.getElementById("books-list-container");
    booksList.forEach((book) => {
      const card = document.createElement("div");
      card.classList.add("card");

      const col = document.createElement("col");
      col.classList.add("col", "mb-3");
      /*CRATE IMG ELE */
      //   const cardImg = document.createElement("div");
      const img = document.createElement("img");
      img.classList.add("card-img-top");
      img.setAttribute("src", book.img);
      img.setAttribute("height", "350px");
      img.setAttribute("style", "object-fit: cover;");
      /*CREATE CARD BODY */
      const cardBody = document.createElement("div");
      cardBody.classList.add("card-body");

      const cardTitle = document.createElement("h5");
      cardTitle.classList.add("card-title");
      cardTitle.innerText = book.title;

      const bookPrice = document.createElement("p");
      bookPrice.classList.add("card-text");
      bookPrice.innerText = book.price;
      /**CREATE BUTTON */
      const deleteBtn = document.createElement("a");
      deleteBtn.classList.add("btn", "btn-primary");
      deleteBtn.innerText = "SCARTA";
      deleteBtn.addEventListener("click", (event) => {
        console.log(event.currentTarget.parentElement.parentElement.parentElement);
        event.currentTarget.parentElement.parentElement.parentElement.remove();
      });

      //   cardImg.appendChild(img);
      cardBody.appendChild(cardTitle);
      cardBody.appendChild(bookPrice);
      cardBody.appendChild(deleteBtn);
      /**CREATE CARD */
      card.appendChild(img);
      card.appendChild(cardBody);
      /**INSERT CARD ON LIST */
      //   console.log(booksListContainer);
      col.appendChild(card);
      booksListContainer.appendChild(col);
    });
  })
  .catch((error) => {
    console.log(error);
  });
