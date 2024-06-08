import {StyleSheet, View} from 'react-native';
import React, {useContext} from 'react';
import {useNavigation} from '@react-navigation/native';
import {Button} from 'react-native-paper';
import MyFastImage from '../../components/MyFastImage';
import {DataContext} from '../../context/context';
import {Text} from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';
import InfoCart from '../../components/InfoCart';
import {colors} from '../../utils/colors';
import MyIcon from '../../components/MyIcon';
import auth from '@react-native-firebase/auth';
import MyButton from '../../components/MyButton';
const ProfileScreen = () => {
  const {avaibleUser, setAvaibleUser, setUserInfo, userInfo} =
    useContext(DataContext);
  const navigation = useNavigation();

  return (
    <View style={styles.mainContainer}>
      <View style={styles.tobBox}>
        <MyFastImage style={styles.profilPhoto} image={userInfo?.photo} />
        <Text style={styles.nameText}>{userInfo?.name}</Text>
        <MyIcon
          style={styles.iconBox}
          name={'document-attach'}
          size={30}
          color={colors.textColor}
        />
      </View>

      <View style={styles.bottomBox}>
        <InfoCart
          label={'E-Mail'}
          labelValue={userInfo?.email}
          cartIcon={'mail'}
        />
        <InfoCart
          label={'Tecrübe Yılı'}
          labelValue={userInfo?.experience}
          cartIcon={'barbell'}
        />
        <InfoCart
          label={'Meslek'}
          labelValue={userInfo?.job}
          cartIcon={'construct'}
        />
        <View style={styles.btnContainer}>
          <MyButton
            iconName={'arrow-forward-circle'}
            title={'Çıkış Yap'}
            onPress={() => auth().signOut()}
            iconColor={'white'}
          />
          <MyButton
            iconName={'settings'}
            title={'Ayarlar'}
            onPress={() => navigation.navigate('SettingsScreen')}
            iconColor={'white'}
          />
        </View>
      </View>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  tobBox: {
    backgroundColor: colors.primaryColor,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  profilPhoto: {
    width: 200,
    height: 200,
    borderRadius: 100,
    borderWidth: 5,
    borderColor: colors.secondaryColor,
    marginVertical: 30,
  },
  nameText: {
    fontSize: 30,
    fontWeight: 500,
    color: colors.textColor,
    marginBottom: 10,
  },
  iconBox: {
    position: 'absolute',
    right: 20,
    top: 20,
  },
  bottomBox: {
    backgroundColor: colors.back,
    flex: 1,
  },
  btn: {
    marginTop: 5,
  },
  btnContainer: {
    flexDirection: 'row',
    gap: 5,
    paddingLeft: 10,
  },
});
