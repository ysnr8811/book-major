'use client';
import React from 'react';
import { Avatar, Box, Card, CardContent, Typography, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { Email, Home, Person } from '@mui/icons-material';

export default function ProfilePage() {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', p: 3 }}>
      <Card sx={{ maxWidth: 600, width: '100%' }}>
        <CardContent>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mb: 2 }}>
            <Avatar sx={{ width: 80, height: 80, mb: 1 }}>
              <Person sx={{ fontSize: 60 }} />
            </Avatar>
            <Typography variant="h5" component="div">
              John Doe
            </Typography>
            <Typography color="text.secondary">
              Frontend Developer
            </Typography>
          </Box>
          <Typography variant="body1" sx={{ mb: 2 }}>
            Hello! I am a passionate frontend developer with a love for creating beautiful and intuitive user interfaces. I enjoy working with React, Next.js, and Material-UI.
          </Typography>
          <List>
            <ListItem>
              <ListItemIcon>
                <Email />
              </ListItemIcon>
              <ListItemText primary="Email" secondary="john.doe@example.com" />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <Home />
              </ListItemIcon>
              <ListItemText primary="Location" secondary="Tokyo, Japan" />
            </ListItem>
          </List>
        </CardContent>
      </Card>
    </Box>
  );
}