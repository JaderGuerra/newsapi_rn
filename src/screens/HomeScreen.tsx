import { ActivityIndicator, FlatList, View } from "react-native";
import { useNewsApi } from "../hooks/useNewsApi";
import { NewsCard } from "../components/NewsCard";
import Constant from "expo-constants";

export const HomeScreen = () => {
  const { news, onEndReached } = useNewsApi();
  return (
    <View
      style={{ alignItems: "center", marginTop: Constant.statusBarHeight + 10 }}
    >
      <FlatList
        data={news}
        renderItem={({ item }) => <NewsCard article={item} />}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item.url}
        onEndReached={onEndReached}
        onEndReachedThreshold={0.4}
        ListFooterComponent={
          <ActivityIndicator style={{ height: 100 }} size={20} color="grey" />
        }
      />
    </View>
  );
};
