import React from 'react';
import { 
  Container, 
  Typography, 
  Box, 
  Grid, 
  Paper, 
  Button,
  Card,
  CardContent,
  CardActions,
  Divider,
  List,
  ListItem,
  ListItemText,
  ListItemIcon
} from '@mui/material';
import { 
  Upload as UploadIcon,
  School as SchoolIcon,
  Work as WorkIcon,
  Chat as ChatIcon,
  Assignment as AssignmentIcon,
  BarChart as BarChartIcon
} from '@mui/icons-material';
import { Link } from 'react-router-dom';

const Dashboard: React.FC = () => {
  // Placeholder data - would come from context/API in a real app
  const user = {
    name: 'John Doe',
    profileCompleted: 70,
    resumeUploaded: true
  };

  // Placeholder skill gap data
  const skillGaps = [
    { name: 'Data Analysis', score: 30 },
    { name: 'Leadership', score: 60 },
    { name: 'Project Management', score: 45 },
    { name: 'Python Programming', score: 75 }
  ];

  // Placeholder job recommendations
  const jobRecommendations = [
    { title: 'Senior Product Manager', company: 'Tech Solutions Inc.', match: 85 },
    { title: 'UX Designer Lead', company: 'Creative Designs Corp.', match: 78 },
    { title: 'Project Coordinator', company: 'Global Enterprises', match: 72 }
  ];

  // Placeholder course recommendations
  const courseRecommendations = [
    { title: 'Advanced Project Management', platform: 'Coursera', duration: '8 weeks' },
    { title: 'Leadership in Tech', platform: 'Udemy', duration: '6 weeks' },
    { title: 'Python for Data Science', platform: 'edX', duration: '12 weeks' }
  ];

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Grid container spacing={3}>
        {/* Welcome Header */}
        <Grid component="div" sx={{ gridColumn: 'span 12' }}>
          <Paper sx={{ p: 3, display: 'flex', flexDirection: 'column' }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Box>
                <Typography variant="h4" component="h1" gutterBottom>
                  Welcome, {user.name}
                </Typography>
                <Typography variant="body1">
                  Your profile is {user.profileCompleted}% complete
                </Typography>
              </Box>
              <Box>
                {!user.resumeUploaded ? (
                  <Button 
                    variant="contained" 
                    startIcon={<UploadIcon />}
                    component={Link}
                    to="/resume/upload"
                  >
                    Upload Resume
                  </Button>
                ) : (
                  <Button 
                    variant="outlined" 
                    startIcon={<AssignmentIcon />}
                    component={Link}
                    to="/resume/view"
                  >
                    View Resume
                  </Button>
                )}
              </Box>
            </Box>
          </Paper>
        </Grid>

        {/* Quick Actions */}
        <Grid component="div" sx={{ gridColumn: { xs: 'span 12', md: 'span 4' } }}>
          <Paper sx={{ p: 3, height: '100%' }}>
            <Typography variant="h6" gutterBottom>
              Quick Actions
            </Typography>
            <Divider sx={{ mb: 2 }} />
            <List>
              <ListItem 
                component={Link} 
                to="/skills-assessment"
                sx={{ cursor: 'pointer', borderRadius: 1, mb: 1 }}
              >
                <ListItemIcon>
                  <BarChartIcon color="primary" />
                </ListItemIcon>
                <ListItemText primary="Take Skills Assessment" />
              </ListItem>
              <ListItem 
                component={Link} 
                to="/learning-paths"
                sx={{ cursor: 'pointer', borderRadius: 1, mb: 1 }}
              >
                <ListItemIcon>
                  <SchoolIcon color="primary" />
                </ListItemIcon>
                <ListItemText primary="Explore Learning Paths" />
              </ListItem>
              <ListItem 
                component={Link} 
                to="/job-matches"
                sx={{ cursor: 'pointer', borderRadius: 1, mb: 1 }}
              >
                <ListItemIcon>
                  <WorkIcon color="primary" />
                </ListItemIcon>
                <ListItemText primary="View Job Matches" />
              </ListItem>
              <ListItem 
                component={Link} 
                to="/chatbot"
                sx={{ cursor: 'pointer', borderRadius: 1 }}
              >
                <ListItemIcon>
                  <ChatIcon color="primary" />
                </ListItemIcon>
                <ListItemText primary="Career Assistant Chat" />
              </ListItem>
            </List>
          </Paper>
        </Grid>

        {/* Top Skill Gaps */}
        <Grid component="div" sx={{ gridColumn: { xs: 'span 12', md: 'span 8' } }}>
          <Paper sx={{ p: 3, height: '100%' }}>
            <Typography variant="h6" gutterBottom>
              Your Top Skill Gaps
            </Typography>
            <Divider sx={{ mb: 2 }} />
            <Grid container spacing={2}>
              {skillGaps.map((skill, index) => (
                <Grid component="div" sx={{ gridColumn: { xs: 'span 12', sm: 'span 6' } }} key={index}>
                  <Box sx={{ mb: 1 }}>
                    <Typography variant="body1">{skill.name}</Typography>
                    <Box sx={{ 
                      width: '100%', 
                      bgcolor: 'grey.300',
                      borderRadius: 5,
                      height: 10,
                      mt: 1
                    }}>
                      <Box sx={{ 
                        width: `${skill.score}%`, 
                        bgcolor: skill.score < 50 ? 'error.main' : skill.score < 75 ? 'warning.main' : 'success.main',
                        borderRadius: 5,
                        height: 10
                      }} />
                    </Box>
                  </Box>
                </Grid>
              ))}
            </Grid>
            <Box sx={{ mt: 2, display: 'flex', justifyContent: 'flex-end' }}>
              <Button 
                component={Link} 
                to="/skills-analysis"
                variant="outlined"
              >
                View Full Analysis
              </Button>
            </Box>
          </Paper>
        </Grid>

        {/* Job Recommendations */}
        <Grid component="div" sx={{ gridColumn: { xs: 'span 12', md: 'span 6' } }}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              Job Recommendations
            </Typography>
            <Divider sx={{ mb: 2 }} />
            <Grid container spacing={2}>
              {jobRecommendations.map((job, index) => (
                <Grid component="div" sx={{ gridColumn: 'span 12' }} key={index}>
                  <Card variant="outlined">
                    <CardContent>
                      <Typography variant="h6" component="div">
                        {job.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary" gutterBottom>
                        {job.company}
                      </Typography>
                      <Box sx={{ 
                        display: 'flex', 
                        alignItems: 'center'
                      }}>
                        <Typography variant="body2" sx={{ mr: 1 }}>
                          Match:
                        </Typography>
                        <Box sx={{ 
                          width: 60, 
                          bgcolor: 'grey.300',
                          borderRadius: 5,
                          height: 8,
                          mr: 1
                        }}>
                          <Box sx={{ 
                            width: `${job.match}%`, 
                            bgcolor: job.match < 70 ? 'warning.main' : 'success.main',
                            borderRadius: 5,
                            height: 8
                          }} />
                        </Box>
                        <Typography variant="body2" fontWeight="bold">
                          {job.match}%
                        </Typography>
                      </Box>
                    </CardContent>
                    <CardActions>
                      <Button size="small">View Details</Button>
                    </CardActions>
                  </Card>
                </Grid>
              ))}
            </Grid>
            <Box sx={{ mt: 2, display: 'flex', justifyContent: 'flex-end' }}>
              <Button 
                component={Link} 
                to="/job-recommendations"
                variant="outlined"
              >
                View All Jobs
              </Button>
            </Box>
          </Paper>
        </Grid>

        {/* Course Recommendations */}
        <Grid component="div" sx={{ gridColumn: { xs: 'span 12', md: 'span 6' } }}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              Learning Recommendations
            </Typography>
            <Divider sx={{ mb: 2 }} />
            <Grid container spacing={2}>
              {courseRecommendations.map((course, index) => (
                <Grid component="div" sx={{ gridColumn: 'span 12' }} key={index}>
                  <Card variant="outlined">
                    <CardContent>
                      <Typography variant="h6" component="div">
                        {course.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {course.platform} • {course.duration}
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button size="small">View Course</Button>
                    </CardActions>
                  </Card>
                </Grid>
              ))}
            </Grid>
            <Box sx={{ mt: 2, display: 'flex', justifyContent: 'flex-end' }}>
              <Button 
                component={Link} 
                to="/learning-recommendations"
                variant="outlined"
              >
                View All Courses
              </Button>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Dashboard;

