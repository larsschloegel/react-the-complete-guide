export default function (){
    console.log("anonymous function")
  }

  export default ()=> {
    console.log("short anonymous function")
  }

  export default  (firstParam, secondParam) => {
    console.log("arrow function with params")
  }

  export default onParam => {

  }

  export default number => {
    return number * 3;
  }

  //3. returning object

  export default number => { age: number};