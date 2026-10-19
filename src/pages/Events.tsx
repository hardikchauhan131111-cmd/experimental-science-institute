export const Events = () => {
  const events = [
    {
      id: 1,
      title: 'Science Fair 2024',
      date: 'March 15, 2024',
      description: 'Annual showcase of student research projects and innovations.'
    },
    {
      id: 2,
      title: 'Guest Lecture: Dr. Jane Goodall',
      date: 'April 22, 2024',
      description: 'Renowned primatologist discusses conservation and animal behavior.'
    },
    {
      id: 3,
      title: 'Robotics Competition',
      date: 'May 10, 2024',
      description: 'Teams compete to build and program autonomous robots.'
    }
  ];

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="mb-12 text-3xl font-bold text-center text-gray-900">
          Upcoming Events
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {events.map(event => (
            <div key={event.id} className="bg-white rounded-lg shadow hover:shadow-lg transition-shadow">
              {/* Placeholder for event image */}
              <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-t-lg flex items-center justify-center">
                <span className="text-gray-500">Event Image</span>
              </div>
              <div className="p-6">
                <h3 className="mb-2 text-xl font-semibold text-gray-900">
                  {event.title}
                </h3>
                <p className="mb-2 text-gray-600">
                  <strong>Date:</strong> {event.date}
                </p>
                <p className="text-gray-600">
                  {event.description}
                </p>
                <a href="#" className="mt-4 inline-block btn-primary">
                  Learn More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};