import { useState } from 'react';
import Checkbox from '../../../components/Checkbox';
import CheckboxGroup from '../../../components/CheckboxGroup';
import Input from '../../../components/Input';
import ButtonRequest from '../../../components/ButtonRequest';
import Section from '../../../components/Section';
import Typography from '../../../components/Typography';
import RequestState from '../../../constants/requestState';

const Submission = () => {
  const [requestState, setRequestState] = useState<null | RequestState>(null);
  const [values, setValues] = useState({
    name: '',
    nickname: '',
    songRequest: '',
    dates: {
      july17: false,
      july24: false,
      july31: false,
      aug7: false,
      unable: false,
    },
  });
  const loading = requestState === RequestState.Loading;

  const handleInputChange = (key: string) => (e) => {
    if (loading) {
      return;
    }

    setValues((values) => ({ ...values, [key]: e.target.value }));
  };

  const handleCheckboxChange = (key: string) => () => {
    if (loading) {
      return;
    }

    setValues((values) => ({
      ...values,
      dates: { ...values.dates, [key]: !values.dates[key] },
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setRequestState(RequestState.Loading);
  };

  return (
    <Section>
      <Typography variant="subheading">Book your slot 📅</Typography>
      <form>
        <Input
          name="name"
          value={values.name}
          onChange={handleInputChange('name')}
          label="Your Name*"
          gutterBottom
        />
        <Input
          name="nickname"
          value={values.nickname}
          onChange={handleInputChange('nickname')}
          label="Party Nickname"
          placeholder="e.g. Jezza"
          gutterBottom
        />
        <CheckboxGroup gutterBottom label="What dates can you attend?">
          <Checkbox
            id="july17"
            label="Sat 17th July"
            onChange={handleCheckboxChange('july17')}
            checked={values.dates.july17}
          />
          <Checkbox
            id="july24"
            label="Sat 24th July"
            onChange={handleCheckboxChange('july24')}
            checked={values.dates.july24}
          />
          <Checkbox
            id="july31"
            label="Sat 31st July"
            onChange={handleCheckboxChange('july31')}
            checked={values.dates.july31}
          />
          <Checkbox
            id="aug7"
            label="Sat 7th Aug"
            onChange={handleCheckboxChange('aug7')}
            checked={values.dates.aug7}
          />
          <Checkbox
            id="unable"
            label="I cannot make any of these dates :'("
            onChange={handleCheckboxChange('unable')}
            checked={values.dates.unable}
          />
        </CheckboxGroup>
        <Input
          name="songRequest"
          value={values.songRequest}
          onChange={handleInputChange('songRequest')}
          label="Song Request"
          placeholder="e.g. Baby - Justin Beiber"
        />
        <ButtonRequest
          loading={requestState === RequestState.Loading}
          type="submit"
          onClick={handleSubmit}
          style={{ marginTop: 24 }}
        >
          Submit
        </ButtonRequest>
      </form>
    </Section>
  );
};

export default Submission;
