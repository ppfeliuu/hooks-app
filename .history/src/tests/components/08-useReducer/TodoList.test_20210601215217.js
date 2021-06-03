import { shallow } from "enzyme";
import { TodoList } from "../../../components/08-useReducer/TodoList";


describe('test todo list', () => {

    test('should show component', () => {

        const wrapper = shallow(<TodoList todos, handleDelete, handleToggle/>)
        
    })
    
    
});