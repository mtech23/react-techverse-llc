
import './App.css';
import Router from './router';
import { ZendeskAPI } from "react-zendesk";
import Zendesk from "react-zendesk";
const ZENDESK_KEY = "73305a79-f6b0-4b90-ab2b-f83f0361e8ad";
function App() {
  ZendeskAPI("webWidget", "setLocale", "de");
  const setting = {
    color: {
      theme: "#000"
    },
    launcher: {
      chatLabel: {
        "en-US": "Need Help"
      }
    },
    contactForm: {
      fields: [
        { id: "description", prefill: { "*": "My pre-filled description" } }
      ]
    }
  };
  return (
    <div>
      <Zendesk defer zendeskKey={ZENDESK_KEY} {...setting} onLoaded={() => console.log('is loaded')} />
        <Router/>
    
    </div>
  );
}

export default App;
