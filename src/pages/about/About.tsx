import React from 'react'

const About: React.FC = () => {
  return (
    <div className="container mx-auto px-24 py-8 mt-24">
      <section className="text-center my-12">
        <h1 className="text-[55px] font-extrabold text-[#397D54] font-urbanist mb-6">
          About Us
        </h1>
        <hr className="mb-8 w-[1054px] h-[2px] mx-auto" />
        <p className="text-[24px] font-semibold text-[#000000] font-urbanist mb-6">
          We are a team of four passionate developers from FPT University,
          dedicated to creating solutions that enhance the travel experience.
          Our mission is to connect people and bring value to everyday life
          through innovative mobile and web applications.
        </p>
        <p className="text-[#397D54] font-bold font-urbanist text-[24px] italic">
          Together, we strive to deliver unique and meaningful travel
          experiences for our users.
        </p>
      </section>

      <section className="text-center">
        <h2 className="text-[55px] font-extrabold font-urbanist text-[#397D54] mb-8">
          Meet TripBuddy Team
        </h2>
        <hr className="mb-8 w-[1054px] h-[2px] mx-auto" />

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8 mb-4">
          <div className="team-member mt-4">
            <img
              src="https://res.cloudinary.com/dsutqg1fy/image/upload/v1729480520/tran_h2emxs.png"
              alt="Bui Ngoc Bao Tran"
              className="rounded-full border-4 border-[#397D54] mx-auto w-48 h-48 object-cover mb-4"
            />
            <h3 className="text-[28px] font-bold font-urbanist text-[#397D54]">
              Bui Ngoc Bao Tran
            </h3>
            <p className="font-semibold text-[22px] font-urbanist text-[#000000]">
              Developer
            </p>
          </div>

          <div className="team-member mt-4">
            <img
              src="https://res.cloudinary.com/dsutqg1fy/image/upload/v1729480520/quyen_nqwkts.png"
              alt="Pham Ngoc Quyen"
              className="rounded-full border-4 border-[#397D54] mx-auto w-48 h-48 object-cover mb-4"
            />
            <h3 className="text-[28px] font-bold font-urbanist text-[#397D54]">
              Pham Ngoc Quyen
            </h3>
            <p className="font-semibold text-[22px] font-urbanist text-[#000000]">
              Developer
            </p>
          </div>

          <div className="team-member mt-4">
            <img
              src="https://res.cloudinary.com/dsutqg1fy/image/upload/v1729480519/dung_mgrfwx.png"
              alt="Nguyen Trung Dung"
              className="rounded-full border-4 border-[#397D54] mx-auto w-48 h-48 object-cover mb-4"
            />
            <h3 className="text-[28px] font-bold font-urbanist text-[#397D54]">
              Nguyen Trung Dung
            </h3>
            <p className="font-semibold text-[22px] font-urbanist text-[#000000]">
              Developer
            </p>
          </div>
        </div>

        <div className="flex justify-center mt-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-80">
            <div className="team-member mt-4 flex flex-col items-center">
              <img
                src="https://res.cloudinary.com/dsutqg1fy/image/upload/v1729480520/canh_jldehg.png"
                alt="Truong The Canh"
                className="rounded-full border-4 border-[#397D54] mx-auto w-48 h-48 object-cover mb-4"
              />
              <h3 className="text-[28px] font-bold font-urbanist text-[#397D54]">
                Truong The Canh
              </h3>
              <p className="font-semibold text-[22px] font-urbanist text-[#000000]">
                Developer
              </p>
            </div>

            <div className="team-member mt-4 flex flex-col items-center">
              <img
                src="https://res.cloudinary.com/dsutqg1fy/image/upload/v1729480520/duong_bggwlv.png"
                alt="Ngo Duong"
                className="rounded-full border-4 border-[#397D54] mx-auto w-48 h-48 object-cover mb-4"
              />
              <h3 className="text-[28px] font-bold font-urbanist text-[#397D54]">
                Ngo Duong
              </h3>
              <p className="font-semibold text-[22px] font-urbanist text-[#000000]">
                Developer
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
