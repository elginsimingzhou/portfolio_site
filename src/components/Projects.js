import react from "react";
import ProjectComponent from "./ProjectComponent";
import trailglide_img from "../images/trailglide.png";
import byteme_img from "../images/byteme.png";
import eyetracking_img from "../images/eye_tracking.png";

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-28 mb-28">
      <h2 className="text-3xl font-medium capitalize mb-8 text-center">
        My Projects
      </h2>
      <div>

      <ProjectComponent  title="Trailglide" madewith={["js", "react", "firebase"]} demo="https://youtu.be/69DWlhprrrs" github="https://github.com/elginsimingzhou/Trailglide" description="Running app that generates new routes with additional information such as traffic lights, restrooms and waterpoints. OpenRouteService was used to randomise routes that prioritises green spaces for more ideal runs. Users are able to track distance, duration and pace of their runs. Post-run analytics report for users to track their performance. Firebase was used to authenticate user credentials and store user information." image={trailglide_img}/>
      <ProjectComponent  title="Byteme!" madewith={["js", "react", "firebase"]} demo="https://www.youtube.com/watch?v=Q-seDjmoM1Y" github="https://github.com/pareenakaur/ByteMe" description="(NTU SC2006) React native application to help Singaporeans gauge crowdedness level of hawker centres using LTA's carpark API. Users can filter hawker centres by dietary requirements and stall ratings. Provide alternative hawker centres with less crowd. Showcase hawker stall information such as location, opening hours, halal etc. Users can also leave and upvote/downvote reviews and reports." image={byteme_img}/>
      <ProjectComponent  title="V.I.S.I.O.N" madewith={["js", "react", "python"]} demo="https://youtu.be/1PxMKAOiPnY" github="https://github.com/axwhyzee/george-hacks-mala-frontend/tree/mingzhou/frontend" description="(George Hacks 2024) Eye gaze navigation system to help severely disabled patients and possibly healthcare providers. Patients are able to navigate screens to perform basic tasks such as request for medical attention, request for food/water, scroll TikTok, adjust bed angle and Q&A. Implemented heuristics to improve existing CV model (Antoine Lamé's Eye Tracking Library) for our navigation task. Awarded for Responsible Design Award worth USD$1000." image={eyetracking_img}/>
      </div>
    </section>
  );
}
