import React from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';
import {Box, BoxProps, Text} from 'design-system';
import theme from 'theme';
import {getBottomSpace, hp, wp} from 'utils';

interface Props extends BoxProps {
  title?: string;
  disabled?: boolean;
  textColor?: string;
  textVariant?: any;
  backgroundColor?: string;
  loading?: boolean;
  isNotBottom?: boolean;
  containerStyle?: ViewStyle;
  loadingColor?: string;
}

export const Button = ({
  title,
  disabled,
  textColor,
  textVariant,
  backgroundColor,
  loading,
  isNotBottom,
  containerStyle,
  loadingColor,
  ...props
}: Props) => {
  return (
    <Box style={!isNotBottom && [styles.containerStyle, containerStyle]}>
      <Box
        disabled={disabled}
        activeOpacity={0.8}
        as={TouchableOpacity}
        flexDirection="row"
        alignItems="center"
        justifyContent="center"
        borderRadius={hp(7)}
        height={hp(46)}
        width={wp(344)}
        backgroundColor={
          disabled
            ? themeColor.DISABLED_BUTTON
            : backgroundColor || themeColor.BUTTON_COLOR
        }
        {...props}>
        <Box
          flexDirection={'row'}
          alignItems="center"
          justifyContent={'center'}
          alignSelf={'center'}>
          {loading ? (
            <ActivityIndicator
              size={'small'}
              color={loadingColor || theme.colors.WHITE}
            />
          ) : (
            <>
              {hasIcon && (
                <Box top={hp(1)} right={10}>
                  <Icon name={hasIcon} />
                </Box>
              )}
              <Text
                color={disabled ? theme.colors.WHITE : textColor || 'white'}
                variant={textVariant || 'headerBold'}>
                {title}
              </Text>
              {hasBackIcon && (
                <Box top={hp(1.5)} left={wp(2)}>
                  <Icon name={hasBackIcon} />
                </Box>
              )}
            </>
          )}
        </Box>
      </Box>
    </Box>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    position: 'absolute',
    bottom: hp(40) + getBottomSpace(),
    justifyContent: 'center',
    alignSelf: 'center',
  },
});
