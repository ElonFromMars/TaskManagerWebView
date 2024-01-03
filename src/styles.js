export const styles = {
    listContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'top',
        borderRadius: 3,
        bgcolor: "gray",
        p: 1,
        width: 250,
        m: 0,
    },
    addlistContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'top',
        borderRadius: 3,
        bgcolor: "gray",
        p: 1,
        width: 250,
        m: 0,
    },
    listTitle: {
        bgcolor: "background.paper",
        color: "text.primary",
        borderRadius: 3,
    },
    listsContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: 'flex-start',
    },
    listsContainerItem: {
        width: 280,
        display: "flex",
        flexDirection: "column",
        justifyContent: 'flex-start',
    },

    tableContainer: {
        maxWidth:"md",
        p: 1
    },

    tableButton: {
        height: 150,
        width: 220,
        bgcolor: "gray",
        color: "white",
        '&:hover': {
            backgroundColor: "blue !important"
        }
    },
    homeButton: {
        bgcolor: "gray",
        color: "white",
        '&:hover': {
            backgroundColor: "blue !important"
        },
        m: 0.5
    },
    profileButton: {
        bgcolor: "gray",
        color: "white",
        '&:hover': {
            backgroundColor: "blue !important"
        },
    },
    navigationBar: {
        display: "flex",
        bgcolor: "#78909c",
        m: 0,
        p: 0,
        height: 55,
    },
    navigationBarLeft: {
        display: "flex",
        justifyContent: 'flex-start',
        flexGrow: 1,
        alignItems: 'center',
        pl: 0.65,
    },
    navigationBarRight: {
        display: "flex",
        justifyContent: 'flex-end',
        alignItems: 'center',
        pr: 1,
    },
    signinButton: {
        bgcolor: "gray",
        color: "white",
        '&:hover': {
            backgroundColor: "blue !important"
        },
        p: 2
    },
    mainPageHeaderContainer:{
        display: "flex",
        justifyContent: "center",
    },
    mainPageSignInContainer:{
        display: "flex",
        justifyContent: "center",
    },
    workpsacesListHeader:{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        height: 40,
        bgcolor: "gray",
    },
    workpsacesListHeaderText:{
        m:1
    },
    selectWorkpsaceButton:{
        display: "flex",
        alignItems: "stretch",
        height: 40,
        bgcolor: "gray",
    },
    selectWorkpsaceButtonText:{
        flexGrow: 1,
        display: "flex",
        justifyContent: "start",
    },

    delteWorkpsaceButton:{
        p: 0,
        m: 0,
        minWidth: 30
    },

    delteWorkpsaceButtonIcon:{
        maxHeight: 15,
        maxWidth: 15,   
    },
};
