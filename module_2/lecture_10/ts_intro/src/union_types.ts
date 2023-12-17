// let item : string | number;

// item = 1;
// item = 'hello';
//  item = true;

// type Admin = {
//     id: number;
//     username: string;
//     role: string;
// }

// const admin: any = {
//     id: 1,
//     username: 'alex',
//     role: "admin"
// }

// function hello(value : string | number){
//     if(typeof value === 'string'){
//         const name: string = value;
//         console.log(typeof name);
//     } else {
//         const number: number = value;
//         console.log("We got a number");
//     }
// }

// hello(1);

type User = {
  id: number;
  username: string;
  age?: number;
};

const user: User = {
    id: 1,
    username: "alex",
}


