import '@tabler/core/dist/css/tabler.min.css';
import { Header } from './components/header/Header';
import Card from './components/card/Card';
import CardBody from './components/card/CardBody';
import CardTitle from './components/card/CardTitle';
import CardHeader from './components/card/CardHeader';

function App() {

  return (
    <>
      <Header></Header>
      <main className='page-wrapper'>
        <div className='page-body'>
          <div className='container-xl'>
            <article className='row row-deck row-cards'>
              <Card
                sizeRow={4}
                className={"card-sm"}
              >
                <div className="card-status-top bg-green"></div>

                <CardBody>
                  <CardTitle title={"Nose"}/>
                  <a href="#" className="btn btn-success">Success</a>
                </CardBody>
              </Card>
            </article>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
