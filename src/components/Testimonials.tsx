export default function Testimonials() {
    return (
      <section id="testimonials" className="mt-28 max-w-6xl mx-auto text-center px-4">
        <h2 className="text-4xl font-bold mb-10">What Our Clients Say</h2>
        <div className="grid md:grid-cols-2 gap-10 text-left">
          <div className="bg-white/5 p-6 rounded-xl shadow-md">
            <p className="text-gray-300 mb-3">“SINA Studio transformed our outdated website into a stunning platform that converts. Their design sense is unmatched.”</p>
            <p className="font-semibold">— Dr. Emily H., Wellness Clinic</p>
          </div>
          <div className="bg-white/5 p-6 rounded-xl shadow-md">
            <p className="text-gray-300 mb-3">“From start to finish, the experience felt premium. Communication, design, delivery — all flawless.”</p>
            <p className="font-semibold">— David R., Restaurant Owner</p>
          </div>
        </div>
      </section>
    );
  }
  