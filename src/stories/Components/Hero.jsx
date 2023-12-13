import React from 'react'
import PropTypes from 'prop-types';
import 'tailwindcss/tailwind.css';

function Hero({ title, description, getStartedLink, learnMoreLink, buttonText }) {
  return (
    <div>
      <section className="bg-gray-900 text-white">
        <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
          <div className="mx-auto max-w-3xl text-center">
            <h1
              className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl"
            >
              {title}
            </h1>

            <p className="mx-auto mt-4 max-w-xl sm:text-xl/relaxed">
              {description}
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                className="block w-full rounded-xl border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
                href={getStartedLink}
              >
                {buttonText}
              </a>

              <a
                className="block w-full rounded-xl border border-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring active:bg-blue-500 sm:w-auto"
                href={learnMoreLink}
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

Hero.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  getStartedLink: PropTypes.string,
  learnMoreLink: PropTypes.string,
  buttonText: PropTypes.string,
};

Hero.defaultProps = {
  title: 'Understand User Flow. Increase Conversion.',
  description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo tenetur fuga ducimus numquam ea!',
  getStartedLink: '/get-started',
  learnMoreLink: '/about',
  buttonText: 'Get Started',
};

export default Hero;
