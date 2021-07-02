import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    container: {
      flexDirection: "row",
        width: "100%",
        flex: 1,
        justifyContent: "space-between",
        padding: 10,
        marginTop: 3,
        paddingHorizontal: 15,
        paddingVertical: 8,

    },
    midContainer: {
        justifyContent: "space-around",
    },
    leftContainer: {
      flexDirection: "row",
    },

    avatar: {
        width: 60,
        height: 60,
        marginRight: 15,
        borderRadius: 50,
    },
    username: {
        fontWeight: "bold",
        fontSize: 16,
    },
    lastMessage: {
        fontSize: 16,
        color: "grey",
        width: "100%",
    },
    time: {
        fontSize: 14,
        color: "grey",
    },
    user: {

    }
});

export default styles;
