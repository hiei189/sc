import {pink500, yellow500, lightBlack, grey100, grey500, grey700, white, grey300, darkBlack, pink100} from 'material-ui/styles/colors';
import {fade} from 'material-ui/utils/colorManipulator';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

Theme =  getMuiTheme({
  fontFamily: 'Roboto, sans-serif',
  palette: {
    primary1Color: pink500,
    primary2Color: yellow500,
    primary3Color: lightBlack,
    accent1Color: pink500,
    accent2Color: grey100,
    accent3Color: grey500,
    textColor: grey700,
    alternateTextColor: white,
    canvasColor: white,
    borderColor: grey300,
    disabledColor: fade(darkBlack, 0.3),
    pickerHeaderColor: yellow500,
  },
  listItem:{
    hoverColor:pink100,
    selectedTextColor: pink500,
  },
  selectableContainerEnhance:{
    hoverColor:pink100,
    selectedTextColor: pink500,
  },
  tabs:{
    backgroundColor: white,
    textColor: fade(pink500, 0.5),
    selectedTextColor: pink500
  }
});

export default Theme;
