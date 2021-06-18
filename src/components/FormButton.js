import React from 'react';
import {StyleSheet, Button} from 'react-native';


const FormButton = ({buttonTitle, isLoading , iconType, ...rest}) => {
  return (
    <>
      <Button
        title={buttonTitle}
        style={styles.button}
        loading={isLoading}
        disabled={isLoading}
        mode="contained"
        color="blue"
        {...rest}
        />
    </>
  );
};

export default FormButton;

const styles = StyleSheet.create({
  button: {
    width: '100%',
  },
});
