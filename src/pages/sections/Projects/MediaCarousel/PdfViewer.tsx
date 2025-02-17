import { Box } from "@mui/material";

const PdfViewer = ({
  pdfUrl,
  borderRadius,
}: {
  pdfUrl: string;
  borderRadius: string | number;
}) => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
      }}
    >
      <embed
        src={pdfUrl}
        width="100%"
        height="100%"
        type="application/pdf"
        style={{ borderRadius }}
      />
    </Box>
  );
};

export default PdfViewer;
