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

import { dataCitySelectList, FontFamily } from '../../lib/options';
import { dataCateSelectList } from '../../lib/options';
const PLACEHOLDER_IMG = 'https://fomantic-ui.com/images/wireframe/image.png';

const uploadPostSchema = Yup.object().shape({
  imageUrl: Yup.string().url().required(' A url is required '),
  caption: Yup.string().max(2200, 'Caption has reach the character limited'),
});

const FormikPostUploader = () => {
  const [thumbnailUrl, setThumbnailUrl] = useState(PLACEHOLDER_IMG);
  const [chooseCity, setChooseCity] = useState();
  const [Category, setCategory] = useState([]);
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
          <ScrollView style={{ marginBottom: 170 }}>
            <View
              style={{
                marginTop: 20,
                justifyContent: 'space-between',
                flexDirection: 'row',
                overflow: 'hidden',
              }}>
              <Image
                source={{
                  uri: PLACEHOLDER_IMG ? thumbnailUrl : PLACEHOLDER_IMG,
                }}
                style={{ height: 100, width: 100 }}
              />
              <View style={{ flex: 1, marginLeft: 12 }}>
                <TextInput
                  placeholder="Write a caption ..."
                  placeholderTextColor={'gray'}
                  multiline
                  style={{ color: 'black', fontSize: 20 }}
                  onChangeText={handleChange('caption')}
                  onBlur={handleBlur('caption')}
                  value={values.caption}
                  numberOfLines={3}
                />
              </View>
            </View>
            <Divider width={1} orientation="horizontal" />
            <Text
              style={{
                fontFamily: FontFamily.bold,
                fontSize: 20,
                color: 'black',
              }}>
              Location Name :
            </Text>
            <View
              style={{
                flex: 1,
                marginLeft: 12,
                backgroundColor: 'white',
                borderRadius: 10,
                elevation: 5,
                margin: 10,
                borderColor: 'black',
                borderWidth: 1,
              }}>
              <TextInput
                placeholder="location ..."
                placeholderTextColor={'gray'}
                multiline
                style={{ color: 'black', fontSize: 17, marginLeft: 12 }}
                onChangeText={handleChange('location')}
                onBlur={handleBlur('location')}
                value={values.location}
                numberOfLines={1}
              />
            </View>
            <Text
              style={{
                fontFamily: FontFamily.bold,
                fontSize: 20,
                color: 'black',
              }}>
              Image Url :
            </Text>
            <View
              style={{
                backgroundColor: 'white',
                borderRadius: 10,
                elevation: 5,
                margin: 10,
                borderColor: 'black',
                borderWidth: 1,
              }}>
              <View style={{ marginLeft: 15 }}>
                <TextInput
                  onChange={e => setThumbnailUrl(e.nativeEvent.text)}
                  placeholder="Enter Image Url"
                  placeholderTextColor={'gray'}
                  style={{ color: 'black', fontSize: 17 }}
                  onChangeText={handleChange('imageUrl')}
                  onBlur={handleBlur('imageUrl')}
                  value={values.imageUrl}
                />
              </View>
            </View>
            {errors.imageUrl && (
              <Text style={{ fontSize: 14, color: 'red' }}>
                {errors.imageUrl}
              </Text>
            )}
            <Text
              style={{
                fontSize: 20,
                fontFamily: FontFamily.bold,
                color: 'black',
              }}>
              Choose category :
            </Text>
            <View style={{ margin: 8 }}>
              <MultipleSelectList
                setSelected={(val: any) => setCategory(val)}
                data={dataCateSelectList}
                save="value"
                onSelect={() => console.log(Category)}
                label="Categories"
                notFoundText="No data exists"
                fontFamily={FontFamily.bold}
                labelStyles={{
                  fontFamily: FontFamily.bold,
                  color: 'orange',
                  fontSize: 15,
                }}
                inputStyles={{
                  color: 'gray',
                  fontFamily: FontFamily.bold,
                  fontSize: 15,
                }}
                boxStyles={{
                  backgroundColor: 'white',
                  borderColor: 'black',
                  borderWidth: 1,
                }}
              />
            </View>
            <Text
              style={{
                fontSize: 20,
                fontFamily: FontFamily.bold,
                color: 'black',
              }}>
              Choose city :
            </Text>
            <View style={{ margin: 15 }}>
              <SelectList
                setSelected={(val: any) => setChooseCity(val)}
                data={dataCitySelectList}
                save="value"
                boxStyles={{ backgroundColor: 'white', borderColor: 'black',
                borderWidth: 1 }}
                inputStyles={{
                  color: 'gray',
                  fontFamily: FontFamily.bold,
                  fontSize: 15,
                }}
                onSelect={() => console.log(chooseCity)}
              />
            </View>
            <View style={{ borderRadius: 5, backgroundColor: 'red' }}>
              <Button
                onPress={handleSubmit}
                title="Share"
                disabled={!isValid}
                color={'orange'}
              />
            </View>
          </ScrollView>
        </SafeAreaView>
      )}
    </Formik>
  );
};

export default FormikPostUploader;
