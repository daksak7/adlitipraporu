import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

export default function ReportStatus() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Rapor Bilgileri
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={12}>
          <TextField
            required
            id="darpDurumu"
            label="Darp Durumu"
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} md={12}>
          <TextField
            required
            id="gelisNedeni"
            label="Geliş Nedeni"
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} md={12}>
          <TextField
            required
            id="gelisNedeniAciklama"
            label="Geliş Nedeni Açıklama"
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} md={12}>
          <TextField
            required
            id="odadaBulunanlar"
            label="Odada Bulunanlar"
            helperText="yardımcı yazı"
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} md={12}>
          <TextField
            required
            id="organizasyon"
            label="Organizasyon"
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} md={12}>
          <TextField
            required
            id="sikayet"
            label="Şikayet"
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} md={12}>
          <TextField
            required
            id="odadaBulunanlar"
            label="Doktor adı"
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} md={12}>
          <TextField
            required
            id="uygunOrtamSaglandi"
            label="Uygun ortam sağlandı mı?"
            fullWidth
            variant="standard"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}