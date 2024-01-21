import { render, fireEvent, screen } from "@testing-library/react"
import Counter from "../Counter"
import renderer from "react-test-renderer"

// Method 1

// test('Counter', () => {
//     render(<Counter />);
//     const counterName = screen.getByTestId("counter-name")
//     expect(counterName).toBeInTheDocument();

// const count = screen.getByTestId("count")
// const increment = screen.getByTestId("incCount")

// // interact with elements

// fireEvent.click(increment)
// expect(count).toHaveTextContent("1")

//   });


// Method 2

  describe('Counter', () => {

    // function 1

    it("should inc counter", () => {
        render(<Counter />);
    
    const count = screen.getByTestId("count")
    const increment = screen.getByTestId("incCount")
    
    
    fireEvent.click(increment)
    
    expect(count).toHaveTextContent("1")
      })
    
    //   function 2

    it("should dec counter", () => {
        render(<Counter />);
    
    const count = screen.getByTestId("count")
    const decrement = screen.getByTestId("decCount")
    
    
    fireEvent.click(decrement)
    
    expect(count).toHaveTextContent("-1")
      })
  })

//   snapshot

describe('Counter Snapshot', () => {
  it("should matches DOM Snapshot", () => {
    const tree = renderer.create(<Counter />).toJSON();
    expect(tree).toMatchSnapshot();
  })
})

  



