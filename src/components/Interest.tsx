import type { TabsProp } from '../constants';
import './Tabs.css';

const Interest: React.FC<TabsProp> = ({ data, setData }) => {
  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    if (e.target.checked) {
      const interests = data.interests;
      interests.push(e.target.name);
      setData((prev) => ({ ...prev, interests }));
    } else {
      const interests = data.interests.filter((ele) => ele !== e.target.name);
      setData((prev) => ({ ...prev, interests }));
    }
  };
  return (
    <div className="tab--container">
      <div className="input--container">
        <div>
          <label htmlFor="Swimming">Swimming</label>
          <input
            type="checkbox"
            id="Swimming"
            name="Swimming"
            onChange={onChangeHandler}
            checked={data.interests.includes('Swimming')}
          />
        </div>
      </div>
      <div className="input--container">
        <div>
          <label htmlFor="Cricket">Cricket</label>
          <input
            type="checkbox"
            id="Cricket"
            name="Cricket"
            onChange={onChangeHandler}
            checked={data.interests.includes('Cricket')}
          />
        </div>
      </div>
      <div className="input--container">
        <div>
          <label htmlFor="Coding">Coding</label>
          <input
            type="checkbox"
            id="Coding"
            name="Coding"
            onChange={onChangeHandler}
            checked={data.interests.includes('Coding')}
          />
        </div>
      </div>
    </div>
  );
};

export default Interest;
