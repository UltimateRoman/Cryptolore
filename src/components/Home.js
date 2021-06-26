import React from 'react';
import pic from './img/left-image.jpg';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import img from './img/left-image.jpg'
import img1 from './img/slider-icon.jpg'
import img2 from './img/nft.jpg'
import imga from './img/a.jpg'
import imgb from './img/b.jpeg'
import imgc from './img/c.jpg'
import './App.css'

const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 140,
    },
  });

function Home() {
    const classes = useStyles();
    return (
        <React.Fragment>
            <br></br>
            <h1 style={{textAlign: "center", color: "black", fontSize:"70px"}}>Cryptolore</h1>
            <br/>
            <h3 style={{textAlign: "center", color: "blue"}}>By Team Coding-Fortress</h3>
                <br></br>
                
                <center>
                <img src={pic} width="500px" height="350px"/>
                </center>
                <center>
                    <br></br>
                <h2  style={{color: "lightyellow"}}>&nbsp;About</h2>
                <h4 >Cryptolore aims to convert your literary works such as poems, stories, novels and everything into NFTs</h4>
                <h4>It provides a decentralised platform for digital writers to post their content and which will be tokenized with a unique owner. </h4>
                <h4>Other platform users can view the posted content and purchase these NFTs. The ownership of these NFTs are cryptographically verifiable. </h4>
                <h4>The amount is paid to the content writers in cryptocurrency.</h4>
                </center>
                <br></br>
                
            <br/><br/>
            <br/>
            <div class="row">
            <div class="column"></div>
            <div class="column">
            <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                className={classes.media}
                image={img2}
                title="Benefits of nft"
                />
                <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                    Easily transferable
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                NFTs are sold and purchased in unique markets and their usage is exclusively based on their uniqueness.
                </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">
                Share
                </Button>
                <Button size="small" color="primary">
                Learn More
                </Button>
            </CardActions>
            </Card>
            </div>
            <div class="column">
            <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                className={classes.media}
                image= {img1}
                title="Benefits of nft"
                />
                <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                Trustworthy
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                Blockchain technology makes use of non-fungible tokens. As a result, you must be assured that your NFT is valid, as forging a decentralised and permanent record is impossible.
                </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">
                Share
                </Button>
                <Button size="small" color="primary">
                Learn More
                </Button>
            </CardActions>
            </Card>
            </div>
            <div class="column">
            <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                className={classes.media}
                image= {img}
                title="Benefits of nft"
                />
                <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                Maintain ownership rights
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                This is a network of shared platforms the size of an NFT, with no buyer having the ability to edit the data afterwards.
                </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">
                Share
                </Button>
                <Button size="small" color="primary">
                Learn More
                </Button>
            </CardActions>
            </Card>
            </div>
            </div>
            <div class="row">
            <div class="column"></div>
            <div class="column">
            <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                className={classes.media}
                image={imgb}
                title="Benefits of nft"
                />
                <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                Non-Interoperable
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                NFTs are deemed non-interoperable since they adhere to the ERC-721 standard, which implies the data contained in them cannot be transferred or utilised in any way.
                </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">
                Share
                </Button>
                <Button size="small" color="primary">
                Learn More
                </Button>
            </CardActions>
            </Card>
            </div>
            <div class="column">
            <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                className={classes.media}
                image= {imga}
                title="Benefits of nft"
                />
                <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                Rare
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                The overall number of NFTs in the world is currently quite low, and they are quite rare. This not only makes them uncommon, but it also increases their worth. The lesser the number of NFTs, the higher their price will be.
                </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">
                Share
                </Button>
                <Button size="small" color="primary">
                Learn More
                </Button>
            </CardActions>
            </Card>
            </div>
            <div class="column">
            <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                className={classes.media}
                image= {imgc}
                title="Benefits of nft"
                />
                <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                Indestructible
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                The non fungible tokens are managed and operated through Blockchain which increases the level of security for them. This determines that these NFTs cannot be removed or destroyed, at all.
                </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">
                Share
                </Button>
                <Button size="small" color="primary">
                Learn More
                </Button>
            </CardActions>
            </Card>
            </div>
            </div>
     
        </React.Fragment>
        
    )
}

export default Home;