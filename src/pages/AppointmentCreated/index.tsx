import React from 'react';
import { View, Button } from 'react-native';

import { useAuth } from '../../hooks/AuthContext';

const AppointmentCreated: React.FC = () => {
  const { signOut } = useAuth();

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        padding: 100,
      }}
    >
      <Button title="Sair" onPress={signOut} />
    </View>
  );
};

export default AppointmentCreated;
