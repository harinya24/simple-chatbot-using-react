import "./styles.css";

import ChatBot from "react-simple-chatbot";
import { useNavigate, BrowserRouter } from "react-router-dom";
function App() {
  return (
    <ChatBot
      steps={[
        {
          id: "1",
          message: "Welcome! How can I assist you today?",
          trigger: "2",
        },
        {
          id: "2",
          options: [
            {
              value: "college",
              label: "About College",
              trigger: "college-info",
            },
            {
              value: "admissions",
              label: "About admissions",
              trigger: "admissions-info",
            },
            {
              value: "interview-questions",
              label: "Top interview questions",
              trigger: "interview-questions",
            },
            { value: "study-tips", label: "Study tips", trigger: "study-tips" },
          ],
        },
        {
          id: "college-info",
          message: "XXX is a reputable educational institution located in XXX",
          trigger: "2", // Go back to the initial menu
        },
        {
          id: "admissions-info",
          message: "For admissions, you can contact XXXXXXXXXX",
          trigger: "2", // Go back to the initial menu
        },
        {
          id: "interview-questions",
          message: "Which topic are you interested in for interview questions?",
          trigger: "interview-topic",
        },
        {
          id: "interview-topic",
          options: [
            { value: "dbms", label: "DBMS", trigger: "dbms-questions" },
            { value: "dsa", label: "DSA", trigger: "dsa-questions" },
            {
              value: "cn",
              label: "Computer Networks",
              trigger: "cn-questions",
            },
            {
              value: "os",
              label: "Operating Systems",
              trigger: "os-questions",
            },
            { value: "hr", label: "HR", trigger: "hr-questions" },
          ],
        },
        // Add steps for each interview question category
        {
          id: "dbms-questions",
          message:
            "Here are some top DBMS interview questions...https://www.geeksforgeeks.org/commonly-asked-dbms-interview-questions/",
          trigger: "2", // Go back to the initial menu
        },
        {
          id: "dsa-questions",
          message:
            "Here are some top DSA interview questions...https://www.geeksforgeeks.org/top-100-data-structure-and-algorithms-dsa-interview-questions-topic-wise/",
          trigger: "2", // Go back to the initial menu
        },
        {
          id: "cn-questions",
          message:
            "Here are some top Computer Networks interview questions...https://www.simplilearn.com/computer-networks-interview-questions-article",
          trigger: "2", // Go back to the initial menu
        },
        {
          id: "os-questions",
          message:
            "Here are some top Operating Systems interview questions...https://www.geeksforgeeks.org/operating-systems-interview-questions/",
          trigger: "2", // Go back to the initial menu
        },
        {
          id: "hr-questions",
          message:
            "Here are some top HR interview questions...https://www.coursera.org/in/articles/hr-interview-questions",
          trigger: "2", // Go back to the initial menu
        },
        {
          id: "study-tips",
          message:
            "Here are some study tips: 1. Stay organized, 2. Take breaks, 3. Practice regularly, 4.Take notes, 5.Ask questions.",
          trigger: "2", // Go back to the initial menu
        },
      ]}
      floating={true}
    />
  );
}

export default App;
