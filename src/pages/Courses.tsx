export const Courses = () => {
  const courses = [
    {
      id: 1,
      title: 'Introduction to Biology',
      description: 'Explore the fundamental concepts of life sciences, from cellular structure to ecosystems.',
      level: 'Beginner',
      duration: '12 weeks'
    },
    {
      id: 2,
      title: 'Chemistry Lab Techniques',
      description: 'Master essential laboratory skills and chemical analysis methods.',
      level: 'Intermediate',
      duration: '10 weeks'
    },
    {
      id: 3,
      title: 'Physics: Mechanics and Motion',
      description: 'Study the principles of motion, forces, and energy through hands-on experiments.',
      level: 'Intermediate',
      duration: '14 weeks'
    },
    {
      id: 4,
      title: 'Environmental Science Research',
      description: 'Conduct field research and analyze data to understand environmental systems.',
      level: 'Advanced',
      duration: '16 weeks'
    }
  ];

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="mb-12 text-3xl font-bold text-center text-gray-900">
          Our Courses
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {courses.map(course => (
            <div key={course.id} className="bg-white rounded-lg shadow hover:shadow-lg transition-shadow">
              {/* Placeholder for course image */}
              <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-t-lg flex items-center justify-center">
                <span className="text-gray-500">Course Image</span>
              </div>
              <div className="p-6">
                <h3 className="mb-2 text-xl font-semibold text-gray-900">
                  {course.title}
                </h3>
                <p className="mb-3 text-gray-600">
                  {course.description}
                </p>
                <div className="flex flex-wrap gap-3 mb-4">
                  <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">
                    {course.level}
                  </span>
                  <span className="px-2 py-1 bg-gray-100 text-gray-800 text-xs rounded">
                    {course.duration}
                  </span>
                </div>
                <a href="#" className="btn-primary w-full">
                  Enroll Now
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};