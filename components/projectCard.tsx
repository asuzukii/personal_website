import * as React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

interface projectProps {
    imageName: string,
    imageText: string,
    title: string,
    text: string,
    githubLink: string,
    projectLink: string,
    projectLinkText: string,
}

export default function ProjectCard(projectConfigs: projectProps) {
  return (
    <Card sx={{ maxWidth: 400 }} elevation={0}>
      <CardMedia
        component="img"
        height="350"
        image={projectConfigs.imageName}
        alt={projectConfigs.imageText}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" align="center">
            <b>{projectConfigs.title}</b>
        </Typography>
        <Typography variant="body2" color="text.secondary" align="center">
            {projectConfigs.text}
        </Typography>
      </CardContent>
      <CardActions sx={{justifyContent: 'center'}}>
        <Button size="small" href={projectConfigs.githubLink} startIcon={<GitHubIcon />}>
            <b>GitHub Source</b>
        </Button>
        <Button size="small" href={projectConfigs.projectLink} target="_blank" endIcon={<LaunchIcon />}>
            <b>{projectConfigs.projectLinkText}</b>
        </Button>
      </CardActions>
    </Card>
  );
}
