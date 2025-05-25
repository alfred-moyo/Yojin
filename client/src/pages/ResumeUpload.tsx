import React, { useState } from 'react';
import { 
  Container, 
  Typography, 
  Box, 
  Paper, 
  Button, 
  Grid,
  TextField,
  Divider,
  Alert,
  CircularProgress
} from '@mui/material';
import { CloudUpload as UploadIcon } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const ResumeUpload: React.FC = () => {
  const navigate = useNavigate();
  const [file, setFile] = useState<File | null>(null);
  const [resumeText, setResumeText] = useState('');
  const [uploadMethod, setUploadMethod] = useState<'file' | 'text'>('file');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setResumeText(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    // Basic validation
    if (uploadMethod === 'file' && !file) {
      setError('Please select a file to upload');
      return;
    }

    if (uploadMethod === 'text' && !resumeText.trim()) {
      setError('Please enter your resume text');
      return;
    }

    setIsLoading(true);

    try {
      // This would connect to the actual API in a real implementation
      // For file upload:
      // const formData = new FormData();
      // formData.append('resume', file);
      // await axios.post('/api/resume/upload', formData);
      
      // For text input:
      // await axios.post('/api/resume/upload', { resumeText });
      
      // Simulate API call with timeout
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setSuccess(true);
      
      // Navigate after a short delay to show success message
      setTimeout(() => {
        navigate('/dashboard');
      }, 1500);
    } catch (err: any) {
      setError(err.response?.data?.message || 'An error occurred. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
      <Paper elevation={3} sx={{ p: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom align="center">
          Upload Your Resume
        </Typography>
        <Typography variant="body1" align="center" paragraph sx={{ mb: 4 }}>
          Our AI will analyze your resume to extract your skills and experience
        </Typography>
        
        {error && (
          <Alert severity="error" sx={{ mb: 3 }}>
            {error}
          </Alert>
        )}
        
        {success && (
          <Alert severity="success" sx={{ mb: 3 }}>
            Resume uploaded successfully! Redirecting to dashboard...
          </Alert>
        )}
        
        <Box component="form" onSubmit={handleSubmit}>
          <Box sx={{ mb: 4 }}>
            <Grid container spacing={2}>
              <Grid component="div" sx={{ gridColumn: { xs: 'span 6' } }}>
                <Button 
                  fullWidth
                  variant={uploadMethod === 'file' ? 'contained' : 'outlined'}
                  onClick={() => setUploadMethod('file')}
                >
                  Upload File
                </Button>
              </Grid>
              <Grid component="div" sx={{ gridColumn: { xs: 'span 6' } }}>
                <Button 
                  fullWidth
                  variant={uploadMethod === 'text' ? 'contained' : 'outlined'}
                  onClick={() => setUploadMethod('text')}
                >
                  Enter Text
                </Button>
              </Grid>
            </Grid>
          </Box>
          
          <Divider sx={{ mb: 4 }} />
          
          {uploadMethod === 'file' ? (
            <Box sx={{ textAlign: 'center' }}>
              <input
                accept=".pdf,.doc,.docx,.txt"
                style={{ display: 'none' }}
                id="resume-file"
                type="file"
                onChange={handleFileChange}
              />
              <label htmlFor="resume-file">
                <Button
                  variant="outlined"
                  component="span"
                  startIcon={<UploadIcon />}
                  sx={{ mb: 2 }}
                >
                  Select Resume File
                </Button>
              </label>
              
              {file && (
                <Typography variant="body1" sx={{ mt: 2 }}>
                  Selected file: {file.name}
                </Typography>
              )}
              
              <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                Supported formats: PDF, DOC, DOCX, TXT
              </Typography>
            </Box>
          ) : (
            <TextField
              label="Paste your resume text"
              multiline
              rows={10}
              fullWidth
              variant="outlined"
              value={resumeText}
              onChange={handleTextChange}
              placeholder="Paste the content of your resume here..."
            />
          )}
          
          <Box sx={{ mt: 4, display: 'flex', justifyContent: 'center' }}>
            <Button 
              type="submit"
              variant="contained"
              size="large"
              disabled={isLoading || success}
              startIcon={isLoading ? <CircularProgress size={20} color="inherit" /> : undefined}
            >
              {isLoading ? 'Uploading...' : 'Upload Resume'}
            </Button>
          </Box>
        </Box>
      </Paper>
    </Container>
  );
};

export default ResumeUpload;

