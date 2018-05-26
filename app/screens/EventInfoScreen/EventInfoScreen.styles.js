const styles = {

container: {
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
  paddingTop: Constants.statusBarHeight,
  backgroundColor: '#eee',
},
formView: {
  borderBottomWidth: 1,
  borderColor: '#ccc',
  paddingBottom: 8,
},
inputForm: {
  backgroundColor: '#fff',
  width: 320,
  height: 40,
  padding: 8,
  marginBottom: 8,
  borderRadius: 8,
},
flowRight: {
flexDirection: 'row',
alignItems: 'center',
alignSelf: 'stretch',
},
searchInput: {
height: 36,
padding: 4,
marginRight: 5,
flexGrow: 1,
fontSize: 18,
borderWidth: 1,
borderColor: '#48BBEC',
borderRadius: 8,
color: '#48BBEC',
marginBottom: 8,

},
todoItem: {
  alignItems: 'center',
  padding: 8,
  width: 320,
  borderBottomWidth: 1.5,
  borderColor: '#e0e0e0',
  backgroundColor: '#fff',
  border: '1 solid #333',
  flex: 1,
  flexDirection: 'row',
  borderRadius: 50,
},
todoText: {
  flex: 1,

}
};


export default styles
