import { useCallback, useState } from 'react';
import { Tabs } from './constants';
import './App.css';
export interface FromDataType {
  name: string;
  age: number;
  email: string;
  interests: string[];
  theme: 'light' | 'dark';
}
export interface ErrorStateType {
    ageErrorMessage: string;
    nameErrorMessage: string;
    emailErrorMessage: string;
}
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function isValidEmail(email: string): boolean {
  return emailRegex.test(email);
}
function App() {
  const [activeTab, setActiveTab] = useState<number>(0);
  const [data, setData] = useState<FromDataType>({
    age: 0,
    email: '',
    name: '',
    interests: [],
    theme: 'light',
  });
  const [errorState, setErrorState] = useState<ErrorStateType>({
    ageErrorMessage: '',
    nameErrorMessage: '',
    emailErrorMessage: '',
  });

  const onTabChangeHandler = (index: number): void => {
    setActiveTab(index);
  };

  const onNextClickHandler = useCallback((): void => {
    if (!data.name) {
      setErrorState((prev) => ({
        ...prev,
        nameErrorMessage: 'name cannot be empty.',
      }));
      return;
    } else if (data.name.length < 5) {
      setErrorState((prev) => ({
        ...prev,
        nameErrorMessage: 'Name should be of minimum length 5.',
      }));
      return;
    } else {
      setErrorState((prev) => ({
        ...prev,
        nameErrorMessage: '',
      }));
    }
    if (data.age < 18) {
      setErrorState((prev) => ({
        ...prev,
        ageErrorMessage: 'Age cannot be less than 18.',
      }));
      return;
    } else {
      setErrorState((prev) => ({
        ...prev,
        ageErrorMessage: '',
      }));
    }
    if (!data.email) {
      setErrorState((prev) => ({
        ...prev,
        emailErrorMessage: 'Email cannot be empty.',
      }));
      return;
    } else if (!isValidEmail(data.email)) {
      setErrorState((prev) => ({
        ...prev,
        emailErrorMessage: 'Invalid email.',
      }));
      return;
    } else {
      setErrorState((prev) => ({
        ...prev,
        emailErrorMessage: '',
      }));
    }
    setActiveTab((prev) => prev + 1);
  }, [data]);

  const ActiveTabComponent = Tabs[activeTab].component;
  return (
    <div className="app-container">
      <div className="tab-button--container">
        {Tabs.map((ele, index) => (
          <button
            className={`tab-button ${index === activeTab ? 'active-tab' : ''}`}
            key={ele.name}
            onClick={() => onTabChangeHandler(index)}
          >
            {ele.name}
          </button>
        ))}
      </div>
      <div className="tab-body--container">
        {<ActiveTabComponent data={data} setData={setData} errorState={errorState} />}
      </div>
      <div className="next-prev--container">
        {activeTab !== 0 && (
          <button
            className="tab-button"
            onClick={() => setActiveTab((prev) => prev - 1)}
          >
            Prev
          </button>
        )}
        {activeTab !== Tabs.length - 1 && (
          <button className="tab-button" onClick={onNextClickHandler}>
            Next
          </button>
        )}
        {activeTab === Tabs.length - 1 && (
          <button
            className="tab-button"
            onClick={() => {
              alert('Submitted successfully');
              setData({
                age: 0,
                email: '',
                name: '',
                interests: [],
                theme: 'light',
              });
              setActiveTab(0);
            }}
          >
            Submit
          </button>
        )}
      </div>
    </div>
  );
}

export default App;
