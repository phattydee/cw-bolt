import React from 'react';
import { User } from 'lucide-react';

interface TeamMember {
  name: string;
  role: string;
  bio: string;
  imageUrl: string;
}

const teamMembers: TeamMember[] = [
  {
    name: "Dr. Emily Johnson",
    role: "Clinical Psychologist",
    bio: "Specializes in anxiety and depression treatment with 10+ years of experience.",
    imageUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
  },
  {
    name: "Michael Chen, LMFT",
    role: "Marriage and Family Therapist",
    bio: "Expert in couples therapy and family dynamics.",
    imageUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
  },
  {
    name: "Dr. Sarah Williams",
    role: "Child Psychologist",
    bio: "Specializes in play therapy and adolescent mental health.",
    imageUrl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
  },
  {
    name: "James Thompson, LCSW",
    role: "Licensed Clinical Social Worker",
    bio: "Focuses on trauma-informed care and PTSD treatment.",
    imageUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
  },
  {
    name: "Dr. Olivia Martinez",
    role: "Neuropsychologist",
    bio: "Specializes in cognitive assessment and rehabilitation.",
    imageUrl: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
  },
  {
    name: "Robert Kim, LPC",
    role: "Licensed Professional Counselor",
    bio: "Expert in multicultural counseling and LGBTQ+ issues.",
    imageUrl: "https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
  }
];

const TeamSection: React.FC = () => {
  return (
    <section id="team" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
              <img src={member.imageUrl} alt={member.name} className="w-full h-64 object-cover" />
              <div className="p-6 flex-grow">
                <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                <p className="text-gray-600 mb-2">{member.role}</p>
                <p className="text-gray-700">{member.bio}</p>
              </div>
              <div className="px-6 pb-6">
                <button className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300">
                  Book Me
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;