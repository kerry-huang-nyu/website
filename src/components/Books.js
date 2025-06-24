import React, { useState } from 'react';
import './Books.css';

function Books() {
  const [hoverText, setHoverText] = useState('');
  const [isTextVisible, setIsTextVisible] = useState(false);

  const handleClick = () => {
    setIsTextVisible(!isTextVisible);
    setHoverText(isTextVisible ? '' : 'That being said, I probably also wouldn\'t disagree with all of the ideas contained in C++ Programming for Linux Systems');
  };

  // Helper function to render text with line breaks and links
  const renderDescription = (description) => {
    // Split by line breaks
    const lines = description.split('\n');
    const urlRegex = /(https?:\/\/[^\s]+)/g;
    
    return lines.map((line, lineIndex) => {
      const parts = line.split(urlRegex);
      return (
        <React.Fragment key={lineIndex}>
          {parts.map((part, partIndex) => {
            // Use a non-mutating check for URLs
            if (part.match(urlRegex)) {
              return (
                <a 
                  key={partIndex}
                  href={part} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="description-link"
                  onClick={(e) => e.stopPropagation()}
                >
                  {part}
                </a>
              );
            }
            return part;
          })}
          {lineIndex < lines.length - 1 && <br />}
        </React.Fragment>
      );
    });
  };

  // Helper function to extract URL from description
  const extractUrl = (description) => {
    const urlRegex = /(https?:\/\/[^\s]+)/g;
    const matches = description.match(urlRegex);
    return matches ? matches[0] : null;
  };

  // User's actual books organized by category
  const fictionBooks = [
    {
      id: 1,
      title: "Tuck Everlasting",
      author: "Natalie Babbitt",
      status: "Completed",
      description: "Age is just a number.\nJail is just a room.",
      image: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1661030663i/84981.jpg"
    },
    {
      id: 2,
      title: "Where the Red Fern Grows",
      author: "Wilson Rawls",
      status: "Completed",
      description: "The first time I cried while reading.",
      image: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1518702249i/10365.jpg"
    },
    {
      id: 3,
      title: "Animal Farm",
      author: "George Orwell",
      status: "Completed",
      description: "A modern day Aesop's fable.",
      image: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1325861570i/170448.jpg"
    },
    {
      id: 4,
      title: "The Picture of Dorian Gray",
      author: "Oscar Wilde",
      status: "Completed",
      description: "I can resist anything except temptation.",
      image: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1454087681i/489732.jpg"
    },
    {
      id: 5,
      title: "Villette",
      author: "Charlotte Brontë",
      status: "Completed",
      description: "I feel robbed ._.",
      image: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1320412741i/31173.jpg"
    }
  ];

  const nonfictionBooks = [
    {
      id: 6,
      title: "Poor Economics",
      author: "Abhijit V. Banerjee & Esther Duflo",
      status: "Completed",
      description: "The application of the scientific method to economics.",
      image: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1344679036i/10245602.jpg"
    },
    {
      id: 7,
      title: "Why We Sleep",
      author: "Matthew Walker",
      status: "Completed",
      description: "https://www.youtube.com/watch?v=5MuIMqhT8DM&t=1s&ab_channel=TED",
      image: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1556604137i/34466963.jpg"
    },
    {
      id: 8,
      title: "Who Gets What and Why",
      author: "Alvin E. Roth",
      status: "Currently Reading",
      description: "I am convinced that the CS job market will collapse.",
      image: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1407813980i/22749723.jpg"
    },
    {
      id: 9,
      title: "So Good They Can't Ignore You",
      author: "Cal Newport",
      status: "Completed",
      description: "https://www.youtube.com/watch?v=W3I3kAg2J7w&t=410s&ab_channel=3Blue1Brown",
      image: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1360564614i/13525945.jpg"
    }
  ];

  const jobSpecificBooks = [
    {
      id: 10,
      title: "But How Do It Know?",
      author: "J. Clark Scott",
      status: "Currently Reading",
      description: "The universe is a NAND gate.",
      image: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1375433017i/18276352.jpg"
    },
    {
      id: 11,
      title: "C++ Programming for Linux Systems",
      author: "Desislav Andreev, Stanimir Lukanov",
      status: "Completed",
      description: "Systems programming is something else.",
      image: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1696940483i/198293027.jpg"
    },
    {
      id: 12,
      title: "Effective Modern C++",
      author: "Scott Meyers",
      status: "Planning to Read",
      description: "42 specific ways to improve your use of C++11 and C++14.",
      image: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1416178786i/22800553.jpg"
    },
    {
      id: 13,
      title: "The Annotated Turing",
      author: "Charles Petzold",
      status: "Planning to Read",
      description: "A guided tour through Alan Turing's historic 1936 paper.",
      image: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1348963714i/2333956.jpg"
    },
    {
      id: 14,
      title: "Design Patterns",
      author: "Erich Gamma, Richard Helm, Ralph Johnson, John Vlissides",
      status: "Planning to Read",
      description: "Elements of reusable object-oriented software.",
      image: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1348027904i/85009.jpg"
    },
    {
      id: 15,
      title: "Code: The Hidden Language of Computer Hardware and Software",
      author: "Charles Petzold",
      status: "Planning to Read",
      description: "Understand how computers work at a concrete level.",
      image: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1709792682i/44882.jpg"
    },
    {
      id: 16,
      title: "5G NR, Wi-Fi 6, and Bluetooth LE 5",
      author: "Douglas H. Morais",
      status: "Planning to Read",
      description: "Understanding the fundamentals of 5G technology.",
      image: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1686596354i/137222389.jpg"
    },

  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'Currently Reading':
        return 'reading';
      case 'Completed':
        return 'completed';
      case 'Planning to Read':
        return 'planned';
      default:
        return 'default';
    }
  };

  const handleImageError = (e) => {
    // Fallback to a generic book cover if image fails to load
    e.target.src = "https://via.placeholder.com/200x300/95A5A6/FFFFFF?text=Book+Cover";
  };

  const BookCard = ({ book }) => {
    const url = extractUrl(book.description);
    
    const handleClick = () => {
      if (url) {
        window.open(url, '_blank', 'noopener noreferrer');
      }
    };

    return (
      <div 
        className={`book-card ${url ? 'clickable' : ''}`}
        onClick={handleClick}
      >
        <div className="book-cover">
          {/* Orange marker for currently reading */}
          {book.status === 'Currently Reading' && (
            <div className="currently-reading-marker">Currently Reading</div>
          )}
          {/* Translucent overlay for planning to read */}
          {book.status === 'Planning to Read' && (
            <div className="planning-overlay" />
          )}
          <img 
            src={book.image} 
            alt={`${book.title} cover`} 
            onError={handleImageError}
          />
          <div className="book-overlay">
            <div className="book-details">
              <h4 className="book-title">{book.title}</h4>
              <p className="book-author">by {book.author}</p>
              <p className="book-description">
                {book.description}
              </p>
              <span className={`book-status ${getStatusColor(book.status)}`}>
                {book.status}
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const BookSection = ({ title, books, sectionClass }) => (
    <section className={`book-section ${sectionClass}`}>
      <h3>{title}</h3>
      <div className="books-grid">
        {books.map(book => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </section>
  );

  return (
    <div className="books">
      <div className="books-content">
        <p 
          className="books-intro" 
          onClick={handleClick}
        > 
          The fact that I find these books to be the most important does not indicate
          that I agree with all, or even any ideas expressed in them. 
          <div className={`hover-text ${isTextVisible ? 'visible' : ''}`}>
            That being said, I probably also wouldn't disagree with ALL of the ideas contained in my textbooks.
          </div>
        </p>

        <BookSection 
          title="CS Books" 
          books={jobSpecificBooks} 
          sectionClass="job-specific-section"
        />
        
        <BookSection 
          title="Most Important Fiction" 
          books={fictionBooks} 
          sectionClass="fiction-section"
        />
        
        <BookSection 
          title="Most Important Nonfiction" 
          books={nonfictionBooks} 
          sectionClass="nonfiction-section"
        />
        
        
      </div>
    </div>
  );
}

export default Books; 