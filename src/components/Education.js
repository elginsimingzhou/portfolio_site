import react from "react";
import NTU_logo from "../images/NTU_logo.png";

export default function Education() {
  return (
    <section
      id="education"
      className="mb-20 sm:mb-28 scroll-mt-28 w-full md:w-[700px]"
      style={{ opacity: 1 }}
    >
      <h2 className="text-3xl font-medium capitalize mb-8 text-center">
        My Education
      </h2>
      {/* Business */}
      <div className="mt-4 flex gap-6 border border-black/5 rounded-lg pt-4 pb-7 px-5 md:p-10 bg-gray-100 dark:bg-white/10 dark:hover:bg-white/20">
        {/* <div><img alt="NTU" loading="lazy" width="150" height="150" decoding="async" data-nimg="1" srcset="../images/NTU_logo.png&amp;w=256&amp;q=75 1x, ../images/NTU_logo.png&amp;w=384&amp;q=75 2x" src="../images/NTU_logo.png&amp;w=384&amp;q=75" /></div> */}
        <div>
          <img
            alt="NTU"
            loading="lazy"
            width="120"
            height="120"
            decoding="async"
            data-nimg="1"
            src={NTU_logo}
          />
        </div>
        <div>
          <p className="text-lg font-medium">Bachelor of Business</p>
          <p>Nanyang Technological University</p>
          <p className="mt-1">Graduating in 2025</p>
          <p className="my-1">GPA 4.65/5</p>
          <ul className="list-disc pl-6">
            <li>Specialising in Business Analytics</li>
            <li>Business Dean's List - 2022</li>
          </ul>
        </div>
      </div>
      {/* Computer Science */}
      <div className="mt-4 flex gap-6 border border-black/5 rounded-lg pt-4 pb-7 px-5 md:p-10 bg-gray-100 dark:bg-white/10 dark:hover:bg-white/20">
        {/* <div><img alt="NTU" loading="lazy" width="150" height="150" decoding="async" data-nimg="1" srcset="../images/NTU_logo.png&amp;w=256&amp;q=75 1x, ../images/NTU_logo.png&amp;w=384&amp;q=75 2x" src="../images/NTU_logo.png&amp;w=384&amp;q=75" /></div> */}
        <div>
          <img
            alt="NTU"
            loading="lazy"
            width="120"
            height="120"
            decoding="async"
            data-nimg="1"
            src={NTU_logo}
          />
        </div>
        <div>
          <p className="text-lg font-medium">Bachelor of Computer Science</p>
          <p>Nanyang Technological University</p>
          <p className="mt-1">Graduating in 2025</p>
          <p className="my-1">GPA 4.55/5</p>
          <ul className="list-disc pl-6">
            <li>Specialising in AI</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
