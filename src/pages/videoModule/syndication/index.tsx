import { Facebook, Youtube } from "iconsax-react";

import { Button, Grid, Modal, Switch } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

import SideTab from "../../../components/sideTab";

const Syndication = () => {
  const [opened, { open, close }] = useDisclosure(false);
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
          className="space-y-4">
          <div className="flex justify-between">
            <h1 className="text-xl font-semibold text-titan-blue uppercase">
              SYNDICATION
            </h1>
          </div>
          <div className="grid grid-cols-2  gap-4">
            <div className="border bg-white dark:bg-rumble-dark dark:text-white dark:border-gray-700 p-4 space-y-3">
              <div className="flex gap-3">
                <Youtube
                  size="30"
                  color=""
                  className="stroke-gray-500 dark:stroke-white"
                />
                <div>
                  <p>Youtube</p>
                  <p>YouTube TOS, Privacy Policy, Security Settings</p>
                </div>
              </div>
              <div className="flex justify-end">
                <Switch
                  size="lg"
                  onLabel="ON"
                  offLabel="OFF"
                />
              </div>
            </div>
            <div className="border bg-white dark:bg-rumble-dark dark:text-white dark:border-gray-700 p-4 space-y-3  h-[65px]">
              <div className="flex justify-between items-center">
                <div className="flex gap-3 items-center">
                  <Facebook
                    size="30"
                    color=""
                    className="stroke-gray-500 dark:stroke-white"
                  />
                  <p>Facebook</p>
                </div>
                <Switch
                  size="lg"
                  onLabel="ON"
                  offLabel="OFF"
                />
              </div>
            </div>
            <div className="border bg-white dark:bg-rumble-dark dark:text-white dark:border-gray-700 p-4 space-y-3">
              <div className="flex justify-between items-center">
                <div className="flex gap-3 items-center">
                  <Youtube
                    size="30"
                    color=""
                    className="stroke-gray-500 dark:stroke-white"
                  />
                  <p>Vimo</p>
                </div>
                <Switch
                  size="lg"
                  onLabel="ON"
                  offLabel="OFF"
                />
              </div>
            </div>
          </div>
          <div className="flex justify-end">
            <Button
              onClick={open}
              radius={0}
              className="!bg-titan-blue text-white">
              Add Account
            </Button>
          </div>
          <Modal
            opened={opened}
            onClose={close}
            title="Add Account"
            classNames={{
              title: "!text-titan-blue !font-[700]",
            }}>
            <div className="bg-white p-4 space-y-3">
              <div className="flex gap-3 text-gray-500">
                <Youtube
                  size="30"
                  color="gray"
                />
                <div>
                  <p>Youtube</p>
                  <p>YouTube TOS, Privacy Policy, Security Settings</p>
                </div>
              </div>
              <div className="flex justify-end">
                <Button
                  radius={0}
                  className="!bg-titan-blue text-white">
                  Connect
                </Button>
              </div>
            </div>
          </Modal>
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
};

export default Syndication;
