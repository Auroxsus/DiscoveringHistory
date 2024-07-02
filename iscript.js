// Function to call the parent function to increment the right count
function right() {
  // Call the parent function and pass the incremented value
  window.parent.updateValueRight(1); // Increment by 1
}

// Function to call the parent function to increment the wrong count
function wrong() {
  // Call the parent function and pass the incremented value
  window.parent.updateValueWrong(1); // Increment by 1
}

// Initialization code when the DOM is ready
window.addEventListener('DOMContentLoaded', () => {
  const virusQue = [
    {
      id: 1,
      q: "What was the Creeper virus?",
      a: ["The Creeper virus was a harmless program designed to improve computer performance by cleaning up unnecessary files.", "Creeper was one of the earliest computer viruses.", "The Creeper virus was a revolutionary virtual reality game."],
      correctAnswerIndex: 2 // Second Index
    },
    {
      id: 2,
      q: "Who developed Creeper?",
      a: ["Creeper was developed by Bob Thomas.", "Creeper's origins remain murky.", "Creeper was thought to have been created by Ray Tomlinson."],
      correctAnswerIndex: 1 // First Index 
    },
    {
      id: 3,
      q: "What was the purpose of the Reaper program?",
      a: ["It was actually a secret government surveillance tool disguised as antivirus software.", "It was initially intended to enhance the capabilities of the Creeper virus", "It was designed to detect and remove instances of the Creeper virus from infected systems."],
      correctAnswerIndex: 3 // Third Index

    },
  ];
  //  a:["","",""],
  const webcamQue = [
    {
      id: 1,
      q: "What was the webcam's connection to the internet used for?",
      a: ["It was part of a research project studying the effects of caffeine consumption.", "To upload images of the coffee pot to the lab's local network, allowing remote viewing via web browsers.", "The webcam's internet connection was utilized to broadcast live cooking shows."],
      correctAnswerIndex: 5 // Index of the correct answer 
    },
    {
      id: 2,
      q: "What was the purpose of the first webcam at Cambridge?",
      a: ["To monitor the status of the Trojan Room coffee pot.", "Its purpose was to livestream lectures and seminars.", "The webcam was installed to monitor the weather conditions on campus, providing real-time updates."],
      correctAnswerIndex: 4 // Index of the correct answer 
    },
    {
      id: 3,
      q: "When was the first webcam deployed at the University of Cambridge?",
      a: ["The webcam was deployed in 1991, but due to technical issues, it wasn't fully operational until 1992", "The first webcam was deployed in 1990, but its existence wasn't publicly revealed until 1991.", "It was deployed in 1991"],
      correctAnswerIndex: 6 // Index of the correct answer 

    },
  ];
  const spacewarQue = [
    {
      id: 1,
      q: "Who was the primary developer of Spacewar?",
      a: ["Steve Russell", "Elon Musk", "Mark Gates"],
      correctAnswerIndex: 8 // Index of the correct answer 
    },
    {
      id: 2,
      q: "How did Spacewar spread to other computer installations?",
      a: ["Public Domain Code", "Internet Forms", "Morse Code"],
      correctAnswerIndex: 7 // Index of the correct answer 
    },
    {
      id: 3,
      q: "What is a notable game inspired by Spacewar that was released in 1979?",
      a: ["Pac-Man", "Space Invaders", "Asteroids"],
      correctAnswerIndex: 9 // Index of the correct answer 

    },
  ];
  const mouseQue = [
    {
      id: 1,
      q: "What technology do most modern mice utilize for movement detection?",
      a: ["Radar", "Optical Sensors", "Sonar"],
      correctAnswerIndex: 11 // Second Index
    },
    {
      id: 2,
      q: "How did the original mice track movement across a surface?",
      a: ["Two separate wheels for x and y dimensions", "Laser that calculates x and y dimensions", "Tiny motors provide vibrational feedback that translated to x and y dimensions"],
      correctAnswerIndex: 12 // First Index 
    },
    {
      id: 3,
      q: "Who invented the first computer mouse, and in what year?",
      a: ["Mike Gildon, 1969", "Bill Gates, 1975", "Douglas Engelbart, 1964"],
      correctAnswerIndex: 10 // Third Index
    },
  ];

  const emailQue = [
    {
      id: 1,
      q: "When was the first email sent, and on which network?",
      a: ["The first email was sent in 1975 on Outlook.", "The first email was sent in 1971 on the ARPANET network.", "The first email was sent in 1984 on the internet."],
      correctAnswerIndex: 14 // Second Index
    },
    {
      id: 2,
      q: "What are some key features of the first ARPANET network mail system?",
      a: ["Introduced '@' in email addresses, become a standard of email syntax.", "Integrated with Virtual reality and allowed visual display in VR.", "Capabilities of real-time translation allowed automated translation services."],
      correctAnswerIndex: 15 // First Index 
    },
    {
      id: 3,
      q: "What role did RFCs (Request for Comments) play in the development of email protocols?",
      a: ["RFCs serve as a legal framework for email usage, making compatibility an issue in later years.", "RFCs were used as a plateform for advertising, not focusing on technical specifications and protocols.", "RFCs served as a platform for collaboration and consensus-building among researchers and developers, facilitating the establishment of common protocols and standards for email communication."],
      correctAnswerIndex: 13 // Third Index
    },
  ];

  const eniacQue = [
    {
      id: 1,
      q: "What were some key features of the ENIAC computer?",
      a: ["built-in internet connectivity", "general-purpose digital capabilities", "voice recognition capabilities"],
      correctAnswerIndex: 17 // Second Index
    },
    {
      id: 2,
      q: "What was the longest continuous period of operation without a failure for the ENIAC computer, and when did it occur?",
      a: ["64 days in 1950", "116 hours in 1954.", "45 hours in 1946"],
      correctAnswerIndex: 18 // First Index 
    },
    {
      id: 3,
      q: "How much electricity did the ENIAC computer consume?",
      a: ["100 kW", "50 kW", "150 kW"],
      correctAnswerIndex: 16 // Third Index
    },
  ];
  const harddriveQue = [
    {
      id: 1,
      q: "How many read/write heads did the IBM 350 disk storage have?",
      a: ["Four read/write heads", "Two read/write heads", "Three read/write heads"],
      correctAnswerIndex: 20 // Second Index
    },
    {
      id: 2,
      q: "What type of storage is a hard disk drive (HDD) classified as?",
      a: ["Non-volatile storage", "Volatile storage", "Temporary storage"],
      correctAnswerIndex: 21 // First Index 
    },
    {
      id: 3,
      q: "How is data accessed on a hard disk drive (HDD)?",
      a: ["In a direct-access manner", "In a sequential-access manner", "In a random-access manner"],
      correctAnswerIndex: 19 // Third Index
    },
  ];

  const chessQue = [
    {
      id: 1,
      q: "Who was the reigning world champion defeated by Deep Blue?",
      a: ["Bobby Fischer", "Garry Kasparov", "Anatoly Karpov"],
      correctAnswerIndex: 23 // Second Index
    },
    {
      id: 2,
      q: "How many games did Kasparov win in the match against Deep Blue?",
      a: ["Three games", "Four games", "Two games"],
      correctAnswerIndex: 24 // First Index 
    },
    {
      id: 3,
      q: "What was unique about Deep Blue’s hardware?",
      a: ["It was a distributed network of PCs", "It was a standard personal computer", "It was a purpose-built IBM supercomputer"],
      correctAnswerIndex: 22 // Third Index
    },
  ];

  const bugQue = [
    {
      id: 1,
      q: "Who publicized the cause of the first computer malfunction that was attributed to a 'bug'?",
      a: ["Alan Turing", "Grace Hopper", "John von Neumann"],
      correctAnswerIndex: 26 // Second Index
    },
    {
      id: 2,
      q: "What term is used to describe the process of finding and correcting software bugs?",
      a: ["Debugging", "Encoding", "Compiling"],
      correctAnswerIndex: 27 // First Index 
    },
    {
      id: 3,
      q: "What was the first computer bug?",
      a: ["A hardware malfunction in a mainframe computer", "A software error in a banking program", "A real insect that got trapped in a computer relay"],
      correctAnswerIndex: 25 // Third Index
    },
  ];
  const question1 = document.getElementById("question1");
  const question2 = document.getElementById("question2");
  const question3 = document.getElementById("question3");
  const question4 = document.getElementById("question4");
  const question5 = document.getElementById("question5");
  const question6 = document.getElementById("question6");
  const question7 = document.getElementById("question7");
  const question8 = document.getElementById("question8");
  const question9 = document.getElementById("question9");
  let id = 0; // Initialize id here
  let id2 = 0; // Initialize id here
  let id3 = 0; // Initialize id here
  let id4 = 0; // Initialize id here
  let id5 = 0; // Initialize id here
  let id6 = 0; // Initialize id here
  let id7 = 0; // Initialize id here
  let id8 = 0; // Initialize id here
  let id9 = 0; // Initialize id here

  function iterate(id) {
    console.log("Inside iterate function. ID:", id);

    // Getting the options
    const op1 = document.getElementById("op1");
    const op2 = document.getElementById("op2");
    const op3 = document.getElementById("op3");

    // Providing option text
    op1.innerText = virusQue[id].a[0]; // Set text of option 1 button
    op2.innerText = virusQue[id].a[1]; // Set text of option 2 button
    op3.innerText = virusQue[id].a[2]; // Set text of option 3 button

    // Setting the question text
    question1.innerText = virusQue[id].q;
  }

  function iterate2(id2) {
    console.log("Inside iterate2 function. ID:", id2);

    // Getting the options
    const op1 = document.getElementById("op4");
    const op2 = document.getElementById("op5");
    const op3 = document.getElementById("op6");

    // Providing option text
    op1.innerText = webcamQue[id2].a[0]; // Set text of option 1 button
    op2.innerText = webcamQue[id2].a[1]; // Set text of option 2 button
    op3.innerText = webcamQue[id2].a[2]; // Set text of option 3 button

    // Setting the question text
    question2.innerText = webcamQue[id2].q;
  }

  function iterate3(id3) {
    console.log("Inside iterate3 function. ID:", id3);

    // Getting the options
    const op1 = document.getElementById("op7");
    const op2 = document.getElementById("op8");
    const op3 = document.getElementById("op9");

    // Providing option text
    op1.innerText = spacewarQue[id3].a[0]; // Set text of option 1 button
    op2.innerText = spacewarQue[id3].a[1]; // Set text of option 2 button
    op3.innerText = spacewarQue[id3].a[2]; // Set text of option 3 button

    // Setting the question text
    question3.innerText = spacewarQue[id3].q;
  }
  function iterate4(id4) {
    console.log("Inside iterate4 function. ID:", id4);

    // Getting the options
    const op1 = document.getElementById("op10");
    const op2 = document.getElementById("op11");
    const op3 = document.getElementById("op12");

    // Providing option text
    op1.innerText = mouseQue[id4].a[0]; // Set text of option 1 button
    op2.innerText = mouseQue[id4].a[1]; // Set text of option 2 button
    op3.innerText = mouseQue[id4].a[2]; // Set text of option 3 button

    // Setting the question text
    question4.innerText = mouseQue[id4].q;
  }
  function iterate5(id5) {
    console.log("Inside iterate5 function. ID:", id5);

    // Getting the options
    const op1 = document.getElementById("op13");
    const op2 = document.getElementById("op14");
    const op3 = document.getElementById("op15");

    // Providing option text
    op1.innerText = emailQue[id5].a[0]; // Set text of option 1 button
    op2.innerText = emailQue[id5].a[1]; // Set text of option 2 button
    op3.innerText = emailQue[id5].a[2]; // Set text of option 3 button

    // Setting the question text
    question5.innerText = emailQue[id5].q;
  }

  function iterate6(id6) {
    console.log("Inside iterate6 function. ID:", id6);

    // Getting the options
    const op1 = document.getElementById("op16");
    const op2 = document.getElementById("op17");
    const op3 = document.getElementById("op18");

    // Providing option text
    op1.innerText = eniacQue[id6].a[0]; // Set text of option 1 button
    op2.innerText = eniacQue[id6].a[1]; // Set text of option 2 button
    op3.innerText = eniacQue[id6].a[2]; // Set text of option 3 button

    // Setting the question text
    question6.innerText = eniacQue[id6].q;
  }
  function iterate7(id7) {
    console.log("Inside iterate7 function. ID:", id7);

    // Getting the options
    const op1 = document.getElementById("op19");
    const op2 = document.getElementById("op20");
    const op3 = document.getElementById("op21");

    // Providing option text
    op1.innerText = harddriveQue[id7].a[0]; // Set text of option 1 button
    op2.innerText = harddriveQue[id7].a[1]; // Set text of option 2 button
    op3.innerText = harddriveQue[id7].a[2]; // Set text of option 3 button

    // Setting the question text
    question7.innerText = harddriveQue[id7].q;
  }
  function iterate8(id8) {
    console.log("Inside iterate8 function. ID:", id8);

    // Getting the options
    const op1 = document.getElementById("op22");
    const op2 = document.getElementById("op23");
    const op3 = document.getElementById("op24");

    // Providing option text
    op1.innerText = chessQue[id8].a[0]; // Set text of option 1 button
    op2.innerText = chessQue[id8].a[1]; // Set text of option 2 button
    op3.innerText = chessQue[id8].a[2]; // Set text of option 3 button

    // Setting the question text
    question8.innerText = chessQue[id8].q;
  }

  function iterate9(id9) {
    console.log("Inside iterate9 function. ID:", id9);

    // Getting the options
    const op1 = document.getElementById("op25");
    const op2 = document.getElementById("op26");
    const op3 = document.getElementById("op27");

    // Providing option text
    op1.innerText = bugQue[id9].a[0]; // Set text of option 1 button
    op2.innerText = bugQue[id9].a[1]; // Set text of option 2 button
    op3.innerText = bugQue[id9].a[2]; // Set text of option 3 button

    // Setting the question text
    question9.innerText = bugQue[id9].q;
  }

  iterate(id);
  iterate2(id2);
  iterate3(id3);
  iterate4(id4);
  iterate5(id5);
  iterate6(id6);
  iterate7(id7);
  iterate8(id8);
  iterate9(id9);

  // Event listener for all buttons with class 'option.next'
  const optionButtons = document.querySelectorAll('.option.next');
  optionButtons.forEach(button => {
    button.addEventListener('click', () => {

      const selectedOptionIndex = parseInt(button.id.slice(-1)); // Extracts the number from the button ID
      const section = button.dataset.section; // Get the section from the data-section attribute
      let correctAnswerIndex;

      console.log("Section:", section);

      // Determine the correct array based on the section
      if (section === "virus") {
        correctAnswerIndex = virusQue[id].correctAnswerIndex; // Get the correct answer index for the current virus question
        console.log("virus correct answer is " + correctAnswerIndex);
      }
      if (section === "webcam") {
        correctAnswerIndex = webcamQue[id2].correctAnswerIndex; // Get the correct answer index for the current webcam question
        console.log("webcam correct answer is " + correctAnswerIndex);
      }
      if (section === "spacewar") {
        correctAnswerIndex = spacewarQue[id3].correctAnswerIndex; // Get the correct answer index for the current webcam question
        console.log("spacewar correct answer is " + correctAnswerIndex);
      }
      if (section === "mouse") {
        correctAnswerIndex = mouseQue[id4].correctAnswerIndex; // Get the correct answer index for the current webcam question
        console.log("mouse correct answer is " + correctAnswerIndex);
      }
      if (section === "email") {
        correctAnswerIndex = emailQue[id5].correctAnswerIndex; // Get the correct answer index for the current webcam question
        console.log("email correct answer is " + correctAnswerIndex);
      }
      if (section === "eniac") {
        correctAnswerIndex = eniacQue[id6].correctAnswerIndex; // Get the correct answer index for the current webcam question
        console.log("eniac correct answer is " + correctAnswerIndex);
      }
      if (section === "harddrive") {
        correctAnswerIndex = harddriveQue[id7].correctAnswerIndex; // Get the correct answer index for the current webcam question
        console.log("harddrive correct answer is " + correctAnswerIndex);
      }

      if (section === "chess") {
        correctAnswerIndex = chessQue[id8].correctAnswerIndex; // Get the correct answer index for the current webcam question
        console.log("chess correct answer is " + correctAnswerIndex);
      }

      if (section === "bug") {
        correctAnswerIndex = bugQue[id9].correctAnswerIndex; // Get the correct answer index for the current webcam question
        console.log("bug correct answer is " + correctAnswerIndex);
      }

      console.log("Selected Option Index:", selectedOptionIndex);
      console.log("Correct Answer Index:", correctAnswerIndex);

      // Right answer!
      if (selectedOptionIndex === correctAnswerIndex) {
        console.log("you got it");
        right();
      } else {  // Wrong answer!
        console.log("you dont got it");
        wrong();
      }

      // Increment to the next question
      if (section === "virus" && id < virusQue.length - 1) { // Check if it's the virus section and id is within the bounds
        console.log("one more question virus");
        id++; // Increment id
        iterate(id); // Update the page with the next virus question
      } else if (section === "virus") {
        question1.innerText = "Congratulations. You have finished the virus review";
      }

      if (section === "webcam" && id2 < webcamQue.length - 1) { // Check if it's the webcam section and id2 is within the bounds
        console.log("one more question webcam");
        id2++; // Increment id2
        iterate2(id2); // Update the page with the next webcam question
      } else if (section === "webcam") {
        question2.innerText = "Congratulations. You have finished the webcam review";
      }

      // Increment to the next question
      if (section === "spacewar" && id3 < spacewarQue.length - 1) { // Check if it's the virus section and id is within the bounds
        console.log("one more question spacewar");
        id3++; // Increment id
        iterate3(id3); // Update the page with the next virus question
      } else if (section === "spacewar") {
        question3.innerText = "Congratulations. You have finished the spacewar review";
      }

      // Increment to the next question
      if (section === "mouse" && id4 < mouseQue.length - 1) { // Check if it's the virus section and id is within the bounds
        console.log("one more question mouse");
        id4++; // Increment id
        iterate4(id4); // Update the page with the next virus question
      } else if (section === "mouse") {
        question4.innerText = "Congratulations. You have finished the mouse review";
      }

      // Increment to the next question
      if (section === "email" && id5 < emailQue.length - 1) { // Check if it's the virus section and id is within the bounds
        console.log("one more question email");
        id5++; // Increment id
        iterate5(id5); // Update the page with the next virus question
      } else if (section === "email") {
        question5.innerText = "Congratulations. You have finished the email review";
      }

      // Increment to the next question
      if (section === "eniac" && id6 < eniacQue.length - 1) { // Check if it's the virus section and id is within the bounds
        console.log("one more question eniac");
        id6++; // Increment id
        iterate6(id6); // Update the page with the next virus question
      } else if (section === "eniac") {
        question6.innerText = "Congratulations. You have finished the eniac review";
      }
      // Increment to the next question
      if (section === "harddrive" && id7 < harddriveQue.length - 1) { // Check if it's the virus section and id is within the bounds
        console.log("one more question harddrive");
        id7++; // Increment id
        iterate7(id7); // Update the page with the next virus question
      } else if (section === "harddrive") {
        question7.innerText = "Congratulations. You have finished the harddrive review";
      }
      // Increment to the next question
      if (section === "chess" && id8 < chessQue.length - 1) { // Check if it's the virus section and id is within the bounds
        console.log("one more question chess");
        id8++; // Increment id
        iterate8(id8); // Update the page with the next virus question
      } else if (section === "chess") {
        question8.innerText = "Congratulations. You have finished the chess review";
      }
      // Increment to the next question
      if (section === "bug" && id9 < bugQue.length - 1) { // Check if it's the virus section and id is within the bounds
        console.log("one more question bug");
        id9++; // Increment id
        iterate9(id9); // Update the page with the next virus question
      } else if (section === "bug") {
        question9.innerText = "Congratulations. You have finished the bug review";
      }

    });
  });
});
