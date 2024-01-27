import PropTypes from 'prop-types';
import React, { useEffect, useState, Suspense } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { withErrorApi } from '@hoc-helper/withErrorApi';

import PersonPhoto from '@Components/PersonPage/PersonPhoto';
import PersonInfo from '@Components/PersonPage/PersonInfo';
import PersonLinkBack from '@Components/PersonPage/PersonLinkBack';

import UiLoading from '@ui/UiLoading';

import { getApiResource } from '@utils/network';
import { getPeopleImage } from '@services/getPeopleData';
import { API_PERSON } from '@constants/api';

import styles from './PersonPage.module.css';

const PersonFilms = React.lazy(() =>
  import('@Components/PersonPage/PersonFilms')
);

const PersonPage = ({ setErrorApi }) => {
  const [personId, setPersonId] = useState(null);
  const [personInfo, setPersonInfo] = useState(null);
  const [personName, setPersonName] = useState(null);
  const [personPhoto, setPersonPhoto] = useState(null);
  const [personFilms, setPersonFilms] = useState(null);
  const [personFavorite, setPersonFavorite] = useState(false);

  const storeData = useSelector((state) => state.favoriteReducer);

  const { id } = useParams();

  useEffect(() => {
    (async () => {
      const res = await getApiResource(`${API_PERSON}/${id}/`);

      storeData[id] ? setPersonFavorite(true) : setPersonFavorite(false);

      setPersonId(id);

      if (res) {
        setPersonInfo([
          { title: 'Height', data: res.height },
          { title: 'Weight', data: res.mass },
          { title: 'Hair Color', data: res.hair_color },
          { title: 'Skin Color', data: res.skin_color },
          { title: 'Eye Color', data: res.eye_color },
          { title: 'Birth Year', data: res.birth_year },
          { title: 'Gender', data: res.gender },
        ]);
        setPersonName(res.name);
        setPersonPhoto(getPeopleImage(id));

        res.films.length && setPersonFilms(res.films);
      }

      setErrorApi(!res);
    })();
  }, []);

  return (
    <>
      <PersonLinkBack />

      <div className={styles.wrapper}>
        <span className={styles.person__name}>{personName}</span>

        <div className={styles.container}>
          <PersonPhoto
            personId={personId}
            personPhoto={personPhoto}
            personName={personName}
            personFavorite={personFavorite}
            setPersonFavorite={setPersonFavorite}
          />

          {personInfo && <PersonInfo personInfo={personInfo} />}

          {personFilms && (
            <Suspense fallback={<UiLoading />}>
              <PersonFilms personFilms={personFilms} />
            </Suspense>
          )}
        </div>
      </div>
    </>
  );
};

PersonPage.propTypes = {
  setErrorApi: PropTypes.func,
};

export default withErrorApi(PersonPage);
