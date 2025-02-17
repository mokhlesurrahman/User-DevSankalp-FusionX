import React from "react";
import Navbar1 from "../Components/Navbar";
import { MdOutlineHomeWork } from "react-icons/md";
import { SlSocialGithub } from "react-icons/sl";
import { FaXTwitter, FaLinkedinIn } from "react-icons/fa6";

import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Firebase";
import {
  createUserWithEmailAndPassword,
  updateProfile,
  sendPasswordResetEmail,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import image1 from "../Components/Assets/profile1.webp";
import image2 from "../Components/Assets/demo1.png";

function Profile() {
  const navbarData = {
    navbarData: {
      logoText: "FusionX",
      navItems: [
        { text: "Home", link: "/" },
        { text: "Listings", link: "/List" },
        { text: "Forums", link: "/Forums" },
        // { text: "FX Careers", link: "/" },
        // Add more navigation items as needed
      ],
      link: null,
      buttonText: "Get Started",
    },
  };

  const userData = {
    name: "John Doe",
    bannerImage: "https://source.unsplash.com/random/1250x300/?poster",
    profileImage: "https://source.unsplash.com/random/400x400/?businessman",
    position: "Software Development Engineer",
    company: "Amazon Web Services",
    location: "London, United Kingdom",
    expertise: ["UI/UX Design", "AI/ML Development", "Cloud Computing"],
    about:
      "Experienced Software Development Engineer specializing in UI/UX design, AI/ML development, and cloud computing. Proficient in delivering scalable solutions to complex problems. Committed to continuous learning and staying abreast of industry trends. Seeking opportunities to contribute expertise and drive innovation in a dynamic team environment.",
    employer: "Amazon Web Services",
    socials: [
      { platform: "LinkedIn", url: "https://linkedin.com/in/johndoe" },
      { platform: "GitHub", url: "https://github.com/johndoe" },
      { platform: "Twitter", url: "https://twitter.com/johndoe" },
    ],
    recommendations: [
      {
        name: "Jane Smith",
        position: "Senior Engineer",
        company: "Google",
        url: "https://google.com",
      },
      {
        name: "Michael Johnson",
        position: "Principal Engineer",
        company: "Microsoft",
        url: "https://microsoft.com",
      },
    ],
    opportunities: [
      {
        role: "Backend Developer",
        company: "Amazon Web Services",
        url: "https://careers.amazon.com",
      },
      {
        role: "AI/ML Engineer",
        company: "Amazon Web Services",
        url: "https://careers.amazon.com",
      },
      {
        role: "UI/UX Designer",
        company: "Amazon Web Services",
        url: "https://careers.amazon.com",
      },
      {
        role: "Full Stack Developer",
        company: "Amazon Web Services",
        url: "https://careers.amazon.com",
      },
    ],
  };

  const icons = [FaLinkedinIn, SlSocialGithub, FaXTwitter];

  return (
    <section>
      <Navbar1 navbarData={navbarData.navbarData} />
      <div className="grid md:grid-cols-[83%_16%] gap-4 h-full pb-4 w-full bg-gray-100 px-4 pt-2">
        <section className="flex flex-col min-h-[40vh] gap-2">
          <div className="w-full min-h-1/3 bg-white rounded-xl">
            <div className="relative">
              <img
                src={userData.bannerImage}
                alt="banner_image"
                className="max-w-[1250px] max-h-[360px] w-full rounded-xl"
              />
              <img
                src={userData.profileImage}
                alt="profile_image"
                className="absolute -bottom-20 left-8 rounded-full max-w-36 w-full border-4 border-white"
              />
            </div>
            <div className="flex flex-col md:ml-48 md:mt-8 ml-6 mt-20">
              <span className="md:text-3xl text-2xl font-bold">
                {userData.name}
              </span>
              <span className="text-sm font-bold text-gray-600 my-1">
                {userData.position}
              </span>
              <span className="text-sm font-bold text-gray-600">
                {userData.location}
              </span>
              <span className="flex items-center gap-2 my-6">
                {userData.expertise.map((expertise, index) => (
                  <span
                    key={index}
                    className="bg-gray-300 rounded-lg px-2 text-sm font-bold"
                  >
                    {expertise}
                  </span>
                ))}
              </span>
            </div>
          </div>
          <div className="w-full bg-white rounded-xl p-6 flex flex-col ">
            <span className="font-semibold mb-3">About</span>
            <p className="text-gray-700 font-medium">{userData.about}</p>
          </div>
        </section>
        <section className="flex flex-col gap-4">
          <div className="w-full bg-white p-4 rounded-xl flex flex-col justify-center gap-2">
            <span className="font-semibold text-lg">Organization</span>
            <span className="flex items-center gap-2 opacity-80">
              <MdOutlineHomeWork />
              {userData.company}
            </span>
          </div>
          <div className="w-full bg-white p-4 rounded-xl flex flex-col justify-center gap-2">
            <span className="font-semibold text-lg">Connect</span>
            {userData.socials.map((social, index) => (
              <a
                key={index}
                href={social.url}
                className="bg-gray-300 rounded-lg px-2 text-md font-bold w-max flex items-center gap-2"
              >
                {React.createElement(icons[index])}
                {social.platform}
              </a>
            ))}
          </div>
          <div className="w-full bg-white p-4 rounded-xl flex flex-col justify-center gap-2 md:m-0 mb-8">
            <span className="font-semibold text-lg">Similar Profiles</span>
            <span className="flex flex-col justify-center gap-2 opacity-80">
              {userData.recommendations.map((rec, index) => (
                <a
                  href={rec.url}
                  key={index}
                  target="_blank"
                  className="w-max relative before:absolute before:h-[1px] before:w-full before:bg-black before:bottom-0 before:scale-x-0 hover:before:scale-x-100 before:duration-300 before:origin-left"
                >
                  {rec.name}
                </a>
              ))}
            </span>
          </div>
          <div className="w-full bg-white p-4 rounded-xl flex flex-col justify-center gap-2 md:m-0 mb-8">
            <span className="font-semibold text-lg">Hiring Opportunities</span>
            <span className="flex flex-col justify-center gap-2 opacity-80">
              {userData.opportunities.map((opportunity, index) => (
                <a
                  href={opportunity.url}
                  key={index}
                  target="_blank"
                  className="w-max relative before:absolute before:h-[1px] before:w-full before:bg-black before:bottom-0 before:scale-x-0 hover:before:scale-x-100 before:duration-300 before:origin-left"
                >
                  {opportunity.role}
                </a>
              ))}
            </span>
          </div>
        </section>
      </div>
    </section>
  );
}

export default Profile;
