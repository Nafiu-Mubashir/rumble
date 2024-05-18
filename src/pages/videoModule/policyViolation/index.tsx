import { Grid } from "@mantine/core";

import SideTab from "../../../components/sideTab";

const PolicyViolation = () => {
  const nums = ['1','2','3','4','5']
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
              POLICY VIOLATIONS
            </h1>
          </div>
          <div className="grid grid-cols-5 gap-2">
            {nums.map((item, id) => (
              <div
                key={id}
                className="md:w-[8.5rem] lg:w-[8.938rem] md:h-[10rem] lg:h-[10.375rem] border dark:border-gray-700 flex justify-center items-center first:bg-titan-blue first:text-white font-bold cursor-pointer text-[3rem]">
                {item}
              </div>
            ))}
          </div>

          <div className="border bg-white dark:bg-rumble-dark dark:border-gray-700 w-full p-6">
            <p>STATUS: OK</p>
            <p>
              Your account is currently in good standing with no policy
              violations
            </p>
          </div>

          <p>
            In order to be one of the leading video platforms for brand and
            advertisers, Titan strictly enforces our policies. If you are caught
            uploading any of the following material, you will be issued a policy
            violation and risk losing your Titan account. We prohibit the
            following video content:
          </p>

          <ol className="space-y-4 text-gray-500 list-decimal list-inside dark:text-gray-400">
            <li>
              Content or material that we believe is pornographic, obscene, or
              of an adult or sexual nature (bikinis);
            </li>
            <li>
              Content or material that we believe is grossly offensive to the
              online community, including but not limited to, blatant
              expressions of bigotry, prejudice, racism, violence, hatred and
              profanity;
            </li>
            <li>
              Content or material that exploits children under the age of 18 or
              posts or discloses any personally identifying information about
              children under the age of 18;
            </li>
            <li>
              Content or material promoting or providing instructional
              information about illegal activities, promoting harm or injury to
              any group, individual or cruelty to animals including, but not
              limited to:
              <ol className="ps-5 mt-2 space-y-1 list- list-inside">
                <li>
                  4a. Instructions on how to assemble or use bombs, grenades or
                  other weapons; and
                </li>
                <li>
                  4b. Disseminating personal information about another
                  individual for malevolent purposes, including libel, slander,
                  defamation or violation of an individual's right to privacy.
                </li>
              </ol>
            </li>
            <li>
              Copyrighted content or material that is used without the express
              permission of the owner; Photographs and other images published in
              video, books, magazines, posters, calendars, websites and other
              media are generally protected by copyright law.
            </li>
            <li>
              Content or material that infringes or encroaches on the rights of
              others, including, but not limited to, infringement of privacy and
              publicity rights and harm to reputation.
            </li>
          </ol>
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

export default PolicyViolation;
