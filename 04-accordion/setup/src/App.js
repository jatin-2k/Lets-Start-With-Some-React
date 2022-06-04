import React, { useState } from 'react';
import data from './data';
import Question from './Question';
import SingleQuestion from './Question';
function App() {
  const [questions, setOuestions] = useState(data);

  return (
    <main>
      <div className='container'>
        <h3>Question and their answers</h3>
        <section>
        {
          questions.map((question, index) => {
            return (
              <Question key={question.id} {...question}/>
            )
          })
        }
        </section>
        </div>
    </main>
  );
}

export default App;
