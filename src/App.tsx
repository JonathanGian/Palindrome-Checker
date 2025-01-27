import { useState } from 'react'
import palindromeChecker from './utilities/palindromeChecker'
import './App.css'

function App() {
  const [result, setResult] = useState<string>('')
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  
    const form = e.currentTarget;
    const inputElement = form.elements.namedItem('input') as HTMLInputElement;
  
    if (!inputElement) {
      setResult('Error: Input field not found.');
      return;
    }
  
    const inputValue = inputElement.value;
    const isPalindrome = palindromeChecker(inputValue);
  
    setResult(isPalindrome ? 'Yes, it is a palindrome.' : 'No, it is not a palindrome.');
  };

  return (
    <>
    <main>
      <h1>Palindrome Checker</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="input">Enter a string:</label>
        <input type="text" id="input" name="input" />
        <button type="submit">Check</button>
      </form>
      <p>Result: <span id="result">{result}</span></p>
    </main>
    </>
  )
}

export default App
