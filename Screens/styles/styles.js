import {StyleSheet, Dimensions} from 'react-native';

export const styles = StyleSheet.create({
  TitleText: {
    color: 'red',
    textAlign: 'center',
    flexDirection: 'column',
    fontSize: 50,
    fontFamily: 'AvenirNext-Heavy',
  },
  MainContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'white',
    alignItems: 'center',
  },

  ButtonStyle: {
    height: 50,
    marginTop: 10,
    paddingTop: 15,
    paddingBottom: 15,
    marginLeft: 30,
    marginRight: 30,
    backgroundColor: 'transparent',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'red',
  },
  TextStyle: {
    color: 'red',
    textAlign: 'center',
  },
  animatedTextInput: {
    height: 26,
    fontSize: 20,
    color: '#000',
    borderBottomWidth: 1,
    borderBottomColor: '#555',
    marginBottom: 10
  },
  signUpText: {
    color: 'black',
    textAlign: 'center',
    flexDirection: 'column',
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: 'center',
    margin: 20,
  },
  header: {
    flex: 0,
    alignItems: 'center',
    justifyContent: 'flex-end',
    backgroundColor: 'transparent',
  },
  headerText: {
    color: 'red',
    fontFamily: 'AvenirNext-Heavy',
    fontSize: 35,
  },
  subHeaderText: {
    color: 'red',
    fontFamily: 'AvenirNext-Heavy',
    fontSize: 20,
  },
  videocontainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingCover: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'transparent',
  },
  maskOutter: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  maskInner: {
    width: 300,
    backgroundColor: 'transparent',
    borderColor: 'white',
    borderWidth: 1,
  },
  maskFrame: {
    backgroundColor: 'rgba(1,1,1,0.6)',
  },
  maskRow: {
    width: '100%',
  },
  maskCenter: {
    flexDirection: 'row',
  },
});
