// src/pages/Courses.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Courses = () => {
    // This is the YouTube Video ID from the embed code you provided: https://www.youtube.com/embed/xhpLDRY0lKs?si=hzw1FKzdcG9agulZ
    const kolhapurCampusVideoId = '69'; // Use the correct video ID from the src attribute
    // Using the privacy-enhanced embed URL for better user privacy.
    const embedUrl = `https://www.youtube-nocookie.com/embed/${kolhapurCampusVideoId}`;

    return (
        <div className="page-content">
            <div className="info-card">
                <h2>Our Academic Programs</h2>
                <p>Vivekanand College offers a comprehensive range of undergraduate and postgraduate programs designed to equip students with the knowledge and skills demanded by today's dynamic global landscape. Our curriculum is regularly updated to reflect industry trends and academic advancements.</p>
            </div>

            <div className="info-card">
                <h2>Discover Campus Life</h2>
                <div className="video-container">
                    {/* The src attribute uses the correct YouTube embed domain and the specific college video ID */}
                    <iframe
                        width="100%" // Ensure width is set for initial rendering
                        height="400" // Ensure height is set for initial rendering
                        src={embedUrl} // This uses the college's campus video from your provided embed code
                        title="Vivekanand College Kolhapur Campus Life" // Specific title for this video
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                    ></iframe>
                </div>
                <p style={{ textAlign: 'center', marginTop: '10px' }}>Get a glimpse of the vibrant academic and social life at Vivekanand College.</p>
            </div>

            <div className="info-card">
                <h3>Undergraduate Programs (UG)</h3>
                <ul>
                    <li>**Bachelor of Science (B.Sc.)**
                        <ul>
                            <li>Computer Science (3 years)</li>
                            <li>Information Technology (3 years)</li>
                            <li>Biotechnology (3 years)</li>
                        </ul>
                    </li>
                    <li>**Bachelor of Commerce (B.Com)**
                        <ul>
                            <li>Accounting & Finance (3 years)</li>
                            <li>Banking & Insurance (3 years)</li>
                        </ul>
                    </li>
                    <li>**Bachelor of Arts (B.A.)**
                        <ul>
                            <li>English Literature (3 years)</li>
                            <li>Psychology (3 years)</li>
                        </ul>
                    </li>
                </ul>
            </div>

            <div className="info-card">
                <h3>Postgraduate Programs (PG)</h3>
                <ul>
                    <li>**Master of Science (M.Sc)**
                        <ul>
                            <li>Computer Science (2 years)</li>
                            <li>Information Technology (2 years)</li>
                        </ul>
                    </li>
                    <li>**Master of Commerce (M.Com)** (2 years)</li>
                    <li>**Master of Arts (M.A.)** (2 years)</li>
                </ul>
            </div>

            <div className="info-card">
                <h3>Program Details & Fee Structure (Annual)</h3>
                <table>
                    <thead>
                        <tr>
                            <th>Program Type</th>
                            <th>Course Name</th>
                            <th>Duration</th>
                            <th>Annual Fee (INR)</th>
                            <th>Eligibility</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>UG</td>
                            <td>B.Sc. Computer Science</td>
                            <td>3 Years</td>
                            <td>₹ 85,000</td>
                            <td>10+2 with PCM (50%)</td>
                        </tr>
                        <tr>
                            <td>UG</td>
                            <td>B.Com. Accounting & Finance</td>
                            <td>3 Years</td>
                            <td>₹ 70,000</td>
                            <td>10+2 Commerce (45%)</td>
                        </tr>
                        <tr>
                            <td>PG</td>
                            <td>M.Sc. Information Technology</td>
                            <td>2 Years</td>
                            <td>₹ 95,000</td>
                            <td>B.Sc. IT/CS (50%)</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className="info-card">
                <h3>Specialized & Vocational Courses</h3>
                <p>In addition to traditional degree programs, we offer various certificate and diploma courses in areas like Digital Marketing, Web Development, Data Analytics, and Soft Skills Development, providing specialized training for career enhancement.</p>
                <p>Have questions about a specific course?</p>
                <Link to="/contact" className="college-button">Inquire About Courses</Link>
            </div>
        </div>
    );
};

export default Courses;