// components/StatsSection.js
const StatsSection = () => {
    const stats = [
      { label: "Branches", value: "3+" },
      { label: "Consultants", value: "6+" },
      { label: "Patients", value: "1000+" },
      { label: "Reviews", value: "500+" },
    ];
  
    return (
      <section className="py-12 bg-green-100">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center ">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white shadow-lg rounded-lg p-6 border-[1px] border-primary-dark">
                <h3 className="lg:text-4xl text-2xl font-bold text-primary-dark">{stat.value}</h3>
                <p className="text-gray-700 mt-2 lg:text-lg tracking-wide">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default StatsSection;
  