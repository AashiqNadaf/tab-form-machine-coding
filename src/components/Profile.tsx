import type { TabsProp } from '../constants';
import './Tabs.css';

const Profile: React.FC<TabsProp> = ({ data, setData, errorState }) => {
  const onChangeHandler = (name: string, value: string | number) => {
    setData((prev) => ({ ...prev, [name]: value }));
  };
  return (
    <div className="tab--container">
      <div className="input--container">
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            value={data.name}
            id="name"
            onChange={(e) => onChangeHandler('name', e.target.value)}
            className={errorState.nameErrorMessage ? 'error-state' : ''}
          />
        </div>
        {errorState.nameErrorMessage && <p>{errorState.nameErrorMessage}</p>}
      </div>
      <div className="input--container">
        <div>
          <label htmlFor="age">Age</label>
          <input
            type="number"
            value={data.age}
            id="age"
            onChange={(e) => onChangeHandler('age', e.target.value)}
            className={errorState.ageErrorMessage ? 'error-state' : ''}
          />
        </div>
        {errorState.ageErrorMessage && <p>{errorState.ageErrorMessage}</p>}
      </div>
      <div className="input--container">
        <div>
          <label htmlFor="email">E-mail</label>
          <input
            type="email"
            value={data.email}
            id="email"
            onChange={(e) => onChangeHandler('email', e.target.value)}
            className={errorState.emailErrorMessage ? 'error-state' : ''}
          />
        </div>
        {errorState.emailErrorMessage && <p>{errorState.emailErrorMessage}</p>}
      </div>
    </div>
  );
};

export default Profile;
