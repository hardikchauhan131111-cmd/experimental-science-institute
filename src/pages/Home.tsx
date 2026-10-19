import { Link } from 'react-router-dom';

export const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="mb-6 text-4xl font-bold text-gray-900">
            Experimental Science Institute
          </h1>
          <p className="mb-8 text-lg text-gray-600">
            Where curiosity meets discovery. Pioneering scientific education
            for the next generation of innovators.
          </p>
          <div className="space-x-4">
            <Link
              to="/courses"
              className="btn-primary px-8 py-3"
            >
              Explore Courses
            </Link>
            <Link
              to="/chat"
              className="btn-secondary px-8 py-3"
            >
              Ask Our AI Assistant
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="mb-12 text-3xl font-bold text-center text-gray-900">
            Why Choose ESI?
          </h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="text-center">
              <div className="mb-4">
                {/* Icon */}
                <div className="w-12 h-12 mx-auto bg-blue-100 rounded-full flex items-center justify-center">
                  <Flask className="h-6 w-6 text-blue-600" />
                </div>
              </div>
              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Hands-on Learning
              </h3>
              <p className="text-gray-600">
                State-of-the-art labs and real-world experiments that bring
                science to life.
              </p>
            </div>
            <div className="text-center">
              <div className="mb-4">
                <div className="w-12 h-12 mx-auto bg-blue-100 rounded-full flex items-center justify-center">
                  <GraduationCap className="h-6 w-6 text-blue-600" />
                </div>
              </div>
              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Expert Faculty
              </h3>
              <p className="text-gray-600">
                Learn from renowned scientists and industry professionals.
              </p>
            </div>
            <div className="text-center">
              <div className="mb-4">
                <div className="w-12 h-12 mx-auto bg-blue-100 rounded-full flex items-center justify-center">
                  <Users className="h-6 w-6 text-blue-600" />
                </div>
              </div>
              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Collaborative Community
              </h3>
              <p className="text-gray-600">
                Join a vibrant community of learners and researchers.
              </p>
            </div>
            <div className="text-center">
              <div className="mb-4">
                <div className="w-12 h-12 mx-auto bg-blue-100 rounded-full flex items-center justify-center">
                  <Brain className="h-6 w-6 text-blue-600" />
                </div>
              </div>
              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Future-Ready Skills
              </h3>
              <p className="text-gray-600">
                Develop critical thinking and problem-solving skills for
                tomorrow's challenges.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-blue-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="mb-6 text-3xl font-bold text-center text-gray-900">
            Ready to Begin Your Scientific Journey?
          </h2>
          <p className="mb-8 text-center text-gray-600">
            Join our community of passionate learners and start exploring the
            wonders of science today.
          </p>
          <div className="flex justify-center space-x-4">
            <Link
              to="/login"
              className="btn-primary px-8 py-3"
            >
              Get Started
            </Link>
            <Link
              to="/about"
              className="btn-secondary px-8 py-3"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

// Lucide icons (we'll import them later, but for now we'll use placeholders)
const Flask = () => <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 4h6l3 14H6l3-14z"/><path d="M9 14h6"/><path d="M12 4v6"/></svg>;
const GraduationCap = () => <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 21V9h-2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V9H4l5-5 5 5z"/><path d="M8 21h8"/></svg>;
const Users = () => <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a6 6 0 00-6-6H5a6 6 0 00-6 6v2"/></svg>;
const Brain = () => <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 4a8 8 0 018 8v8a4 4 0 01-4 4H8a4 4 0 01-4-4v-4a8 8 0 018-8zM12 14a4 4 0 100-8 4 4 0 000 8z"/></svg>;