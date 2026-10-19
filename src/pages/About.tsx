export const About = () => {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="mb-8 text-3xl font-bold text-center text-gray-900">
          About Experimental Science Institute
        </h2>
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            {/* Placeholder for institute photo */}
            <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg flex items-center justify-center">
              <span className="text-gray-500">Institute Photo</span>
            </div>
          </div>
          <div className="space-y-6">
            <p className="text-gray-600">
              Founded by visionary educator Ujjwal Sharma, the Experimental
              Science Institute (ESI) is dedicated to transforming science
              education through hands-on, inquiry-based learning.
            </p>
            <p className="text-gray-600">
              Our institute believes that the best way to learn science is by
              doing science. We provide state-of-the-art laboratories,
              cutting-edge research opportunities, and a supportive community
              where students can explore their scientific passions.
            </p>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0">
                  <Circle className="h-5 w-5 text-blue-500" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Mission</h3>
                  <p className="text-gray-600">
                    To inspire and equip the next generation of scientists
                    through innovative, experiential learning.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0">
                  <Circle className="h-5 w-5 text-blue-500" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Vision</h3>
                  <p className="text-gray-600">
                    A world where every student has the opportunity to
                    engage in meaningful scientific exploration.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Circle = () => <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/></svg>;