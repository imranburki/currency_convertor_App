import React, {useContext} from 'react';
import { StatusBar, FlatList, View, StyleSheet } from 'react-native';
import { useSafeArea } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import AntDesign from 'react-native-vector-icons/dist/AntDesign';
import test from '../data/test.json'
import Currencies from '../data/Currencies.json';
import { RowItem, RowSeparator } from '../components/RowItem';
import colors from '../constants/colors';
import { ConversionContext } from '../util/ConversionContext';

const styles = StyleSheet.create({
    icon: {
      width: 20,
      height: 20,
      borderRadius: 10,
      alignItems: 'center',
      justifyContent: "space-between",
      
      backgroundColor: colors.blue,
    },
  });
  
  export default ({ navigation, route = {} }) => {
    const insets = useSafeArea();
    const {
      baseCurrency,
      quoteCurrency,
      setBaseCurrency,
      setQuoteCurrency,
    } = useContext(ConversionContext);
  
    const params = route.params || {};
    const { isBaseCurrency } = params;
  
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: colors.white,
        }}
      >
        <StatusBar barStyle="dark-content" backgroundColor={colors.white} />
        <FlatList
          data={Currencies}
          renderItem={({ item }) => {
            let selected = false;
  
            if (isBaseCurrency && item === baseCurrency) {
              selected = true;
            } else if (!isBaseCurrency && item === quoteCurrency) {
              selected = true;
            }
  
            return (
              <RowItem
              ttext={item}
                onPress={() => {
                  if (isBaseCurrency) {
                    setBaseCurrency(item);
                  } else {
                    setQuoteCurrency(item);
                  }
                  navigation.pop();
                }}
                chevronrighticon={
                  selected && (
                    <View style={styles.icon}>
                      <Icon name="check" size={20} color={colors.white} />
                    </View>
                  )
                }
              />
            );
          }}
          keyExtractor={(item) => item}
          ItemSeparatorComponent={() => <RowSeparator />}
          ListFooterComponent={() => (
            <View style={{ paddingBottom: insets.bottom }} />
          )}
        />
      </View>
    );
  };