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
      /*CRATE IMG ELE */
      const cardImg = document.createElement("div");
      const img = document.createElement("img");
      img.classList.add("card-img-top");
      img.setAttribute("src", book.img);
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
      const deleteBtn = document.createElement("button");
      deleteBtn.classList.add("btn", "btn-primary");
      deleteBtn.innerText = "SCARTA";

      cardImg.appendChild(img);
      cardBody.appendChild(cardTitle);
      cardBody.appendChild(bookPrice);
      cardBody.appendChild(deleteBtn);
      /**CREATE CARD */
      card.appendChild(cardImg);
      card.appendChild(cardBody);
      /**INSERT CARD ON LIST */
      //   console.log(booksListContainer);
      booksListContainer.appendChild(card);
    });
  })
  .catch((error) => {
    console.log(error);
  });
