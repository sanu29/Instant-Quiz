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
    title: "React Hooks",
    totalScore: 20,
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
    title: "JavaScript Array and Functions",
    totalScore: 20,
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
    title: "Node Basics",
    totalScore: 20,
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
    title: "Express",
    totalScore: 20,
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
