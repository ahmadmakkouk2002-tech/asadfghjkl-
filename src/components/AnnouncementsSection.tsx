import React from "react";

const AnnouncementsSection = () => {
  return (
    <section className="py-12 bg-white sm:py-16 lg:py-20">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl xl:text-5xl font-pj">
            Latest Announcements
          </h2>
          <p className="mt-4 text-base leading-7 text-gray-600 sm:mt-8 font-pj">
            Stay up to date with our latest news and events.
          </p>
        </div>
        <div className="mt-12">
          <img
            className="object-cover w-full mx-auto rounded-lg"
            src="/placeholder.svg"
            alt="Announcement Poster"
          />
        </div>
      </div>
    </section>
  );
};

export default AnnouncementsSection;
