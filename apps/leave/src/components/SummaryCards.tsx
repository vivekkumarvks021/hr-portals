import { Card, CardContent, Typography } from "@mui/material";
import type { Leave } from "../types/leave";
import Grid from "@mui/material/Grid";

type Props = {
  leaves: Leave[];
};

export default function SummaryCards({ leaves }: Props) {
  const total = leaves.length;

  const pending = leaves.filter((leave) => leave.status === "Pending").length;

  const approved = leaves.filter((leave) => leave.status === "Approved").length;

  const rejected = leaves.filter((leave) => leave.status === "Rejected").length;

  const cards = [
    { title: "Total", value: total },
    { title: "Pending", value: pending },
    { title: "Approved", value: approved },
    { title: "Rejected", value: rejected },
  ];

  return (
    <Grid container spacing={2} sx={{ mb: 3 }}>
      {cards.map((card) => (
        <Grid key={card.title} size={{ xs: 12, sm: 6, md: 3 }}>
          <Card elevation={3}>
            <CardContent>
              <Typography variant="subtitle2" color="text.secondary">
                {card.title}
              </Typography>

              <Typography variant="h4" component="h4" sx={{ fontWeight: 600 }}>
                {card.value}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}
