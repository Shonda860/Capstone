import React from 'react';
import { ActionAssignmentReturned } from 'material-ui/svg-icons';



export default () =>{
  return(<div class="row">
  <div class="col s1">This div is 12-columns wide</div>
  <div class="col s2">This div is 6-columns wide</div>
  <div class="col s1">This div is 6-columns wide</div>
</div>)
}
// import { makeStyles } from '@material-ui/core/styles';
// import clsx from 'clsx';
// import Card from '@material-ui/core/Card';
// import CardHeader from '@material-ui/core/CardHeader';
// import CardMedia from '@material-ui/core/CardMedia';
// import CardContent from '@material-ui/core/CardContent';
// import CardActions from '@material-ui/core/CardActions';
// import Collapse from '@material-ui/core/Collapse';
// import Avatar from '@material-ui/core/Avatar';
// import IconButton from '@material-ui/core/IconButton';
// import Typography from '@material-ui/core/Typography';
// import { red } from '@material-ui/core/colors';
// import FavoriteIcon from '@material-ui/icons/Favorite';
// import ShareIcon from '@material-ui/icons/Share';
// import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
// import MoreVertIcon from '@material-ui/icons/MoreVert';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     maxWidth: 345,
//   },
//   media: {
//     height: 0,
//     paddingTop: '56.25%', // 16:9
//   },
//   expand: {
//     transform: 'rotate(0deg)',
//     marginLeft: 'auto',
//     transition: theme.transitions.create('transform', {
//       duration: theme.transitions.duration.shortest,
//     }),
//   },
//   expandOpen: {
//     transform: 'rotate(180deg)',
//   },
//   avatar: {
//     backgroundColor: red[500],
//   },
// }));

// export default function RecipeReviewCard() {
//   const classes = useStyles();
//   const [expanded, setExpanded] = React.useState(false);

//   const handleExpandClick = () => {
//     setExpanded(!expanded);
//   };

//   return (
//     <div> <span>dsdsds</span><span>daadffd</span>
//     <Card className={classes.root}>
//       <CardHeader
//         avatar={
//           <Avatar aria-label="league" className={classes.avatar}>
//             R
//           </Avatar>
//         }
//         action={
//           <IconButton aria-label="settings">
//             <MoreVertIcon />
//           </IconButton>
//         }
//         title="King of The DOT"
//         subheader="Founded 2008"
//       />
//       <CardMedia
//         className={classes.media}
//         image="/static/images/cards/paella.jpg"
//         title="KOTD"
//       />
//       <CardContent>
//         <Typography variant="body2" color="textSecondary" component="p">
//         King of the Dot Entertainment, also known as KOTD, is a rap battle league founded in Toronto, Ontario, Canada in 2008. The company's HQ is based in Toronto, from which it gets its name. Successful music artists such as Shotty Horroh, 360, Canibus, and Madchild have battled in King of the Dot.
//         </Typography>
//       </CardContent>
//       <CardActions disableSpacing>
//         <IconButton aria-label="add to favorites">
//           <FavoriteIcon />
//         </IconButton>
//         <IconButton aria-label="share">
//           <ShareIcon />
//         </IconButton>
//         <IconButton
//           className={clsx(classes.expand, {
//             [classes.expandOpen]: expanded,
//           })}
//           onClick={handleExpandClick}
//           aria-expanded={expanded}
//           aria-label="show more"
//         >
//           <ExpandMoreIcon />
//         </IconButton>
//       </CardActions>
//       <Collapse in={expanded} timeout="auto" unmountOnExit>
//         <CardContent>
//           <Typography paragraph>More Info:</Typography>
//           <Typography paragraph>
//           Primarily featuring Canadians and Americans, emcees from countries such as England, Scotland, Australia, Sweden, Norway, Philippines, South Africa, and Russia have all battled in King of the Dot’s annual World Domination event. The influence of King of the Dot has spread globally, inspiring the creation of other battle leagues such as FlipTop in the Philippines, Dissneeland in Vietnam, and Versus Battle in Russia.[1]
//           </Typography>
//           <Typography paragraph>
//            King of the Dot has three leagues — PY Battles (Try-Outs); GZ Battles (North American stand alone smaller league); and KOTD (worldwide big league).[3]
//           </Typography>
//           <Typography paragraph>
//             Add rice and stir very gently to distribute. Top with artichokes and peppers, and cook
//             without stirring, until most of the liquid is absorbed, 15 to 18 minutes. Reduce heat to
//             medium-low, add reserved shrimp and mussels, tucking them down into the rice, and cook
//             again without stirring, until mussels have opened and rice is just tender, 5 to 7
//             minutes more. (Discard any mussels that don’t open.)
//           </Typography>
//           <Typography>
//            King of the Dot events feature all elements of hip hop culture, including a cappella emcee battles, freestyle battles over instrumentals, live performances by hip hop artists, beatboxing, graffiti exhibits, DJing, and breaking.[4]
//           </Typography>
//         </CardContent>
//       </Collapse>
//     </Card>
//     </div>
   
//   );
// }
