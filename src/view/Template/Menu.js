import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { withStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';
import PeopleIcon from '@material-ui/icons/People';
import AccountBoxSharpIcon from '@material-ui/icons/AccountBoxSharp';
import { Link } from 'react-router-dom';
import styles from '../styles/Menu';

const categories = [
  {
    id: 'Doodle',
    children: [
      // { id: 'Write', icon: <PeopleIcon />, active: true },
      { id: 'Write', icon: <PeopleIcon /> },
      { id: 'List', icon: <PeopleIcon /> },
      { id: 'Search', icon: <PeopleIcon /> },
      { id: 'Paperbase', icon: <PeopleIcon /> },
    ],
  },
];

function Menu(props) {
  const { classes, ...other } = props;

  return (
    <Drawer variant="permanent" {...other}>
      <List disablePadding>
        <ListItem className={clsx(classes.firebase, classes.item, classes.itemCategory)}>
          BIL CRUD
        </ListItem>
        <Link to="/" >
        <ListItem className={clsx(classes.item, classes.itemCategory)}>
          <ListItemIcon className={classes.itemIcon}>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText
            classes={{
              primary: classes.itemPrimary,
            }}
          >
            Home
          </ListItemText>
        </ListItem>
        </ Link>
        {categories.map(({ id, children }) => (
          <React.Fragment key={id}>
            <ListItem className={classes.categoryHeader}>
              <ListItemText
                classes={{
                  primary: classes.categoryHeaderPrimary,
                }}
              >
                {id}
              </ListItemText>
            </ListItem>
            {children.map(({ id: childId, icon, active }) => (
              <Link to={`/${id}/${childId}`} className={classes.link} variant="body2">
              <ListItem
                key={childId}
                button
                className={clsx(classes.item, active && classes.itemActiveItem)}
              >
                <ListItemIcon className={classes.itemIcon}>{icon}</ListItemIcon>
                <ListItemText
                  classes={{
                    primary: classes.itemPrimary,
                  }}
                >
                  {childId}
                </ListItemText>
                </ListItem>
                </Link>
            ))}
            <Divider className={classes.divider} />
          </React.Fragment>
        ))}
        <Link to="/SignUp" className={classes.link}>
        <ListItem className={clsx(classes.item)}>
          <ListItemIcon className={classes.itemIcon}>
          <AccountBoxSharpIcon />
          </ListItemIcon>
          <ListItemText
            classes={{
              primary: classes.itemPrimary,
            }}
          >
            회원가입
          </ListItemText>
        </ListItem>
        </ Link>
      </List>
    </Drawer>
  );
}

Navigator.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Menu);