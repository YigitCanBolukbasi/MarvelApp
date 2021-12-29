import React from 'react';
import {useRoute} from '@react-navigation/native';
import Config from 'react-native-config';

import useFetch from '../../hooks/useFetch/useFetch';
import ComicDetail from '../../components/ComicDetail';
import Loading from '../../components/Loading';
import Error from '../../components/Error';

const DetailPage = () => {
  const route = useRoute();
  const {id} = route.params;
  const {
    data: comicDetail,
    loading,
    error,
  } = useFetch(
    `${Config.API_URL}/comics/${id}?ts=1&apikey=${Config.API_KEY}&hash=${Config.API_HASH}`,
  );

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }

  if (!comicDetail) {
    return null;
  }

  return <ComicDetail comicDetail={comicDetail} />;
};

export default DetailPage;
