import { Grid } from "@mantine/core";

import SideTab from "../../../components/sideTab";

const PeerPerView = () => {
  return (
    <div className="p-4 dark:text-white">
      <Grid
        justify="space-between"
        classNames={{
          root: "gap-3 py-4 lg:py-8 md:p-4 lg:p-6",
        }}>
        <Grid.Col
          span={{ base: 12, md: 12, lg: 9 }}
          classNames={{
            col: "",
          }}
          className="space-y-6">
          <h1 className="text-xl font-semibold text-titan-blue uppercase">
            PAY-PER-VIEW
          </h1>
          <p>You haven't purchased any videos yet.</p>
        </Grid.Col>
        <Grid.Col
          span={{ base: 12, md: 12, lg: 3 }}
          classNames={{
            col: "hidden lg:block",
          }}>
          <SideTab />
        </Grid.Col>
      </Grid>
    </div>
  );
}

export default PeerPerView