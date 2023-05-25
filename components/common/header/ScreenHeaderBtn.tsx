import React from "react";
import {
  View,
  TouchableOpacity,
  Image,
  ImageSourcePropType
} from "react-native";

import styles from "./screenheader.style";

const ScreenHeaderBtn = ({
  iconUrl,
  dimension,
  handlePress
}: {
  iconUrl: string;
  dimension: string;
  handlePress?: () => void;
}) => {
  return (
    <View>
      <TouchableOpacity style={styles.btnContainer} onPress={handlePress}>
        <Image
          source={iconUrl as ImageSourcePropType}
          //@ts-ignore
          style={styles.btnImg(dimension)}
        />
      </TouchableOpacity>
    </View>
  );
};

export default ScreenHeaderBtn;
