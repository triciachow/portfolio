import Link from "next/link";

export const extra = [
  {
    id: 1,
    activity: "SIM Innovation and Networking Society (IONS)",
    role: "IONS Ambassador",
    duration: "August 2022 - Present",
    details: (
      <>
        <div>
          &#8226; Attended biweekly workshops about UI/UX and networking tips
        </div>
        <div>
          &#8226; Achieved first runner-up in an internal Hackathon - Project
          Altair
        </div>
      </>
    ),
  },
  {
    id: 2,
    activity: "SIM UI/UX Club",
    role: "ExCo Member - Head of Community",
    duration: "November 2020 - May 2021",
    details: (
      <>
        <div>&#8226; Pioneer batch to spearhead the community engagement</div>
        <div className="flex gap-x-2 flex-wrap">
          Organised and conducted interviews to gather information about the
          members&#39; understanding on UI/UX
        </div>
        <div>
          &#8226; Produced useful insights based on the interviews to advise the
          UI/UX trainer to ensure the workshops are suitable for the members
        </div>
        <div>
          &#8226; View the user research deck:{" "}
          <Link href="https://drive.google.com/file/d/1lfnVGXSfzAPckdzIkIjokm7SkmrQn8Le/view?usp=share_link">
            <span className="border-b border-blue-700 text-blue-700 cursor-pointer">
              SIM UI/UX User Research Results
            </span>
          </Link>
        </div>
      </>
    ),
  },
  {
    id: 3,
    activity: "SIM Touch Football",
    role: "Player",
    duration: "August 2019 - January 2020",
    details: (
      <>
        <div>&#8226; Attended weekly trainings</div>
        <div>
          &#8226; Achieved second runner-up position in the
          Institute-Varsity-Polytechnic Games
        </div>
      </>
    ),
  },
  {
    id: 4,
    activity: "SP Touch Football",
    role: "Treasurer (2016), Vice-captain (2017)",
    duration: "April 2015 - May 2018",
    details: (
      <>
        <div>
          &#8226; Assisted in leading a competitive team in trainings and
          competitions
        </div>
        <div>&#8226; Consistently produced top 3 results for POL-ITE games</div>
        <div>&#8226; Organised events to promote team bonding</div>
      </>
    ),
  },
];
