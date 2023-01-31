import Head from 'next/head';
import Image from 'next/image';
import Logo from '../assets/vacationfyilogo.png';
import { useState } from 'react';

const Home = () => {
  const [userInput, setUserInput] = useState('');

  const [apiOutput, setApiOutput] = useState('')
  const [isGenerating, setIsGenerating] = useState(false)
  
  const callGenerateEndpoint = async () => {
    setIsGenerating(true);
    
    console.log("Calling OpenAI...")
    const response = await fetch('/api/generate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ userInput }),
    });
  
    const data = await response.json();
    const { output } = data;
    console.log("OpenAI replied...", output.text)
    setApiOutput(`${output.text}`);
   setIsGenerating(false);
}




  const onUserChangedText = (event) => {
    console.log(event.target.value);
    setUserInput(event.target.value);
  };
  return (
    <div className="root">
      <Head>
        <title>AI powered Travel Agent for Vacation.Fyi</title>
      </Head>
      <div className="container">
        <div className="header">
          <div className="header-title">
            <h1>Vacation.Fyi</h1>
          </div>
          <div className="header-title">
            <h3>AI Powered Travel Agent</h3>
          </div>
          <div className="header-subtitle">
            <h2>Start by asking: "How can AI ChatGPT help plan a dream vacation?"</h2>
          </div>
        </div>
         
         {/* Add this code here*/}
               
  <div className="prompt-container">
  <textarea
    placeholder="start typing here"
    className="prompt-box"
    value={userInput}
    onChange={onUserChangedText}
  />
  {/* New code I added here */}
  <div>
  
  <div className="prompt-buttons">
  <a
    className={isGenerating ? 'generate-button loading' : 'generate-button'}
    onClick={callGenerateEndpoint}
  >
    <div className="generate">
    {isGenerating ? <span className="loader"></span> : <p>Generate</p>}
    </div>
  </a>
</div>
  
{/* New code I added here */}
{apiOutput && (
  <div className="output">
    <div className="output-header-container">
      <div className="output-header">
        <h3>Output</h3>
      </div>
    </div>
    <div className="output-content">
      <p>{apiOutput}</p>
    </div>
  </div>
)}
</div>




</div>

         
      </div>
      
      
      
      <div className="badge-container grow">
        <a
          href="https://vacation.fyi"
          target="_blank"
          rel="noreferrer"
        >
          <div className="badge">
            <Image src={Logo} alt="Vacation.Fyi" />
            <p>Vacation.Fyi</p>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Home;
