import { StyleSheet, Dimensions } from "react-native";

const { height } = Dimensions.get("window");
const styles = StyleSheet.create({
  headerMain: {
    height: height * 0.064,
    backgroundColor: "#F7D102",
  },
  headerOne: {
    height: height * 0.064,
    width: "80%",
    backgroundColor: "white",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: "3%",
    borderTopRightRadius: 25,
    borderBottomRightRadius: 25,
  },
  headerOneView: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 8,
    paddingLeft: 8,
    borderLeftColor: "#F3F2FD",
    borderLeftWidth: 2,
  },
  image: {
    width: 30,
    height: 30,
  },
  addressName: {
    fontWeight: "600",
    fontSize: 16,
  },
  address: {
    fontWeight: "500",
    fontSize: 11,
    color: "#6E7480",
    marginLeft: 6,
    marginRight: 1,
  },
  headerTwo: {
    height: height * 0.064,
    width: "50%",
    // backgroundColor: "red",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    paddingLeft: 10,
  },
  tvs: {
    fontSize: 10,
    fontWeight: "bold",
    color: "#5D3EBD",
  },
  counter: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#5D3EBD",
  },
  minutes: {
    fontSize: 16,
    color: "#5D3EBD",
  },
});

export default styles;
