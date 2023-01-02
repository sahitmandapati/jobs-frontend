import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  section: {
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundColor: theme.palette.primary.light,
    paddingTop: theme.spacing(12),
    paddingBottom: theme.spacing(12),
    [theme.breakpoints.up('md')]: {
      paddingTop: theme.spacing(10),
      paddingBottom: theme.spacing(20),
    }
  },
  description: {
    color: 'white'
  },
  primaryAction: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.down('xs')]: {
      width: '100%',
      marginRight: theme.spacing(0),
      marginBottom: theme.spacing(2),
    }
  },
  secondaryAction: {
    [theme.breakpoints.down('xs')]: {
      width: '100%',
    }
  }
}));

export default function LandingPage(props: any) {
  const classes = useStyles();

  const content = {
    'header-p1': 'Udhyogam',
    'header-p2': '.com',
    'description': "We understand that finding the right job can be a daunting task, and that's where we come in. Our job portal is designed to connect job seekers with top employers across a variety of industries.With our easy-to-use search tools and comprehensive job listings, you can find the perfect opportunity that aligns with your skills, experience, and career goals.So why wait? Start your job search today and take the first step towards finding your dream job. And don't forget to create a profile and upload your resume, so that employers can find you too!",
    'primary-action': 'SignIn',
    'secondary-action': 'SignUp',
    'pattern': 'nereus-assets/img/bg/pattern2.png',
    ...props.content
  };

  return (
    <section className={classes.section} style={{ backgroundImage: `url("${content['pattern']}")` }}>
      <Container maxWidth="md">
        <Box textAlign="center" color="common.white">
          <Typography variant="h2" component="h2" gutterBottom={true}>
            <Typography color="secondary" variant="h2" component="span">{content['header-p1']} </Typography>
            <Typography variant="h2" component="span">{content['header-p2']}</Typography>
          </Typography>
          <Container maxWidth="sm">
            <Typography variant="subtitle1" color="textSecondary" paragraph={true} className={classes.description}>{content['description']}</Typography>
          </Container>
          <Box mt={3}>
            <Button variant="contained" color="secondary" className={classes.primaryAction}>{content['primary-action']}</Button>
            <Button variant="outlined" color="secondary" className={classes.secondaryAction}>{content['secondary-action']}</Button>
          </Box>
        </Box>
      </Container>
    </section>
  );
}