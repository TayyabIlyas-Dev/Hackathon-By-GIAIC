




'use client';
import React, { useState } from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import UserProfile from '../components/topinfo';
import Objective from '../components/ObjectiveSec';
import PersonalInfo from '../components/PersnalInfo';
import Skills from '../components/skills';
import Experience from '../components/Experience';
import Reference from '../components/Refrence';
import Education from '../components/Education';
import Footer from '../components/Footer';
import { MdDelete } from 'react-icons/md';

const ResumeForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    profession: '',
    fatherName: '',
    age: 0,
    religion: '',
    maritalStatus: '',
    skills: [''],
    experiences: [{ years: 0, role: '', company: '' }],
    educationList: [''],
  });

  // Input handlers
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle dynamic skills addition/removal
  const handleSkillsChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const updatedSkills = [...formData.skills];
    updatedSkills[index] = e.target.value;
    setFormData({ ...formData, skills: updatedSkills });
  };

  const addSkill = () => {
    setFormData({ ...formData, skills: [...formData.skills, ''] });
  };

  const removeSkill = (index: number) => {
    const updatedSkills = formData.skills.filter((_, i) => i !== index);
    setFormData({ ...formData, skills: updatedSkills });
  };

  // Handle dynamic experiences addition/removal
  const handleExperienceChange = (e: React.ChangeEvent<HTMLInputElement>, index: number, field: string) => {
    const updatedExperiences = [...formData.experiences];
    updatedExperiences[index] = { ...updatedExperiences[index], [field]: e.target.value };
    setFormData({ ...formData, experiences: updatedExperiences });
  };

  const addExperience = () => {
    setFormData({
      ...formData,
      experiences: [...formData.experiences, { years: 0, role: '', company: '' }],
    });
  };

  const removeExperience = (index: number) => {
    const updatedExperiences = formData.experiences.filter((_, i) => i !== index);
    setFormData({ ...formData, experiences: updatedExperiences });
  };

  // Handle dynamic education addition/removal
  const handleEducationChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const updatedEducation = [...formData.educationList];
    updatedEducation[index] = e.target.value;
    setFormData({ ...formData, educationList: updatedEducation });
  };

  const addEducation = () => {
    setFormData({ ...formData, educationList: [...formData.educationList, ''] });
  };

  const removeEducation = (index: number) => {
    const updatedEducation = formData.educationList.filter((_, i) => i !== index);
    setFormData({ ...formData, educationList: updatedEducation });
  };

  // Function to download the resume as PDF
  const downloadPDF = () => {
    const resumeElement = document.querySelector('.resume-render');
    if (resumeElement) {
      html2canvas(resumeElement as HTMLElement).then((canvas) => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF({
          orientation: 'portrait',
          unit: 'pt',
          format: 'a4',
        });
        const imgWidth = 595;
        const pageHeight = 842;
        const imgHeight = (canvas.height * imgWidth) / canvas.width;
        let heightLeft = imgHeight;

        let position = 0;
        pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;

        while (heightLeft >= 0) {
          position = heightLeft - imgHeight;
          pdf.addPage();
          pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
          heightLeft -= pageHeight;
        }
        pdf.save('resume.pdf');
      });
    }
  };

  return (
    <div className="resume-form-container">
     <div className=' border-solid border-2 m-4 p-3'>
   
        <div>
        <h1 className='font-bold text-3xl text-center m-6'>Create Your Resume</h1>
  

  <div className='border-solid border-2 w-72 flex justify-center m-3 rounded-md'>
    <label>Name:</label>
    <input type="text" name="name" placeholder='Your Name' value={formData.name} onChange={handleInputChange} />
  </div>

  <div className='border-solid border-2 w-72 flex justify-center m-3 rounded-md p-1'>
    <label>Profession:</label>
    <input type="text" name="profession" value={formData.profession} onChange={handleInputChange} />
  </div>

{/* Persnal info here  */}

  <div className='border-solid border-2 w-72 flex justify-center m-3 p-1 rounded-md'>
    <label>Father's Name:</label>
    <input type="text" name="fatherName" value={formData.fatherName} onChange={handleInputChange} />
  </div>

  <div className='border-solid border-2 w-72 flex justify-center m-3 rounded-md'>
    <label>Age:</label>
    <input type="number" name="age" value={formData.age} onChange={handleInputChange} />
  </div>

  <div className='border-solid border-2 w-72 flex justify-center m-3 rounded-md'>
    <label>Religion:</label>
    <input type="text" name="religion" value={formData.religion} onChange={handleInputChange} />
  </div>

  <div className='border-solid border-2 w-72 flex justify-center m-3 rounded-md p-1'>
    <label>Marital Status:</label>
    <input type="text" name="maritalStatus" value={formData.maritalStatus} onChange={handleInputChange} />
  </div>

  {/* Skills Section */}
  
  {formData.skills.map((skill, index) => (
    <div key={index} className='border-solid border-2 w-72 flex justify-center m-3 rounded-md'>
        <label>Skills:</label>
      <input type="text" value={skill} onChange={(e) => handleSkillsChange(e, index)} />
      <button onClick={() => removeSkill(index)} className='text-black'><MdDelete /></button>
    </div>
  ))}
  <button onClick={addSkill} className='border-solid border-2  hover:bg-black hover:text-white hover:font-semibold border-black text-sm p-1.5 px-3  mx-3 rounded-md'>Add Skill</button> 

  {/* Experience Section */}
  
  {formData.experiences.map((experience, index) => (
    <div key={index} className='border-solid border-2 rounded-md p-1   m-3'>
        <label>Experience:</label>
      <input
        type="text"
        name="years"
        value={experience.years}
        placeholder="Years"
        onChange={(e) => handleExperienceChange(e, index, 'years')}
      />
      <input
        type="text"
        name="role"
        value={experience.role}
        placeholder="Role"
        onChange={(e) => handleExperienceChange(e, index, 'role')}
      />
      <input
        type="text"
        name="company"
        value={experience.company}
        placeholder="Company"
        onChange={(e) => handleExperienceChange(e, index, 'company')}
      />
      <button onClick={() => removeExperience(index)}><MdDelete /></button>
    </div>
  ))}
  <button onClick={addExperience} className='border-solid border-2  hover:bg-black hover:text-white hover:font-semibold border-black text-sm p-1.5 px-3  rounded-md mx-3'>Add Experience</button>

  {/* Education Section */}
  
  {formData.educationList.map((education, index) => (
    <div key={index} className='border-solid border-2 w-72 flex justify-center m-3 rounded-md p-1'>
        <label>Education:</label>
      <input type="text" value={education} onChange={(e) => handleEducationChange(e, index)} />
      <button onClick={() => removeEducation(index)}><MdDelete /></button>
    </div>
  ))}
  <button onClick={addEducation} className='border-solid border-2  hover:bg-black hover:text-white hover:font-semibold border-black text-sm p-1.5 px-3  rounded-md mx-3'>Add Education</button>

  <hr className=' mt-6'/>

        </div>

        {/* Render Resume Section */}
        <div className="resume-render border-solid border-8 divide-y-0 mt-14 sm:mx-32 md:mx-48 my-4 rounded-md">
          <UserProfile name={formData.name} profession={formData.profession} />
       <div><hr /></div>
          <Objective objective="Seeking to build a career with a progressive company where I can learn, grow, and contribute to productivity, while leveraging my skills for future career advancement." />
          <div><hr /></div>

          <PersonalInfo
            fatherName={formData.fatherName}
            age={formData.age}
            religion={formData.religion}
            maritalStatus={formData.maritalStatus}
          />
              <div><hr /></div>

          <Education educationList={formData.educationList} />
          <div><hr /></div>

          <Skills skills={formData.skills} />
          <div><hr /></div>

          <Experience experiences={formData.experiences} />
          <div><hr /></div>

          <Reference referenceText="Will be furnished upon request." />
        </div>

        {/* Download PDF Button */}
       <div className='flex justify-center m-3'>
       <button onClick={downloadPDF} className="border-solid border-2  hover:bg-black hover:text-white hover:font-semibold border-black text-sm p-1.5 px-4 mx-3 rounded-md">
          Download PDF
        </button>
       </div>

        <Footer />
      </div>
    </div>
  );
};

export default ResumeForm;
