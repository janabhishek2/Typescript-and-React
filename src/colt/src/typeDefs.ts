import axios from "axios";
import lodash from 'lodash';

interface Todo {
    userId: number,
    id: number,
    title: string,
    completed: boolean
}

axios.get<Todo>("https://jsonplaceholder.typicode.com/todos/1")
.then((res) => {
    let { data } = res;
    console.log(data);
})
.catch((err) => {
    console.log(err);
})