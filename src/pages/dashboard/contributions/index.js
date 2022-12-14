import { useEffect } from "react";
import Head from "next/head";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import { AuthGuard } from "../../../components/authentication/auth-guard";
import { DashboardLayout } from "../../../components/dashboard/dashboard-layout";
import { Cog as CogIcon } from "../../../icons/cog";
import { Download as DownloadIcon } from "../../../icons/download";
import { Reports as ReportsIcon } from "../../../icons/reports";
import { gtm } from "../../../lib/gtm";
import { ContributionsList } from "../../../components/dashboard/contributions/contributions-lists";
import { ContributionsCondition } from "../../../components/dashboard/contributions/contributions-condition";
import { ContributionsDropZone } from "../../../components/dashboard/contributions/contributions-dropzone";

const Logistics = () => {
  useEffect(() => {
    gtm.push({ event: "page_view" });
  }, []);

  return (
    <>
      <Head>
        <title>Dashboard: Logistics | Material Kit Pro</title>
      </Head>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8,
        }}
      >
        <Container maxWidth="xl">
          <Box sx={{ mb: 4 }}>
            <Grid container justifyContent="space-between" spacing={3}>
              <Grid item>
                <Typography variant="h4">Contribuciones</Typography>
              </Grid>
              <Grid
                item
                sx={{
                  alignItems: "center",
                  display: "flex",
                  flexWrap: "wrap",
                  m: -1,
                }}
              >
                <Button
                  startIcon={<ReportsIcon fontSize="small" />}
                  sx={{ m: 1 }}
                  variant="outlined"
                >
                  Reports
                </Button>
                <Button
                  startIcon={<CogIcon fontSize="small" />}
                  sx={{ m: 1 }}
                  variant="outlined"
                >
                  Settings
                </Button>
                <Button
                  startIcon={<DownloadIcon fontSize="small" />}
                  sx={{ m: 1 }}
                  variant="contained"
                >
                  Export
                </Button>
              </Grid>
            </Grid>
          </Box>
          <Box sx={{ mt: 4 }}>
            <Grid container spacing={4}>
              <Grid item xl={6} xs={12}>
                <ContributionsDropZone />
              </Grid>
              <Grid item xl={6} xs={12}>
                {/* <ContributionsCondition /> */}
              </Grid>
              <Grid item xs={12}>
                <ContributionsList />
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
    </>
  );
};

Logistics.getLayout = (page) => (
  <AuthGuard>
    <DashboardLayout>{page}</DashboardLayout>
  </AuthGuard>
);

export default Logistics;
