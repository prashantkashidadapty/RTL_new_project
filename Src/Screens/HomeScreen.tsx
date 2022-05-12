import React from 'react';
import { StyleSheet,View, Text,TextInput,I18nManager,} from 'react-native';
import RNRestart from 'react-native-restart';
import {useTranslation} from 'react-i18next';
import CustomButton from '../component/CustomButton';
import Typography from '../component/typography';
import COLORS from '../Constants/colors';
import * as StaticString from '../StaticString.json';
import i18n from '../component/i18n';
interface Props {
  navigation: any
}
const Home: React.FC = () => {
 const {t, i18n} = useTranslation();

  // useLayoutEffect(() => {
  //   navigation.setOptions({
  //     title: t('Home'),
  //   });
  // });

  const changelayout= () => {
    // I18nManager.forceRTL(true);
    // !I18nManager.isRTL && RNRestart.Restart()
    i18n
    .changeLanguage(i18n.language === 'ar' ? 'en' : 'ar')
    .then(() => {
      I18nManager.forceRTL(i18n.language === 'ar');
      RNRestart.Restart();
    });
  }
  return (
    <>
      <View style={styles.wrapper}>
     
        <View style={styles.sectionWrapper}>
          <Text style={styles.heading}>{t('Hello world')}</Text>
          <Text style={styles.regularText}>
            {t('Some text goes here, some more text goes here')}
          </Text>
        </View>
        <Typography children={t(StaticString.Title1)} variant={'h1'} color={COLORS.black} />
      <Typography children={t(StaticString.Title2)} variant={'h2'} color={COLORS.black} />
      <Typography children={t(StaticString.Title3)} variant={'h3'} color={COLORS.black} />
      <Typography children={t(StaticString.Title4)} variant={'h4'} color={COLORS.black} />
      <Typography children={t(StaticString.Title5)} variant={'h5'} color={COLORS.black} />
      <Typography children={t(StaticString.Title6)} variant={'h6'} color={COLORS.black} />
      <Typography children={t(StaticString.Title7)} variant={'h7'} color={COLORS.black} />
      <Typography children={t(StaticString.Title8)} variant={'body'} color={COLORS.black} />
      <Typography children={t(StaticString.Title9)} variant={'title'} color={COLORS.black} />
      <Typography children={t(StaticString.Title10)} variant={'description'} color={COLORS.black} />
        <View style={styles.sectionWrapper}>
          <Text style={styles.heading}>{t('Row test')}</Text>
          <View style={styles.row}>
            <Text>{t('column 1')}</Text>
            <Text>{t('column 2')}</Text>
            <Text>{t('column 3')}</Text>
          </View>
        </View>
        <View style={styles.sectionWrapper}>
          <Text style={styles.heading}>{t('Textinput test')}</Text>
          <TextInput style={styles.textInput} placeholder={t('Testing')} />
        </View>
        {/* <View style={styles.sectionWrapper}>
          <CustomButton
            title={t('Go to Inner screen ->')}
            onPress={() => navigation.navigate('Details')}          />
        </View> */}
        <View style={styles.sectionWrapper}>
          <CustomButton
            title={t('Press Me')}
            onPress={() => {i18n
              .changeLanguage(i18n.language === 'ar' ? 'en' : 'ar')
              .then(() => {
                I18nManager.forceRTL(i18n.language === 'ar');
                RNRestart.Restart();
              });} }         />
        </View>
        <Typography
        style={{textAlign:'center'}}
        children={t('Welcome to React')}
      />
    
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: 'transparent',
    flex: 1,
  },
  sectionWrapper: {
    padding: 20,
  },
  heading: {
    fontSize: 20,
    marginBottom: 15,
    textAlign: 'left',
  },
  regularText: {
    textAlign: 'left',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textInput: {
    textAlign: I18nManager.isRTL ? 'right' : 'left',
  },
});

export default Home;