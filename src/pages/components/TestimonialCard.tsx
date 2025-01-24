import { Card, CardContent, Typography, Box, Avatar } from "@mui/material";
import ReactMarkdown from "react-markdown";
import { HighlightedText } from "./reusable/HighlightedText.tsx";
import { cp } from "../../utils/utils.ts";
import { useHoverTracking } from "../../tracking/useHoverTracking.ts";

interface Testimonial {
  quote: string;
  name: string;
  title: string;
  company: string;
  photo: string;
  link: string;
}

export function TestimonialCard({
  data,
  backgroundColor,
  textColor,
}: {
  data: Testimonial;
  backgroundColor: string;
  textColor: string;
}) {
  const cardHover = useHoverTracking();
  const avatarHover = useHoverTracking();

  return (
    <Card
      sx={{
        p: 2,
        backgroundColor: backgroundColor,
        borderRadius: 2,
      }}
      id={`testimonial_card_${data.name}`}
      onMouseEnter={cardHover.trackMouseEnter}
      onMouseLeave={cardHover.trackMouseLeave}
      className="subtle-shadow"
    >
      <CardContent>
        <ReactMarkdown
          components={{
            p: ({ children }) => (
              <Typography variant="body1" sx={{ color: cp("text.secondary") }}>
                {children}
              </Typography>
            ),
            strong: ({ children }) => (
              <HighlightedText>{children}</HighlightedText>
            ),
          }}
        >
          {data.quote}
        </ReactMarkdown>
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }} mt={3}>
          <a
            href={data.link}
            id={`testimonial_card_avatar_${data.name}`}
            onMouseEnter={avatarHover.trackMouseEnter}
            onMouseLeave={avatarHover.trackMouseLeave}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Avatar
              src={data.photo}
              alt={data.name}
              sx={{
                width: 100,
                height: 100,
                "&:hover": { transform: "scale(1.02) !important" },
              }}
              className="pop-shadow"
            />
          </a>
          <Box>
            <Typography
              variant="h5"
              sx={{ fontWeight: "bold", color: textColor }}
            >
              {data.name}
            </Typography>
            <Typography variant="h6" sx={{ color: textColor }}>
              {data.title}
            </Typography>
            <Typography variant="body1" sx={{ color: textColor }}>
              {data.company}
            </Typography>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
}
