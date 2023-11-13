import React from 'react';
import './media_section.css'; // Make sure to create this CSS file for styling

const MediaSection = () => {
  const mediaCoverage = [
    {
      title: 'Tech Today: Innovations in AI',
      source: 'Tech Insights',
      date: 'March 10, 2023',
      link: 'https://example.com/tech_today_ai',
    },
    {
      title: 'Breaking Ground: Next-Gen Web Development',
      source: 'WebTech Magazine',
      date: 'February 25, 2023',
      link: 'https://example.com/next_gen_web_dev',
    },
    // Add more media coverage entries as needed
  ];

  return (
    <div className="media_section">
      <div className="container">
        <h2 className="section_title">Media Coverage</h2>
        <div className="media_entries">
          {mediaCoverage.map((entry, index) => (
            <div key={index} className="media_entry">
              <h3 className="entry_title">{entry.title}</h3>
              <p className="entry_source">{entry.source}</p>
              <p className="entry_date">{entry.date}</p>
              <a href={entry.link} target="_blank" rel="noopener noreferrer" className="entry_link">
                Read More
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MediaSection;
