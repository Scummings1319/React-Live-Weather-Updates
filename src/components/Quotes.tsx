import "./Quotes.css";
import axios from "axios";
//npm install axios in terminal
import { useState } from "react";
interface Quote {
  text: string;
  author: string | null;
}
export default function Quotes() {
  const [quotes, setQuotes] = useState<Quote[]>([]);
  axios
    .get("https://grandcircusco.github.io/demo-apis/quotes.json")
    .then((response) => {
      setQuotes(response.data);
    });
  //axios.get("") gets data from link
  return (
    <div className="body">
      <h1 className="DailyQuotes">Daily Quotes</h1>
      <div className="quotes">
        <ul>
          {quotes.map((quote, index) => (
            <li>
              {quote.text} - {quote.author}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
