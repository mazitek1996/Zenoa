import React from 'react';
import './team_section.css';
const TeamSection = () => {
  const teamMembers = [
    {
      name: 'John Doe',
      role: 'Founder & CEO',
      bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel tincidunt arcu. Phasellus tristique auctor velit, et rhoncus ex ultrices ut.',
      imageUrl: 'https://example.com/john_doe.jpg',
      socialLinks: {
        twitter: 'https://twitter.com/johndoe',
        linkedin: 'https://linkedin.com/in/johndoe',
        github: 'https://github.com/johndoe',
      },
    },
    {
      name: 'John Doe',
      role: 'Founder & CEO',
      bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel tincidunt arcu. Phasellus tristique auctor velit, et rhoncus ex ultrices ut.',
      imageUrl: 'https://example.com/john_doe.jpg',
      socialLinks: {
        twitter: 'https://twitter.com/johndoe',
        linkedin: 'https://linkedin.com/in/johndoe',
        github: 'https://github.com/johndoe',
      },
    },
    {
      name: 'John Doe',
      role: 'Founder & CEO',
      bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel tincidunt arcu. Phasellus tristique auctor velit, et rhoncus ex ultrices ut.',
      imageUrl: 'https://example.com/john_doe.jpg',
      socialLinks: {
        twitter: 'https://twitter.com/johndoe',
        linkedin: 'https://linkedin.com/in/johndoe',
        github: 'https://github.com/johndoe',
      },
    },
    // Add more team members as needed
  ];

  return (
    <div className="team_section">
      <div className="container">
        <h2 className="section_title">Our Team</h2>
        <div className="team_members">
          {teamMembers.map((member, index) => (
            <div key={index} className="team_member">
              <img src={member.imageUrl} alt={member.name} className="member_image" />
              <div className="member_info">
                <h3 className="member_name">{member.name}</h3>
                <p className="member_role">{member.role}</p>
                <p className="member_bio">{member.bio}</p>
                <div className="social_links">
                  {member.socialLinks.twitter && (
                    <a href={member.socialLinks.twitter} target="_blank" rel="noopener noreferrer">
                      Twitter
                    </a>
                  )}
                  {member.socialLinks.linkedin && (
                    <a href={member.socialLinks.linkedin} target="_blank" rel="noopener noreferrer">
                      LinkedIn
                    </a>
                  )}
                  {member.socialLinks.github && (
                    <a href={member.socialLinks.github} target="_blank" rel="noopener noreferrer">
                      GitHub
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      
    </div>
  );
};

export default TeamSection;
