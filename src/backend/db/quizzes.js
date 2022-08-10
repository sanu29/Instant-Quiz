import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const quizzes = [
  {
    _id:uuid(),
    title: "React Basics",
    totalScore: 20,
    imgUrl:"https://styles.redditmedia.com/t5_2su6s/styles/communityIcon_4g1uo0kd87c61.png",
    mcqs: [
      {
        _id:uuid(),
        question: "Which of the following is used in React.js to increase performance?",
        options: ["Virtual DOM", "Real DOM", "Both", "None"],
        answer: "Virtual DOM",
      },
      {
        _id:uuid(),
        question: "Which of the following command is used to install create-react-app?",
        options: ["npm install -g create-react-app","npm install create-react-app","npm install -f create-react-app","install -g create-react-app"],
        answer: "npm install -g create-react-app",
      },
      {
        _id:uuid(),
        question: "Which of the following acts as the input of a class-based component?",
        options: ["Class","Factory","Render","Props"],
        answer: "Props",
      },
      {
        _id:uuid(),
        question: " Which of the following option is correct in the case of the Babel?",
        options: ["Babel is a Compiler",'Babel is a Transpiler.',"None of the above",'Both A and B are correct.'],
        answer: 'Both A and B are correct.',
      },
      {
        _id:uuid(),
        question: " Which of the following lifecycle events React components have at the highest level?",
        options: ["Destruction","Initialization","State/Property Updates","All of the above."],
        answer: "All of the above.",
      },
    ],
    catergoryName: "React",
  },
  {
    _id:uuid(),
    title: "Node Basics",
    totalScore: 20,
    imgUrl:"data:image/png;base64,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",
    mcqs: [
      {
        _id:uuid(),
        question: "Which of the following command is used to start a REPL session?",
        options: ["$ node","$ node start","$ node repl","$ node console"],
        answer: "$ node",
      },
      {
        _id:uuid(),
        question: "The Node.js modules can be exposed using:",
        options: ["expose","module","exports","All of the above"],
        answer: "exports",
      },
      {
        _id:uuid(),
        question: "What is the default scope in the Node.js application?",
        options: ["Global","Local","Global Function","Local to object"],
        answer: "Local",
      },
      {
        _id:uuid(),
        question: "Which of the following engine Node in core?",
        options: ["Chrome V8","Microsoft Chakra","SpiderMonkey","Node En"],
        answer: 'Chrome V8',
      },
      {
        _id:uuid(),
        question: " Which of the following module is not a built-in node module?",
        options: ["zlib","https","dgram","fsread"],
        answer: "fsread",
      },
    ],
    catergoryName: "Node",
  },
  {
    _id:uuid(),
    title: "React Hooks",
    totalScore: 20,
    imgUrl:"data:image/png;base64,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",
    mcqs: [
      {
        _id:uuid(),
        question: "Which among the following is true w.r.t React hooks?",
        options: ["Hooks let you use React only with classes","React provides a few built-in hooks","Hooks can be used inside loop statements","Hooks can be called from normal functions"],
        answer: "React provides a few built-in hooks",
      },
      {
        _id:uuid(),
        question: "Which hook should be used for updating document title when Page is loaded ?",
        options: ["useState", "useRef","useEffect","useMemo"],
        answer: "useEffect",
      },
      {
        _id:uuid(),
        question: "How do you handle passing through the component tree without passing props manually at entry level",
        options: ["useContext","useEffect","useCallback","useMemo"],
        answer: "useContext",
      },
      {
        _id:uuid(),
        question: "What might you use to directly access DOM node",
        options: ["useEffect","useRef","useMemo","useReducer"],
        answer: 'useref',
      },
      {
        _id:uuid(),
        question: " What function can be used to change the state of a React ",
        options: ["setState","changeState","State","updateState"],
        answer: "setState",
      },
    ],
    catergoryName: "React",
  },
  {
    _id:uuid(),
    title: "JavaScript Basics",
    totalScore: 20,
    imgUrl:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAkFBMVEX33x4AAAD+5R+GeRByZw774x9ZUAv64R7/6B/u1x303B7izBtqYA3y2x0/OQitnBWQghFTSwq4phY4MwfUvxpEPQjm0ByyoRbZxBoqJgVKQwnOuhnBrhh7bw8nIwVPRwpjWQyaixOklBQWFAMeGwSKfRF1ag4LCgFkWgzFsRgiHwQvKwYUEgM8NgemlRSbjROjfARsAAAHC0lEQVR4nO2cW3uiOhRAybYxIFIQEa147c3xVO3//3cH67RHZQcShCaeb6+XeagwWeSe7MRxCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCDmcA7guOD2H5/8A56YThJAnsIhSQgV3g2QW9QfT0X64H00H/SjOPBcss4T1oFtg8FydSu5ODoNXds3LKMoAxC+kXBV4KCQypwNVj4lwiD14soxS1x7HWoYQRFK9E33fmnysYcid5wq/r1d4ltRHfUNIHhUEGXud2aGobQgqGXjiTdhQUjUNhZgrCzK2CixQ1DMUTl9DkLFRz7yiniHXE8wVHeOKWobQ0RRkrHtXhhBqCzI2rxo8tI2GIfdrCDIWGlbUMezWMmS+2X5R3ZDP6gmarorqhvBU09BwOVU2rJ2FOanJXFQ2dEe1BeeBAbEfVA1FSUO6WHXe3rv/SP46TFwTYj+oGkoH3C+f/nGFBlw3DbFJRyQMTzFUDd0pLvgQ/Ex1BfDxy9WflxOzGeioGwYbVPDtcioP6WU2Pluw+KZoyDNU8M+1AA/O8nrlmx6xHVE1jFHD4nCFe9/d5i62IAMdZUNAl5762NAnOf3twbMhAx11Q/RnYyyTvlrd3daa9URFQxcddU/wYjhiHdNdxBmqhgPUEM0nkWTGu4gzbstDvCRalIGOuuEK+1lmS10rQ7WlQZegIkuay1JUDdFl0qWRJGui2uMfsJ+x7R1koqohPv9dePbXRFXDBDVk055V7SaG8hx/hysOrRhdl6E8P5QuYoSO3dmoPMf/lBmyZWbNfi+G8jrNRGrIWDdTi94wgvpam2yl6YvpzLW1PiobAt4j/rA49OwsrBr7FuWGx6d8O2b1l2is6q8rFdlq61hXWDXyMJB0iReMQs+ywqqzuzZWMGTsaZ1a5aizB6y6i/8SpRaVVR1D4SlvsEWBNY5akQq8rNu/4mBLFKZetAls1RUXWzuqo2ZMFOjsk9qxKKwb16aTi2wXW6CoH7k30dnP75ifWulHX3JPJ/RrmppWrBFBK7hObNRTcj8RQ2cP+egiP87GsGK9SHbhzvA9YRTJBs4vUTNW3+Firez4ch/xNMUnvah43AJneJ+GjgBv/aGm2DG43XaD4fHpYKwWKpWZq4q3GebPO5lK9zi8X8Nj9+i/VSuai0+83fBYIZ2wdK2RmWxsmjB0jifZthWDAGMnaBoyPDompRVyZaqYNmb4dSKxxNFYt9+gYe4ImbzziA0V00YNjyf31jJDUwcvGjYsWQQYNJhqrQQ1beiAZEN8Y6giNm/ogGRt3P/fGDqAH64xNDZtw1ASmhLeiSEPvMqX9tBdqs92G1NZHcAD1t5kieGwHT5UptTdYy9tNQpOOImkiOBBh7LEuJM/+V9nVUnFYzWln60B3GS4kZQtjg6Yn/ETlsFpmlQZ64V/tvYMIXhn0oUED12HwEZY3B1/V6/CIYQr8PCitkrpz/ptgn14yXGmbeG3ApK9emLRlgYvGLeSJ+z7iAcaDCo5R1HouiB9v/jBofRaCby3aGXoDd5Z5OsaC7BAm9LN1fCDB4WYr7Bk9QzwybAkKvwWhBhfrGhmqmfuni5+yPkMuallLd3/lMUWNT8uheTqW24Kh3jwLGTd8wxyJ/ggrC/Z/5RNLh6bPmcJQfF6gN3kMlGu5FDh+eiDS28ZWMTIVj13ZRtT1QMFLYQbo0vu4VkQIXdl9+icN6WA9m0njvF6F5JcluFMcoSovqC/lPw/+9iBE8FYupl7nhaRyg2PoTPZ18uOd34B9OKSBbdmJ0/44YG/TDtRFD2U7Dj0L9pJaU5/M5qvPw+H5+i9dBOj23BvGFSkqpSrpU2huP1STtO9oUogoZSrry05P6rHR69ZwZxF7cQURgY3fa6/lA6CasF14l4uKc5CxJ9bBdvYtihtbMpABnciULveS04razQ9+aV4ZSywCsPT64P2esxb2QMWvka4xH9s0a/NU5UAYRmPLc0MtULQvpHegZVW7RDK+ae181+AT/7K6EpfJjzJvRGVvLYYT+PqKo5Kvrbo1Wu7PloNGAK9zvqx9DZHUeuur2XLoXvga7Tz3arDhOBrX4bVfvgld5RvkYuqo5Y5j7Xa1F1xWaEFIFHqGD/UQgg5X6sLRr90SohDXBnW+3pQTgyIg9JkYxf9Yph3XrhKY0H2YU8nMQDZe1XvOA1/+cQFh8nnEh/jjDoZ102McL3tXBqU8NR9nhg4cimA+9tOf3+muRmuOvHEqXf0Q4Dwt9HD8vVKbn5IPGPXXQsOEKT+JJvF8Syb+GmeFH5DWoQA1/FSP5nF43Acb5P8jcL8vewihx8RDd3y+/d1+Qu5FfcGEwRBEARBEARBEHfHv2qXXAHWGtN5AAAAAElFTkSuQmCC',
    mcqs: [
      {
        _id:uuid(),
        question: "Is it necessary for the external script file to contain a <script> tag?",
        options: ["Yes","No","Depends on the type of include","None of the above"],
        answer: "No",
      },
      {
        _id:uuid(),
        question: "Function is Used To Parse a String To Int:",
        options: ["Integer.Parse","Int.Parse","Parse.Int","None"],
        answer: "Int.Parse",
      },
      {
        _id:uuid(),
        question: "Which Of The Dialog Box Display a Message And a Data Entry Field?",
        options: ["Alert()","Prompt()","Confirm()","Msg()"],
        answer: "Prompt()",
      },
      {
        _id:uuid(),
        question: "A Function Associated With An object is Called?",
        options: ["Function","Method","Link","None"],
        answer: 'Method',
      },
      {
        _id:uuid(),
        question: " Which event is Used To check An Empty Text Box ?",
        options: ["Onclick()","OnFocus()","OnBlur()","None"],
        answer: "OnBlur()",
      },
    ],
    catergoryName: "JavaScript",
  },
  {
    _id:uuid(),
    title: `Array and Functions`,
    totalScore: 20,
    imgUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8NXp3ib02zvQQOGdvxVouCqKLdc_uMDiU2A&usqp=CAU',
    mcqs: [
      {
        _id:uuid(),
        question: "The pop() method of the array does which of the following task ?",
        options: ["decrements the total length by 1","increments the total length by 1","prints the first element but no effect on the length","None of the mentioned"],
        answer: "decrements the total length by 1",
      },
      {
        _id:uuid(),
        question: "Function is Used To Parse a String To Int:",
        options: ["Integer.Parse","Int.Parse","Parse.Int","None"],
        answer: "Int.Parse",
      },
      {
        _id:uuid(),
        question: "The reduce and reduceRight methods follow a common operation called",
        options: ["filter and fold","inject and fold","finger and fold","fold"],
        answer: "inject and fold",
      },
      {
        _id:uuid(),
        question: "The method or operator used to identify the array is",
        options: ["Function","Method","Link","None"],
        answer: 'Method',
      },
      {
        _id:uuid(),
        question: " Which event is Used To check An Empty Text Box ?",
        options: ["isarrayType()","==","===","typeof"],
        answer: "typeof",
      },
    ],
    catergoryName: "JavaScript",
  },
  {
    _id:uuid(),
    title: "Express",
    totalScore: 20,
    imgUrl:"https://colorlib.com/cdn-cgi/image/width=1024,height=758,fit=crop,quality=80,format=auto,onerror=redirect,metadata=none/wp-content/uploads/sites/2/node.js-logo.png",
    mcqs: [
      {
        _id:uuid(),
        question: "What is the way to store local variables that can be accessed within the application?",
        options: ["Using Config file","Using database","Using app.locals","Using app.storage"],
        answer: "Using app.locals",
      },
      {
        _id:uuid(),
        question: "In combination with a request method, root paths define the endpoints at which requests can be made. Which of the following are valid forms of route path?",
        options: ["strings","string patterns","regular expressions","All of the above"],
        answer: "All of the above",
      },
      {
        _id:uuid(),
        question: "How is it possible to create chainable route handlers for a route path in Express.js?",
        options: ["Using app.route()","Using app.routes()","Using app.router()","Using app.routing()"],
        answer: "Using app.route()",
      },
      {
        _id:uuid(),
        question: "What is the meaning of templating in Express.js?",
        options: ["Pug","EJS","Mustache","All of the above."],
        answer: 'All of the above.',
      },
      {
        _id:uuid(),
        question: "Where are the captured values populated regarding route parameters?",
        options: ["app.locals object","req.data object","req.params object","None of the above."],
        answer: "req.params object",
      },
    ],
    catergoryName: "Node",
  },
  {
    _id:uuid(),
    title: "TypeScript",
    imgUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/512px-Typescript_logo_2020.svg.png",
    totalScore: 20,
    mcqs: [
      {
        _id:uuid(),
        question: " What are the benefits of Typescript?",
        options: ["It helps in code structuring","Use class based object oriented programming","Impose coding guidelines","All of the above"],
        answer: "All of the above",
      },
      {
        _id:uuid(),
        question: "Which of the following are features of typeScript?",
        options: ["TypeScript is just JavaScript","TypeScript supports other JS libraries","TypeScript is portable","All of the above"],
        answer: "All of the above",
      },
      {
        _id:uuid(),
        question: "TypeScript is ?",
        options: ["case-sensitive","Case-insensitive","depends on typescript version","Can not say"],
        answer: "case-sensitive",
      },
      {
        _id:uuid(),
        question: "Extension of typescript is?",
        options: ["d.ty","d.tp","d.ts","d.td"],
        answer: 'd.ts',
      },
      {
        _id:uuid(),
        question: " What are different components of TypeScript?",
        options: ["Language","Compiler","Language Service","All of the above"],
        answer: "All of the above",
      },
    ],
    catergoryName: "TypeScript",
  },
];
