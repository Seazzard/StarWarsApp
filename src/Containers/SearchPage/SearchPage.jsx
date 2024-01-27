import { useCallback, useEffect, useState } from 'react';
import { debounce } from 'lodash';
import PropTypes from 'prop-types';
import { withErrorApi } from '@hoc-helper/withErrorApi';
import { getApiResource } from '@utils/network';
import { getPeopleId, getPeopleImage } from '@services/getPeopleData';
import { API_SEARCH } from '@constants/api';
import UiInput from '@ui/UiInput';
import SearchPageInfo from '@Components/SearchPage/SearchPageInfo';
import styles from './SearchPage.module.css';

const SearchPage = ({ setErrorApi }) => {
  const [inputSearchValue, setInputSearchValue] = useState('');
  const [people, setPeople] = useState([]);

  const getResponse = async (param) => {
    const res = await getApiResource(API_SEARCH + param);

    if (res) {
      const peopleList = res.results.map(({ name, url }) => {
        const id = getPeopleId(url);
        const img = getPeopleImage(id);

        return {
          id,
          name,
          img,
        };
      });

      setPeople(peopleList);
    }
    setErrorApi(!res);
  };

  useEffect(() => {
    getResponse('');
  }, []);

  const debouncedGetResponse = useCallback(
    debounce((value) => getResponse(value), 300),
    []
  );

  const handleInputChange = (value) => {
    setInputSearchValue(value);
    debouncedGetResponse(value);
  };

  return (
    <>
      <h1 className="header__text">Search</h1>

      <UiInput
        value={inputSearchValue}
        handleInputChange={handleInputChange}
        placeholder="Input Character's name"
        classes={styles.input__search}
      />

      <SearchPageInfo people={people} />
    </>
  );
};

SearchPage.propTypes = {
  setErrorApi: PropTypes.func,
};

export default withErrorApi(SearchPage);
