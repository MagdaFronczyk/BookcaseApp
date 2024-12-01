import * as React from 'react';
import {Text, Button, View} from 'react-native';
//types
import {BoottomTabScreenProps} from '../../../types/navigation';

type Props = {
  navigation: BoottomTabScreenProps<'Google Books'>['navigation'];
};

const Index: React.FC<Props> = ({navigation}): JSX.Element => {
  return (
    <View>
      <Text style={{color: 'black'}}>All books</Text>
      <Button
        title="go to single book"
        onPress={() => navigation.navigate('SingleGoogle')}>
        Go to single book
      </Button>
    </View>
  );
};

export default Index;
