import { shallow } from "enzyme";
import { TodoList } from "../../../components/08-useReducer/TodoList";
import { demoTodos } from "../../fixtures/demoTodos";


describe('test todo list', () => {

    const handleDelete = jest.fn();
  const handleToogle = jest.fn();
    
    const wrapper = shallow(<TodoList todos={demoTodos}, handleDelete={handleDelete}, handleToggle={handleToogle} />)


    test('should show component', () => {

        
    })
    
    
});