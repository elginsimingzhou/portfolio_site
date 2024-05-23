import react from "react";
import TimelineElement from "./TimelineElement";

export default function Experience() {
  return (
    <section id="experience" className="scroll-mt-28 mb-28 sm:mb-40">
      <h2 className="text-3xl font-medium capitalize mb-8 text-center">
        My experience
      </h2>
      <TimelineElement
        title="Data Scientist Intern"
        company="Knorex Pte Ltd"
        description={[
          "Improve in-house visualization dashboard to track ML models performance and alert anomalies using Python with Dash Framework.",
          "Crunched data to generate data reports for identifying trends on advertiser's behaviour, identyify anomalies and performance of ad exchanges using Pandas.",
          "Performed database migration from Google BigQuery to AWS Redshift using Python and SQL.",
        ]}
        date="May 2022 - August 2022"
      />

      <TimelineElement
        title="Product Analyst Intern"
        company="Shopee Pte Ltd"
        description={[
          "Generated data reports to uncover actionable insights for product managers after extracting data using SQL & PySpark",
          "Build multiple dashboards for monitoring long-term key metrics and automated the dashboard building process using Selenium",
          "Assisted in Shopee's NPS survey study using BART to summarize and extract consumer's painpoints for generation of word cloud"
        ]}
        date="May 2023 - August 2023"
      />
    </section>
  );
}
