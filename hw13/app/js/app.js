import { createStore } from "redux";
import { reducers } from "./reducers";
import { TodosContainer } from "./components/todos-container/todos-container.component";

window.store = createStore(reducers);
$("#app").html(new TodosContainer().html());
