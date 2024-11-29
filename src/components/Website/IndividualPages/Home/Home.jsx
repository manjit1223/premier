import React from "react";
import Link from "next/link";
import Cookies from "js-cookie";

function HomePage() {
  const token = Cookies.get("token");
  return (
    <div className="text-black">
      <div className="bg-gradient-to-r from-[#eed262] via-[#dfb73e] to-[#f4d267] py-20 p-5 text-center">
        <p className="text-4xl md:text-6xl font-bold abril-fatface">
          Welcome to Premier Art Holdings Ltd.
        </p>
        <p className="text-lg sm:text-xl max-w-3xl mx-auto mb-8">
          Bringing the Stability of the World&apos;s Finest Art to the
          Blockchain&apos;s Finest Token
        </p>
      </div>
      <div className="py-16 p-5 md:px-10 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-6">
            Our Story
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Premier represents a visionary coalition of art aficionados and
            industry experts, uniting to introduce an innovative asset class
            that fuses the enduring stability of fine art with the liquidity and
            transparency afforded by blockchain technology.
          </p>
          <p className="mt-4 text-lg text-gray-700 leading-relaxed">
            Unlike traditional art investment funds that operate on a rigid
            buy-hold-sell model, Premier offers a dynamic approach. Other
            fractionalized art ownership funds tie investment to a single piece
            of art and the investment remains illiquid till it sells. TPAT
            doesn&apos;t have the same drawback because Premier is continually
            acquiring diverse artworks to enrich its collection and will make it
            as easy to exit as owning a traditional stock.
          </p>
          <p className="mt-4 text-lg text-gray-700 leading-relaxed">
            Premier not only enhances the portfolio's breadth with each
            acquisition but also ensures more immediate value generation for
            investors. Additionally, Premier&apos;s direct dealings with art
            owners and their representatives eliminate auction fees, reducing
            acquisition costs by over 30%. This strategic efficiency translates
            into increased value for TPAT holders, setting a new standard in art
            investment.
          </p>
        </div>
      </div>

      <div className="py-16 p-5 md:px-10 bg-gray-100">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-6">
            Premier's Vision with Chintai
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Premier proudly serves as the custodian of The Premier Art Token
            (TPAT), a token underpinned by a meticulously curated collection of
            the world's most exceptional art. Through its strategic partnership
            with Chintai, Premier brings its vision to life—preserving and
            showcasing inspiring masterpieces while revolutionizing access to
            art investment. This groundbreaking initiative invites individuals
            to partake in the ownership of cultural treasures, bridging the gap
            between appreciation and opportunity.
          </p>
        </div>
      </div>
      <div className="bg-gray-100 py-16 p-5 md:px-10">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-6">
            What We Offer
          </p>
          <p className="text-xl font-semibold text-gray-800 mb-4">
            Private Art Made Public: Reintroducing previously private
            masterpieces to the public realm for appreciation and investment.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
            <Link
              href="/the-premier-plan"
              className="bg-white p-6 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:bg-gray-50"
            >
              <p className="text-xl font-semibold text-gray-800 mb-4">
                Private Art Made Public
              </p>
              <p className="text-gray-700">
                Bringing previously private artworks back to the public for
                appreciation and investment.
              </p>
            </Link>

            <Link
              href="/the-unparalleled-art"
              className="bg-white p-6 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:bg-gray-50"
            >
              <p className="text-xl font-semibold text-gray-800 mb-4">
                Curated Art Collection
              </p>
              <p className="text-gray-700">
                A handpicked collection of masterpieces for diversification and
                value-added potential.
              </p>
            </Link>
            <Link
              href="/chintai"
              className="bg-white p-6 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:bg-gray-50"
            >
              <p className="text-xl font-semibold text-gray-800 mb-4">
                A Secure Platform
              </p>
              <p className="text-gray-700">
                Buy and trade TPAT with the confidence of a secure, trusted
                platform.
              </p>
            </Link>
            <Link
              href="/latest-news"
              className="bg-white p-6 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:bg-gray-50"
            >
              <p className="text-xl font-semibold text-gray-800 mb-4">
                Provenance Verification
              </p>
              <p className="text-gray-700">
                Secured provenance verification and blockchain-based
                authenticity for each artwork.
              </p>
            </Link>
          </div>
        </div>
      </div>
      <div className="py-16 p-5 md:px-10 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-6">
            Premier&apos;s Mission & Vision
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            <span className="font-semibold">Mission:</span> To provide stability
            in tokenized markets by democratizing access to the timeless value
            of high-end fine art, ensuring it is no longer reserved solely for
            the ultra-wealthy.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            <span className="font-semibold">Vision:</span> To curate, preserve,
            and make accessible the world&apos;s largest collection of
            masterpiece art while allowing everyone to profit from and trade on
            the world&apos;s most significant assets, the creative genius of our
            collective culture.
          </p>
        </div>
      </div>
      <div className="bg-gradient-to-r from-[#eed262] via-[#dfb73e] to-[#f4d267] py-20 p-5 md:px-10 text-center">
        <p className="text-2xl sm:text-3xl font-semibold mb-4">
          Join Us on Our Journey
        </p>
        <p className="text-lg sm:text-xl max-w-2xl mx-auto mb-8">
          Whether you are an artist, a collector, investment professional, or a
          simple admirer, Premier Art Holdings Ltd welcomes you. Join us in
          celebrating the beauty of creativity and expression, and find
          inspiration in every moment.
        </p>
        {token && (
          <Link
            href="/signup"
            className="inline-block px-8 py-3 bg-white text-gray-800 font-semibold rounded-lg shadow-lg hover:bg-gray-100 hover:scale-105 hover:shadow-xl transition-all duration-300"
          >
            Get Started
          </Link>
        )}
      </div>
    </div>
  );
}

export default HomePage;
