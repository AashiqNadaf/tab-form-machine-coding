import type { TabsProp } from '../constants';

const Settings: React.FC<TabsProp> = ({ data, setData }) => {
  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setData((prev) => ({
      ...prev,
      theme: e.target.name.toLowerCase() as 'light' | 'dark',
    }));
  };
  return (
    <div className="tab--container">
      <div className="input--container">
        <div>
          <label htmlFor="Dark">Dark</label>
          <input
            type="radio"
            id="Dark"
            name="Dark"
            onChange={onChangeHandler}
            checked={data.theme === 'dark'}
          />
        </div>
      </div>
      <div className="input--container">
        <div>
          <label htmlFor="Light">Light</label>
          <input
            type="radio"
            id="Light"
            name="Light"
            onChange={onChangeHandler}
            checked={data.theme === 'light'}
          />
        </div>
      </div>
    </div>
  );
};

export default Settings;
