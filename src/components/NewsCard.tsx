import { useRef } from "react";
import {
  Dimensions,
  Linking,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { Article } from "../interfaces/newsapiInterface";
import { FadeInImage } from "./FadeInImage";
import { TruncateTitle } from "./TruncateTitle";
const { width } = Dimensions.get("window");

interface Props {
  article: Article;
}

export const NewsCard = ({ article }: Props) => {
  const isMounted = useRef(true);

  const viewMoreInfo = (enlace: string) => {
    Linking.openURL(enlace).catch((err) =>
      console.error("Error al abrir el enlace: ", err)
    );
  };

  return (
    <>
      <View style={{ ...styles.cardContainer }}>
        <View style={{ justifyContent: "center" }}>
          <FadeInImage uri={article.urlToImage!} style={styles.articleImg} />
          <View style={{ ...styles.cardContentTitle }}>
            <TruncateTitle text={article.title} maxLength={15} title />
            <Text style={{ ...styles.date }}>
              {article.publishedAt.substring(0, 10)}
            </Text>
          </View>
        </View>

        <View style={{ ...styles.cardInfo, width: width * 0.5 }}>
          <TruncateTitle text={article.description!} maxLength={155} />
          <View style={{ alignItems: "flex-end" }}>
            <Pressable
              style={styles.btn}
              onPress={() => viewMoreInfo(article.url)}
            >
              <Text style={styles.btnText}>Read more</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    marginHorizontal: 10,
    flexDirection: "row",
    flex: 1,
    marginBottom: 10,
    paddingVertical: 3,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
    borderColor: "rgba(52, 52, 52, 0.8)",
  },
  cardContentTitle: {
    position: "absolute",
    backgroundColor: "rgba(52, 52, 52, 0.8)",
    color: "white",
    width: 160,
    bottom: -2,
    borderBottomRightRadius: 5,
    borderBottomLeftRadius: 5,
  },

  date: {
    color: "white",
    textAlign: "center",
  },

  cardInfo: { paddingHorizontal: 10, justifyContent: "space-evenly" },

  articleImg: {
    width: 160,
    height: 160,
    borderRadius: 5,
  },
  btn: {
    backgroundColor: "#000080",
    marginTop: 10,
    width: 80,
    padding: 5,
    borderRadius: 5,
  },
  btnText: {
    color: "white",
  },
});
