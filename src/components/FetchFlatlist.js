import React, {useState,useEffect} from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  ActivityIndicator,
  RefreshControl,
  Image
} from 'react-native';

const FetchFlatlist = () => {
  const [data, setData] = useState([]);
  const [isRefreshing, refreshList] = useState(false);
  const [loader,showLoader]=useState(false);
  const [page,setPage]=useState(1)
  useEffect(()=>{
    fetchData()
  },[page])

 
 const fetchData = async () => {
        showLoader(true)
        try{
        const response= await fetch(`https://reqres.in/api/users/?page=${page}`)
        const jsonData=await response.json();
        setData([...data,...jsonData.data])
        showLoader(false)
        }
        catch(error){
          alert('Unable to fetch data')
        }
  };


  dataStyling = ({item}) => {
      return (
        <View style={styles.dataContainer}>
          <Image style={styles.avatar} source={{ uri: item.avatar}}  />
          <View>
              <Text style={styles.id}>
                  ID : {item.id}
              </Text>
              <Text style={styles.name}>
                  {item.first_name} {item.last_name}
              </Text>
              <Text style={styles.email}>
                  {item.email}
              </Text>
          </View>
        </View>
      );
    };
  
  const Loader=()=>{
    return(
      loader ? (
        <View>
      <ActivityIndicator animating={loader} size={'large'} color={'red'} />
    </View>
    ):null
    )
  };
  
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data}
        renderItem={dataStyling}
        keyExtractor={(item) => (item.id)}
        refreshControl={
          <RefreshControl
            refreshing={isRefreshing}
            onRefresh={() => {
              refreshList(true);
              setTimeout(() => {
                setData([]);
                setPage(1)
                refreshList(false);
              }, 5000);
            }}
          />
        }
        
        onEndReached={()=>{
          if(page<=1){
            showLoader(true);
            setTimeout(() => {
            setPage(newpage=>newpage+1)
            showLoader(false);
          }, 5000);
          }
        }}
      ListFooterComponent={<Loader/>}
      />
      
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  dataContainer: {
    flexDirection: 'column',
    padding: 10,
    backgroundColor: 'lavender',
    borderRadius:20,
    borderColor:'black',
    borderWidth:2,
    alignItems: "center",
    margin: 15,
  },
  id:{
      textAlign:'center',
      fontSize:20,
  },
  avatar:{
      width:120,
      height:120,
      margin:15,
      borderRadius:15,
      borderColor:'orange',
      borderWidth:2
  },
  name: {
   color:'firebrick',
   textAlign:'center',
    fontSize: 20,
  },
  email: {
    color: 'indigo',
    fontStyle:'italic',
    fontSize:17,
    textAlign:'center'
  },
});

export default FetchFlatlist;


