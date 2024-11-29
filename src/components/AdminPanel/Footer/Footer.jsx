import React from "react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="p-5 md:px-10 bg-[#636363]">
      <p className="text-center mt-4">
        <i className="fas fa-copyright"></i> {year} Premier Art Holdings Ltd.
      </p>
      <p className="text-center mt-4">A British Virgin Islands Company</p>
    </footer>
  );
}
