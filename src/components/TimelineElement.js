export default function TimelineElement({ title, company, description, date }) {
  return (
    <div
      style={{
        width: "95%",
        maxWidth: "1170px",
        margin: "0 auto",
        position: "relative",
        padding: 0,
      }}
      // class="vertical-timeline vertical-timeline--animate vertical-timeline--two-columns"
    >
      <div
        id=""
        // class="vertical-timeline-element"
        style={{ position: "relative", margin: "2em 0" }}
      >
        <span
          className="bg-white text-2xl rounded-full text-black"
          // class="vertical-timeline-element-icon bounce-in"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: 40,
            height: 40,
            boxShadow:
              "0 0 0 4px #fff, inset 0 2px 0 rgba(0, 0, 0, .08), 0 3px 0 4px rgba(0, 0, 0, .05)",
          }}
        >
          <svg
            style={{
              display: "block",
              width: "24px",
              height: "24px",
              position: "relative",
              left: "50%",
              top: "50%",
              marginLeft: "-12px",
              marginTop: "-12px",
            }}
            stroke="#000000"
            fill="none"
            strokeWidth="0"
            viewBox="0 0 24 24"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M17 7C17 5.34315 15.6569 4 14 4H10C8.34315 4 7 5.34315 7 7H6C4.34315 7 3 8.34315 3 10V18C3 19.6569 4.34315 21 6 21H18C19.6569 21 21 19.6569 21 18V10C21 8.34315 19.6569 7 18 7H17ZM14 6H10C9.44772 6 9 6.44772 9 7H15C15 6.44772 14.5523 6 14 6ZM6 9H18C18.5523 9 19 9.44772 19 10V18C19 18.5523 18.5523 19 18 19H6C5.44772 19 5 18.5523 5 18V10C5 9.44772 5.44772 9 6 9Z"
              fill="#000000"
            ></path>
          </svg>
        </span>
        <div
          // style="background:#f3f4f6;box-shadow:none;border:1px solid rgba(0, 0, 0, 0.05);text-align:left;padding:1.3rem 2rem"
          className="bg-[#f3f4f6] shadow-none border-2 decoration-solid-[rgba(0, 0, 0, 0.05)] text-left px-5 py-8"
          // class="vertical-timeline-element-content bounce-in"
          style={{
            position: "relative",
            marginLeft: "60px",
            borderRadius: "0.25em",
          }}
        >
          <div
            // style="border-right:0.4rem solid #9ca3af"
            className="border-r-[0.4rem] border-solid border-[#9ca3af] "
            // class="vertical-timeline-element-content-arrow"
            style={{
              content: "",
              position: "absolute",
              top: "16px",
              right: "100%",
              height: 0,
              width: 0,
              border: "7px solid transparent",
              borderRight: "0.4rem solid #9ca3af",
            }}
          ></div>
          <h3 className="font-semibold capitalize text-black">{title}</h3>
          <p className="font-normal !mt-0 text-black">{company}</p>
          {/* <p class="!mt-1 !font-normal text-gray-700 dark:text-white/75"> */}
          <ul className="list-disc pl-6">
            {description.map((item) => {
              return <li key={item}>{item}</li>;
            })}
          </ul>
          {/* </p> */}
          <span
            //class="vertical-timeline-element-date"
            style={{
              // float: "left",
              padding: ".8em 0",
              opacity: 0.7,
              fontWeight: ".875rem",
              display: "inline-block",
            }}
            className="text-gray-900"
          >
            {date}
          </span>
        </div>
      </div>
    </div>
  );
}
