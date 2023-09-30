import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  // html :{
  //     fontSize: "4px",
  // },
  container: {
    flex: 1,
    backgroundColor: "#100F2C",
    alignItems: "center",
    paddingBottom: 20,
    paddingTop: 50,
  },
  input: {
    borderWidth: 1,
    borderColor: "#6F35A5",
    width: "90%",
    marginVertical: 10,
    height: 50,
    padding: 10,
    borderRadius: 5,
    color: "white",
    fontSize: 18,
  },
  submitBtn: {
    width: "50%",
    // backgroundColor: "#000",
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    borderRadius: 10,
    borderColor: "#6F35A5",
    borderWidth: 1,
  },
  text: {
    color: "white",
    fontSize: 18,
    textTransform: "uppercase",
  },
  subText: {
    color: "gray",
    fontSize: 15,
    textAlign: "left",
  },
  dividerLine: {
    height: 1,
    width: "90%",
    backgroundColor: "#aeaeae",
    marginVertical: 15,
  },
  filterContainer: {
    flexDirection: "row",
    width: "90%",
    justifyContent: "space-between",
  },
  filterBtn: {
    width: "30%",
    backgroundColor: "#ffffff",
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
    borderWidth: 1,
    borderColor: "black",
  },
  filterText: {
    color: "black",
    fontSize: 15,
  },
  activeFilterBtn: {
    width: "30%",
    backgroundColor: "black",
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
    borderWidth: 1,
    borderColor: "black",
  },
  activeFilterText: {
    color: "white",
    fontSize: 15,
  },
  todosContainer: {
    marginTop: 10,
  },
  doneTodo: {
    textDecorationLine: "line-through",
  },
  divider: {
    width: "95%",
    height: 1,
    backgroundColor: "#6F35A5",
    marginVertical: 20,
  },
  todo: {
    width: 300,
    minHeight: 50,
    padding: 15,
    alignItems: "flex-start",
    justifyContent: "center",
    backgroundColor: "transparent",
    marginBottom: 10,
    borderRadius: 5,
    borderColor: "#6F35A5",
    borderWidth: 1,
  },

  // ! Modal
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "#6F35A5",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 15,
    padding: 10,
    elevation: 2,
    borderColor: "#100F2C",
    borderWidth: 1,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});
