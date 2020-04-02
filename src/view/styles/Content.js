const styles = theme => ({
    paper: {
      maxWidth: 936,
      margin: 'auto',
      overflow: 'hidden',
    },
    searchBar: {
      borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
    },
    searchInput: {
      fontSize: theme.typography.fontSize,
    },
    block: {
      display: 'block',
    },
    addUser: {
      marginRight: theme.spacing(1),
    },
    contentWrapper: {
      margin: '40px 16px',
    },
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      margin: theme.spacing(2),
      width: 300,
    },
    form: {
      margin: theme.spacing(5),
      width: 400,
      height: 500,
    },
    margin: {
      margin: theme.spacing(1),
    },
    withoutLabel: {
      marginTop: theme.spacing(3),
    },
    textField: {
      width: 200,
    },
    gridList: {
      width: 500,
      height: 450,
    },
    listCard: {
      minWidth: 275,
    },
    listCardTitle: {
      fontSize: 14,
    },
    listCardPos: {
      marginBottom: 12,
    },
    progress : {
      margin:theme.spacing(2)
    },
    table: {
      minWidth: 1080
    },
  });

  export default styles;