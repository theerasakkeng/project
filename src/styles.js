import { makeStyles } from '@material-ui/core/styles';

const drawerWidth = 240;

export const useStyles = makeStyles((theme) => ({
    appRoot: {
        display: "flex",
    },
    navigationLogo: {
        width: "50%"
    },
    navigationsLogoContainer: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    navigationDrawer: {
        width: 240,
        whiteSpace: "nowrap",
        overflowX: "hidden",
    },
    menuItem: {
        width: "80%",
        borderRadius: 8,
        marginBottom: 8,
    },
    menuItemActive: {
        backgroundColor: "#b2b1b9"
    },
    navigationDrawerCollapse: {
        width: theme.spacing(9),

    },
    navigationToolbarCollapse: {
        display: "none",
        [theme.breakpoints.up('xs')]: {
            display: "block",
        },
    },
    menutig: {
        display: 'none',
        [theme.breakpoints.down('xs')]: {
            display: 'block',
        },
    },
    menuback: {
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
        paddingRight: theme.spacing(1),
        ...theme.mixins.toolbar,
    },
    hidechevicon: {
        display: "none"
    }
}));