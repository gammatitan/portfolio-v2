import { useState } from 'react';
import { useRouter } from 'next/router';
import Checkbox from '../../../components/Checkbox';
import CheckboxGroup from '../../../components/CheckboxGroup';
import Input from '../../../components/Input';
import ButtonRequest from '../../../components/ButtonRequest';
import Section from '../../../components/Section';
import Typography from '../../../components/Typography';
import RequestState from '../../../constants/requestState';
import { Formik } from 'formik';
import request from '../../../helpers/request';
import { ENDPOINTS } from '../../../constants/endpoints';
import InputError from '../../../components/InputError';
import { TrendingText } from './styles';

type FormErrors = {
  name?: string;
  dates?: string;
  nickname?: string;
};

const validateFields = (values) => {
  const errors: FormErrors = {};

  if (!values.name) {
    errors.name = 'Please input your name yo';
  }

  if (!values.nickname) {
    errors.nickname = "Don't be boring make one up";
  }

  if (
    !values.july17 &&
    !values.july24 &&
    !values.july31 &&
    !values.aug7 &&
    !values.unable
  ) {
    errors.dates = "You need to tick one of these mate c'mon";
  }

  if (
    values.unable &&
    (values.july17 || values.july24 || values.july31 || values.aug7)
  ) {
    errors.dates = 'Wtf are you doing here? Make your mind up';
  }

  return errors;
};

const Booking = () => {
  const router = useRouter();
  const [requestState, setRequestState] = useState<null | RequestState>(null);

  return (
    <Section>
      <Typography variant="subheading">Book your slot 📅</Typography>
      <Formik
        validateOnChange={false}
        validate={validateFields}
        onSubmit={async (values) => {
          setRequestState(RequestState.Loading);

          try {
            request.post(ENDPOINTS.EVENTS_GARDEN_PARTY_2021, {
              body: { ...values },
            });

            router.push('/events/garden-party-2021/confirmation');
          } catch {
            setRequestState(RequestState.Error);
          }
        }}
        initialValues={{
          name: '',
          nickname: '',
          songRequest: '',
          july17: false,
          july24: false,
          july31: false,
          aug7: false,
          unable: false,
        }}
      >
        {({ values, errors, handleSubmit, handleChange }) => (
          <form>
            <Input
              gutterBottom
              name="name"
              value={values.name}
              label="Your Name*"
              error={errors.name}
              onChange={handleChange}
            />
            <Input
              gutterBottom
              name="nickname"
              value={values.nickname}
              onChange={handleChange}
              label="Party Nickname*"
              placeholder="e.g. Jezza"
              error={errors.nickname}
            />
            <CheckboxGroup
              gutterBottom
              label="What dates can you attend?*"
              error={errors.dates}
            >
              <Checkbox
                id="july17"
                label="Sat 17th July"
                onChange={handleChange}
                checked={values.july17}
              />
              <Checkbox
                id="july24"
                label={
                  <>
                    Sat 24th July <TrendingText>🔥 Most Popular</TrendingText>
                  </>
                }
                onChange={handleChange}
                checked={values.july24}
              />
              <Checkbox
                id="july31"
                label="Sat 31st July"
                onChange={handleChange}
                checked={values.july31}
              />
              <Checkbox
                id="aug7"
                label="Sat 7th Aug"
                onChange={handleChange}
                checked={values.aug7}
              />
              <Checkbox
                id="unable"
                label="I cannot make any of these dates :'("
                onChange={handleChange}
                checked={values.unable}
              />
            </CheckboxGroup>
            <Input
              name="songRequest"
              value={values.songRequest}
              onChange={handleChange}
              label="Song Request"
              placeholder="e.g. Baby - Justin Beiber"
            />
            <ButtonRequest
              loading={requestState === RequestState.Loading}
              type="submit"
              style={{ marginTop: 24 }}
              // @ts-ignore
              onClick={handleSubmit}
            >
              Submit
            </ButtonRequest>
            {requestState === RequestState.Error && (
              <InputError message="Oh no! Something went wrong :(" />
            )}
          </form>
        )}
      </Formik>
    </Section>
  );
};

export default Booking;
