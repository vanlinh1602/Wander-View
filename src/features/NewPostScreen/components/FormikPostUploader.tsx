import { Formik } from 'formik';
import { Divider, ScrollView } from 'native-base';
import React, { useState } from 'react';
import { Button, Image, Text, TextInput, View } from 'react-native';
import {
  MultipleSelectList,
  SelectList,
} from 'react-native-dropdown-select-list';
import { SafeAreaView } from 'react-native-safe-area-context';
import * as Yup from 'yup';

import { categories, dataCitySelectList } from '../../../lib/options';
import styles from './styles';
const PLACEHOLDER_IMG = 'https://fomantic-ui.com/images/wireframe/image.png';

const uploadPostSchema = Yup.object().shape({
  imageUrl: Yup.string().url().required(' A url is required '),
  caption: Yup.string().max(2200, 'Caption has reach the character limited'),
});

const FormikPostUploader = () => {
  const [thumbnailUrl, setThumbnailUrl] = useState(PLACEHOLDER_IMG);
  const [chooseCity, setChooseCity] = useState();
  const [Category, setCategory] = useState([]);
  const categoryOptions = categories.map(category => category.title);

  return (
    <Formik
      initialValues={{
        caption: '',
        imageUrl: '',
        location: '',
      }}
      onSubmit={values => console.log(values)}
      validationSchema={uploadPostSchema}
      validateOnMount={true}>
      {({
        handleBlur,
        handleChange,
        handleSubmit,
        values,
        errors,
        isValid,
      }) => (
        <SafeAreaView>
          <ScrollView style={styles.scollViewStyle}>
            <View style={styles.upperView}>
              <Image
                source={{
                  uri: PLACEHOLDER_IMG ? thumbnailUrl : PLACEHOLDER_IMG,
                }}
                style={styles.imageStyle}
              />
              <View style={styles.viewWriteCap}>
                <TextInput
                  placeholder="Write a caption ..."
                  placeholderTextColor={'gray'}
                  multiline
                  style={styles.inputCaption}
                  onChangeText={handleChange('caption')}
                  onBlur={handleBlur('caption')}
                  value={values.caption}
                  numberOfLines={3}
                />
              </View>
            </View>
            <Divider width={1} orientation="horizontal" />
            <Text style={styles.locationText}>Location Name :</Text>
            <View style={styles.locationView}>
              <TextInput
                placeholder="location ..."
                placeholderTextColor={'gray'}
                multiline
                style={styles.locationInputText}
                onChangeText={handleChange('location')}
                onBlur={handleBlur('location')}
                value={values.location}
                numberOfLines={1}
              />
            </View>
            <Text style={styles.imageUri}>Image Url :</Text>
            <View style={styles.imageUriView}>
              <View style={{ marginLeft: 15 }}>
                <TextInput
                  onChange={e => setThumbnailUrl(e.nativeEvent.text)}
                  placeholder="Enter Image Url"
                  placeholderTextColor={'gray'}
                  style={styles.textInputImageUrl}
                  onChangeText={handleChange('imageUrl')}
                  onBlur={handleBlur('imageUrl')}
                  value={values.imageUrl}
                />
              </View>
            </View>
            {errors.imageUrl && (
              <Text style={styles.errorText}>{errors.imageUrl}</Text>
            )}
            <Text style={styles.cateText}>Choose category :</Text>
            <View style={{ margin: 15 }}>
              <MultipleSelectList
                setSelected={(val: any) => setCategory(val)}
                data={categoryOptions}
                save="value"
                onSelect={() => console.log(Category)}
                label="Categories"
                boxStyles={styles.boxSelect}
              />
            </View>
            <Text style={styles.cateText}>Choose city :</Text>
            <View style={{ margin: 15 }}>
              <SelectList
                setSelected={(val: any) => setChooseCity(val)}
                data={dataCitySelectList}
                save="value"
                boxStyles={styles.boxSelect}
                inputStyles={styles.boxTextInput}
                onSelect={() => console.log(chooseCity)}
              />
            </View>
            <Button
              onPress={() => handleSubmit()}
              title="Share"
              disabled={!isValid}
              color={'orange'}
            />
          </ScrollView>
        </SafeAreaView>
      )}
    </Formik>
  );
};

export default FormikPostUploader;
