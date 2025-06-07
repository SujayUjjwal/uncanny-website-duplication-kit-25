
import { Card, CardContent } from "@/components/ui/card";

const Services = () => {
  const services = [{
    name: "Complete Level of Learning",
    color: "bg-red-500",
    width: "w-full"
  }, {
    name: "Science Test and Product Guidance",
    color: "bg-blue-500",
    width: "w-5/6"
  }, {
    name: "Computational Modeling Aptitude",
    color: "bg-green-500",
    width: "w-4/5"
  }, {
    name: "One-on-one Personalized Learning",
    color: "bg-yellow-500",
    width: "w-3/4"
  }, {
    name: "Strength Improvement Focused Sessions in NEET",
    color: "bg-orange-500",
    width: "w-5/6"
  }, {
    name: "Subject Test and Evaluation",
    color: "bg-purple-500",
    width: "w-4/5"
  }, {
    name: "Best Education from Expert AIMS",
    color: "bg-teal-500",
    width: "w-full"
  }];

  return (
    <section id="services" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">What Do We Offer</h2>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Services List */}
          <div className="space-y-6">
            {services.map((service, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-gray-700">{service.name}</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className={`${service.color} h-2 rounded-full ${service.width}`} />
                </div>
              </div>
            ))}
          </div>

          {/* Features */}
          <div className="space-y-8">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                    <div className="w-6 h-6 bg-gray-600 rounded" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Physics</h3>
                    <p className="text-gray-600 text-sm">
                      Physics is extremely important and its topics as asked in NEET.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                    <div className="w-6 h-6 bg-gray-600 rounded" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Chemistry</h3>
                    <p className="text-gray-600 text-sm">
                      Chemistry is important because every thing in this body from face and blood, is made of chemicals.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                    <div className="w-6 h-6 bg-gray-600 rounded" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Biology</h3>
                    <p className="text-gray-600 text-sm">
                      Biology as it important since giving access other that can in biology of science medicine which most important.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
