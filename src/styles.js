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
    navigationBar: {
        bgcolor: "#78909c",
        m: 0,
        p: 0,
        height: 50
    },
};