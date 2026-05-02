import React, { useState } from "react";

function Team() {
    const [activeIndex, setActiveIndex] = useState(null);

    const teamMembers = [
        {
            name: "Nikhil Kamath",
            role: "Co-founder & CFO",
            img: "/Assets/Nikhil.png",
            bio: "Nikhil is an astute and experienced investor, and he heads financial planning at Zerodha. An avid reader, he always appreciates a good game of chess."
        },
        {
            name: "Dr. Kailash Nadh",
            role: "CTO",
            img: "/Assets/Kailash.png",
            bio: "Kailash has a PhD in Artificial Intelligence & Computational Linguistics, and is the brain behind all our technology and products. He has been a developer from his adolescence and continues to write code every day."
        },
        {
            name: "Venu Madhav",
            role: "COO",
            img: "/Assets/Venu.png",
            bio: "Venu is the backbone of Zerodha taking care of operations and ensuring that we are compliant to rules and regulations. He has over a dozen certifications in financial markets and is also proficient in technical analysis. Workouts, cycling, and adventuring is what he does outside of Zerodha."
        },
        {
            name:"Seema Patil",
            role:"Director",
            img:"/Assets/Seema.png",
            bio:"Seema who has lead the quality team since the beginning of Zerodha, is now a director. She is an extremely disciplined fitness enthusiast."
        },
        {
            name:"Karthik Rangappa",
            role:"Chief of Education",
            img:"/Assets/Karthik.png",
            bio:" Karthik Guru Rangappa single handledly wrote Varsity, Zerodha's massive educational program. He heads investor education initiatives at Zerodha and loves stock markets, classic rock, single malts, and photography."
        },
        
        {
            name:"Austin Prakesh",
            role:"Director Strategy",
            img:"/Assets/Austin.png",
            bio:" Austin is a successful self-made entrepreneur from Singapore. His area of specialty revolves around helping organisations including grow by optimizing revenue streams and creating growth strategies. He is a boxing enthusiast and loves collecting exquisite watches."
        }
        

    ];

    const toggleBio = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="container py-5 border-top">
            <div className="row text-center">

                {teamMembers.map((member, index) => (
                    <div key={index} className="col-md-4 mb-5">

                        {/* Image */}
                        <img
                            src={member.img}
                            alt={member.name}
                            className="img-fluid rounded-circle mb-4"
                            style={{
                                width: "220px",
                                height: "220px",
                                objectFit: "cover"
                            }}
                        />

                        {/* Name */}
                        <h5 className="fw-medium">{member.name}</h5>

                        {/* Role */}
                        <p className="text-muted mb-1">{member.role}</p>

                        {/* Bio Toggle */}
                        <p
                            className="text-muted small"
                            style={{ cursor: "pointer" }}
                            onClick={() => toggleBio(index)}
                        >
                            Bio {activeIndex === index ? "▲" : "▼"}
                        </p>

                        {/* Bio Content */}
                        {activeIndex === index && (
                            <div className="mt-3 px-3 text-muted small">
                                {member.bio}
                            </div>
                        )}

                    </div>
                ))}

            </div>
        </div>
    );
}

export default Team;