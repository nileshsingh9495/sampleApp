import {openDatabase} from 'react-native-sqlite-storage';

const db = openDatabase({name: 'RestaurantApp.db'});

export const executeQuery = (sql, params = []) =>
  new Promise((resolve, reject) => {
    db.transaction(trans => {
      trans.executeSql(
        sql,
        params,
        (tx, results) => {
          resolve(results);
        },
        error => {
          reject(error);
        },
      );
    });
  });

export const createTable = async () => {
  let selectQuery =
    "SELECT name FROM sqlite_master WHERE type='table' AND name='restaurant_list'";
  const result = await executeQuery(selectQuery, []);
  const {rows = 0} = result || {};
  if (rows?.length == 0) {
    const dropQuery = 'DROP TABLE IF EXISTS restaurant_list';
    const createQuery =
      'CREATE TABLE IF NOT EXISTS restaurant_list (id INTEGER PRIMARY KEY AUTOINCREMENT, title VARCHAR(50), latitude VARCHAR(50), longitude VARCHAR(50), rating DECIMAL(2,1),images TINYTEXT)';
    await executeQuery(dropQuery, []);
    await executeQuery(createQuery, []);

    console.log('SQLite Database and Table Successfully Created...');
  } else {
    console.log('Table is Already Created');
  }
};

export const addRestaurantToLocalDB = async (data = []) => {
  let addQuery =
    'INSERT INTO restaurant_list (title, latitude,longitude,rating,images) VALUES';
  for (let i = 0; i < data.length; ++i) {
    addQuery =
      addQuery +
      "('" +
      data[i].title + //title
      "','" +
      data[i].latitude + //latitude
      "','" +
      data[i].longitude + //longitude
      "','" +
      data[i].rating + //rating
      "','" +
      data[i].images[0].url + //images
      "')";
    if (i !== data.length - 1) {
      addQuery = addQuery + ',';
    }
  }
  await executeQuery(addQuery, []);
};

export const selectRestaurantList = async () => {
  const selectQuery = 'SELECT * from restaurant_list';
  const results = await executeQuery(selectQuery, []);
  const temp = [];
  for (let i = 0; i < results.rows.length; ++i) {
    const data = {
      ...results.rows.item(i),
      images: [
        {
          url: results.rows.item(i).images,
        },
      ],
    };
    temp.push(data);
  }

  return temp;
};
