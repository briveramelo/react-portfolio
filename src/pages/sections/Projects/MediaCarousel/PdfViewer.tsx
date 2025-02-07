import { Box } from "@mui/material";

const PdfViewer = ({ pdfUrl }: { pdfUrl: string }) => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
      }}
    >
      <embed src={pdfUrl} width="100%" height="100%" type="application/pdf" />
    </Box>
  );
};

export default PdfViewer;
