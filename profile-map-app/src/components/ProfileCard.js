// ProfileCard.js
import React from 'react';
import { Card, CardContent, CardMedia, Typography } from '@material-ui/core';

const ProfileCard = ({ profile }) => {
  if (!profile) {
    return <Typography variant="body2" color="error">Profile not found</Typography>;
  }

  return (
    <Card key={profile.id} className="profile-card">
      <CardMedia
        component="img"
        alt={profile.name}
        height="140"
        image={profile.photo}
      />
      <CardContent>
        <Typography variant="h5" component="h2">
          {profile.name}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          {profile.description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ProfileCard;