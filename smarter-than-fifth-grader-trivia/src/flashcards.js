const flashcards = [
    {
      question: "What is the capital of France?",
      answer: "Paris",
      category: "Geography"
    },
    {
      question: "What is 8 x 7?",
      answer: "56",
      category: "Math"
    },
    {
      question: "Who wrote 'Charlotte's Web'?",
      answer: "E.B. White",
      category: "Literature"
    },
    {
      question: "What is the largest planet in our solar system?",
      answer: "Jupiter",
      category: "Science"
    },
    {
      question: "What are the first 3 digits of pi?",
      answer: "3.14",
      category: "Math"
    },
    {
      question: "What is the capital of Japan?",
      answer: "Tokyo",
      category: "Geography"
    },
    {
      question: "How many continents are there on Earth?",
      answer: "7",
      category: "Geography"
    },
    {
      question: "What is the largest mammal on Earth?",
      answer: "Blue Whale",
      category: "Science"
    },
    {
      question: "What is the chemical symbol for gold?",
      answer: "Au",
      category: "Science"
    },
    {
        "question": "Who was the 16th president of the United States?",
        "answer": "Abraham Lincoln",
        "category": "History"
    },
    {
        "question": "In classical music, what instruments usually comprise a string quartet?",
        "answer": "Two violins, a viola, and a cello.",
        "category": "Music"
    },
    {
        "question": "Which planet is known for its beautiful rings?",
        "answer": "Saturn",
        "category": "Science"
    },
    {
        "question": "How many amendments are in the Bill of Rights?",
        "answer": "10",
        "category": "History"
    },
    {
        "question": "The US Naval Academy is located in what city?",
        "answer": "Annapolis, MD",
        "category": "Geography"
    },
    {
        "question": "What is the capital of New York?",
        "answer": "Albany",
        "category": "Geography"
    },
    {
        "question": "What revolutionary leader wrote Common Sense in 1776?",
        "answer": "Thomas Paine",
        "category": "History"
    },
    {
        "question": "True or False: Crawfish are fish.",
        "answer": "False, they are crustaceans.",
        "category": "Science"
    },
    {
        "question": "What was the original name of the city that was renamed Constantinople?",
        "answer": "Byzantium",
        "category": "History"
    },
    {
        "question": "How many feet are there in 75 yards?",
        "answer": "225 feet",
        "category": "Math"
    },
    {
        "question": "What is the clinical name for the thigh bone?",
        "answer": "Femur",
        "category": "Science"
    },
    {
        "question": "The Hundred Years War was primarily between which two countries?",
        "answer": "England and France",
        "category": "History"
    },
    {
        "question": "What are the three types of rock?",
        "answer": "Sedimentary, Metamorphic, and Igneous",
        "category": "Science"
    },
    {
        "question": "What unit is abbreviated as 'oz'?",
        "answer": "Ounces",
        "category": "Math"
    },
    {
        "question": "Who invented the light bulb?",
        "answer": "Thomas Edison",
        "category": "History"
    },
    {
        "question": "What is a palindrome?",
        "answer": "A word or phrase that reads the same forward and backward.",
        "category": "Language"
    },
    {
        "question": "Which blood type is known as the universal recipient?",
        "answer": "AB",
        "category": "Science"
    },
    {
        "question": "What is the longest river in the United States?",
        "answer": "Missouri River",
        "category": "Geography"
    },
    {
        "question": "How many sides does a hexagon have?",
        "answer": "Six",
        "category": "Math"
    },
    {
        "question": "In the initials NASA, what does the first 'A' stand for?",
        "answer": "Aeronautics",
        "category": "Science"
    },
    {
        "question": "What type of animal can live on both water and land?",
        "answer": "Amphibians",
        "category": "Biology"
    },
    {
        "question": "What is the plural form of 'deer'?",
        "answer": "Deer",
        "category": "Language"
    },
    {
        "question": "What is the smallest fish in the world?",
        "answer": "The dwarf minnow",
        "category": "Science"
    },
    {
        "question": "How many times does 49 divide into 7?",
        "answer": "7",
        "category": "Math"
    },
    {
        "question": "What is the body of water between Florida and Texas called?",
        "answer": "Gulf of Mexico",
        "category": "Geography"
    },
    {
        "question": "The Statue of Liberty was a gift from which country?",
        "answer": "France",
        "category": "History"
    },
    {
        "question": "What is the most abundant element in the universe?",
        "answer": "Hydrogen",
        "category": "Science"
    },
    {
        "question": "How many syllables are in the word 'Mississippi'?",
        "answer": "Four",
        "category": "Language"
    },
    {
        "question": "Which country has the longest border with the United States?",
        "answer": "Canada",
        "category": "Geography"
    },
    {
        "question": "What month do Americans go trick-or-treating?",
        "answer": "October",
        "category": "Culture"
    },
    {
        "question": "Who painted the Mona Lisa?",
        "answer": "Leonardo da Vinci",
        "category": "Art"
    },
    {
        "question": "How many faces are there on a cube?",
        "answer": "Six",
        "category": "Math"
    },
    {
        "question": "What type of animal is a Komodo dragon?",
        "answer": "Lizard",
        "category": "Biology"
    },
    {
        "question": "What are the three states of matter?",
        "answer": "Solid, Liquid, Gas",
        "category": "Science"
    },
    {
        "question": "The Great Sphinx in Egypt has the body of which animal?",
        "answer": "Lion",
        "category": "History"
    },
    {
        "question": "Which planet has the most moons in our solar system?",
        "answer": "Jupiter",
        "category": "Science"
    },
    {
        "question": "Who was the first person to step on the moon?",
        "answer": "Neil Armstrong",
        "category": "History"
    },
    {
        "question": "What is the process by which plants make their food called?",
        "answer": "Photosynthesis",
        "category": "Science"
    },
    {
        "question": "What is the hardest mineral?",
        "answer": "Diamond",
        "category": "Science"
    },
    {
        "question": "Who wrote the Harry Potter book series?",
        "answer": "J.K. Rowling",
        "category": "Literature"
    },
    {
        "question": "What is the capital of Australia?",
        "answer": "Canberra",
        "category": "Geography"
    },
    {
        "question": "Which general led U.S. troops during the Vietnam War?",
        "answer": "General William Westmoreland",
        "category": "History"
    },
    {
        "question": "What is the tallest mammal on Earth?",
        "answer": "Giraffe",
        "category": "Biology"
    },
    {
        "question": "What is the name of the first American in space?",
        "answer": "Alan Shepard",
        "category": "History"
    },
    {
        "question": "What gas do humans need to breathe?",
        "answer": "Oxygen",
        "category": "Science"
    },
    {
        "question": "How many days are in a leap year?",
        "answer": "366",
        "category": "Science"
    },
    {
        "question": "What is the largest continent on Earth?",
        "answer": "Asia",
        "category": "Geography"
    },
    {
        "question": "What is the longest bone in the human body?",
        "answer": "Femur",
        "category": "Science"
    },
    {
        "question": "What is the capital of France?",
        "answer": "Paris",
        "category": "Geography"
    },
    {
        "question": "How many syllables are in the word 'creation'?",
        "answer": "Three",
        "category": "Language"
    },
    {
        "question": "The interior angles of a triangle always sum up to what degree?",
        "answer": "180 degrees",
        "category": "Math"
    },
    {
        "question": "What is the prefix in the word 'unnecessary'?",
        "answer": "'Un'",
        "category": "Language"
    },
    {
        "question": "Which country has the most time zones?",
        "answer": "France",
        "category": "Geography"
    },
    {
        "question": "What is the name of the galaxy we live in?",
        "answer": "The Milky Way",
        "category": "Science"
    },
    {
        "question": "What organ in the human body filters blood?",
        "answer": "Kidney",
        "category": "Biology"
    },
    {
        "question": "How many bones are there in the human body?",
        "answer": "206",
        "category": "Biology"
    },
    {
        "question": "How many planets are in our solar system?",
        "answer": "Eight",
        "category": "Science"
    },
    {
        "question": "What is the smallest country in the world?",
        "answer": "Vatican City",
        "category": "Geography"
    },
    {
        "question": "In which state is the Grand Canyon located?",
        "answer": "Arizona",
        "category": "Geography"
    },
    {
        "question": "What is the currency used in Japan?",
        "answer": "Yen",
        "category": "Finance"
    },
    {
        "question": "What is the boiling point of water in Celsius?",
        "answer": "100°C",
        "category": "Science"
    },
    {
        "question": "Which animal is known as the 'Ship of the Desert'?",
        "answer": "Camel",
        "category": "Biology"
    },
    {
        "question": "What is the square root of 64?",
        "answer": "8",
        "category": "Math"
    },
    {
        "question": "Which river is the longest in the world?",
        "answer": "The Nile",
        "category": "Geography"
    },
    {
        "question": "What organ pumps blood through the body?",
        "answer": "Heart",
        "category": "Biology"
    },
    {
        "question": "Who invented the telephone?",
        "answer": "Alexander Graham Bell",
        "category": "History"
    },
    {
        "question": "How many colors are in a rainbow?",
        "answer": "Seven",
        "category": "Science"
    },
    {
        "question": "What does the term 'IQ' stand for?",
        "answer": "Intelligence Quotient",
        "category": "Science"
    },
    {
        "question": "What is the world's most spoken language by native speakers?",
        "answer": "Mandarin Chinese",
        "category": "Language"
    },
    {
        "question": "What planet is closest to the sun?",
        "answer": "Mercury",
        "category": "Science"
    },
    {
        "question": "What is the capital of Japan?",
        "answer": "Tokyo",
        "category": "Geography"
    },
    {
        "question": "Which famous scientist developed the theory of relativity?",
        "answer": "Albert Einstein",
        "category": "Science"
    },
    {
        "question": "What is the smallest prime number?",
        "answer": "2",
        "category": "Math"
    },
    {
        "question": "In what country would you find the city of Timbuktu?",
        "answer": "Mali",
        "category": "Geography"
    },
    {
        "question": "Who was the first president of the United States?",
        "answer": "George Washington",
        "category": "History"
    },
    {
        "question": "How many Great Lakes are there?",
        "answer": "Five",
        "category": "Geography"
    },
    {
        "question": "What type of tree do acorns come from?",
        "answer": "Oak",
        "category": "Biology"
    },
    {
        "question": "What is the chemical symbol for gold?",
        "answer": "Au",
        "category": "Science"
    },
    {
        "question": "Which element does 'O' represent on the periodic table?",
        "answer": "Oxygen",
        "category": "Science"
    },
    {
        "question": "What is the capital of Italy?",
        "answer": "Rome",
        "category": "Geography"
    },
    {
        "question": "What is the tallest mountain in the world?",
        "answer": "Mount Everest",
        "category": "Geography"
    },
    {
        "question": "What is the main language spoken in Brazil?",
        "answer": "Portuguese",
        "category": "Language"
    },
    {
        "question": "What gas do plants absorb from the atmosphere?",
        "answer": "Carbon dioxide",
        "category": "Science"
    },
    {
        "question": "What country has the largest population?",
        "answer": "China",
        "category": "Geography"
    },
    {
        "question": "What is the square root of 81?",
        "answer": "9",
        "category": "Math"
    },
    {
        "question": "What is the largest organ in the human body?",
        "answer": "Skin",
        "category": "Biology"
    },
    {
        "question": "How many seconds are there in one hour?",
        "answer": "3,600",
        "category": "Math"
    },
    {
        "question": "What is the capital of Canada?",
        "answer": "Ottawa",
        "category": "Geography"
    },
    {
        "question": "How many planets in our solar system have rings?",
        "answer": "Four (Jupiter, Saturn, Uranus, Neptune)",
        "category": "Science"
    },
    {
        "question": "What is the hottest planet in our solar system?",
        "answer": "Venus",
        "category": "Science"
    },
    {
        "question": "How many millimeters are in a centimeter?",
        "answer": "10",
        "category": "Math"
    },
    {
        "question": "What is the currency of the United Kingdom?",
        "answer": "Pound Sterling",
        "category": "Finance"
    },
    {
        "question": "Who painted 'Starry Night'?",
        "answer": "Vincent van Gogh",
        "category": "Art"
    },
    {
        "question": "What is the name of the process by which plants release oxygen?",
        "answer": "Photosynthesis",
        "category": "Science"
    },
    {
        "question": "How many continents are there?",
        "answer": "Seven",
        "category": "Geography"
    },
    {
        "question": "Which ocean is the largest by surface area?",
        "answer": "Pacific Ocean",
        "category": "Geography"
    },
    {
        "question": "Who is the author of Pride and Prejudice?",
        "answer": "Jane Austen",
        "category": "Literature"
    },
    {
        "question": "What planet is known as the 'Red Planet'?",
        "answer": "Mars",
        "category": "Science"
    },
    {
        "question": "How many players are on a soccer team?",
        "answer": "Eleven",
        "category": "Sports"
    },
    {
        "question": "What is the longest river in South America?",
        "answer": "Amazon River",
        "category": "Geography"
    },
    {
        "question": "What is the largest planet in our solar system?",
        "answer": "Jupiter",
        "category": "Science"
    },
    {
        "question": "Which country is the largest by area?",
        "answer": "Russia",
        "category": "Geography"
    },
    {
        "question": "How many planets in our solar system are classified as gas giants?",
        "answer": "Four (Jupiter, Saturn, Uranus, Neptune)",
        "category": "Science"
    },
    {
        "question": "Who was the main author of the Declaration of Independence?",
        "answer": "Thomas Jefferson",
        "category": "History"
    },
    {
        "question": "What year did the Titanic sink?",
        "answer": "1912",
        "category": "History"
    },
    {
        "question": "Which organelle is known as the 'powerhouse of the cell'?",
        "answer": "Mitochondria",
        "category": "Science"
    },
    {
        "question": "How many letters are there in the English alphabet?",
        "answer": "26",
        "category": "Language"
    },
    {
        "question": "What is the first element on the periodic table?",
        "answer": "Hydrogen",
        "category": "Science"
    },
    {
        "question": "Which country gifted the Statue of Liberty to the United States?",
        "answer": "France",
        "category": "History"
    },
    {
        "question": "Who discovered penicillin?",
        "answer": "Alexander Fleming",
        "category": "History"
    },
    {
        "question": "What is the currency of India?",
        "answer": "Rupee",
        "category": "Finance"
    },
    {
        "question": "How many days are there in a fortnight?",
        "answer": "14",
        "category": "Math"
    },
    {
        "question": "What is the capital of Spain?",
        "answer": "Madrid",
        "category": "Geography"
    },
    {
        "question": "How many bones are babies born with?",
        "answer": "Approximately 270",
        "category": "Biology"
    },
    {
        "question": "What is the hardest natural substance on Earth?",
        "answer": "Diamond",
        "category": "Science"
    },
    {
        "question": "What does DNA stand for?",
        "answer": "Deoxyribonucleic Acid",
        "category": "Science"
    },
    {
        "question": "Which country has the largest land area in Africa?",
        "answer": "Algeria",
        "category": "Geography"
    },
    {
        "question": "Who wrote the play Hamlet?",
        "answer": "William Shakespeare",
        "category": "Literature"
    }
  ];
  
  export default flashcards;