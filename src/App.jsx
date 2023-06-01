import { Container } from 'react-bootstrap';
import './App.css'
import HolaMundo from './components/HolaMundo.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {

  return (
    <>
        <Container className='main p-5'>
    <HolaMundo receptor='my friend'></HolaMundo>
        </Container>
        <footer className="bg-dark text-center text-light py-4">
        <p>&copy; Todos los derechos reservados </p>
      </footer> 
   
    </>
  )
}

export default App
