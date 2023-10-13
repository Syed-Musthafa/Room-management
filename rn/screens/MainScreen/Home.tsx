import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Colors, Images } from '../../constant'
import { Display } from '../../utils'



const Home = ({ navigation }): JSX.Element  => {




  function renderHeaderBar() {
    return (
      <View style={{ padding : 10, marginTop:50, borderBottomWidth :2, borderBottomColor : Colors.border}}>
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
      <View style={{}} />
        
      </View>
    
  </View>
    )
  
  }


  function renderPostContent() {
    return(
      <View style={{ padding : 30}}>
        <View style={{ display: "flex", flexDirection: 'row', alignItems: "center" , }}>
        <Text style={{ color : Colors.text_main, fontSize: 20}}>Musthafa</Text>
          <Image 
            source={Images.right}
            resizeMode="contain"
            style={{ width: 20, height: 20, marginLeft: 20 }}
          />
        </View>
        <View style={{ marginTop: 10}}>
          <Text style={{  color : Colors.text_secondary, fontSize: 15,}}>
          I just finished reading a great book! What are you reading right now?
          </Text>
        </View>
        <View style={{ 
          display: "flex", 
         alignItems:'center',
         flexDirection: "row",
        marginTop: 30
         }}>
          {
            ["list", "data", "value"].map((item, index) => {
              return (
                 <View style={{ 
                  
                  backgroundColor: Colors.hash_box, 
                  width: 50, 
                  height: 30,
                   alignItems:'center',
                   justifyContent:'center',
                   borderRadius:5,
                  marginHorizontal: 10

                  }}>
                  <Text style={{  color : Colors.text_secondary, fontSize: 15,}}>#{item}</Text>
                 </View>
              )
            })
          }
        </View>
      </View>
    )

  }




  return (
    <SafeAreaView style={styles.mainContainer}>


    {renderHeaderBar()}
    {renderPostContent()}
  
      
    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({
  mainContainer : {
    flex: 1,
    justifyContent: "flex-start",
    backgroundColor: Colors.primary
}
})