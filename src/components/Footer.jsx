  const Footer = () => {
    return (
      <footer className="bg-gray-800 py-8 mt-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center space-x-6">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-gray-500"
            >
              <svg
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M13 3H3v18h10v-7h4l2-4h-6V8c0-1.1.9-2 2-2h3V2h-3a4 4 0 0 0-4 4v3H9v4h4v7h-4v2h4v2h-4v1h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1z"
                />
              </svg>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-gray-500"
            >
              <svg
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M8.06 20c9.68 0 14.98-8 14.98-14.94v-.68C23.96 3.12 23.44 2 22.78 1c.82-.42 1.42-1.2 1.7-2.1-.74.42-1.55.7-2.4.82A3.03 3.03 0 0 0 21.08 0a6.08 6.08 0 0 1-1.92.74A3.02 3.02 0 0 0 16.7 3c-2-.42-3.78-1.2-5.24-2.85A3.1 3.1 0 0 0 10.62 0a3.06 3.06 0 0 0-3.06 3.06v.38C6.12 5.52 3.28 4.06.98 4.06a3.06 3.06 0 0 0 2.86 2.12A3.05 3.05 0 0 1 .6 8.06v.04a3.07 3.07 0 0 0 2.45 3.02A3.02 3.02 0 0 1 .6 14.1v.04c0 1.7 1.34 3.06 3 3.06-.6.12-1.18.18-1.78.18-.4 0-.78-.02-1.16-.08A8.7 8.7 0 0 0 4.06 19.2c6.6 0 10.18-5.46 10.18-10.18 0-.16 0-.32-.02-.48A7.35 7.35 0 0 0 20 4.34z"
                />
              </svg>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-gray-500"
            >
              <svg
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M17 2H7C4.24 2 2 4.24 2 7v10c0 2.76 2.24 5 5 5h10c2.76 0 5-2.24 5-5V7c0-2.76-2.24-5-5-5zm3 15c0 1.66-1.34 3-3 3H7c-1.66 0-3-1.34-3-3V7c0-1.66 1.34-3 3-3h10c1.66 0 3 1.34 3 3v10z"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12 7.5a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9zm0 7.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm6.3-6a.3.3 0 1 1 0-.6.3.3 0 0 1 0 .6zm-12.6 0a.3.3 0 1 1 0-.6.3.3 0 0 1 0 .6zm4.97.3a1 1 0 1 0-2 0 1 1 0 0 0 2 0zm3.96-.3a.3.3 0 1 1 0-.6.3.3 0 0 1 0 .6zm1.97 1.03a1.75 1.75 0 1 0-3.5 0 1.75 1.75 0 0 0 3.5 0z"
                />
              </svg>
            </a>
          </div>
          <div className="mt-8">
            <p className="text-center text-base text-gray-400">
              &copy; {new Date().getFullYear()} CheckSpeech AI. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    );
  };

  export default Footer;
