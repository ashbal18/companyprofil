import Image from "next/image";

const Team = () => {
  const teamMembers = [
    {
      name: "Jennie Nichols",
      role: "Software Engineer",
      email: "jennie.nichols@example.com",
      phone: "(272) 790-0888",
      location: "Billings, Michigan, United States",
      image: "/kasir.png",
    },
    {
      name: "Wilson Berry",
      role: "Software Engineer",
      email: "wilson.berry@example.com",
      phone: "(272) 790-0889",
      location: "Billings, Michigan, United States",
      image: "/kasir.png",
    },
    {
      name: "Muhammad Ashbal Al Saddam",
      role: "Software Engineer",
      email: "muhammad.ashbal@example.com",
      phone: "(272) 790-0890",
      location: "Billings, Michigan, United States",
      image: "/kasir.png",
    },
  ];

  return (
    <div className="bg-gray-100 text-center py-12 px-6">
      <h2 className="text-3xl font-bold mb-6">Meet Our Team</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center"
          >
            <Image
              src={member.image}
              alt={member.name}
              width={100}
              height={100}
              className="rounded-full"
            />
            <h3 className="font-semibold text-xl mt-4">{member.name}</h3>
            <p className="text-gray-600">{member.role}</p>
            <p className="text-gray-500">{member.email}</p>
            <p className="text-gray-500">{member.phone}</p>
            <p className="text-gray-500">{member.location}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
