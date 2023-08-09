

// الكود الخاص بإنشاء الصناديق في الدف الأيمن
const booksDataRight = [
    { imgSrc: '../assets/imgs/51.jpg', downloadLink: 'https://www.mediafire.com/file/5121mqazmify23o/%25D9%2586%25D8%25A8%25D8%25A7%25D8%25AA/file' },
    { imgSrc: '../assets/imgs/52.jpg', downloadLink: 'https://www.mediafire.com/file/a3xjfne4vkwigie/%25D8%25AD%25D9%258A%25D9%2588%25D8%25A7%25D9%2586/file' },
    { imgSrc: '../assets/imgs/53.jpg', downloadLink: 'https://www.mediafire.com/file/i33kox54k86nwph/%25D8%25A7%25D8%25B5%25D9%2588%25D9%2584_%25D9%2581%25D9%2584%25D8%25B3%25D9%2581%25D9%258A%25D8%25A9/file' },
    { imgSrc: '../assets/imgs/54.jpg', downloadLink: 'https://www.mediafire.com/file/rwgrtuv4o9iypcr/%25D8%25AA%25D8%25B1%25D8%25A8%25D9%258A%25D8%25A9_%25D8%25B5%25D8%25AD%25D9%258A%25D8%25A9/file' },
    { imgSrc: '../assets/imgs/55.jpg', downloadLink: 'https://www.mediafire.com/file/8dapl0uk9ir1lnx/%25D8%25B7%25D8%25B1%25D9%2582_%25D8%25AA%25D8%25AF%25D8%25B1%25D9%258A%25D8%25B3/file' },
    { imgSrc: '../assets/imgs/56.jpg', downloadLink: 'https://www.mediafire.com/file/rwgrtuv4o9iypcr/%25D8%25AA%25D8%25B1%25D8%25A8%25D9%258A%25D8%25A9_%25D8%25B5%25D8%25AD%25D9%258A%25D8%25A9/file' },
    { imgSrc: '../assets/imgs/57.jpg', downloadLink: 'https://download848.mediafire.com/c4qqmdxam4xg4sUZLMoiHrcrYxksddYIBY9kEVzya82RcPH8tv2QVVuJ_75Ux0wCYpBR8FUewlPY36BMJVJV2q_b660EB4cIgC_CklOvWVNMc8DjvJeY_iLj7KWV5wr3bzR4QcXG0OWyiNCLRK4BBo6mmRFzlKSKih0ZIqHfhaUaZQ/goumu8tdvccpzdv/%D8%A7%D9%83%D8%A7%D8%AF%D9%8A%D9%85%D9%8A%D8%A9+%D8%A7%D9%84%D8%AA%D8%AF%D8%B1%D9%8A%D8%B3' },
    
    
    // يمكنك إضافة المزيد من العناصر هنا

    // يمكنك إضافة المزيد من العناصر هنا للدف الأيمن
];


// الكود الخاص بإنشاء الصناديق في الدف الأيسر
const booksDataLeft = [
    { imgSrc: '../assets/imgs/58.jpg', downloadLink: 'https://www.mediafire.com/file/m884m73xx6klqq3/%25D9%2586%25D8%25A8%25D8%25A7%25D8%25AA/file' },
    { imgSrc: '../assets/imgs/59.jpg', downloadLink: 'https://www.mediafire.com/file/6op15xklygj71p3/%25D8%25AD%25D9%258A%25D9%2588%25D8%25A7%25D9%2586/file' },
    { imgSrc: '../assets/imgs/60.jpg', downloadLink: 'https://www.mediafire.com/file/gwt30tax03f57nm/%25D8%25A7%25D9%2584%25D8%25A7%25D8%25AF%25D8%25A7%25D8%25B1%25D8%25A9/file' },
    { imgSrc: '../assets/imgs/61.jpg', downloadLink: 'https://www.mediafire.com/file/8tregn29dekki4d/%25D8%25A7%25D9%2584%25D8%25B5%25D8%25AD%25D8%25A9_%25D8%25A7%25D9%2584%25D9%2586%25D9%2581%25D8%25B3%25D9%258A%25D8%25A9/file' },
    { imgSrc: '../assets/imgs/62.jpg', downloadLink: 'https://www.mediafire.com/file/2tjmkndwdqfu1tq/%25D8%25B9%25D9%2584%25D9%2585_%25D8%25A7%25D9%2584%25D9%2586%25D9%2581%25D8%25B3_%25D8%25A7%25D9%2584%25D8%25AA%25D8%25B9%25D9%2584%25D9%258A%25D9%2585%25D9%258A/file' },
    { imgSrc: '../assets/imgs/63.jpg', downloadLink: 'https://www.mediafire.com/file/f7gjrave287xg52/%25D8%25AD%25D8%25AF%25D9%258A%25D8%25AB/file' },
    { imgSrc: '../assets/imgs/64.jpg', downloadLink: 'https://www.mediafire.com/file/jpn22d6rgyonjzu/%25D8%25A7%25D9%2585%25D8%25AA%25D8%25AD%25D8%25A7%25D9%2586%25D8%25A7%25D8%25AA/file' },   
    // يمكنك إضافة المزيد من العناصر هنا للدف الأيسر
];


// توليد صناديق الكتب وإضافتها إلى عنصر الـ div بالـ id "content-left"
const contentLeftDiv = document.getElementById('content-left');

// توليد صناديق الكتب وإضافتها إلى عنصر الـ div بالـ id "content-right"
const contentRightDiv = document.getElementById('content-right');

// دالة لإنشاء صندوق الكتاب
function createBookCover(imgSrc, downloadLink) {
    const bookCoverDiv = document.createElement('div');
    bookCoverDiv.classList.add('book-cover');

    const img = document.createElement('img');
    img.src = imgSrc;
    img.alt = 'Book Cover';
    bookCoverDiv.appendChild(img);

    const downloadButton = document.createElement('a');
    downloadButton.classList.add('download-button');
    downloadButton.href = downloadLink;
    downloadButton.textContent = 'تحميل';
    bookCoverDiv.appendChild(downloadButton);

    return bookCoverDiv;
}

// دالة لتجميع الصناديق في صف أفقي
function createRowOfBooks(books) {
    const rowDiv = document.createElement('div');
    books.forEach(book => {
        const bookCoverDiv = createBookCover(book.imgSrc, book.downloadLink);
        rowDiv.appendChild(bookCoverDiv);
    });
    return rowDiv;
}

// عدد الصناديق في كل صف
const boxesPerRow = 4;

// تجزئة الكتب إلى صفوف وإضافتها إلى الدف الأيسر
for (let i = 0; i < booksDataLeft.length; i += boxesPerRow) {
    const rowBooks = booksDataLeft.slice(i, i + boxesPerRow);
    const rowDiv = createRowOfBooks(rowBooks);
    contentLeftDiv.appendChild(rowDiv);
}

// تجزئة الكتب إلى صفوف وإضافتها إلى الدف الأيمن
for (let i = 0; i < booksDataRight.length; i += boxesPerRow) {
    const rowBooks = booksDataRight.slice(i, i + boxesPerRow);
    const rowDiv = createRowOfBooks(rowBooks);
    contentRightDiv.appendChild(rowDiv);
}
