import './CreateTodoButton.css'

function CreateTodoButton(props) {
  return (
    <button
      className="CreateTodoButton" onClick={
        (event) =>{
          console.log('Le diste click al boton') 
          console.log(event)
        }
      }
      >+</button >
  );
}

export { CreateTodoButton };






