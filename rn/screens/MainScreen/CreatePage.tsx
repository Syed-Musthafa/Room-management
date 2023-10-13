import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Colors, Images } from '../../constant'

const CreatePage = () => {


  function renderHeaderBar() {
    return (
      <View style={{ padding : 10, marginTop:50, borderBottomWidth :2, borderBottomColor : Colors.text}}>
      <View
          style={[{ flexDirection: 'row', alignItems:'center', justifyContent:'space-between' }]}>
          <TouchableOpacity
          >
              <Image
                  source={Images.profile}
                  resizeMode="contain"
                  style={{ width: 40, height: 40, }}

              />
          </TouchableOpacity>
          <View style={{   }}>
          <Text style={{ color: Colors.text_main, fontSize: 25, fontWeight: 'bold', }}>Chirpz</Text>
      </View>
        
      </View>
    
  </View>
    )
  
  }


  return (
    <SafeAreaView style={styles.mainContainer}>


    {renderHeaderBar()}
    {/* {renderPostContent()} */}
  
      
    </SafeAreaView>
  )
}

export default CreatePage

const styles = StyleSheet.create({
    mainContainer : {
        flex: 1,
        justifyContent: "flex-start",
        backgroundColor: Colors.primary
    }
})