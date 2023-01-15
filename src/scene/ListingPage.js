import React, {useEffect} from 'react';
import {StyleSheet, View, FlatList} from 'react-native';
import {useRestaurantData} from './../redux-store/restaurant/restaurant.hooks';

import SecondaryNavBar from '../components/SecondaryNavBar';
import Card from './../components/Card';
import Loader from '../components/Loader';

import COLORS from './../const/colors';

const PAGE_TITLE = 'Restaurant List';

const renderItem = ({item = {}}) => <Card data={item} />;

const keyExtractor = item => item.id.toString();

const ListingPage = () => {
  const {restaurantList, loading, getRestaurantList} = useRestaurantData();

  useEffect(() => {
    getRestaurantList();
  }, []);

  return (
    <>
      <View style={styles.container}>
        <Loader visible={loading} />
        <SecondaryNavBar title={PAGE_TITLE} />
        <View style={styles.listView}>
          {restaurantList?.length > 0 ? (
            <FlatList
              data={restaurantList}
              renderItem={renderItem}
              showsVerticalScrollIndicator={false}
              keyExtractor={keyExtractor}
              maxToRenderPerBatch={10}
              windowSize={10}
            />
          ) : null}
        </View>
      </View>
    </>
  );
};

export default ListingPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    paddingHorizontal: 20,
  },
  listView: {
    flex: 1,
    paddingTop: 50,
  },
  sepratorStyle: {
    paddingVertical: 5,
  },
});
