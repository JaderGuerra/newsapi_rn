import { StyleSheet, Text } from "react-native";

interface Props {
  text: string;
  maxLength: number;
  title?: boolean;
}

export const TruncateTitle = ({ text, maxLength, title }: Props) => {
  const truncatedTitle =
    text.length > maxLength ? `${text.substring(0, maxLength)}...` : text;

  return (
    <Text style={[styles.paragraph, title && styles.title]}>
      {truncatedTitle}
    </Text>
  );
};
const styles = StyleSheet.create({
  title: {
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
  },
  paragraph: {
    fontSize: 14,
  },
});
