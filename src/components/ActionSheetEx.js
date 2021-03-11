import React, {Component} from 'react';
import {SafeAreaView, View, Text} from 'react-native';

import ActionSheet from 'react-native-actionsheet';

export default class ActionSheetEx extends Component {
  showActionSheet = () => {
    this.ActionSheet.show();
  };
  render() {
    return (
      <SafeAreaView>
        <View>
          <Text onPress={this.showActionSheet}>Open ActionSheet</Text>
          <ActionSheet
            ref={(o) => (this.ActionSheet = o)}
            title={'Which one do you like ?'}
            options={['Apple', 'Banana', 'cancel', '2', '3', '5']}
            cancelButtonIndex={2}
            destructiveButtonIndex={1}
          />
        </View>
      </SafeAreaView>
    );
  }
}
