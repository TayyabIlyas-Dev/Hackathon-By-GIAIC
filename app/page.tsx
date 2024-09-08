import UserProfile from "./components/topinfo";
import Objective from "./components/ObjectiveSec";
import PersonalInfo from "./components/PersnalInfo";
import Skills from "./components/skills";
import Experience from "./components/Experience";
import Reference from "./components/Refrence";
import Footer from "./components/Footer";
import Education from "./components/Education";

export default function Home() {
  return (
    <div className="p-1">
      <div className="border-solid border-8 divide-y-0 sm:mx-32 md:mx-48 my-4 rounded-md">
        {/* top info */}
        <div>
          <UserProfile name="TAYYAB ILYAS" profession="Web Developer" />
        </div>
        <div>
          <hr className="bg-[#D2CCCC]" />
        </div>

        {/* Objective info */}
        <div>
          <Objective objective="Seeking to build a career with a progressive company where I can learn, grow, and contribute to productivity, while leveraging my skills for future career advancement." />
        </div>
        <div>
          <hr className="bg-[#D2CCCC]" />
        </div>
        {/* Now personal Info Component here */}
        <div>
          <PersonalInfo
            fatherName="Muhammad Ilyas"
            age={18}
            religion="Islam"
            maritalStatus="Single"
          />
        </div>
        <div>
          <hr className="bg-[#D2CCCC]" />
        </div>
        {/* Now Education Component here */}
        <div>
          <Education
            educationList={[
              'Ai, Web 3 & Metaverse from GIAIC (Continued),',
              '6 months CIT Diploma from KEMAN ARMY Institution,',
              'Intermediate in Computer Science (2022 - 2024),',
              'Matric in Computer Science (2020 - 2022).',
            ]}
          />
        </div>
        <div>
          <hr className="bg-[#D2CCCC]" />
        </div>
        {/* Now Skills component here */}
        <div>
          <Skills skills={['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React.js', 'Next.js']} />
        </div>
        <div>
          <hr className="bg-[#D2CCCC]" />
        </div>
        {/* Now Experience component */}
        <div>
          <Experience
            experiences={[
              { years: 1, role: 'Frontend Developer', company: 'Mock Solutions' },
              { years: 1, role: 'Backend Developer', company: 'Mock Solutions' },
            ]}
          />
        </div>
        <div>
          <hr className="bg-[#D2CCCC]" />
        </div>
        {/* Now Reference Component Here */}
        <div>
          <Reference referenceText="Will be furnished upon request." />
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
