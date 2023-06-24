import '@tabler/core/dist/css/tabler.min.css';
import { Header } from './components/header/Header';
import Card from './components/card/Card';
import CardBody from './components/card/CardBody';
import Brand from './components/header/Brand';

function App() {

  return (
    <>
      <Header></Header>
      <main className='page-wrapper'>
        <div className='page-body'>
          <div className='container-xl'>
            <article className='row row-deck row-cards'>
              <Card>
                <CardBody key={"hola"}/>
                <Brand></Brand>
              </Card>

            </article>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
